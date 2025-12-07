import React, { useState } from 'react';
import { 
  BarChart2, 
  Brain, 
  Cloud,
  X
} from 'lucide-react';

const services = [
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: 'Data Science et Analyse de Données',
    description: 'Exploitez la puissance des données pour générer des insights pertinents et améliorer la prise de décision.',
    useCases: [
      {
        title: 'Optimisation Industrielle',
        description: 'Réduction de 30% des coûts de maintenance grâce à la maintenance prédictive.'
      },
      {
        title: 'Analyse Prédictive',
        description: 'Anticipation des tendances du marché avec une précision de 85%.'
      },
      {
        title: 'Segmentation Client',
        description: 'Augmentation de 40% du taux de conversion grâce à une segmentation avancée.'
      }
    ]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'MLOps et Déploiement de Modèles IA',
    description: "Automatisez et optimisez le cycle de vie des modèles IA, de l'entraînement au déploiement.",
    useCases: [
      {
        title: 'Automatisation MLOps',
        description: 'Réduction de 70% du temps de déploiement des modèles.'
      },
      {
        title: 'Monitoring Continu',
        description: 'Détection en temps réel des dérives de modèles.'
      },
      {
        title: 'Pipeline d\'Entraînement',
        description: 'Infrastructure scalable supportant l\'entraînement de 100+ modèles.'
      }
    ]
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Architecture Cloud et Cybersécurité',
    description: 'Concevez des infrastructures cloud sécurisées et performantes pour vos données et applications.',
    useCases: [
      {
        title: 'Sécurité Multi-Cloud',
        description: 'Protection des données sensibles avec encryption de bout en bout.'
      },
      {
        title: 'Conformité RGPD',
        description: 'Mise en conformité complète des infrastructures data.'
      },
      {
        title: 'Performance Cloud',
        description: 'Optimisation des coûts cloud de 45% en moyenne.'
      }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">Nos Services</h2>
          <p className="text-xl text-gray-600 font-roboto">Des solutions avancées en Data Science, MLOps et Cloud</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(service)}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="text-primary-turquoise group-hover:text-primary-violet transition-colors duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2 font-poppins">
                {service.title}
              </h3>
              <p className="text-gray-600 font-roboto">{service.description}</p>
              <p className="text-sm text-primary-blue mt-4 font-roboto">
                Cliquez pour voir les cas d'usage →
              </p>
            </div>
          ))}
        </div>

        {/* Modal for Use Cases */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="text-primary-turquoise mb-4">
                {selectedService.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary-violet mb-6 font-poppins">
                {selectedService.title}
              </h3>
              
              <div className="space-y-6">
                {selectedService.useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <h4 className="text-lg font-semibold text-primary-dark mb-2 font-poppins">
                      {useCase.title}
                    </h4>
                    <p className="text-gray-600 font-roboto">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;