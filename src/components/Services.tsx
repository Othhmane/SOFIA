// import React from 'react'; // React not directly used, only useState
import { useState } from 'react';
import {
  Brain,
  X,
  BarChart3,
  Users
} from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Centralisation & valorisation des données',
    descriptionParts: [
      { text: 'Vos données sont partout, mais elles ne sont pas encore utilisées comme un véritable outil de décision.', className: 'text-gray-600' },
      { text: 'Les décisions sont prises avec retard, les reportings prennent trop de temps et les équipes ne parlent pas le même langage', className: 'text-gray-600' },
      { text: 'Nous vous aidons à transformer vos données existantes en un outil de pilotage simple, fiable et orienté résultats.', className: 'text-gray-600' },
      { text: 'Devenez une entreprise Data-Driven', className: 'text-primary-violet font-semibold' }
    ],

    useCases: [
      {
        title: 'Ce que ce service vous apporte',
        description: '• Une vision claire de votre activité en temps réel\n• Des décisions plus rapides et plus fiables\n• Un gain de temps immédiat sur le reporting et l\'analyse'
      },
      {
        title: 'Ce que nous mettons en place',
        description: '• Centralisation de vos données (ERP, CRM, Excel, bases métiers)\n• Structuration et fiabilisation des données clés\n• Tableaux de bord BI orientés pilotage et performance'
      },
      {
        title: 'Les résultats concrets',
        description: '• Un chiffre unique et fiable, partagé par tous\n• Moins d\'intuition, plus de pilotage\n• Une entreprise réellement data-driven'
      },
      {
        title: 'Pour qui ?',
        description: 'Ce service est conçu pour les PME et ETI qui veulent :\n• Sortir des reportings manuels,\n• Structurer leur donnée,\n• Poser les bases d\'une transformation data durable.'
        
      }
    ]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Automatisation et Déploiement de modèles IA',
    descriptionParts: [
      { text: 'De l\'analyse de données à l\'automatisation complète : exploitez la puissance des données et optimisez le cycle de vie des modèles IA.', className: 'text-gray-600' }
    ],
    useCases: [
      {
        title: 'Analyse Prédictive Avancée',
        description: 'Modèles IA performants pour l\'optimisation industrielle et l\'analyse prédictive avec 85% de précision.'
      },
      {
        title: 'Automatisation MLOps',
        description: 'Réduction de 70% du temps de déploiement avec pipelines d\'entraînement et monitoring continu.'
      },
      {
        title: 'Segmentation et Insights',
        description: 'Augmentation de 40% du taux de conversion grâce à la segmentation client avancée et aux insights stratégiques.'
      }
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Formation et Conseil',
    descriptionParts: [
      { text: 'Accompagnez vos équipes dans leur transformation digitale avec des formations sur mesure et un conseil stratégique expert.', className: 'text-gray-600' }
    ],
    useCases: [
      {
        title: 'Formations Data & IA',
        description: 'Programmes de formation personnalisés pour maîtriser les outils data et l\'intelligence artificielle.'
      },
      {
        title: 'Conseil Stratégique',
        description: 'Accompagnement dans la définition et la mise en œuvre de votre stratégie data.'
      },
      {
        title: 'Support et Mentoring',
        description: 'Suivi personnalisé et accompagnement continu pour assurer l\'adoption durable des solutions.'
      }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">Nos services</h2>
          <p className="text-xl text-gray-600 font-roboto">Des solutions complètes en BI, IA et formation</p>
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
              <div className="font-roboto space-y-3">
                {service.descriptionParts.map((part, index) => (
                  <p key={index} className={`${part.className} leading-relaxed`}>
                    {part.text}
                  </p>
                ))}
              </div>
              <p className="text-sm text-primary-blue mt-4 font-roboto">
                En savoir plus
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
                    <p className="text-gray-600 font-roboto whitespace-pre-line">
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