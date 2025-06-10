import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in-up">
            Entre em Contato
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Vamos Conversar</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Estou sempre interessado em ouvir sobre novas oportunidades, 
                  colaborações, ou apenas bater um papo sobre tecnologia. 
                  Não hesite em entrar em contato!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">thiago.sampaio@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Telefone</p>
                    <p className="text-white font-medium group-hover:text-teal-400 transition-colors duration-300">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Localização</p>
                    <p className="text-white font-medium group-hover:text-orange-400 transition-colors duration-300">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                      placeholder="Seu Nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                    placeholder="Sobre o que é?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all duration-300 hover:bg-gray-600"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-xl animate-glow"
                >
                  <Send size={20} className="mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;