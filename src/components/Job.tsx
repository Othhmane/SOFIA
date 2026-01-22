import { useState } from 'react';

const offresEmploi = [
  {
    title: 'Développeur Mobile',
    type: 'Stage',
    location: 'Alger, Algérie',
    description: "Nous lançons une application mobile iOS & Android dédiée à la réservation d'Omra. L'objectif de cette application est de proposer une expérience simple, rapide et fiable pour réserver un package, suivre son dossier, et être accompagné avant et pendant le voyage.",
    pdfUrl: '/job/OffreDev.pdf'
  },
];

const Job = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleViewPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  const closePdfViewer = () => {
    setSelectedPdf(null);
  };

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const isDescriptionLong = (description) => {
    return description.length > 150;
  };

  const getTruncatedDescription = (description) => {
    return description.substring(0, 150) + '...';
  };

  return (
    <section id="job" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">Nos offres d'emploi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rejoignez notre équipe et participez à des projets innovants
          </p>
        </div>

        {/* Grille responsive avec espacement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offresEmploi.map((offre, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full"
            >
              <div className="bg-gradient-to-r from-primary-violet to-blue-600 h-48 flex items-center justify-center flex-shrink-0">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold">{offre.type}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 break-words">{offre.title}</h3>
                <p className="text-blue-600 mb-3 flex items-center flex-wrap">
                  <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="break-words">{offre.location}</span>
                </p>
                
                {/* Description avec bouton "Afficher la suite" */}
                <div className="text-gray-600 mb-4 flex-grow">
                  <p className="break-words">
                    {expandedDescriptions[index] || !isDescriptionLong(offre.description)
                      ? offre.description
                      : getTruncatedDescription(offre.description)
                    }
                  </p>
                  {isDescriptionLong(offre.description) && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-primary-violet hover:text-blue-700 font-medium text-sm mt-2 transition-colors duration-200"
                    >
                      {expandedDescriptions[index] ? 'Afficher moins' : 'Afficher la suite'}
                    </button>
                  )}
                </div>

                <button
                  onClick={() => handleViewPdf(offre.pdfUrl)}
                  className="w-full bg-primary-violet hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-auto"
                >
                  Voir l'offre complète
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Détails de l'offre</h3>
              <button
                onClick={closePdfViewer}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedPdf}
                className="w-full h-full"
                title="Offre d'emploi PDF"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Job;