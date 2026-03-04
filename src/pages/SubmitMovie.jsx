import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FilmIdentityForm from '../components/FilmIdentity';
import IaDeclaration from '../components/IaDeclaration';
import Livrables from '../components/Livrables';
import OwnershipCertificate from '../components/OwnershipCertificate';
import { WiStars } from 'react-icons/wi';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const SubmitMovie = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // --- ÉTAT DU FORMULAIRE ---
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
    video_file: null,
    gallery: [], // Initialisé comme tableau
  });

  const [collaborateurs, setCollaborateurs] = useState([{ nom: '', role: '' }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const directorId = localStorage.getItem('currentDirectorId');

  useEffect(() => {
    if (!directorId) {
      alert("Veuillez d'abord remplir le formulaire réalisateur.");
      navigate('/form-director');
    }
  }, [directorId, navigate]);

  const updateField = updatedFields =>
    setFormData(prev => ({ ...prev, ...updatedFields }));

  // --- GESTION DES FICHIERS ---
  const handleFileSelection = (file, category) => {
    setFormData(prev => {
      if (category === 'gallery') {
        const isAlreadyIn = prev.gallery.some(
          f => f.name === file.name && f.size === file.size
        );
        if (isAlreadyIn) return prev;
        return {
          ...prev,
          gallery: [...prev.gallery, file],
        };
      }
      return {
        ...prev,
        [category]: file,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      // On extrait video_file de l'état
      const { thumbnail, video_file, gallery, ...textData } = formData;

      data.append('formData', JSON.stringify(textData));
      data.append('directorId', directorId);
      data.append('collaborateurs', JSON.stringify(collaborateurs));

      if (thumbnail) data.append('thumbnail', thumbnail);

      // TRÈS IMPORTANT : On envoie le fichier vidéo ici
      if (video_file) {
        data.append('video', video_file);
      }

      if (Array.isArray(gallery)) {
        gallery.forEach(file => data.append('gallery', file));
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/movies/submit`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // alert('✅ Film et médias enregistrés avec succès !');
        navigate('/home');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert("❌ Erreur lors de l'envoi");
    } finally {
      setIsSubmitting(false);
    }
  };
window.scrollTo(0, 0);
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <WiStars className="w-20 h-20 text-red-400 mx-auto" />
        <h2 className="text-3xl text-red-500 mt-5">
          {t('submit_movie.appel_projets_2026')}
        </h2>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 uppercase">
          {t('submit_movie.submit_film')}
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <FilmIdentityForm formData={formData} update={updateField} />
        <IaDeclaration formData={formData} update={updateField} />
        <Livrables
          formData={formData}
          update={updateField}
          collaborateurs={collaborateurs}
          updateCollabs={setCollaborateurs}
          handleUpload={handleFileSelection}
        />
        <OwnershipCertificate formData={formData} update={updateField} />

        <div className="max-w-4xl mx-auto mt-10 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-slate-900 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-slate-800'
            }`}
          >
            {isSubmitting
              ? 'Envoi en cours...'
              : t('submit_movie.finalize_submission')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitMovie;
