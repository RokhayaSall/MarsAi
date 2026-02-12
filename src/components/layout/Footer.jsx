import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#282828] p-15 md:p-25 text-white">
      <div
        aria-label={t('footer.ariaLabel')}
        className="flex flex-col md:flex-row justify-between gap-10 items-center"
      >
        <div aria-label={t('footer.infoAriaLabel')}>
          <Link
            to="/"
            className="bg-[#2b71b1] font-bold rounded py-2 px-4 w-25"
          >
            MARS.A.I
          </Link>
          <p className="py-6 w-70 pt-8 md:w-90 ">
            {t('footer.description')}
          </p>
          <ul className="flex gap-6 pt-5 ">
            <li>
              <a
                href="https://www.facebook.com/?locale=fr_FR"
                target="_blank"
                aria-label={t('footer.facebook')}
              >
                <FaFacebookSquare className="w-13 h-13 md:w-10 md:h-10 " />
              </a>
            </li>

            <li>
              <a
                href="http://instagram.com/"
                target="_blank"
                aria-label={t('footer.instagram')}
              >
                <FaInstagramSquare className="w-13 h-13 md:w-10 md:h-10" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                aria-label={t('footer.youtube')}
              >
                <FaYoutubeSquare className="w-13 h-13 md:w-10 md:h-10" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/?lang=fr"
                target="_blank"
                aria-label={t('footer.x')}
              >
                <FaSquareXTwitter className="w-13 h-13 md:w-10 md:h-10" />
              </a>
            </li>
          </ul>
        </div>

        <form className="text-center bg-[#333333] rounded-2xl border border-[#484848] p-10 mt-5 md:w-120 ">
          <h2 className="font-bold text-3xl">{t('footer.newsletterTitle')}</h2>
          <label htmlFor="email" className="invisible">
            {t('footer.newsletterLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('footer.newsletterPlaceholder')}
            className="bg-[#3D3D3D] border border-[#484848] rounded-3xl p-3 m-6"
          />
          <button
            className="bg-[#2b71b1] rounded-3xl p-3 px-17 font-bold cursor-pointer md:px-8"
            aria-label={t('footer.newsletterButton')}
          >
            {t('footer.newsletterButton')}
          </button>
        </form>
      </div>

      <ul className="flex flex-col gap-10 mt-15 md:flex-row justify-center md:mt-20 ">
        <li>
          <Link to="/legal-notice">{t('footer.legalNotice')}</Link>
        </li>
        <li>
          <Link to="/private-policy">{t('footer.privacyPolicy')}</Link>
        </li>
        <li>
          <p>@2025 MARS.A.I</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;