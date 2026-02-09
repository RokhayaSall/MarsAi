export function Card({ icon: Icon, title, text }) {
  return (
    <article className=" bg-white border border-[#D5DAE1] rounded-4xl p-6 w-70 h-55 ">
      <Icon className="text-[#ff5845] text-4xl" />

      <h3 className="font-bold text-[#282828] text-2xl mt-2">{title}</h3>
      <p className="mt-2  text-xl">{text}</p>
    </article>
  );
}

export function CardMovie() {
  return (
    <article className="bg-[#EFEFEF] mt-10 rounded-xl overflow-hidden">
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
        <p className="mt-2 text-xl text-[#3e3b3b] font-bold ">Réalisateur</p>
        <p className="text-xl font-bold ">Nom du real</p>
      </figcaption>
    </article>
  );
}
