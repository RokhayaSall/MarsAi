import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/token';

export function ButtonParticipate({ className }) {
  return (
    <Link
      className={`inline-block bg-[#2b71b1] text-white  rounded-4xl p-4 px-8 font-bold text-2xl m-4 mt-10 mb-10 cursor-pointer md:p-3 md:px-5 md:text-lg ${className}`}
      to="/form-director"
    >
      Participer maintenant
    </Link>
  );
}

export function ButtonMore() {
  return (
    <a
      href="#buttonMore"
      className=" bg-[#FFFFFF]  rounded-4xl p-4 px-8  font-bold cursor-pointer text-2xl m-10 md:p-3 md:px-5 md:m-1 md:text-lg "
    >
      En savoir plus
      <span className="text-[#ff5845] text-2xl md:text-xl "> +</span>
    </a>
  );
}

export function ButtonGalery() {
  return (
    <Link
      className="block w-fit mx-auto bg-[#2b71b1] text-white rounded-xl p-4 px-8 font-bold text-2xl cursor-pointer md:p-3 md:px-5 md:text-lg"
      to="/gallery"
    >
      Voir toute la sélection
    </Link>
  );
}

export default function ButtonLogOut() {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout(); //function qui supprime le token
    navigate('/home');
  };

  return (
    <button
      onClick={logoutUser}
      className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center w-40 md:w-auto"
    >
      Déconnexion
    </button>
  );
}
