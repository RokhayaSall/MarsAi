import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

/* ===============================
   BOUTON PRINCIPAL
================================ */
export function ButtonParticipate({ className }) {
  return (
    <Link
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
      Participer maintenant
    </Link>
  );
}

/* ===============================
   BOUTON SECONDAIRE (outline)
================================ */
export function ButtonMore({ className }) {
  return (
    <a
      href="#buttonMore"
      className={`
        bg-[#F8FAFC]
        text-[#000000]
        rounded-4xl
        p-4 px-8
        font-bold text-2xl
        m-10
        cursor-pointer
        md:p-3 md:px-5 md:m-1 md:text-lg
        border-2 border-[#000000]
        transition-all duration-300
        ${className}
      `}
    >
      En savoir plus
      <span className="text-[#fd4e3a] text-2xl md:text-xl"> +</span>
    </a>
  );
}

/* ===============================
   BOUTON GALERIE
================================ */
export function ButtonGalery({ className }) {
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
      Voir toute la sélection
    </Link>
  );
}

/* ===============================
   BOUTON LOGOUT
================================ */
export default function ButtonLogOut({ className }) {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  if (!context || !context.user) return null;

  const handleLogout = () => {
    context.logoutUser();
    navigate('/home');
  };

  return (
    <button
      onClick={handleLogout}
      className={`
        bg-[#0f172a] text-white
        font-semibold
        rounded-xl
        py-1.5 px-5
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
      DECONNEXION
    </button>
  );
}
