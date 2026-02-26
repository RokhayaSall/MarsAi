import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/token';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

export function ButtonParticipate({ className }) {
  const { t } = useTranslation();

  return (
    <Link
      className={`inline-block bg-[#2b71b1] text-white rounded-4xl p-4 px-8 font-bold text-2xl m-4 mt-10 mb-10 cursor-pointer md:p-3 md:px-5 md:text-lg ${className}`}
      to="/form-director"
    >
      {t('buttons.participate')}
    </Link>
  );
}

export function ButtonMore() {
  const { t } = useTranslation();

  return (
    <a
      href="#buttonMore"
      className="bg-[#FFFFFF] rounded-4xl p-4 px-8 font-bold cursor-pointer text-2xl m-10 md:p-3 md:px-5 md:m-1 md:text-lg"
    >
      {t('buttons.learnMore')}
      <span className="text-[#ff5845] text-2xl md:text-xl"> +</span>
    </a>
  );
}

export function ButtonGalery() {
  const { t } = useTranslation();

  return (
    <Link
      className="block w-fit mx-auto bg-[#2b71b1] text-white rounded-xl p-4 px-8 font-bold text-2xl cursor-pointer md:p-3 md:px-5 md:text-lg"
      to="/gallery"
    >
      {t('buttons.viewSelection')}
    </Link>
  );
}

export default function ButtonLogOut() {
  const { t } = useTranslation();
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
      className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center w-40 md:w-auto"
    >
      {t('buttons.logout')}
    </button>
  );
}