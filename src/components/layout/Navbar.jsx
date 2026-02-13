import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { FaGlobe } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="px-6 md:px-12 py-4 bg-white shadow-md">
      <nav className="flex flex-col md:flex-row md:items-center justify-between">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            to="/"
            className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center"
          >
            MARS.AI
          </Link>
          {/* Hamburger */}
          <button
            className="text-3xl md:hidden"
            aria-label="Bouton menu de navigation"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Liens de navigation */}
        <ul
          className={`${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center md:justify-center gap-6 md:gap-30 mt-4 md:mt-0`}
        >
          <li className="font-bold text-[#282828] hover:text-[#2b71b1] transition-colors">
            <Link to="/gallery" onClick={() => setIsNavOpen(false)}>
              {t('nav.gallery')}
            </Link>
          </li>
          <li className="font-bold text-[#282828] hover:text-[#2b71b1] transition-colors">
            <Link to="/" onClick={() => setIsNavOpen(false)}>
              {t('nav.program')}
            </Link>
          </li>
          <li className="font-bold text-[#282828] hover:text-[#2b71b1] transition-colors">
            <Link to="/jury" onClick={() => setIsNavOpen(false)}>
              {t('nav.jury')}
            </Link>
          </li>
          <li className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center hover:bg-[#1f4f7a] transition-colors">
            <Link to="/form-director" onClick={() => setIsNavOpen(false)}>
              {t('nav.submit')}
            </Link>
          </li>
        </ul>

        {/* Icônes desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <FaGlobe
            className="text-[#2b71b1] w-10 h-10 cursor-pointer hover:text-[#1f4f7a] transition-colors"
            aria-label="Traduire le site"
            onClick={toggleLanguage}
          />
          <Link to="/auth" aria-label="Page de connexion">
            <CgProfile
              className="text-[#2b71b1] w-11 h-11 hover:text-[#1f4f7a] transition-colors"
            />
          </Link>
        </div>
      </nav>

      {/* Icônes mobile */}
      {isNavOpen && (
        <div className="flex md:hidden gap-6 mt-4 justify-center">
          <FaGlobe
            className="text-[#2b71b1] w-10 h-10 cursor-pointer hover:text-[#1f4f7a] transition-colors"
            onClick={toggleLanguage}
          />
          <Link to="/auth" aria-label="Page de connexion">
            <CgProfile className="text-[#2b71b1] w-11 h-11 hover:text-[#1f4f7a] transition-colors" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;