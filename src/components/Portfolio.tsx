// import React from 'react'; // Not needed with modern JSX Transform

const etudesDeCas = [
  {
    title: 'Plateforme d\'Analyse Financière',
    client: 'Global Banking Corp',
    description: 'Mise en place d\'un système d\'analyse prédictive améliorant la précision de l\'évaluation des risques de 40 %.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Solution IA pour la Santé',
    client: 'MedTech Innovations',
    description: 'Développement d\'un outil de diagnostic basé sur l\'IA atteignant une précision de 95 % pour la détection précoce des maladies.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Optimisation de la Chaîne d’Approvisionnement',
    client: 'Global Logistics Co',
    description: 'Réduction des coûts opérationnels de 30 % grâce à l’optimisation par apprentissage automatique.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">Histoires de réussite</h2>
          <p className="text-xl text-gray-600">Des résultats concrets pour des entreprises réelles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {etudesDeCas.map((study, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-blue-600 mb-2">{study.client}</p>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
