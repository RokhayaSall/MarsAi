import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className=" bg-[#282828] p-15 text-white">
      <div
        aria-label="Bas de page"
        className="flex flex-col md:flex-row justify-between gap-10 items-center"
      >
        <div aria-label="Information et réseaux sociaux">
          <Link
            to="/"
            className="bg-[#2b71b1] font-bold rounded py-2 px-4 w-25"
          >
            MARS.AI
          </Link>
          <p className="py-6 w-70 pt-8 md:w-90 ">
            Une co-création de l’école du numérique La Plateforme et le Mobile
            Film Festival. Ensemble pour dessiner les nouveaux horizons du
            cinéma.
          </p>
          <ul className="flex gap-6 pt-5 ">
            <li>
              <a
                href="https://www.facebook.com/?locale=fr_FR"
                target="blank"
                aria-label="Lien Facbook"
              >
                <FaFacebookSquare className="w-13 h-13 md:w-10 md:h-10 " />
              </a>
            </li>

            <li>
              <a
                href="http://instagram.com/"
                target="blank"
                aria-label="Lien Instagram"
              >
                <FaInstagramSquare className="w-13 h-13 md:w-10 md:h-10" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/"
                target="blank"
                aria-label="Lien Youtube"
              >
                <FaYoutubeSquare className="w-13 h-13 md:w-10 md:h-10" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/?lang=fr"
                target="blank"
                aria-label="Lien X"
              >
                <FaSquareXTwitter className="w-13 h-13 md:w-10 md:h-10" />
              </a>
            </li>
          </ul>
        </div>

        <form className="text-center bg-[#333333] borderd-[#243c5a] rounded-2xl borderd-1 border-[#484848] p-10 mt-5 md:w-120 ">
          <h2 className="font-bold text-3xl">Restez connectés</h2>
          <label htmlFor="email" className="invisible">
            Inscription newsletter
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre@email.com"
            className="bg-[#3D3D3D] borderd-1 border-[#484848] rounded-3xl p-3 m-6 "
          ></input>
          <button
            className="bg-[#2b71b1] rounded-3xl p-3 px-17 font-bold cursor-pointer md:px-8"
            aria-label="Sinscrire"
          >
            S&apos;inscrire
          </button>
        </form>
      </div>

      <ul className="flex flex-col gap-10 mt-15 md:flex-row justify-center md:mt-20 ">
        <li>
          <Link to="/legal-notice">Mentions légales</Link>
        </li>
        <li>
          <Link to="/private-policy">Politique de confidentialité</Link>
        </li>
        <li>
          <p>@2025 MARS.A.I</p>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
