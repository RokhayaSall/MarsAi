import { Globe } from 'lucide-react'; // Assure-toi d'avoir installé lucide-react

export function Card({ icon: Icon, title, text }) {
  return (
    <article className="bg-white border border-[#D5DAE1] rounded-4xl p-6 w-70 h-55">
      <Icon className="text-[#ff5845] text-4xl" />
      <h3 className="font-bold text-[#282828] text-2xl mt-2">{title}</h3>
      <p className="mt-2 text-xl">{text}</p>
    </article>
  );
}

export function CardMovie({ title, director, country, duration }) {
  return (
    <article className="bg-[#F9FAFB] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
      <figure className="relative aspect-video w-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/4xq6bVbS-Pw"
          title={title}
          allowFullScreen
        ></iframe>

        {/* Badges IA en haut à gauche */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white/20 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full font-bold uppercase">
            Sora
          </span>
          <span className="bg-white/20 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full font-bold uppercase">
            ChatGPT
          </span>
        </div>
      </figure>

      <figcaption className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-black text-[#282828] text-xl uppercase tracking-tighter">
            {title}
          </h3>
          <span className="bg-[#FFE5E5] text-[#FF5845] text-[10px] px-2 py-0.5 rounded font-black">
            {duration}
          </span>
        </div>

        <div className="flex justify-between items-end uppercase">
          <div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest">
              Réalisateur
            </p>
            <p className="text-sm font-black text-[#282828]">{director}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-400 font-bold tracking-widest text-[8px]">
              Origine
            </p>
            <div className="flex items-center gap-1 justify-end">
              <Globe size={14} className="text-blue-500" />
              <p className="text-sm font-black text-[#282828]">{country}</p>
            </div>
          </div>
        </div>
      </figcaption>
    </article>
  );
}
