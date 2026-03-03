import { FiFilm } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const IaDeclaration = ({ register, setValue, watch }) => {
  const { t } = useTranslation();
  
  // On surveille la valeur de is_hybrid en temps réel
  const isHybrid = watch("is_hybrid");

  return (
    <section className="flex justify-center items-center bg-gray-100 p-6">
      <article className="w-full max-w-4xl bg-black rounded-3xl shadow-sm p-8 md:p-12">
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
                onClick={() => setValue("is_hybrid", true)}
                className={`flex-1 p-4 rounded-xl text-sm uppercase font-bold transition-all border-2 
                  ${isHybrid === true ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-800 text-gray-400 border-transparent'}`}
              >
                {t('ia_declaration.hybrid')}
              </button>

              <button
                type="button"
                onClick={() => setValue("is_hybrid", false)}
                className={`flex-1 p-4 rounded-xl text-sm uppercase font-bold transition-all border-2
                  ${isHybrid === false ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-800 text-gray-400 border-transparent'}`}
              >
                {t('ia_declaration.full_ia')}
              </button>
            </div>
          </section>

          <section className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t('ia_declaration.tech_stack')}</label>
            <textarea
              {...register("ia_tools")}
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm text-slate-800 outline-none"
            />
          </section>

          <section className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t('ia_declaration.creative_methodology')}</label>
            <textarea
              {...register("creative_process")}
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm text-slate-800 outline-none"
            />
          </section>
        </section>
      </article>
    </section>
  );
};

export default IaDeclaration;