import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';

i18n
  .use(LanguageDetector) // c ca qui détecte automatiquement la langue du navigateur
  .use(initReactI18next) //  ca va passer le i18n à Reactpour qu'il soit fonctionnel
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      
    },
    fallbackLng: 'fr', // langue par défaut si non détectée
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
