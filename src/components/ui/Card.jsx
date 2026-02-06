function Card({ icon: Icon, title, text }) {
  return (
    <article className=" bg-white border border-[#D5DAE1] rounded-4xl p-6 w-70 h-55 ">
      <Icon className="text-[#ff5845] text-4xl" />

      <h3 className="font-bold text-2xl mt-2">{title}</h3>
      <p className="mt-2  text-xl">{text}</p>
    </article>
  );
}

export default Card;
