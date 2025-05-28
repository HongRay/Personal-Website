
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-8 bg-[#254194] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-gray-200">
            Ready to discuss opportunities or collaborate on projects?
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:john.doe@email.com"
            className="flex items-center space-x-2 bg-white text-[#254194] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#254194] transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#254194] transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
