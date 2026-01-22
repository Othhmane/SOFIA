import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['home', 'services', 'methodologie', 'portfolio', 'job', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav.home, id: 'home' },
    { href: '#services', label: t.nav.services, id: 'services' },
    { href: '#methodologie', label: t.nav.methodology, id: 'methodologie' },
    { href: '#portfolio', label: t.nav.portfolio, id: 'portfolio' },
    { href: '#job', label: t.nav.job, id: 'job' },
    { href: '#team', label: t.nav.team, id: 'team' },
    { href: '#contact', label: t.nav.contact, id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-[9999] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm py-4'
      }`}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-violet via-primary-turquoise to-primary-violet"></div>
 
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative group px-4 py-2 font-medium font-poppins transition-all duration-300"
              >
                {/* Text */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-violet'
                    : 'text-primary-dark group-hover:text-primary-violet'
                }`}>
                  {item.label}
                </span>
                
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-violet/10 to-primary-turquoise/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary-violet to-primary-turquoise rounded-full animate-slide-in"></div>
                )}
                
                {/* Hover underline */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-violet to-primary-turquoise rounded-full group-hover:w-1/2 transition-all duration-300"></div>
              </a>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-2 text-primary-dark hover:text-primary-violet transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-violet/10 to-primary-turquoise/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg p-4">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative block px-4 py-3 rounded-xl font-medium font-poppins transition-all duration-300 transform hover:translate-x-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary-violet to-primary-turquoise text-white shadow-md'
                    : 'text-primary-dark hover:bg-gradient-to-r hover:from-primary-violet/10 hover:to-primary-turquoise/10'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="relative z-10 flex items-center justify-between">
                  {item.label}
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </span>
              </a>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block text-center bg-gradient-to-r from-primary-violet to-primary-turquoise text-white px-6 py-4 rounded-xl font-semibold font-poppins shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
        
      </nav>


      <style jsx>{`
        @keyframes slide-in {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 50%;
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;