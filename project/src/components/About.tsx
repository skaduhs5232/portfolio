import { useState, useEffect } from 'react';
import { Code, Heart, Zap, Calendar, Sparkles } from 'lucide-react';

const About = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [displayedYears, setDisplayedYears] = useState(0);

  useEffect(() => {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;
    setYearsOfExperience(years);

    const duration = 2000; 
    const steps = 20;
    const increment = years / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayedYears(Math.min(increment * currentStep, years));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayedYears(years);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="about" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Sobre Mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-gray-600 mb-6">
                Sou um desenvolvedor full-stack apaixonado com mais de 5 anos de experiência 
                construindo aplicações web que fazem a diferença. Adoro transformar problemas 
                complexos em soluções simples e bonitas.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Quando não estou programando, você me encontrará explorando novas tecnologias, 
                contribuindo para projetos open-source, ou compartilhando conhecimento com a 
                comunidade de desenvolvedores.
              </p>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-blue-200 transition-colors duration-300 hover:rotate-12">
                    <Code className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Código Limpo</h3>
                  <p className="text-sm text-gray-600">Manutenível & escalável</p>
                </div>
                
                <div className="p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-teal-200 transition-colors duration-300 hover:rotate-12">
                    <Heart className="text-teal-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Foco no Usuário</h3>
                  <p className="text-sm text-gray-600">Experiências excepcionais</p>
                </div>
                
                <div className="p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-orange-200 transition-colors duration-300 hover:rotate-12">
                    <Zap className="text-orange-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Performance</h3>
                  <p className="text-sm text-gray-600">Rápido & otimizado</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              {/* Card principal com design aprimorado */}
              <div className="relative bg-white rounded-3xl p-8 mx-auto max-w-sm shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group border border-gray-100">
                {/* Background gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Ícone flutuante */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Calendar className="text-white" size={20} />
                  </div>
                </div>

                {/* Conteúdo principal */}
                <div className="relative z-10 text-center pt-8">
                  {/* Número animado */}
                  <div className="mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-teal-700 transition-all duration-300">
                      {Math.ceil(displayedYears)}+
                    </div>
                    <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      Anos de Experiência
                    </div>
                  </div>

                  {/* Informações adicionais */}
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-center justify-center space-x-2 group-hover:text-gray-600 transition-colors duration-300">
                      <Sparkles size={14} className="text-blue-500" />
                      <span>Desde 2022</span>
                    </div>
                    <div className="text-xs">
                      Desenvolvendo soluções inovadoras
                    </div>
                  </div>

                  {/* Barra de progresso decorativa */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        width: `${(displayedYears / Math.max(yearsOfExperience, 1)) * 100}%`,
                        maxWidth: '100%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-teal-400/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* Brilho no hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 via-white/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Cards estatísticas adicionais */}
              <div className="grid grid-cols-2 gap-4 mt-6 mx-auto max-w-sm">
                <div className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors duration-300 group/stat">
                  <div className="text-2xl font-bold text-blue-600 group-hover/stat:text-blue-700 transition-colors duration-300">10+</div>
                  <div className="text-xs text-blue-600/80 group-hover/stat:text-blue-700/80 transition-colors duration-300">Projetos</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 text-center hover:bg-teal-100 transition-colors duration-300 group/stat">
                  <div className="text-2xl font-bold text-teal-600 group-hover/stat:text-teal-700 transition-colors duration-300">5+</div>
                  <div className="text-xs text-teal-600/80 group-hover/stat:text-teal-700/80 transition-colors duration-300">Tecnologias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;