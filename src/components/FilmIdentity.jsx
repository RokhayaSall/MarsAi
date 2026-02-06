import React from 'react';
import { FiFilm } from 'react-icons/fi';

const FilmIdentityForm = () => {
  return (
    <section className="flex justify-center items-center  bg-gray-100 p-6">
      <article className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        
        <header className="flex items-center gap-4 mb-10">
          <div className="p-2 border-2 border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-500" />
          </div>
          <h2 className="text-xl font-bold tracking-widest text-slate-800 uppercase">
            01. Identité du film 
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          
          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Titre original*
            </label>
            <input 
              type="text" 
              placeholder="TITRE ORIGINAL"
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Traduction anglaise*
            </label>
            <input 
              type="text" 
              placeholder="TRADUCTION ANGLAISE"
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Durée exacte (en secondes)*
            </label>
            <input 
              type="text" 
              placeholder="EX: 60"
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              Langue parlée/principale du film*
            </label>
            <input 
              type="text" 
              placeholder="LANGUE"
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </div>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
                Synopsis langue originale* (max. 300 caractères)
              </label>
              <span className="text-xs font-bold text-slate-500"></span>
            </div>
            <textarea 
              placeholder="RÉSUMEZ L'INTENTION DE VOTRE FILM ET L'HISTOIRE QU'IL RACONTE EN QUELQUES LIGNES..."
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
                Synopsis anglais* (max. 300 caractères)
              </label>
              <span className="text-xs font-bold text-slate-500"></span>
            </div>
            <textarea 
              placeholder="RÉSUMEZ L'INTENTION DE VOTRE FILM ET L'HISTOIRE QU'IL RACONTE EN QUELQUES LIGNES..."
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>

        </section>
      </article>
    </section>
  );
};

export default FilmIdentityForm;
