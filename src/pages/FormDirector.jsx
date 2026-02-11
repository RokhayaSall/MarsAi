import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';

export default function FormDirector() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    genre: '',
    adresse: '',
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
      alert('Formulaire envoyé ! 🚀');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’envoi du formulaire');
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
        <h2 className="text-3xl text-red-500 mt-5">Appel à projets 2026</h2>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 uppercase">
          Formulaire du réalisateur
        </h1>
        <h3 className="text-xl text-slate-500 mt-2">
          Veuillez remplir les informations ci-dessous.
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        <section className="space-y-4">
          <fieldset>
            <label htmlFor="nom" className={labelClass}>
              Nom
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="prenom" className={labelClass}>
              Prénom
            </label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              value={formData.prenom}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="genre" className={labelClass}>
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Sélectionner le genre</option>
              <option value="M">Homme</option>
              <option value="F">Femme</option>
              <option value="X">Autre</option>
            </select>
          </fieldset>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset>
            <label htmlFor="cp" className={labelClass}>
              Code postal
            </label>
            <input
              id="cp"
              name="cp"
              type="text"
              value={formData.cp}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="ville" className={labelClass}>
              Ville
            </label>
            <input
              id="ville"
              name="ville"
              type="text"
              value={formData.ville}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
        </section>

        <section>
          <fieldset>
            <label htmlFor="biographie" className={labelClass}>
              Biographie
            </label>
            <textarea
              id="biographie"
              name="biographie"
              value={formData.biographie}
              onChange={handleChange}
              className={`${inputClass} h-24 resize-none`}
            />
          </fieldset>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset>
            <label htmlFor="region" className={labelClass}>
              Région
            </label>
            <input
              id="region"
              name="region"
              type="text"
              value={formData.region}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="pays" className={labelClass}>
              Pays
            </label>
            <input
              id="pays"
              name="pays"
              type="text"
              value={formData.pays}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset>
            <label htmlFor="telephone" className={labelClass}>
              Téléphone
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              value={formData.telephone}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="metier" className={labelClass}>
              Métier actuel
            </label>
            <input
              id="metier"
              name="metier"
              type="text"
              value={formData.metier}
              onChange={handleChange}
              className={inputClass}
            />
          </fieldset>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800">
            Réseaux sociaux
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <fieldset className="relative">
              <FaFacebook className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 text-2xl" />
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="Facebook"
                className={`${inputClass} pl-10`}
              />
            </fieldset>
            <fieldset className="relative">
              <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl" />
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="Twitter"
                className={`${inputClass} pl-10`}
              />
            </fieldset>
            <fieldset className="relative">
              <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 text-2xl" />
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn"
                className={`${inputClass} pl-10`}
              />
            </fieldset>
            <fieldset className="relative">
              <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500 text-2xl" />
              <input
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="Instagram"
                className={`${inputClass} pl-10`}
              />
            </fieldset>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800">
            Collaborateurs
          </h3>
          {collaborateurs.map((c, i) => (
            <div key={i} className="flex gap-4 mb-2">
              <input
                name="nom"
                value={c.nom}
                onChange={e => handleChangeCollaborateur(i, e)}
                placeholder="Nom"
                className={inputClass}
              />
              <input
                name="role"
                value={c.role}
                onChange={e => handleChangeCollaborateur(i, e)}
                placeholder="Rôle"
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
              + Ajouter un collaborateur
            </button>
            <button
              type="button"
              onClick={supprimerCollaborateur}
              className="mt-2 px-4 py-2 bg-red-400 text-white rounded-lg"
            >
              Supprimer un collaborateur
            </button>
          </div>
        </section>

        <section>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </section>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={() => navigate('/submit-movie')}
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            Étape suivante
          </button>
        </div>
      </form>
    </div>
  );
}
