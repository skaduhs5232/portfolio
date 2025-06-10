import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plataforma E-Commerce',
      description: 'Solução completa de e-commerce com React, Node.js e PostgreSQL. Inclui autenticação de usuários, processamento de pagamentos e painel administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'App de Gerenciamento de Tarefas',
      description: 'Aplicação colaborativa de gerenciamento de tarefas com atualizações em tempo real, funcionalidade drag-and-drop e recursos de colaboração em equipe.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Dashboard do Clima',
      description: 'Aplicação de clima bonita com previsões baseadas em localização, gráficos interativos e design responsivo para todos os dispositivos.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Chart.js', 'Weather API', 'PWA'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Plataforma de Mídia Social',
      description: 'Plataforma completa de mídia social com perfis de usuário, posts, comentários, mensagens em tempo real e moderação de conteúdo.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'GraphQL', 'Node.js', 'Redis'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Sistema de Gestão de Aprendizagem',
      description: 'LMS abrangente com criação de cursos, streaming de vídeo, acompanhamento de progresso e quizzes interativos para educação online.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express', 'MySQL', 'AWS'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Rastreador de Finanças',
      description: 'App de gestão financeira pessoal com rastreamento de orçamento, categorização de despesas e insights financeiros com gráficos interativos.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Projetos em Destaque
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 hover:rotate-12"
                    >
                      <Github size={16} className="text-gray-800" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 hover:rotate-12"
                    >
                      <ExternalLink size={16} className="text-gray-800" />
                    </a>
                  </div>
                  
                  {/* Animated overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium hover:bg-blue-200 transition-colors duration-300 transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;