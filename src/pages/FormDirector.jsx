import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ formData, collaborateurs });
    alert('Formulaire envoyé !');
  };

  const ajouterCollaborateur = () => {
    setCollaborateurs([...collaborateurs, { nom: '', role: '' }]);
  };

  const supprimerCollaborateur = () => {
    setCollaborateurs(collaborateurs.slice(0, -1));
  };

  const handleChangeCollaborateur = (index, e) => {
    const { name, value } = e.target;
    const newCollabs = [...collaborateurs];
    newCollabs[index][name] = value;
    setCollaborateurs(newCollabs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-4 "
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Formulaire réalisateur
      </h2>

      <div>
        <label
          htmlFor="nom"
          className="block text-sm font-medium text-gray-700 "
        >
          Nom
        </label>
        <input
          id="nom"
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
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
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
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
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
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
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
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
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
      </div>

      <div>
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
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 h-24"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
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
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
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
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
      </div>

      <div>
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
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
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
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 pt-4">
        Réseaux sociaux
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="relative">
          <FaFacebook className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
          <input
            type="url"
            name="facebook"
            placeholder="Facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="url"
            name="twitter"
            placeholder="Twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700" />
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500" />
          <input
            type="url"
            name="instagram"
            placeholder="Instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-4">
        Collaborateurs
      </h3>
      {collaborateurs.map((collab, index) => (
        <div key={index} className="flex gap-4 mb-2">
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
        </div>
      ))}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={ajouterCollaborateur}
          className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Ajouter un collaborateur
        </button>

        <button
          type="button"
          onClick={supprimerCollaborateur}
          className="mt-2 px-4 py-2 bg-red-400 text-white rounded-lg"
        >
          Suppriùer un collaborateur
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Envoyer
      </button>
    </form>
  );
}
