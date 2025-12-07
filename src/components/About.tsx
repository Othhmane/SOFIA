import React from 'react';
import { Target, Users, Zap, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const valeurs = [
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Innovation avant tout',
    description: 'Repousser les limites avec des solutions de pointe'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Succès client',
    description: 'Votre réussite est notre mission principale'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Excellence',
    description: 'Fournir des résultats exceptionnels, toujours'
  }
];

const teamMembers = [
  {
    name: 'Anis HADDOUCHE',
    role: 'Responsable Data',
    bio: "Docteur en Statistiques, Anis possède une expertise approfondie en science des données, modélisation prédictive et IA. Il aide les entreprises à exploiter leur potentiel de données pour stimuler l'innovation.",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQF1Sh1wMQchzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1615128698138?e=1743033600&v=beta&t=e2FeaC2Nc8P0ShLIxxz-LGFJ6aA_s8Zssy38kcvWxM0",
    linkedin: "https://www.linkedin.com/in/anis-m-haddouche-a8667175/"
  },
  {
    name: 'Khalil SAID GUERNI',
    role: 'Chef de Projet Senior',
    bio: 'Avec une solide expérience en gestion de projets complexes, Khalil est un expert en supervision de projets IA et BI, garantissant leur exécution fluide et la satisfaction des clients.',
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFZRWhJSypuJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1602965827138?e=1743033600&v=beta&t=DaQQUeFyeuRebZYRmdNmuaN6yp26A4XT18N4GGdJk34",
    linkedin: "https://www.linkedin.com/in/khalil-said-guerni/"
  },
  {
    name: 'Adel MOULOUA',
    role: 'Architecte Cloud Senior',
    bio: 'Spécialiste reconnu en architecture cloud, Adel conçoit des solutions scalables, sécurisées et adaptées aux infrastructures orientées IA et BI.',
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGzlX9mWw7qYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675610566778?e=1743033600&v=beta&t=06C6ShzQl97y6nGNiDv-SGmkHgJwcdSqeVQ0mvn8LPM",
    linkedin: "https://www.linkedin.com/in/adel-mouloua/"
  }
];

const APropos = () => {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      {/* About Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">{t.aPropos.titre}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.aPropos.description}</p>
          <p className="text-gray-600">{t.aPropos.mission}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valeurs.map((valeur, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-primary-blue mb-4">
                {valeur.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{valeur.title}</h3>
              <p className="text-gray-600">{valeur.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
            Notre équipe regroupe des experts de premier plan en science des données, gestion de projets 
            et architecture cloud, dédiés à la création de solutions innovantes pour vos besoins en IA et BI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={`Portrait de ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-1 font-poppins">
                  {member.name}
                </h3>
                <p className="text-primary-blue font-medium mb-3 font-poppins">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4 font-roboto">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-violet hover:text-primary-blue transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span className="font-medium">Connectez-vous sur LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APropos;