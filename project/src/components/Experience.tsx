import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack Sênior',
      company: 'TechCorp Solutions',
      location: 'São Paulo, SP',
      period: '2022 - Presente',
      description: 'Lidero o desenvolvimento de aplicações web escaláveis atendendo mais de 100k usuários. Arquitetei infraestrutura de microsserviços e mentorei desenvolvedores júnior.',
      achievements: [
        'Aumentei a performance das aplicações em 40%',
        'Liderei equipe de 5 desenvolvedores em grandes lançamentos',
        'Implementei pipelines CI/CD reduzindo tempo de deploy em 60%'
      ]
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'StartupXYZ',
      location: 'Rio de Janeiro, RJ',
      period: '2020 - 2022',
      description: 'Desenvolvi e mantive múltiplas aplicações cliente usando React, Node.js e tecnologias cloud. Colaborei com equipes de design e produto.',
      achievements: [
        'Construí 5+ aplicações de produção do zero',
        'Integrei APIs de terceiros e sistemas de pagamento',
        'Reduzi relatórios de bugs em 50% através de implementação de testes'
      ]
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Digital Agency Pro',
      location: 'Remoto',
      period: '2019 - 2020',
      description: 'Criei aplicações web responsivas e landing pages para vários clientes. Foquei na experiência do usuário e tecnologias web modernas.',
      achievements: [
        'Entreguei 20+ projetos de clientes no prazo',
        'Melhorei velocidade de carregamento dos sites em 35%',
        'Colaborei com designers em implementações pixel-perfect'
      ]
    },
    {
      title: 'Desenvolvedor Júnior',
      company: 'Code Bootcamp',
      location: 'Belo Horizonte, MG',
      period: '2018 - 2019',
      description: 'Iniciei carreira como desenvolvedor júnior, aprendendo fundamentos e contribuindo para projetos em equipe enquanto construía habilidades de programação.',
      achievements: [
        'Completei programa intensivo de bootcamp de 12 semanas',
        'Construí primeira aplicação full-stack',
        'Recebi prêmio de excelência por conclusão de projeto'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-teal-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Experiência Profissional
          </h2>
          
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-600 to-purple-600 animate-gradient-y"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="ml-16 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-medium group-hover:text-teal-600 transition-colors duration-300">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                        <div className="flex items-center group-hover:text-blue-500 transition-colors duration-300">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mt-1 group-hover:text-teal-500 transition-colors duration-300">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Principais Conquistas:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="hover:text-gray-800 transition-colors duration-300 transform hover:translate-x-1">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;