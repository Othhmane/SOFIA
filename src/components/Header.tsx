import React from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.home}
            </a>
            <a href="#services" className="text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.services}
            </a>
            <a href="#methodologie" className="text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.methodology}
            </a>
            <a href="#portfolio" className="text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.portfolio}
            </a>
            <a href="#a-propos" className="text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-dark hover:text-primary-blue transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.home}
            </a>
            <a href="#services" className="block text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.services}
            </a>
            <a href="#methodologie" className="block text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.methodology}
            </a>
            <a href="#portfolio" className="block text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.portfolio}
            </a>
            <a href="#a-propos" className="block text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.about}
            </a>
            <a href="#contact" className="block text-primary-dark hover:text-primary-blue transition-colors font-medium">
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;