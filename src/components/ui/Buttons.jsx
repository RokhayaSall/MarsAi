import { Link } from 'react-router-dom';

export function ButtonParticipate() {
  return (
    <Link
      className="bg-[#2b71b1] text-white  rounded-4xl p-4 px-8 font-bold text-2xl m-4 cursor-pointer md:p-3 md:px-5 md:text-lg"
      to="/form-director"
    >
      Participer maintenant
    </Link>
  );
}

export function ButtonMore() {
  return (
    <button className="bg-[#FFFFFF]  rounded-4xl p-4 px-10  font-bold cursor-pointer text-2xl m-10 md:p-3 md:px-5 md:m-1 md:text-lg ">
      En savoir plus
      <span className="text-[#ff5845] text-2xl md:text-xl "> +</span>
    </button>
  );
}
