// import React from 'react'; // Not needed with modern JSX Transform
import { Search, Lightbulb, Code, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Audit Initial',
    description: "Nous analysons votre infrastructure de données actuelle et identifions les opportunités d'amélioration."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Élaboration de la Stratégie',
    description: 'Nous développons un plan détaillé, aligné sur vos objectifs commerciaux et vos besoins spécifiques.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Développement',
    description: "Implémentation de solutions innovantes à l'aide des dernières technologies."
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: 'Support et Optimisation',
    description: 'Maintenance continue et amélioration des solutions pour garantir des performances optimales.'
  }
];

const Methodologie = () => {
  return (
    <section id="methodologie" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">Notre méthodologie</h2>
          <p className="text-xl text-gray-600">
            Une approche éprouvée pour garantir des résultats durables et performants
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center px-4">
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-200"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodologie;