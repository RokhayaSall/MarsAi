import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FilmIdentityForm from '../components/FilmIdentity';
import IaDeclaration from '../components/IaDeclaration';
import Livrables from '../components/Livrables';
import OwnershipCertificate from '../components/OwnershipCertificate';
import { WiStars } from 'react-icons/wi';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

// 🔥 CONFIG CLOUDINARY
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
    images: [],
  });

  const [collaborateurs, setCollaborateurs] = useState([{ nom: '', role: '' }]);
  const [images, setImages] = useState([]);

  const updateField = updatedFields => {
    setFormData(prev => ({ ...prev, ...updatedFields }));
  };

  // 🔥 DROPZONE + UPLOAD Cloudinary
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: async acceptedFiles => {
      const newImages = acceptedFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        url: null,
        uploading: true,
      }));

      setImages(prev => [...prev, ...newImages]);

      for (let img of newImages) {
        const formDataCloud = new FormData();
        formDataCloud.append('file', img.file);
        formDataCloud.append('upload_preset', UPLOAD_PRESET);

        try {
          const res = await axios.post(CLOUDINARY_URL, formDataCloud, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          setImages(prev =>
            prev.map(item =>
              item.preview === img.preview
                ? { ...item, url: res.data.secure_url, uploading: false }
                : item
            )
          );
        } catch (err) {
          console.error(
            'Erreur upload Cloudinary :',
            err.response?.data || err
          );
          setImages(prev =>
            prev.map(item =>
              item.preview === img.preview
                ? { ...item, uploading: false }
                : item
            )
          );
        }
      }
    },
  });

  const removeImage = index => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  // 🔥 HANDLE SUBMIT AVEC VALIDATION
  const handleSubmit = async e => {
    e.preventDefault();

    // 🔹 Vérification des champs obligatoires avant envoi
    const requiredFields = [
      'original_title',
      'english_title',
      'duration',
      'language',
    ];
    const missingFields = requiredFields.filter(f => {
      const value = formData[f];
      return (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '')
      );
    });

    if (missingFields.length > 0) {
      return alert(
        `Merci de remplir tous les champs obligatoires : ${missingFields.join(', ')}`
      );
    }

    const uploadedUrls = images.filter(img => img.url).map(img => img.url);

    const finalData = {
      ...formData,
      images: uploadedUrls,
    };

    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: finalData, collaborateurs }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          t('submit_movie.success_message') ||
            'Formulaire enregistré avec succès !'
        );
        // 🔹 Réinitialiser le formulaire
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
          images: [],
        });
        setImages([]);
        setCollaborateurs([{ nom: '', role: '' }]);
      } else {
        alert(result.error || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      alert('Impossible de contacter le serveur.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-row items-center justify-center gap-3">
          <WiStars className="w-20 h-20 text-red-400" />
          <h2 className="text-3xl text-red-500 mt-5 text-center">
            {t('submit_movie.appel_projets_2026')}
          </h2>
        </div>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 text-center uppercase">
          {t('submit_movie.submit_film')}
        </h1>
        <h3 className="text-slate-500 mt-2 text-center">
          {t('submit_movie.fill_info')}
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <FilmIdentityForm formData={formData} update={updateField} />
        <IaDeclaration formData={formData} update={updateField} />
        <Livrables
          formData={formData}
          update={updateField}
          collaborateurs={collaborateurs}
          updateCollabs={setCollaborateurs}
        />
        <OwnershipCertificate formData={formData} update={updateField} />

        <div className="max-w-4xl mx-auto mt-10">
          <h3 className="text-slate-700 font-semibold mb-3">Upload images</h3>

          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-400 p-8 text-center cursor-pointer rounded-md hover:border-gray-600 transition"
          >
            <input {...getInputProps()} capture="environment" />
            <p>Glisse ou clique pour uploader des images</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.preview}
                  alt="preview"
                  className="w-28 h-28 object-cover rounded-md shadow"
                />

                {img.uploading && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xs rounded-md">
                    Uploading...
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded-full"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

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
