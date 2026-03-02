import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

/* ===============================
   CLASSES DE BASE POUR TOUS LES BOUTONS
================================ */
const baseBtn = `
  inline-block
  rounded-4xl
  font-bold
  cursor-pointer
  transition-all duration-300
`;

/* ===============================
   BOUTON PRINCIPAL : PARTICIPER
================================ */
export function ButtonParticipate({ className }) {
  // const { t } = useTranslation();

  return (
    <Link
      to="/form-director"
      className={`
        ${baseBtn}
        bg-[#0f172a] text-white
        p-4 px-8
        text-2xl
        m-4 mt-10 mb-10
        md:p-3 md:px-5 md:text-lg
        border-2 border-[#181a1a]
        shadow-md
        hover:bg-[#1e2020]
        hover:shadow-lg
        ${className || ''}
      `}
    >
      {/* {t('buttons.participate')} */}
      Participer
    </Link>
  );
}

/* ===============================
   BOUTON : EN SAVOIR PLUS
================================ */
export function ButtonMore({ className }) {
  return (
    <a
      href="#buttonMore"
      className={`
        ${baseBtn}
        bg-[#FFFFFF] text-[#0f172a]
        p-4 px-8
        text-2xl
        m-10
        md:p-3 md:px-5 md:m-1 md:text-lg
        ${className || ''}
      `}
    >
      En savoir plus
      <span className="text-[#ff5845] text-2xl md:text-xl"> +</span>
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
        ${baseBtn}
        block w-fit mx-auto
        bg-[#0f172a] text-white
        p-4 px-8
        text-2xl
        md:p-3 md:px-5 md:text-lg
        border-2 border-[#000000]
        shadow-md
        hover:shadow-lg
        ${className || ''}
      `}
    >
      Voir la sélection
    </Link>
  );
}

/* ===============================
   BOUTON DECONNEXION
================================ */
export default function ButtonLogOut({ className }) {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  if (!context || !context.user) return null;

  const handleLogout = () => {
    if (context.logout) context.logout(); // utilise la fonction logout du context
    navigate('/home');
  };

  return (
    <button
      onClick={handleLogout}
      className={`
        ${baseBtn}
        bg-[#0f172a] text-white
        py-2 px-6
        w-40 md:w-auto
        border-2 border-[#000000]
        shadow-sm
        hover:bg-[#1e293b]
        hover:shadow-md
        ${className || ''}
      `}
    >
      Déconnexion
    </button>
  );
}