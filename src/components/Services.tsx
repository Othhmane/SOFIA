import { useState } from 'react';
import { Brain, X, BarChart3, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Centralisation & valorisation des données',
    description: 'Vos données sont partout, mais elles ne sont pas encore utilisées comme un véritable outil de décision. Nous vous aidons à transformer vos données existantes en un outil de pilotage simple, fiable et orienté résultats.',
    highlight: 'Devenez une entreprise Data-Driven',
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
    description: 'De l\'analyse de données à l\'automatisation complète : exploitez la puissance des données et optimisez le cycle de vie des modèles IA.',
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
    description: 'Accompagnez vos équipes dans leur transformation digitale avec des formations sur mesure et un conseil stratégique expert.',
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
    <>
      <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary-violet mb-6 font-poppins">
              Nos services
            </h2>
            <p className="text-xl text-gray-600 font-roboto max-w-2xl mx-auto">
              Des solutions complètes en BI, IA et formation pour transformer votre entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full overflow-hidden hover:-translate-y-2"
              >
                <div className="h-1 bg-gradient-to-r from-primary-violet to-primary-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="p-8 flex-grow">
                  <div className="bg-gradient-to-br from-primary-turquoise/10 to-primary-violet/10 group-hover:from-primary-violet group-hover:to-primary-turquoise p-4 rounded-xl inline-flex mb-6 transition-all duration-500 group-hover:scale-110">
                    <div className="text-primary-turquoise group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 font-poppins group-hover:text-primary-violet transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  
                  {service.highlight && (
                    <p className="text-primary-violet font-semibold">
                      {service.highlight}
                    </p>
                  )}
                </div>
                
                <div className="p-8 pt-0">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full gradient-hover text-white px-6 py-3 rounded-lg transition-all duration-300 font-poppins"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - RENDU EN DEHORS DE LA SECTION */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          style={{ zIndex: 999999, position: 'fixed' }}
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="bg-gradient-to-br from-primary-violet to-primary-turquoise p-4 rounded-xl text-white inline-flex mb-6">
              {selectedService.icon}
            </div>
            
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-violet to-primary-turquoise bg-clip-text text-transparent mb-8 font-poppins pr-12">
              {selectedService.title}
            </h3>
            
            <div className="space-y-6">
              {selectedService.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-turquoise/50 transition-all duration-300 hover:shadow-md"
                >
                  <h4 className="text-xl font-bold text-primary-dark mb-3 font-poppins">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600 font-roboto whitespace-pre-line leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full bg-gradient-to-r from-primary-violet to-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;