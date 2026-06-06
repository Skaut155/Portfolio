import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationSchema } from '../data/locales';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to read the preferred language from localStorage or fall back to 'es'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'es' || saved === 'ca' || saved === 'en' || saved === 'fr') {
      return saved as Language;
    }
    // Try to matches user browser language
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'ca') return 'ca';
    if (browserLang === 'fr') return 'fr';
    if (browserLang === 'en') return 'en';
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
