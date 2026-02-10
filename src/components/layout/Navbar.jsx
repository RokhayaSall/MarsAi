import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

function Header() {
  return (
    <header className="px-8 py-6 ">
      <nav aria-label="Barre de navigation">
        <ul className="flex gap-7 items-center ">
          <li className="bg-[#2b71b1] text-white font-bold white rounded py-2 px-5 ">
            <Link to="/home">MARS.AI</Link>
          </li>
          <li className="ml-auto font-bold text-[#282828]">
            <Link to="/gallery">Galerie</Link>
          </li>
          <li className="font-bold text-[#282828]">
            <Link to="/home">Programme & infos</Link>
          </li>
          <li className="font-bold text-[#282828]">
            <Link to="/jury">Jury</Link>
          </li>
          <li className="bg-[#2b71b1] text-white font-bold white rounded py-2 px-4 ml-auto">
            <Link to="/form-director">Soumettre</Link>
          </li>
          <li className="">
            <FaGlobe className="text-[#2b71b1]  w-10 h-10" />
          </li>
          <li className="">
            <Link to="/auth">
              {' '}
              <CgProfile className="text-[#2b71b1] w-10 h-10" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
