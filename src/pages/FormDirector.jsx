import { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaGlobe,
  FaPhone,
  FaBriefcase,
} from 'react-icons/fa';

export default function Formulaire() {
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
    collaborateurRole: '',
    collaborateurNom: '',
  });

  const [collaborateurs, setCollaborateurs] = useState([{ nom: '', role: '' }]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ formData, collaborateurs });
    alert('Formulaire envoyé !');
  };

  const ajouterCollaborateur = () =>
    setCollaborateurs([...collaborateurs, { nom: '', role: '' }]);

  const supprimerCollaborateur = () =>
    setCollaborateurs(collaborateurs.slice(0, -1));

  const handleChangeCollaborateur = (index, e) => {
    const { name, value } = e.target;
    const newCollabs = [...collaborateurs];
    newCollabs[index][name] = value;
    setCollaborateurs(newCollabs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-4xl font-bold text-gray-800 text-center">
        Formulaire réalisateur
      </h2>

      <section className="space-y-4">
        <fieldset className="relative">
          <FaUser className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400 text-2xl" />
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            id="nom"
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </fieldset>

        <fieldset className="relative">
          <FaUser className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400 text-2xl" />
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            id="prenom"
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </fieldset>

        <fieldset className="relative">
          <FaEnvelope className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400 text-2xl" />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-700"
          >
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionner le genre</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
          </select>
        </fieldset>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <fieldset className="relative">
          <FaMapMarkerAlt className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400 text-2xl" />
          <label
            htmlFor="cp"
            className="block text-sm font-medium text-gray-700"
          >
            Code postal
          </label>
          <input
            id="cp"
            type="text"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
            placeholder="Code postal"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3"
          />
        </fieldset>

        <fieldset className="relative">
          <FaMapMarkerAlt className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400 text-2xl" />
          <label
            htmlFor="ville"
            className="block text-sm font-medium text-gray-700"
          >
            Ville
          </label>
          <input
            id="ville"
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            placeholder="Ville"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3"
          />
        </fieldset>
      </section>

      <section>
        <fieldset>
          <label
            htmlFor="biographie"
            className="block text-sm font-medium text-gray-700"
          >
            Biographie
          </label>
          <textarea
            id="biographie"
            name="biographie"
            value={formData.biographie}
            onChange={handleChange}
            placeholder="Biographie"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 h-24"
          />
        </fieldset>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <fieldset>
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            Région
          </label>
          <input
            id="region"
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Région"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </fieldset>

        <fieldset className="relative">
          <FaGlobe className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400  text-2xl" />
          <label
            htmlFor="pays"
            className="block text-sm font-medium text-gray-700"
          >
            Pays
          </label>
          <input
            id="pays"
            type="text"
            name="pays"
            value={formData.pays}
            onChange={handleChange}
            placeholder="Pays"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3"
          />
        </fieldset>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <fieldset className="relative">
          <FaPhone className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400 text-2xl" />
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700"
          >
            Téléphone
          </label>
          <input
            id="telephone"
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3"
          />
        </fieldset>

        <fieldset className="relative">
          <FaBriefcase className="absolute left-3 bottom-0 -translate-y-1/2 text-gray-400  text-2xl " />
          <label
            htmlFor="metier"
            className="block text-sm font-medium text-gray-700"
          >
            Métier actuel
          </label>
          <input
            id="metier"
            type="text"
            name="metier"
            value={formData.metier}
            onChange={handleChange}
            placeholder="Métier actuel"
            className="mt-1 w-full pl-10 rounded-lg border border-gray-300 py-2 px-3"
          />
        </fieldset>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-800">Réseaux sociaux</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <fieldset className="relative">
            <FaFacebook className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600  text-2xl" />
            <input
              type="url"
              name="facebook"
              placeholder="Facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <fieldset className="relative">
            <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400  text-2xl" />
            <input
              type="url"
              name="twitter"
              placeholder="Twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <fieldset className="relative">
            <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 text-2xl" />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <fieldset className="relative">
            <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500  text-2xl" />
            <input
              type="url"
              name="instagram"
              placeholder="Instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </fieldset>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-800">Collaborateurs</h3>
        {collaborateurs.map((collab, index) => (
          <fieldset key={index} className="flex gap-4 mb-2">
            <input
              type="text"
              name="nom"
              value={collab.nom}
              onChange={e => handleChangeCollaborateur(index, e)}
              placeholder="Nom"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="role"
              value={collab.role}
              onChange={e => handleChangeCollaborateur(index, e)}
              placeholder="Rôle"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
            />
          </fieldset>
        ))}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={ajouterCollaborateur}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            + Ajouter un collaborateur
          </button>
          <button
            type="button"
            onClick={supprimerCollaborateur}
            className="mt-2 px-4 py-2 bg-red-400 text-white rounded-lg"
          >
            Suppiimer un collaborateur
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
    </form>
  );
}
