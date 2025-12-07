import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
    >
      <Globe className="h-5 w-5" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;