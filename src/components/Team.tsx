import { useState } from 'react';
import { Linkedin, X, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Anis Mohamed HADDOUCHE',
    role: 'Head of Data',
    bio: 'Docteur en Statistiques, Anis possède une expertise approfondie en science des données, modélisation prédictive et IA.',
    image: "/images/team/anis.jpeg",
    linkedin: "https://www.linkedin.com/in/anis-m-haddouche-a8667175/",
    expertise: ['Data Science', 'Machine Learning', 'Statistiques'],
    fullBio: 'Avec plus de 10 ans d\'expérience en science des données, Anis a dirigé des projets d\'IA transformationnels. Son approche combine rigueur scientifique et pragmatisme business.'
  },
  {
    name: 'Khalil SAID GUERNI',
    role: 'Chef de Projet Senior',
    bio: 'Expert en gestion de projets complexes, Khalil supervise les projets IA et BI avec excellence.',
    image: "/images/team/khalil.jpeg",
    linkedin: "https://www.linkedin.com/in/khalil-said-guerni/",
    expertise: ['Gestion de Projets', 'Agile', 'Leadership'],
    fullBio: 'Khalil a orchestré plus de 50 projets complexes. Sa capacité à fédérer les équipes et sa maîtrise des méthodologies agiles en font un leader incontournable.'
  },
  {
    name: 'Adel MOULOUA',
    role: 'Architecte Cloud Senior',
    bio: 'Spécialiste reconnu en architecture cloud, Adel conçoit des solutions scalables et sécurisées.',
    image: "/images/team/takaya.jpeg",
    linkedin: "https://www.linkedin.com/in/adel-mouloua/",
    expertise: ['Cloud Architecture', 'AWS/Azure', 'DevOps'],
    fullBio: 'Architecte certifié multi-cloud, Adel conçoit des infrastructures supportant des flux massifs. Il garantit scalabilité, sécurité et performance.'
  },
  {
    name: 'Abdelhak DIFFALLAH',
    role: 'BI Developer',
    bio: 'Consultant senior en analyse et pilotage de la performance, il cumule une solide expérience dans le numérique et le secteur pharmaceutique.',
    image: "/images/team/abdelahk2.png",
    linkedin: "https://www.linkedin.com/in/abdelhak-d-55707ba9/",
    expertise: ['Business Intelligence', 'Analytics', 'Reporting'],
    fullBio: 'Avec 15 ans d\'expérience en BI, Abdelhak transforme les données en insights stratégiques. Son approche orientée résultats crée de la valeur immédiate.'
  },
  {
    name: 'Chouaib BELDJOUDI',
    role: 'BI Developer',
    bio: 'Docteur en statistique et consultant en BI, il allie expertise scientifique et accompagnement stratégique des entreprises.',
    image: "/images/team/chouaib.jpeg",
    linkedin: "https://www.linkedin.com/in/chouaib-beldjoudi-64437a93/",
    expertise: ['Statistiques', 'Data Valorization', 'Enseignement'],
    fullBio: 'Docteur en statistique, Chouaib combine rigueur académique et pragmatisme business pour accompagner la transformation data des entreprises.'
  },
  {
    name: 'Balthazar Mehus',
    role: 'Data Engineer',
    bio: 'Spécialisé dans les environnements logistiques, il conçoit des pipelines de données robustes pour optimiser la performance opérationnelle.',
    image: "/images/team/baltazar.jpeg",
    linkedin: "https://www.linkedin.com/in/balth-mhs/",
    expertise: ['Data Engineering', 'Pipelines', 'Logistique'],
    fullBio: 'Spécialiste en data engineering, Balthazar construit des pipelines robustes. Son expertise en logistique permet d\'optimiser la prise de décision opérationnelle.'
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <>
      <section id="team" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative backgrounds */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary-violet mb-6 font-poppins">
              Notre équipe
            </h2>
            <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
              Des experts passionnés unis par une vision stratégique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* CARD RONDE (CERCLE) */}
                <div className="relative w-64 h-64 mb-8">
                  {/* Anneau de décoration animé */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-violet to-primary-turquoise transform scale-105 opacity-20 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700"></div>
                  
                  {/* Conteneur Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-primary-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* LinkedIn Badge */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 z-20 bg-white p-3 rounded-full shadow-lg text-primary-violet hover:bg-primary-violet hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>

                {/* Infos */}
                <div className="max-w-xs">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2 font-poppins group-hover:text-primary-violet transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-turquoise font-semibold mb-4 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <a
                    onClick={() => setSelectedMember(member)}
                      className="
                        gradient-hover
                        bg-clip-text text-transparent
                        font-semibold
                        relative
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0
                        after:bg-gradient-to-r after:from-primary-violet after:to-primary-turquoise
                        after:transition-all after:duration-300
                        hover:after:w-full
                      "                  >
                    En savoir plus 
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal (Identique aux autres pour la cohérence) */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          style={{ zIndex: 999999, position: 'fixed' }}
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 md:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedMember(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2">
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-turquoise/20 mb-4">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-violet to-primary-turquoise bg-clip-text text-transparent font-poppins">
                {selectedMember.name}
              </h3>
              <p className="text-xl text-primary-turquoise font-semibold">{selectedMember.role}</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-primary-dark mb-2">Parcours</h4>
                <p className="text-gray-600 leading-relaxed">{selectedMember.fullBio}</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-primary-dark mb-3">Expertises clés</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-primary-violet/20 text-primary-violet rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-primary-violet to-primary-turquoise text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <button onClick={() => setSelectedMember(null)} className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;