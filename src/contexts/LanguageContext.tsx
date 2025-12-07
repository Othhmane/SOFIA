import React, { createContext, useContext } from 'react';
import { translations } from '../i18n/translations';

type Language = 'fr';
type Translations = typeof translations.fr;

interface LanguageContextType {
  language: Language;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    language: 'fr' as const,
    t: translations.fr
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};