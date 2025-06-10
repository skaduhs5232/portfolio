import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-fade-in-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-400">Dev</span>Portfolio
            </div>
            <p className="text-gray-400">
              Construindo o futuro, uma linha de código por vez.
            </p>
          </div>
          
          <div className="flex space-x-6 animate-fade-in-right">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center animate-fade-in-up">
          <p className="text-gray-400 flex items-center justify-center">
            Feito com <Heart size={16} className="text-red-500 mx-2 animate-pulse" /> por Thiago Sampaio
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;