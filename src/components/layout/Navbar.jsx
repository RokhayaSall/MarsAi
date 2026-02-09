import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { FaGlobe } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
          className={`${isNavOpen ? 'flex' : 'hidden'} flex-col  md:flex md:flex-row  md:items-center gap-4 mt-6 md:mt-0`}
        >
          <li className="font-bold text-[#282828]">
            <Link to="/gallery" onClick={() => setIsNavOpen(false)}>
              GALERIE
            </Link>
          </li>
          <li className="font-bold text-[#282828]">
            <Link to="/" onClick={() => setIsNavOpen(false)}>
              PROGRAMME & INFOS
            </Link>
          </li>
          <li className="font-bold text-[#282828]">
            <Link to="/jury" onClick={() => setIsNavOpen(false)}>
              JURY
            </Link>
          </li>
          <li className="bg-[#2b71b1] text-white font-bold rounded py-2 px-6 text-center w-40 md:w-auto">
            <Link to="/form-director" onClick={() => setIsNavOpen(false)}>
              SOUMETTRE
            </Link>
          </li>
          <li className="flex gap-6 items-center">
            <FaGlobe
              className="text-[#2b71b1] w-10 h-10 cursor-pointer"
              aria-label="Traduire le site"
            />
            <Link to="/auth" aria-label="Page de connexion">
              <CgProfile
                className="text-[#2b71b1] w-11 h-11"
                onClick={() => setIsNavOpen(false)}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
