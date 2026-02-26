import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

/* ===============================
   BOUTON PRINCIPAL
================================ */
export function ButtonParticipate({ className }) {
  const { t } = useTranslation();

  return (
    <Link
      className={`inline-block bg-[#2b71b1] text-white  rounded-4xl p-4 px-8 font-bold text-2xl m-4 mt-10 mb-10 cursor-pointer md:p-3 md:px-5 md:text-lg ${className}`}
      to="/form-director"
      className={`
        inline-block
        bg-[#0f172a] text-white
        rounded-4xl
        p-4 px-8
        font-bold text-2xl
        m-4 mt-10 mb-10
        cursor-pointer
        md:p-3 md:px-5 md:text-lg
        border-2 border-[#181a1a]
        shadow-md
        hover:bg-[#1e2020]
        hover:shadow-lg
        transition-all duration-300
        ${className}
      `}
    >
      {t('buttons.participate')}
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
      to="/gallery"
      className={`
        block w-fit mx-auto
        bg-[#0f172a] text-white
        rounded-4xl
        p-4 px-8
        font-bold text-2xl
        cursor-pointer
        md:p-3 md:px-5 md:text-lg
        border-2 border-[#000000]
        shadow-md
        hover:shadow-lg
        transition-all duration-300
        ${className}
      `}
    >
      {t('buttons.viewSelection')}
    </Link>
  );
}

export default function ButtonLogOut() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  if (!context || !context.user) return null;

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <button
      onClick={handleLogout}
      className={`
        bg-[#0f172a] text-white
        font-bold
        rounded-4xl
        py-2 px-6
        w-40 md:w-auto
        cursor-pointer
        border-2 border-[#000000]
        shadow-sm
        hover:bg-[#1e293b]
        hover:shadow-md
        transition-all duration-300
        ${className}
      `}
    >
      Déconnexion
    </button>
  );
}