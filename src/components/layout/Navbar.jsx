import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { FaGlobe } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonLogOut from '../ui/Buttons';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="px-8 py-6">
      <nav
        className="flex flex-col md:flex-row md:items-center justify-between"
        aria-label="Menu de navigation"
      >
        <div className="flex justify-between items-center md:w-auto">
          <Link
            to="/"
            className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center"
          >
            MARS.AI
          </Link>
          <button
            className="text-3xl md:hidden"
            aria-label="Bouton menu de navigation"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>

        <ul
          className={`${isNavOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center gap-4 mt-6 md:mt-0`}
        >
          <li className="font-bold text-[#282828]">
            <Link to="/gallery" onClick={() => setIsNavOpen(false)}>
              {t('nav.gallery')}{' '}
              {/* <-- <-- C'est ici que j'utilise la fonction t pour traduire le texte du lien de navigation */}
            </Link>
          </li>
          <li className="font-bold text-[#282828]">
            <Link to="/" onClick={() => setIsNavOpen(false)}>
              {t('nav.program')}
            </Link>
          </li>
          <li className="font-bold text-[#282828]">
            <Link to="/jury" onClick={() => setIsNavOpen(false)}>
              {t('nav.jury')}
            </Link>
          </li>
          <li className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center w-40 md:w-auto">
            <Link to="/form-director" onClick={() => setIsNavOpen(false)}>
              {t('nav.submit')}
            </Link>
          </li>
          <li className="flex gap-6 items-center">
            {/* Icon du monde pour changer la langue!!!!!! */}
            <FaGlobe
              className="text-[#2b71b1] w-10 h-10 cursor-pointer"
              aria-label="Traduire le site"
              onClick={toggleLanguage}
            />
            <Link to="/auth" aria-label="Page de connexion">
              <CgProfile
                className="text-[#2b71b1] w-11 h-11"
                onClick={() => setIsNavOpen(false)}
              />
            </Link>
            <ButtonLogOut />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
