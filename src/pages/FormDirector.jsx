import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';
import { useTranslation } from 'react-i18next';

export default function FormDirector() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    genre: '',
    cp: '',
    ville: '',
    biographie: '',
    region: '',
    pays: '',
    telephone: '',
    metier: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  });

  const [collaborateurs, setCollaborateurs] = useState([{ nom: '', role: '' }]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleChangeCollaborateur = (index, e) => {
    const { name, value } = e.target;
    const newCollabs = [...collaborateurs];
    newCollabs[index][name] = value;
    setCollaborateurs(newCollabs);
  };

  const ajouterCollaborateur = () =>
    setCollaborateurs([...collaborateurs, { nom: '', role: '' }]);

  const supprimerCollaborateur = () =>
    setCollaborateurs(collaborateurs.slice(0, -1));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, collaborateurs }),
      });
      const data = await res.json();
      console.log(data);
      alert(t('form.formulaire_envoye'));
    } catch (err) {
      console.error(err);
      alert(t('form.erreur_envoi'));
    }
  };

  const inputClass =
    'w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase';
  const labelClass =
    'text-sm font-bold tracking-wider text-slate-700 uppercase';

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <WiStars className="w-20 h-20 text-red-400 mx-auto" />
        <h2 className="text-3xl text-red-500 mt-5">
          {t('form.appel_projets_2026')}
        </h2>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 uppercase">
          {t('form.formulaire_realisateur')}
        </h1>
        <h3 className="text-xl text-slate-500 mt-2">
          {t('form.remplir_informations')}
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        {/* Champs de base */}
        {[
          'nom',
          'prenom',
          'email',
          'cp',
          'ville',
          'biographie',
          'region',
          'pays',
          'telephone',
          'metier',
        ].map(field => (
          <fieldset key={field}>
            <label htmlFor={field} className={labelClass}>
              {t(`form.${field}`)}
            </label>
            {field === 'biographie' ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`${inputClass} h-24 resize-none`}
                placeholder={t(`form.${field}`)}
              />
            ) : (
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                value={formData[field]}
                onChange={handleChange}
                className={inputClass}
                placeholder={t(`form.${field}`)}
              />
            )}
          </fieldset>
        ))}

        <fieldset>
          <label htmlFor="genre" className={labelClass}>
            {t('form.genre')}
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">{t('form.selectionner_genre')}</option>
            <option value="M">{t('form.homme')}</option>
            <option value="F">{t('form.femme')}</option>
            <option value="X">{t('form.autre')}</option>
          </select>
        </fieldset>

        <h3 className="text-lg font-semibold text-gray-800">
          {t('form.reseaux_sociaux')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {[
            {
              name: 'facebook',
              icon: (
                <FaFacebook className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 text-2xl" />
              ),
            },
            {
              name: 'twitter',
              icon: (
                <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl" />
              ),
            },
            {
              name: 'linkedin',
              icon: (
                <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 text-2xl" />
              ),
            },
            {
              name: 'instagram',
              icon: (
                <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500 text-2xl" />
              ),
            },
          ].map(social => (
            <fieldset key={social.name} className="relative">
              {social.icon}
              <input
                type="url"
                name={social.name}
                value={formData[social.name]}
                onChange={handleChange}
                placeholder={
                  social.name.charAt(0).toUpperCase() + social.name.slice(1)
                }
                className={`${inputClass} pl-10`}
              />
            </fieldset>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          {t('form.collaborateurs')}
        </h3>
        {collaborateurs.map((c, i) => (
          <div key={i} className="flex gap-4 mb-2">
            <input
              name="nom"
              value={c.nom}
              onChange={e => handleChangeCollaborateur(i, e)}
              placeholder={t('form.nom')}
              className={inputClass}
            />
            <input
              name="role"
              value={c.role}
              onChange={e => handleChangeCollaborateur(i, e)}
              placeholder={t('form.role')}
              className={inputClass}
            />
          </div>
        ))}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={ajouterCollaborateur}
            className="mt-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {t('form.ajouter_collaborateur')}
          </button>
          <button
            type="button"
            onClick={supprimerCollaborateur}
            className="mt-2 px-4 py-2 bg-red-400 text-white rounded-lg"
          >
            {t('form.supprimer_collaborateur')}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {t('form.envoyer')}
        </button>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={() => navigate('/submit-movie')}
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            {t('form.etape_suivante')}
          </button>
        </div>
      </form>
    </div>
  );
}
