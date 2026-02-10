import { Globe } from 'lucide-react'; // Assure-toi d'avoir installé lucide-react

export function Card({ icon: Icon, title, text }) {
  return (
    <article className=" bg-white border border-[#D5DAE1] rounded-4xl p-6 w-70 h-55 ">
      <Icon className="text-[#ff5845] text-4xl" />

      <h3 className="font-bold text-[#282828] text-2xl mt-2">{title}</h3>
      <p className="mt-2  text-xl">{text}</p>
    </article>
  );
}

export function CardMovie({ title, director, country, duration }) {
  return (
    <article className="bg-[#EFEFEF] mt-10 rounded-xl overflow-hidden">
      <figure className="aspect-video w-full">
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
      <figcaption className="p-6">
        <h3 className="font-bold text-[#282828] text-2xl ">TITRE</h3>
        <p className="mt-2 text-xl text-[#3e3b3b] font-bold ">Réalisateur</p>
        <p className="text-xl font-bold ">Nom du real</p>
      </figcaption>
    </article>
  );
}

export function CardFestival({ icon: Icon, title, text }) {
  return (
    <article className=" bg-[#333333] border border-[#626262] rounded-4xl p-8  ">
      <Icon className="text-[#ff5845] text-5xl" />
      <h3 className="font-bold text-white text-2xl mt-2 uppercase w-full">
        {title}
      </h3>
      <p className="mt-5 text-xl text-[#b4bfce]  w-full">{text}</p>
    </article>
  );
}

export function CardSelection({ title, text, description }) {
  return (
    <article className=" bg-white border border-[#D5DAE1] rounded-4xl p-8  ">
      <h3 className="font-bold text-[#246BAD] text-2xl uppercase w-full">
        {title}
      </h3>
      <p className="mt-2 font-semibold w-full">{text}</p>
      <p className="mt-2 font-semibold  text-[#64748B] w-full">{description}</p>
    </article>
  );
}
