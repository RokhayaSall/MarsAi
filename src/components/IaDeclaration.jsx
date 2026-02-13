import { FiFilm } from 'react-icons/fi';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const IaDeclaration = () => {
  const { t } = useTranslation();
  const [classification, setClassification] = useState('');

  return (
    <section className="flex justify-center items-center bg-gray-100 p-6">
      <article className="w-full max-w-4xl bg-black rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <header className="flex items-center gap-4 mb-10">
          <div className="p-2 border-2 border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-500" />
          </div>
          <h2 className="text-xl font-bold tracking-widest text-slate-500 uppercase">
            {t('ia_declaration.step')} 02. {t('ia_declaration.title')}
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <section className="space-y-4">
            <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              {t('ia_declaration.classification_label')}
            </label>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setClassification('hybride')}
                className={`flex-1 p-4 rounded-xl text-sm uppercase font-bold transition-all
                  ${classification === 'hybride' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                {t('ia_declaration.hybrid')}
              </button>

              <button
                type="button"
                onClick={() => setClassification('100ia')}
                className={`flex-1 p-4 rounded-xl text-sm uppercase font-bold transition-all
                  ${classification === '100ia' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                {t('ia_declaration.full_ia')}
              </button>
            </div>
          </section>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">
                {t('ia_declaration.tech_stack')}
              </label>
            </div>
            <textarea
              placeholder={t('ia_declaration.tech_stack_placeholder')}
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">
                {t('ia_declaration.creative_methodology')}
              </label>
            </div>
            <textarea
              placeholder={t('ia_declaration.creative_methodology_placeholder')}
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>
        </section>
      </article>
    </section>
  );
};

export default IaDeclaration;
