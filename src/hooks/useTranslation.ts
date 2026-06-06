import { useLanguage } from '../context/LanguageContext';
import { TranslationSchema } from '../data/locales';

/**
 * Custom hook to safely access internationalization translations.
 */
export function useTranslation() {
  const { t, language, setLanguage } = useLanguage();
  return { t, language, setLanguage };
}
