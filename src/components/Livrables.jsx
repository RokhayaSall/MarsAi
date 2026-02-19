import React from 'react';
import { FiFilm, FiX } from 'react-icons/fi';
import { LuImagePlus } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';

const Livrables = ({ formData, update, collaborateurs, updateCollabs }) => {
// eslint-disable-next-line no-unused-vars
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

  const onDropVignette = acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      Object.assign(file, { preview: URL.createObjectURL(file) });
      update({ thumbnail: file });
    }
  };

  const removeVignette = e => {
    e.stopPropagation();
    update({ thumbnail: null });
  };

  const { getRootProps: getRootVignette, getInputProps: getInputVignette } =
    useDropzone({
      onDrop: onDropVignette,
      accept: { 'image/*': [] },
      multiple: false,
    });

  const onDropGallery = acceptedFiles => {
    const currentGallery = formData.gallery || [];
    const newFiles = acceptedFiles.map(file =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    update({ gallery: [...currentGallery, ...newFiles].slice(0, 3) });
  };

  const removeGalleryImage = (e, index) => {
    e.stopPropagation();
    const newGallery = [...(formData.gallery || [])];
    newGallery.splice(index, 1);
    update({ gallery: newGallery });
  };

  const { getRootProps: getRootGallery, getInputProps: getInputGallery } =
    useDropzone({
      onDrop: onDropGallery,
      accept: { 'image/*': [] },
      maxFiles: 3,
    });

  const labelStyle =
    'text-sm font-bold tracking-wider text-slate-700 uppercase mb-2';

  return (
    <section className="flex justify-center items-center bg-gray-50 p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl p-8 md:p-12">
        <header className="flex items-center gap-4 mb-10 border-b pb-6">
          <div className="flex items-center justify-center p-2 border border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-700" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-800 uppercase">
            Étape 03. Livrables & Collaborateurs
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col">
            <label className={labelStyle}>Lien Youtube*</label>
            <input
              type="text"
              value={formData.youtube_url || ''}
              onChange={e => update({ youtube_url: e.target.value })}
              placeholder="https://youtube.com/..."
              className="w-full bg-[#F1F3F6] rounded-lg p-4 text-sm outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className={labelStyle}>Sous-titres (.srt)</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={formData.has_subs || false}
                  onChange={e => update({ has_subs: e.target.checked })}
                />
                <span className="italic text-slate-600">
                  Voix ou textes nécessitant des sous-titres
                </span>
              </label>
              <div className="bg-[#F1F3F6] rounded-lg p-4 flex items-center justify-between text-sm">
                <button className="text-slate-700 font-medium">
                  Choisir un fichier
                </button>
                <span className="text-gray-400">Aucun fichier choisi</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelStyle}>Vignette Officielle (16:9)</label>
            <div
              {...getRootVignette()}
              className="bg-[#F1F3F6] rounded-lg h-56 relative flex flex-col items-center justify-center border-2 border-dashed border-transparent hover:border-slate-300 transition-all cursor-pointer overflow-hidden"
            >
              <input {...getInputVignette()} />

              {formData.thumbnail ? (
                <>
                  <img
                    src={formData.thumbnail.preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={removeVignette}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </>
              ) : (
                <>
                  <LuImagePlus className="w-16 h-16 text-slate-400 mb-2" />
                  <span className="text-xs font-bold text-slate-400 uppercase">
                    PNG ou JPG – Max 15 Mo
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelStyle}>Galerie Médias (Max 3)</label>
            <div
              {...getRootGallery()}
              className="bg-[#F1F3F6] rounded-lg h-56 flex items-center justify-center gap-4 px-4 cursor-pointer hover:bg-[#ebedf0] transition-colors overflow-hidden"
            >
              <input {...getInputGallery()} />

              {!formData.gallery || formData.gallery.length === 0 ? (
                <div className="flex gap-6">
                  <LuImagePlus className="w-12 h-12 text-slate-400" />
                  <LuImagePlus className="w-12 h-12 text-slate-400" />
                  <LuImagePlus className="w-12 h-12 text-slate-400" />
                </div>
              ) : (
                <div className="flex gap-2 w-full h-full py-4">
                  {formData.gallery.map((file, index) => (
                    <div key={index} className="relative flex-1 h-full group">
                      <img
                        src={file.preview}
                        alt="gallery"
                        className="w-full h-full object-cover rounded-md shadow-sm"
                      />
                      <button
                        onClick={e => removeGalleryImage(e, index)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiX size={14} />
                      </button>
                    </div>
                  ))}
                  {formData.gallery.length < 3 && (
                    <div className="flex-1 border-2 border-dashed border-slate-300 rounded-md flex items-center justify-center">
                      <LuImagePlus className="text-slate-400" size={24} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 mt-4">
            <label className={labelStyle}>Collaborateurs</label>
            {collaborateurs.map((collab, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase ml-1">
                    Nom
                  </span>
                  <input
                    name="nom"
                    value={collab.nom}
                    onChange={e => handleChangeCollaborateur(index, e)}
                    className="w-full bg-[#F1F3F6] rounded-lg p-4 text-sm mt-1 outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase ml-1">
                    Rôle
                  </span>
                  <input
                    name="role"
                    value={collab.role}
                    onChange={e => handleChangeCollaborateur(index, e)}
                    className="w-full bg-[#F1F3F6] rounded-lg p-4 text-sm mt-1 outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={ajouterCollaborateur}
                className="bg-[#2D6A4F] text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-[#1B4332] transition-all shadow-sm"
              >
                + Ajouter
              </button>
              <button
                type="button"
                onClick={supprimerCollaborateur}
                className="bg-[#FF6B6B] text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-[#EE5253] transition-all shadow-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livrables;
