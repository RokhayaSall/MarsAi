import React from 'react';
import { FiFilm } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const FilmIdentityForm = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center bg-gray-100 p-6">
      <article className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <header className="flex items-center gap-4 mb-10">
          <div className="p-2 border-2 border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-500" />
          </div>
          <h2 className="text-xl font-bold tracking-widest text-slate-800 uppercase">
            {t('film_identity.step')} 01. {t('film_identity.title')}
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              {t('film_identity.original_title')}
            </label>
            <input
              type="text"
              placeholder={t('film_identity.original_title_placeholder')}
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              {t('film_identity.english_title')}
            </label>
            <input
              type="text"
              placeholder={t('film_identity.english_title_placeholder')}
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              {t('film_identity.duration')}
            </label>
            <input
              type="text"
              placeholder={t('film_identity.duration_placeholder')}
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
              {t('film_identity.language')}
            </label>
            <input
              type="text"
              placeholder={t('film_identity.language_placeholder')}
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </div>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
                {t('film_identity.synopsis_original')}
              </label>
            </div>
            <textarea
              placeholder={t('film_identity.synopsis_original_placeholder')}
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-700 uppercase">
                {t('film_identity.synopsis_english')}
              </label>
            </div>
            <textarea
              placeholder={t('film_identity.synopsis_english_placeholder')}
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>
        </section>
      </article>
    </section>
  );
};

export default FilmIdentityForm;