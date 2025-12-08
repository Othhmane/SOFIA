import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const teamMembers = [
  {
    name: 'Anis Mohamed HADDOUCHE',
    role: 'Responsable Data',
    bio: 'Docteur en Statistiques, Anis possède une expertise approfondie en science des données, modélisation prédictive et IA.',
    image: "https://media.licdn.com/dms/image/v2/C4E03AQF1Sh1wMQchzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1615128698138?e=1743033600&v=beta&t=e2FeaC2Nc8P0ShLIxxz-LGFJ6aA_s8Zssy38kcvWxM0",
    linkedin: "https://www.linkedin.com/in/anis-m-haddouche-a8667175/"
  },
  {
    name: 'Khalil SAID GUERNI',
    role: 'Chef de Projet Senior',
    bio: 'Expert en gestion de projets complexes, Khalil supervise les projets IA et BI avec excellence.',
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFZRWhJSypuJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1602965827138?e=1743033600&v=beta&t=DaQQUeFyeuRebZYRmdNmuaN6yp26A4XT18N4GGdJk34",
    linkedin: "https://www.linkedin.com/in/khalil-said-guerni/"
  },
  {
    name: 'Adel MOULOUA',
    role: 'Architecte Cloud Senior',
    bio: 'Spécialiste reconnu en architecture cloud, Adel conçoit des solutions scalables et sécurisées.',
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGzlX9mWw7qYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675610566778?e=1743033600&v=beta&t=06C6ShzQl97y6nGNiDv-SGmkHgJwcdSqeVQ0mvn8LPM",
    linkedin: "https://www.linkedin.com/in/adel-mouloua/"
  },
  {
    name: 'Sophie LAURENT',
    role: 'Lead Data Scientist',
    bio: 'Experte en deep learning et NLP avec plus de 8 ans d\'expérience dans l\'IA appliquée.',
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    linkedin: "#"
  },
  {
    name: 'Thomas DUBOIS',
    role: 'Expert MLOps',
    bio: 'Spécialiste de l\'industrialisation des modèles ML et de l\'automatisation des pipelines IA.',
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    linkedin: "#"
  },
  {
    name: 'Marie CHEN',
    role: 'Responsable IA Éthique',
    bio: 'Docteure en éthique de l\'IA, Marie assure le développement responsable de nos solutions.',
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    linkedin: "#"
  }
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
            Une équipe d'experts passionnés qui combine expertise technique et vision stratégique 
            pour transformer vos défis en opportunités.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.image}
                    alt={`Portrait de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-primary-violet hover:text-primary-blue"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary-dark mb-1 font-poppins">
                  {member.name}
                </h3>
                <p className="text-primary-blue font-medium mb-3 font-poppins text-sm">
                  {member.role}
                </p>
                <p className="text-gray-600 font-roboto text-sm max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;