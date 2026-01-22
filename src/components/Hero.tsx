import { ArrowRight, Sparkles, TrendingUp, Users, Award, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: '85%', label: 'Précision IA' },
    { icon: <Users className="h-5 w-5" />, value: '50+', label: 'Clients satisfaits' },
    { icon: <Award className="h-5 w-5" />, value: '100+', label: 'Projets réalisés' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs with parallax */}
        <div 
          className="absolute top-0 -left-20 w-96 h-96 bg-primary-violet/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 -right-20 w-96 h-96 bg-primary-turquoise/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-violet/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        ></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary-violet/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 border-2 border-primary-turquoise/30 rounded-full animate-bounce-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-violet/10 to-primary-turquoise/10 border border-primary-violet/20 text-primary-violet px-4 py-2 rounded-full mb-6 animate-fade-in backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-semibold font-poppins">Intelligence Artificielle & Data Science</span>
            </div>

            {/* Main title with gradient */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-poppins">
              <span className="bg-gradient-to-r from-primary-violet via-primary-turquoise to-primary-violet bg-clip-text text-transparent animate-gradient bg-300%">
                {t.hero.title.split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="text-primary-dark">
                {t.hero.title.split(' ').slice(2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 font-roboto leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#services" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary-violet to-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold font-poppins shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.explore}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-turquoise to-primary-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#contact" 
                className="group relative border-2 border-primary-violet text-primary-violet px-8 py-4 rounded-xl font-semibold font-poppins hover:bg-primary-violet hover:text-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                {t.hero.contact}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-primary-violet/50 transition-all duration-300 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-primary-turquoise group-hover:text-primary-violet transition-colors duration-300 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary-dark font-poppins mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 font-roboto">
                    {stat.label}
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/5 to-primary-turquoise/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - 3D Visual */}
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-lg">
              {/* Main card with 3D effect */}
              <div 
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-500"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                }}
              >
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-violet to-primary-turquoise text-white p-4 rounded-2xl shadow-xl animate-float">
                  <TrendingUp className="h-8 w-8" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-turquoise to-primary-violet text-white p-4 rounded-2xl shadow-xl animate-float-delayed">
                  <Sparkles className="h-8 w-8" />
                </div>

                {/* Content inside card */}
                <div className="space-y-6">
                  {/* Animated bars */}
                  <div className="space-y-4">
                    {[70, 85, 95, 60].map((width, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm font-roboto text-gray-600">
                          <span>Métrique {index + 1}</span>
                          <span className="font-semibold text-primary-violet">{width}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary-violet to-primary-turquoise rounded-full animate-progress"
                            style={{
                              width: `${width}%`,
                              animationDelay: `${index * 200}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart visualization */}
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[40, 70, 55, 85, 65, 90, 75].map((height, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-gradient-to-t from-primary-violet to-primary-turquoise rounded-t-lg animate-grow"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/20 to-primary-turquoise/20 rounded-3xl blur-2xl -z-10 opacity-50"></div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 left-0 w-32 h-32 border-4 border-primary-violet/20 rounded-full animate-ping-slow"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-primary-turquoise/20 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes progress {
          from { width: 0; }
        }

        @keyframes grow {
          from { height: 0; }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-progress {
          animation: progress 1.5s ease-out forwards;
        }

        .animate-grow {
          animation: grow 1s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .bg-300% {
          background-size: 300%;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Hero;