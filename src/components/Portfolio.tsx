import { useState } from 'react';
import { X } from 'lucide-react';

const etudesDeCas = [
  {
    title: 'Plateforme d\'Analyse Financière',
    client: 'Global Banking Corp',
    description: 'Mise en place d\'un système d\'analyse prédictive améliorant la précision de l\'évaluation des risques de 40 %.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    details: 'Nous avons développé une plateforme complète d\'analyse financière intégrant des modèles de machine learning avancés pour prédire les risques de crédit. Le système analyse en temps réel des milliers de variables pour fournir des recommandations précises et fiables.'
  },
  {
    title: 'Solution IA pour la Santé',
    client: 'MedTech Innovations',
    description: 'Développement d\'un outil de diagnostic basé sur l\'IA atteignant une précision de 95 % pour la détection précoce des maladies.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    details: 'Notre solution d\'intelligence artificielle analyse les images médicales et les données cliniques pour détecter précocement les pathologies. L\'outil a été validé cliniquement et est utilisé quotidiennement par des professionnels de santé.'
  },
  {
    title: 'Optimisation de la Chaîne d\'Approvisionnement',
    client: 'Global Logistics Co',
    description: 'Réduction des coûts opérationnels de 30 % grâce à l\'optimisation par apprentissage automatique.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    details: 'Mise en place d\'un système d\'optimisation logistique utilisant des algorithmes d\'apprentissage automatique pour prédire la demande, optimiser les stocks et réduire les délais de livraison. Les résultats ont dépassé les attentes avec une réduction significative des coûts.'
  }
];

const Portfolio = () => {

  return (
    <>
      <section id="portfolio" className="py-24 bg-[#F7F7F7] relative overflow-hidden">
        {/* Decorative backgrounds */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary-violet mb-6 font-poppins">
              Histoires de réussite
            </h2>
            <p className="text-xl text-gray-600 font-roboto max-w-2xl mx-auto">
              Des résultats concrets pour des entreprises réelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {etudesDeCas.map((study, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full overflow-hidden hover:-translate-y-2"
              >
                <div className="h-1 bg-gradient-to-r from-primary-violet to-primary-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2 font-poppins group-hover:text-primary-violet transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-primary-turquoise font-semibold mb-3">
                    {study.client}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>
                
                <div className="p-8 pt-0">



                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Portfolio;