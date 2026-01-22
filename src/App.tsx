// import React from 'react'; // Not needed with modern JSX Transform
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Job from './components/Job';
import { SITE_CONFIG } from './config/constants';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-roboto">
        <Header />
        <main>
          <Hero />
          <Services />
          <Methodology />
          <Portfolio />
          <Job />
          <Team />
          <Contact />
        </main>
        <footer className="bg-primary-dark text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="font-roboto">{SITE_CONFIG.copyright}</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;