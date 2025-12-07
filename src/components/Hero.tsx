import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-gray-light to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-dark leading-tight mb-6 font-poppins">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-roboto">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#services" 
                className="gradient-hover text-white px-8 py-3 rounded-lg flex items-center shadow-lg"
              >
                {t.hero.explore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                {t.hero.contact}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-turquoise rounded-full opacity-10 animate-pulse"></div>
              <Brain className="h-64 w-64 text-primary-turquoise" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
