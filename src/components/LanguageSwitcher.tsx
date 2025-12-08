// import React from 'react'; // Not needed with modern JSX Transform
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  // const { language, setLanguage } = useLanguage(); // TODO: setLanguage not implemented in context
  const { language } = useLanguage();

  return (
    <button
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
      // onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} // TODO: setLanguage not implemented
      disabled
    >
      <Globe className="h-5 w-5" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;