import { FiFilm } from 'react-icons/fi';
import { ImFilePicture } from 'react-icons/im';
import { useTranslation } from 'react-i18next';

// On récupère les données et les fonctions de mise à jour depuis le parent
const Livrables = ({ formData, update, collaborateurs, updateCollabs }) => {
  const { t } = useTranslation();

  const ajouterCollaborateur = () =>
    updateCollabs([...collaborateurs, { nom: '', role: '' }]);

  const supprimerCollaborateur = () => {
    if (collaborateurs.length > 1) {
      updateCollabs(collaborateurs.slice(0, -1));
    }
  };

  const handleChangeCollaborateur = (index, e) => {
    const { name, value } = e.target;
    const newCollabs = [...collaborateurs];
    newCollabs[index][name] = value;
    updateCollabs(newCollabs);
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        
        <header className="flex items-center gap-4 mb-10">
          <div className="flex items-center justify-center p-2 border-2 border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-500" />
          </div>
          <h2 className="text-xl font-bold tracking-widest text-slate-800 uppercase">
            {t('livrables.step')} 03. {t('livrables.title')}
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <fieldset className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              {t('livrables.youtube_label')}
            </label>
            <input
              type="text"
              value={formData.youtube_url || ''} // Liaison avec le state parent
              onChange={(e) => update({ youtube_url: e.target.value })}
              placeholder={t('livrables.youtube_placeholder')}
              className="w-full bg-gray-100 rounded-xl p-4 text-sm uppercase outline-none focus:ring-2 focus:ring-blue-400"
            />
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              {t('livrables.subtitles_label')}
            </legend>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.has_subs || false} // Liaison avec le state parent
                onChange={(e) => update({ has_subs: e.target.checked })}
              />
              {t('livrables.subtitles_text')}
            </label>
            <input type="file" className="w-full bg-gray-100 rounded-xl p-4 text-sm" />
          </fieldset>
          
          {/* Les sections Thumbnail et Gallery restent identiques car elles sont visuelles */}
        </section>

        <section className="mt-12">
          <h3 className="text-sm font-bold tracking-wider text-slate-700 uppercase mb-4">
            {t('livrables.collaborators_title')}
          </h3>

          {collaborateurs.map((collab, index) => (
            <fieldset key={index} className="flex gap-4 mb-3">
              <input
                name="nom"
                value={collab.nom}
                onChange={e => handleChangeCollaborateur(index, e)}
                placeholder={t('livrables.collaborator_name')}
                className="w-full bg-gray-100 rounded-xl p-4 text-sm uppercase outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="role"
                value={collab.role}
                onChange={e => handleChangeCollaborateur(index, e)}
                placeholder={t('livrables.collaborator_role')}
                className="w-full bg-gray-100 rounded-xl p-4 text-sm uppercase outline-none focus:ring-2 focus:ring-blue-400"
              />
            </fieldset>
          ))}

          <div className="flex gap-4 mt-4">
            <button type="button" onClick={ajouterCollaborateur} className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors">
              {t('livrables.add')}
            </button>
            <button type="button" onClick={supprimerCollaborateur} className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors">
              {t('livrables.remove')}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Livrables;