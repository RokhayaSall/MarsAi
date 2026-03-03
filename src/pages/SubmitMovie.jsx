import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form'; 
import axios from 'axios';

// Import de tes composants
import FilmIdentityForm from '../components/FilmIdentity';
import IaDeclaration from '../components/IaDeclaration';
import Livrables from '../components/Livrables';
import OwnershipCertificate from '../components/OwnershipCertificate';
import { WiStars } from 'react-icons/wi';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const SubmitMovie = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 1. Initialisation de React Hook Form
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch, 
    control, // Indispensable pour les listes dynamiques (collaborateurs)
    formState: { errors, isSubmitting } 
  } = useForm({
    defaultValues: {
      original_title: '',
      english_title: '',
      duration: '',
      is_hybrid: false,
      language: 'FRENCH',
      original_synopsis: '',
      english_synopsis: '',
      creative_process: '',
      ia_tools: '',
      has_subs: false,
      thumbnail: null,
      video_file: null,
      gallery: [],
      collaborateurs: [{ nom: '', role: '' }] // Initialise avec un champ vide
    }
  });

  const directorId = localStorage.getItem('currentDirectorId');

  // Sécurité : redirection si pas d'ID réalisateur
  useEffect(() => {
    if (!directorId) {
      alert("Veuillez d'abord remplir le formulaire réalisateur.");
      navigate('/form-director');
    }
  }, [directorId, navigate]);

  // Gestion centralisée des fichiers (venant de Dropzone dans Livrables.jsx)
  const handleFileSelection = (file, category) => {
    if (category === 'gallery') {
      const currentGallery = watch('gallery') || [];
      setValue('gallery', [...currentGallery, file]);
    } else {
      setValue(category, file);
    }
  };

  // 2. La fonction de soumission finale
  const onSubmit = async (data) => {
    console.log("🚀 Tentative d'envoi des données...", data);
    
    try {
      const formDataToSend = new FormData();
      
      // Extraction : on sépare les fichiers/tableaux du reste du texte
      const { thumbnail, video_file, gallery, collaborateurs, ...textData } = data;

      // SÉCURITÉ SQL : On nettoie la langue pour éviter l'erreur "Data truncated"
      if (textData.language) {
        textData.language = textData.language.toUpperCase().trim().substring(0, 20);
      }

      // Envoi du texte groupé dans 'formData' (JSON string)
      formDataToSend.append('formData', JSON.stringify(textData));
      
      // Envoi des collaborateurs (uniquement ceux qui ont un nom)
      const collaborateursFiltres = collaborateurs.filter(c => c.nom && c.nom.trim() !== '');
      formDataToSend.append('collaborateurs', JSON.stringify(collaborateursFiltres));
      
      // Envoi de l'ID du réalisateur
      formDataToSend.append('directorId', directorId);

      // Ajout des fichiers physiques pour Multer
      if (thumbnail) formDataToSend.append('thumbnail', thumbnail);
      if (video_file) formDataToSend.append('video', video_file); // 'video' correspond au backend
      
      if (gallery && gallery.length > 0) {
        gallery.forEach(file => formDataToSend.append('gallery', file));
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/movies/submit`,
        formDataToSend,
        { 
          headers: { 'Content-Type': 'multipart/form-data' },
          // Optionnel : suivre la progression de l'upload
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`Progression upload: ${percentCompleted}%`);
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert('✅ Votre film a été enregistré avec succès !');
        navigate('/success');
      }

    } catch (error) {
      console.error('🔥 Erreur lors de la soumission:', error);
      const serverError = error.response?.data?.error || "Erreur lors de l'envoi au serveur";
      alert(`❌ Erreur: ${serverError}`);
    }
  };

  // 3. Rendu du formulaire
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <WiStars className="w-20 h-20 text-red-400 mx-auto animate-pulse" />
        <h2 className="text-3xl text-red-500 font-medium mt-5">
          {t('form_movie.appel_projets_2026')}
        </h2>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 uppercase tracking-tighter">
          {t('submit_movie.submit_film')}
        </h1>
      </div>

      {/* Formulaire Principal */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 pb-20">
        
        {/* Étape 1 : Identité (Passage de register et errors) */}
        <FilmIdentityForm 
          register={register} 
          errors={errors} 
        />
        
        {/* Étape 2 : Déclaration IA (Passage de register, setValue et watch) */}
        <IaDeclaration 
          register={register} 
          setValue={setValue} 
          watch={watch} 
        />
        
        {/* Étape 3 : Livrables & Collabs (Passage de control pour useFieldArray) */}
        <Livrables
          register={register}
          watch={watch}
          setValue={setValue}
          control={control}
          handleUpload={handleFileSelection}
        />
        
        {/* Étape 4 : Certificat de propriété */}
        <OwnershipCertificate 
          register={register} 
          errors={errors} 
        />

        {/* Bouton de soumission flottant ou fixé en bas de page */}
        <div className="max-w-5xl mx-auto mt-10 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              bg-slate-900 text-white px-12 py-4 rounded-full font-bold text-lg
              transition-all shadow-2xl transform active:scale-95
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800 hover:-translate-y-1'}
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('submit_movie.uploading') || 'Envoi en cours...'}
              </span>
            ) : (
              t('submit_movie.finalize_submission')
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitMovie;