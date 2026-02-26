import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonLogOut from '../ui/Buttons';
import ProfileConnect from '../ui/ProfileConnect';
import LanguageSwitcher from '../ui/LanguageSwitcher';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[#0f172a] hover:text-[#1e293b] transition-colors"
        >
          MARS<span className="text-slate-400">.</span>AI
        </Link>

        {/* Navigation Desktop (centrée) */}
        <ul className="hidden md:flex items-center gap-10 font-semibold text-slate-700">
          <li className="hover:text-[#0f172a] transition-colors">
            <Link to="/gallery">{t('nav.gallery')}</Link>
          </li>
          <li className="hover:text-[#0f172a] transition-colors">
            <Link to="/">{t('nav.program')}</Link>
          </li>
          {/* <li className="hover:text-[#0f172a] transition-colors">
            <Link to="/jury">{t('nav.jury')}</Link>
          </li> */}
          <li>
            <Link
              to="/form-director"
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl py-2 px-6 transition-colors shadow-sm"
            >
              {t('nav.submit')}
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <ButtonLogOut />
          <ProfileConnect />
        </div>

        <button
          className="text-3xl md:hidden text-slate-700"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="md:hidden px-8 pb-6 flex flex-col gap-6 font-semibold text-slate-700">
          <Link to="/gallery" onClick={() => setIsNavOpen(false)}>
            {t('nav.gallery')}
          </Link>
          <Link to="/" onClick={() => setIsNavOpen(false)}>
            {t('nav.program')}
          </Link>
          {/* <Link to="/jury" onClick={() => setIsNavOpen(false)}>
            {t('nav.jury')}
          </Link> */}
          <Link
            to="/form-director"
            onClick={() => setIsNavOpen(false)}
            className="bg-[#0f172a] text-white rounded-xl py-2 px-6 text-center"
          >
            {t('nav.submit')}
          </Link>

          <div className="flex items-center gap-6 pt-4">
            <LanguageSwitcher />
            <ButtonLogOut />
            <ProfileConnect />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
