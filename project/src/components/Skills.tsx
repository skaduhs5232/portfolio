import { useState } from 'react';
import { Database, Globe, Server, Smartphone } from 'lucide-react';

// Importar logos
import goLogo from '../assets/logos/golang.png';
import jsLogo from '../assets/logos/js.png';
import tsLogo from '../assets/logos/ts.png';
import angularLogo from '../assets/logos/angular.png';
import nextjsLogo from '../assets/logos/nextjs.png';
import reactLogo from '../assets/logos/react.png';
import javaLogo from '../assets/logos/java.png';
import pythonLogo from '../assets/logos/python.png';
import phpLogo from '../assets/logos/php.png';
import springLogo from '../assets/logos/spring.svg';
import postgresqlLogo from '../assets/logos/postgresql.png';
import mongodbLogo from '../assets/logos/mongodb.svg';
import redisLogo from '../assets/logos/redis.svg';
import neo4jLogo from '../assets/logos/neo4j.svg';
import prismaLogo from '../assets/logos/prisma.svg';
import flutterLogo from '../assets/logos/flutter.svg';
import pwaLogo from '../assets/logos/pwa.svg';
import responsiveLogo from '../assets/logos/responsive.svg';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Mapeamento de cores e logos para cada tecnologia
  const skillColors: { [key: string]: { bg: string; bar: string; logo?: string } } = {
    'TypeScript': { bg: 'bg-blue-500', bar: 'from-blue-500 to-blue-600', logo: tsLogo },
    'Angular': { bg: 'bg-red-500', bar: 'from-red-500 to-red-600', logo: angularLogo },
    'Next.js': { bg: 'bg-black', bar: 'from-gray-800 to-black', logo: nextjsLogo },
    'React': { bg: 'bg-cyan-400', bar: 'from-cyan-400 to-cyan-500', logo: reactLogo },
    'JS': { bg: 'bg-yellow-400', bar: 'from-yellow-400 to-yellow-500', logo: jsLogo },
    'Java': { bg: 'bg-orange-600', bar: 'from-orange-600 to-red-600', logo: javaLogo },
    'Python': { bg: 'bg-blue-500', bar: 'from-blue-500 to-yellow-400', logo: pythonLogo },
    'GO': { bg: 'bg-cyan-400', bar: 'from-cyan-400 to-blue-500', logo: goLogo },
    'PHP': { bg: 'bg-purple-600', bar: 'from-purple-600 to-indigo-600', logo: phpLogo },
    'Spring': { bg: 'bg-green-500', bar: 'from-green-500 to-green-600', logo: springLogo },
    'PostgreSQL': { bg: 'bg-blue-700', bar: 'from-blue-700 to-blue-800', logo: postgresqlLogo },
    'MongoDB': { bg: 'bg-green-600', bar: 'from-green-600 to-green-700', logo: mongodbLogo },
    'Redis': { bg: 'bg-red-600', bar: 'from-red-600 to-red-700', logo: redisLogo },
    'Neo4J': { bg: 'bg-blue-400', bar: 'from-blue-400 to-cyan-400', logo: neo4jLogo },
    'Prisma': { bg: 'bg-indigo-600', bar: 'from-indigo-600 to-purple-600', logo: prismaLogo },
    'React Native': { bg: 'bg-cyan-400', bar: 'from-cyan-400 to-blue-500', logo: reactLogo },
    'Flutter': { bg: 'bg-blue-400', bar: 'from-blue-400 to-cyan-300', logo: flutterLogo },
    'Expo': { bg: 'bg-black', bar: 'from-gray-800 to-black', logo: reactLogo },
    'PWA': { bg: 'bg-purple-600', bar: 'from-purple-600 to-pink-600', logo: pwaLogo },
    'Design Responsivo': { bg: 'bg-pink-500', bar: 'from-pink-500 to-rose-500', logo: responsiveLogo }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-blue-600" size={24} />,
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'Next.js', level: 65 },
        { name: 'React', level: 62 },
        { name: 'JS', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="text-teal-600" size={24} />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GO', level: 88 },
        { name: 'PHP', level: 82 },
        { name: 'Spring', level: 55 },
      ]
    },
    {
      title: 'Database',
      icon: <Database className="text-orange-600" size={24} />,
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Neo4J', level: 90 },
        { name: 'Prisma', level: 85 },
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="text-purple-600" size={24} />,
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Flutter', level: 75 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 88 },
        { name: 'Design Responsivo', level: 95 },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Habilidades & Tecnologias
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const hasHoveredSkill = category.skills.some(skill => hoveredSkill === skill.name);
              const hoveredSkillData = category.skills.find(skill => skill.name === hoveredSkill);
              const hoveredSkillColor = hoveredSkillData ? skillColors[hoveredSkillData.name] : null;
              
              return (
                <div 
                  key={categoryIndex} 
                  className={`rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden ${
                    hasHoveredSkill && hoveredSkillColor 
                      ? `${hoveredSkillColor.bg} text-white shadow-2xl scale-105 -translate-y-2` 
                      : 'bg-gray-50'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Background logo quando hover */}
                  {hasHoveredSkill && hoveredSkillData && skillColors[hoveredSkillData.name]?.logo && (
                    <div 
                      className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain pointer-events-none transition-opacity duration-500"
                      style={{ 
                        backgroundImage: `url(${skillColors[hoveredSkillData.name].logo})`,
                        backgroundSize: '80%'
                      }}
                    ></div>
                  )}
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:rotate-12 ${
                      hasHoveredSkill ? 'bg-white/20' : 'bg-white'
                    }`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-xl font-semibold ${hasHoveredSkill ? 'text-white' : 'text-gray-800'}`}>
                      {category.title}
                    </h3>
                  </div>
                
                  <div className="space-y-4 relative z-10">
                    {category.skills.map((skill, skillIndex) => {
                      const skillColor = skillColors[skill.name] || { bg: 'bg-gray-500', bar: 'from-gray-500 to-gray-600' };
                      const isHovered = hoveredSkill === skill.name;
                      
                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <span 
                              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                                hasHoveredSkill 
                                  ? (isHovered ? 'text-white font-bold' : 'text-white/70') 
                                  : 'text-gray-700 group-hover/skill:text-blue-600'
                              }`}
                              onMouseEnter={() => setHoveredSkill(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              {skill.name}
                            </span>
                            <span className={`text-sm transition-colors duration-300 ${
                              hasHoveredSkill ? 'text-white/80' : 'text-gray-500 group-hover/skill:text-blue-500'
                            }`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`bg-gradient-to-r ${skillColor.bar} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;