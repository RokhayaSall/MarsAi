import { FiFilm } from 'react-icons/fi';
import { ImFilePicture } from 'react-icons/im';
import { useState } from 'react';

const Livrables = () => {
  const [collaborateurs, setCollaborateurs] = useState([{ nom: '', role: '' }]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ collaborateurs });
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
    <section className="flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
      >
        <header className="flex items-center gap-4 mb-10">
          <div className="flex items-center justify-center p-2 border-2 border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-500" />
          </div>
          <h2 className="text-xl font-bold tracking-widest text-slate-800 uppercase">
            03. Livrables & Collaborateurs
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <fieldset className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Lien youtube*
            </label>
            <input
              type="text"
              placeholder="HTTPS://YOUTUBE.COM/..."
              className="w-full bg-gray-100 rounded-xl p-4 text-sm uppercase"
            />
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Sous-titres (.srt)
            </legend>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Voix ou textes nécessitant des sous-titres
            </label>
            <input
              type="file"
              className="w-full bg-gray-100 rounded-xl p-4 text-sm"
            />
          </fieldset>

          <section className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Vignette officielle (16:9)
            </label>
            <figure className="flex flex-col items-center justify-center gap-3 p-10 bg-gray-100 rounded-md">
              <ImFilePicture className="w-20 h-20 text-slate-700" />
              <figcaption className="text-sm text-gray-500 text-center">
                PNG ou JPG – Max 15 Mo
              </figcaption>
            </figure>
          </section>

          <section className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Galerie Médias (max 3)
            </label>
            <div className="flex items-center justify-center gap-8 p-6 bg-gray-100 rounded-md">
              <ImFilePicture className="w-12 h-12 text-slate-700" />
              <ImFilePicture className="w-12 h-12 text-slate-700" />
              <ImFilePicture className="w-12 h-12 text-slate-700" />
            </div>
          </section>
        </section>

        <section className="mt-12">
          <h3 className="text-sm font-bold tracking-wider text-slate-700 uppercase">
            Collaborateurs
          </h3>

          {collaborateurs.map((collab, index) => (
            <fieldset key={index} className="flex gap-4 mb-3">
              <input
                name="nom"
                value={collab.nom}
                onChange={e => handleChangeCollaborateur(index, e)}
                placeholder="Nom"
                className="w-full bg-gray-100 rounded-xl p-4 text-sm uppercase"
              />
              <input
                name="role"
                value={collab.role}
                onChange={e => handleChangeCollaborateur(index, e)}
                placeholder="Rôle"
                className="w-full bg-gray-100 rounded-xl p-4 text-sm uppercase"
              />
            </fieldset>
          ))}

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={ajouterCollaborateur}
              className="px-4 py-2 bg-green-800 text-white rounded-lg"
            >
              + Ajouter
            </button>
            <button
              type="button"
              onClick={supprimerCollaborateur}
              className="px-4 py-2 bg-red-400 text-white rounded-lg"
            >
              Supprimer
            </button>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Livrables;
