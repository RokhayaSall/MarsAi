import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form'; // 1. Importation

export default function FormDirector() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // 2. Initialisation de React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      genre: '',
    }
  });

  // 3. La fonction de soumission (appelée par handleSubmit de RHF)
  const onSubmit = async (data) => {
    console.log("Données validées prêtes à l'envoi :", data);

    try {
      const res = await fetch(`${API_BASE_URL}/api/form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // On envoie directement 'data' qui contient déjà la structure plate
        body: JSON.stringify({ formData: data }),
      });

      const responseData = await res.json();

      if (res.ok) {
        const idFinal = responseData.id || responseData.insertId || responseData.directorId;

        if (idFinal) {
          localStorage.setItem('currentDirectorId', idFinal.toString());
          navigate('/submit-movie');
        } else {
          alert("Succès, mais aucun ID reçu. Vérifiez la console.");
        }
      } else {
        alert(responseData.error || 'Erreur serveur : ' + res.status);
      }
    } catch (err) {
      console.error('Erreur :', err);
      alert('Problème de connexion au serveur.');
    }
  };

  const inputClass = (fieldName) => 
    `w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 outline-none transition-all ${
      errors[fieldName] ? 'ring-2 ring-red-400' : 'focus:ring-blue-400'
    }`;
    
  const labelClass = 'text-sm font-bold tracking-wider text-slate-700 uppercase';

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <WiStars className="w-20 h-20 text-red-400 mx-auto" />
        <h2 className="text-3xl text-red-500 mt-5">{t('form.appel_projets_2026')}</h2>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 uppercase">{t('form.formulaire_realisateur')}</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)} // 4. On lie RHF au submit
        className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        {[
          { name: 'nom', required: true },
          { name: 'prenom', required: true },
          { name: 'email', required: true, type: 'email' },
          { name: 'cp', required: true },
          { name: 'ville', required: true },
          { name: 'biographie', required: true, isTextArea: true },
          { name: 'region', required: false },
          { name: 'pays', required: true },
          { name: 'telephone', required: true },
          { name: 'metier', required: true },
        ].map(field => (
          <fieldset key={field.name} className="flex flex-col gap-1">
            <label htmlFor={field.name} className={labelClass}>
              {t(`form.${field.name}`)} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.isTextArea ? (
              <textarea
                id={field.name}
                className={`${inputClass(field.name)} h-24 resize-none`}
                placeholder={t(`form.${field.name}`)}
                {...register(field.name, { required: field.required })}
              />
            ) : (
              <input
                id={field.name}
                type={field.type || 'text'}
                className={inputClass(field.name)}
                placeholder={t(`form.${field.name}`)}
                {...register(field.name, { 
                  required: field.required,
                  pattern: field.type === 'email' ? /^\S+@\S+$/i : null 
                })}
              />
            )}
            {errors[field.name] && <span className="text-red-400 text-xs font-bold">Ce champ est requis</span>}
          </fieldset>
        ))}

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="genre" className={labelClass}>{t('form.genre')} <span className="text-red-500">*</span></label>
          <select
            id="genre"
            className={inputClass('genre')}
            {...register("genre", { required: true })}
          >
            <option value="">{t('form.selectionner_genre')}</option>
            <option value="M">{t('form.homme')}</option>
            <option value="F">{t('form.femme')}</option>
            <option value="X">{t('form.autre')}</option>
          </select>
          {errors.genre && <span className="text-red-400 text-xs font-bold">Sélectionnez un genre</span>}
        </fieldset>

        <h3 className="text-lg font-semibold text-gray-800">{t('form.reseaux_sociaux')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {[
            { name: 'facebook', icon: <FaFacebook className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 text-2xl" /> },
            { name: 'twitter', icon: <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl" /> },
            { name: 'linkedin', icon: <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 text-2xl" /> },
            { name: 'instagram', icon: <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500 text-2xl" /> },
          ].map(social => (
            <fieldset key={social.name} className="relative">
              {social.icon}
              <input
                type="url"
                placeholder={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                className={`${inputClass(social.name)} pl-10`}
                {...register(social.name)}
              />
            </fieldset>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#1e293b] text-white py-3 rounded-lg font-semibold transition ${
            isSubmitting ? 'opacity-50' : 'hover:bg-slate-700'
          }`}
        >
          {isSubmitting ? 'Envoi...' : t('form.envoyer')}
        </button>
      </form>
    </div>
  );
}