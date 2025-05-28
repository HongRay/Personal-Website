
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_PATH, GITHUB_LINK, LINKEDIN_LINK, EMAIL_LINK} from "@/lib/links";

const ContactSection = () => {
  return (
    <section id = "contact" className="py-8 bg-[#254194] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-gray-200">
            Lets collaborate and explore new opportunities together!
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href= {EMAIL_LINK}
            className="flex items-center space-x-2 border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#254194] transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href= {LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#254194] transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href= {GITHUB_LINK}
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
