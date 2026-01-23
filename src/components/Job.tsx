import { useState } from 'react';
import { X, MapPin, Briefcase } from 'lucide-react';

const offresEmploi = [
  {
    title: "Développeur Mobile",
    type: "Stage",
    location: "Alger, Algérie",
    description:
      "Nous lançons une application mobile iOS & Android dédiée à la réservation d'Omra. L'objectif est de proposer une expérience simple, rapide et fiable pour réserver un package, suivre son dossier, et être accompagné durant le voyage.",
    pdfUrl: "/job/OffreDev.pdf",
  },
];

const Job = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      <section id="job" className="py-24 bg-[#F7F7F7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary-violet mb-6 font-poppins">
              Nos offres d'emploi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
              Nous recherchons des talents passionnés pour repousser les limites de la technologie.
            </p>
          </div>

          {/* CONTENEUR MODIFIÉ POUR CENTRER */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-7xl mx-auto">
            
            {offresEmploi.map((offre, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                           border border-gray-100 flex flex-col h-full overflow-hidden hover:-translate-y-2
                           w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.7rem)] max-w-md"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary-violet to-primary-turquoise 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                </div>

                {/* Header Image/Icon Area */}
                <div className="bg-gradient-to-r from-primary-violet to-primary-turquoise h-48 
                                flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-white relative z-10">
                    <Briefcase className="w-16 h-16 mx-auto mb-3" />
                    <span className="text-lg font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      {offre.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-primary-dark mb-3 font-poppins group-hover:text-primary-violet transition-colors duration-300">
                    {offre.title}
                  </h3>
                  <div className="flex items-center text-primary-turquoise font-semibold mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{offre.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {offre.description}
                  </p>
                </div>

                {/* Button */}
                <div className="p-8 pt-0">
<button
  onClick={() => setSelectedPdf(offre.pdfUrl)}
  className="
    w-full
    gradient-hover
    text-white
    px-8 py-4
    rounded-xl
    font-semibold font-poppins
    shadow-lg
    hover:shadow-2xl
    transition-all duration-300
    flex items-center justify-center
  "
>
  Voir l'offre complète
</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal PDF - Rendu au-dessus de tout */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          style={{ zIndex: 999999, position: 'fixed' }}
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b bg-white rounded-t-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-violet to-primary-turquoise bg-clip-text text-transparent font-poppins">
                Détails de l'offre
              </h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100">
              <iframe src={selectedPdf} className="w-full h-full border-none" title="PDF Viewer" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;