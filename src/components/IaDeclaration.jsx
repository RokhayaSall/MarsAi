import { FiFilm } from 'react-icons/fi';

const IaDeclaration = () => {
  return (
    <section className="flex justify-center items-center bg-gray-100 p-6">
      <article className="w-full max-w-4xl bg-black rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        
        <header className="flex items-center gap-4 mb-10">
          <div className="p-2 border-2 border-slate-300 rounded-md">
            <FiFilm className="w-6 h-6 text-slate-500" />
          </div>
          <h2 className="text-xl font-bold tracking-widest text-slate-500 uppercase">
            02. Déclaration usage de l'IA
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          
          <section className="space-y-2">
            <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Classification de l'oeuvre : * choix exclusif entre :
            </label>
            <input 
              type="text" 
              placeholder="Generation integrale (100% IA)"
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
            <input 
              type="text" 
              placeholder="Production hybride (prise de vues réelles + apports IA)"
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all uppercase"
            />
          </section>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">
                Stack technologique *
              </label>
              <span className="text-xs font-bold text-slate-500"></span>
            </div>
            <textarea 
              placeholder="Listez les outils utilisés (ex: MidJourney pour les visuels, ElevenLabs pour les voix, Runway pour l'animation...)"
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>

          <section className="md:col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold tracking-wider text-slate-500 uppercase">
                Méthodologie créative *
              </label>
              <span className="text-xs font-bold text-slate-500"></span>
            </div>
            <textarea 
              placeholder="Décrivez l'interaction entre l'humain et la machine dans ce processus... Qui a fait quoi ? Comment les outils d'IA ont été utilisés ? À quel moment du processus de création ?"
              className="w-full bg-gray-100 border-none rounded-2xl p-4 h-32 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none uppercase leading-relaxed"
            />
          </section>

        </section>
      </article>
    </section>
  );
};

export default IaDeclaration;
