export function Card({ icon: Icon, title, text }) {
  return (
    <article className=" bg-white border border-[#D5DAE1] rounded-4xl p-6 ">
      <Icon className="text-[#ff5845] text-4xl" />

      <h3 className="font-bold text-[#282828] text-2xl mt-2 ">{title}</h3>
      <p className="mt-2  text-xl">{text}</p>
    </article>
  );
}

export function CardMovie() {
  return (
    <article className="bg-[#EFEFEF] mt-10 rounded-xl overflow-hidden shadow-xl/30">
      <figure className="aspect-video w-full">
        <iframe
          className="w-full h-full "
          src="https://www.youtube.com/embed/4xq6bVbS-Pw?si=_twkdKn70p1y1UV-"
          title="YouTube video "
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </figure>
      <figcaption className="p-6">
        <h3 className="font-bold text-[#282828] text-2xl ">TITRE</h3>
        <p className="mt-2  text-[#3e3b3b] font-bold ">Réalisateur</p>
        <p className="font-bold ">Nom du real</p>
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

export function CardSelection({title, text, description }) {
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
