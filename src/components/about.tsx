import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const socialLinks = {
    instagram: 'https://www.instagram.com/eiea_gct/',
    linkedin: 'https://www.linkedin.com/company/eiegct/about/',
    email: 'gct.blaze@gmail.com'
  };

  const teamMembers = [
    {
      name: 'Ragul E',
      phone: '+91 6383319340',
      role: 'General Secretary'
    },
    {
      name: 'Gayathri S',
      phone: '+91 8610115938',
      role: 'Joint Secretary'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-black-800 bg-opacity-50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Department of Electronics and Instrumentation Engineering
          </h1>
          
          <div className="mb-8 text-center">
            <p className="text-purple-300 mb-4">
              Government College of Technology, Coimbatore - 641013
            </p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-400 hover:text-pink-600 transition-colors"
              >
                <Instagram size={32} />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-black-700 pt-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Contact
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-purple-700 bg-opacity-50 p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <Phone size={20} className="mr-2 text-purple-300" />
                    <span className="text-purple-200">{member.phone}</span>
                  </div>
                  <p className="text-purple-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-purple-900 bg-opacity-60 px-6 py-4 text-center">
          <div className="flex items-center justify-center text-purple-400">
            <MapPin size={20} className="mr-2" />
            <span>Government College of Technology, Coimbatore - 641013</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;