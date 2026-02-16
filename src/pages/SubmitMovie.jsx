import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FilmIdentityForm from '../components/FilmIdentity';
import IaDeclaration from '../components/IaDeclaration';
import Livrables from '../components/Livrables';
import OwnershipCertificate from '../components/OwnershipCertificate';
import { WiStars } from 'react-icons/wi';
import axios from 'axios';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djkgizajl/upload';
const UPLOAD_PRESET = 'marsai';

const SubmitMovie = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    original_title: '',
    english_title: '',
    youtube_url: '',
    duration: null,
    is_hybrid: false,
    language: '',
    original_synopsis: '',
    english_synopsis: '',
    creative_process: '',
    ia_tools: '',
    has_subs: false,
    thumbnail: null,
    gallery: []
  });

  const [collaborateurs, setCollaborateurs] = useState([{ nom: '', role: '' }]);

  const updateField = updatedFields =>
    setFormData(prev => ({ ...prev, ...updatedFields }));

  // 🔹 Upload Cloudinary
  const handleUpload = async file => {
    const form = new FormData();
    form.append('file', file); // fichier brut
    form.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await axios.post(CLOUDINARY_URL, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Met à jour thumbnail ou gallery
      setFormData(prev => {
        let newGallery = prev.gallery.map(img =>
          img.preview === file.preview
            ? { ...img, url: res.data.secure_url, uploading: false }
            : img
        );

        let newThumbnail =
          prev.thumbnail?.preview === file.preview
            ? { ...prev.thumbnail, url: res.data.secure_url, uploading: false }
            : prev.thumbnail;

        return { ...prev, gallery: newGallery, thumbnail: newThumbnail };
      });
    } catch (err) {
      console.error('Erreur upload Cloudinary:', err);
      setFormData(prev => ({
        ...prev,
        gallery: prev.gallery.map(img =>
          img.preview === file.preview ? { ...img, uploading: false } : img
        ),
        thumbnail:
          prev.thumbnail?.preview === file.preview
            ? { ...prev.thumbnail, uploading: false }
            : prev.thumbnail,
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Vérifie champs obligatoires
    const requiredFields = ['original_title', 'english_title', 'duration', 'language'];
    const missingFields = requiredFields.filter(
      f => !formData[f] || (typeof formData[f] === 'string' && formData[f].trim() === '')
    );
    if (missingFields.length > 0) {
      return alert(`Merci de remplir tous les champs obligatoires : ${missingFields.join(', ')}`);
    }

    // Vérifie si des images sont encore en upload
    if ((formData.thumbnail?.uploading) || formData.gallery.some(img => img.uploading)) {
      return alert("Merci d'attendre la fin des uploads avant de soumettre le formulaire !");
    }

    // Prépare données pour le backend
    const finalData = {
      ...formData,
      thumbnail: formData.thumbnail ? { url: formData.thumbnail.url } : null,
      gallery: formData.gallery.map(img => ({ url: img.url }))
    };

    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: finalData, collaborateurs }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Formulaire enregistré avec succès !');
        setFormData({
          original_title: '',
          english_title: '',
          youtube_url: '',
          duration: null,
          is_hybrid: false,
          language: '',
          original_synopsis: '',
          english_synopsis: '',
          creative_process: '',
          ia_tools: '',
          has_subs: false,
          thumbnail: null,
          gallery: []
        });
        setCollaborateurs([{ nom: '', role: '' }]);
      } else {
        alert(result.error || 'Une erreur est survenue');
      }
    } catch (err) {
      console.error(err);
      alert('Impossible de contacter le serveur.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <WiStars className="w-20 h-20 text-red-400 mx-auto" />
        <h2 className="text-3xl text-red-500 mt-5">{t('submit_movie.appel_projets_2026')}</h2>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 uppercase">{t('submit_movie.submit_film')}</h1>
        <h3 className="text-slate-500 mt-2">{t('submit_movie.fill_info')}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <FilmIdentityForm formData={formData} update={updateField} />
        <IaDeclaration formData={formData} update={updateField} />
        <Livrables
          formData={formData}
          update={updateField}
          collaborateurs={collaborateurs}
          updateCollabs={setCollaborateurs}
          handleUpload={handleUpload}
        />
        <OwnershipCertificate formData={formData} update={updateField} />

        <div className="max-w-4xl mx-auto mt-10 flex justify-end">
          <button
            type="submit"
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            {t('submit_movie.finalize_submission')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitMovie;