import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center bg-slate-100 rounded-full p-1 shadow-sm">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
          i18n.language === 'en'
            ? 'bg-[#2b71b1] text-white shadow'
            : 'text-gray-600 hover:text-[#2b71b1]'
        }`}
      >
        ENG
      </button>

      <button
        onClick={() => changeLanguage('fr')}
        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
          i18n.language === 'fr'
            ? 'bg-[#2b71b1] text-white shadow'
            : 'text-gray-600 hover:text-[#2b71b1]'
        }`}
      >
        FR
      </button>
    </div>
  );
}