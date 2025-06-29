
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { RESUME_PATH, GITHUB_LINK, LINKEDIN_LINK, EMAIL_LINK} from "@/lib/configs";

const ContactSection = ({ isIndexPage = false }: { isIndexPage?: boolean }) => {
  return (
    <section
      id="contact"
      className={`py-8 ${isIndexPage ? 'bg-white text-[#254194] dark:bg-[#181616] dark:text-[#e2e2e2]' : 'bg-gradient-to-br from-[#1a2d6b] to-[#254194] text-white dark:from-[#0d1b53] dark:to-[#1a2d6b] dark:text-[#e2e2e2]'}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className={`${isIndexPage ? 'text-[#254194]/80 dark:text-[#e2e2e2]' : 'text-gray-200 dark:text-[#e2e2e2]'}`}>
            Let’s collaborate and explore new opportunities together!
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href={EMAIL_LINK}
            className={`flex items-center space-x-2 border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isIndexPage
                ? 'border-[#254194] text-[#254194] hover:bg-[#254194] hover:text-white dark:bg-[#181616] dark:text-[#e2e2e2] dark:border-[#e2e2e2]'
                : 'border-white text-white hover:bg-white hover:text-[#254194] dark:text-[#e2e2e2] dark:border-[#e2e2e2] dark:hover:bg-[#e2e2e2] dark:hover:text-[#254194]'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isIndexPage
                ? 'border-[#254194] text-[#254194] hover:bg-[#254194] hover:text-white dark:bg-[#181616] dark:text-[#e2e2e2] dark:border-[#e2e2e2]'
                : 'border-white text-white hover:bg-white hover:text-[#254194] dark:text-[#e2e2e2] dark:border-[#e2e2e2] dark:hover:bg-[#e2e2e2] dark:hover:text-[#254194]'
            }`}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center space-x-2 border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isIndexPage
                ? 'border-[#254194] text-[#254194] hover:bg-[#254194] hover:text-white dark:bg-[#181616] dark:text-[#e2e2e2] dark:border-[#e2e2e2]'
                : 'border-white text-white hover:bg-white hover:text-[#254194] dark:text-[#e2e2e2] dark:border-[#e2e2e2] dark:hover:bg-[#e2e2e2] dark:hover:text-[#254194]'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={RESUME_PATH}
            download
            className={`hidden sm:flex items-center space-x-2 border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isIndexPage
                ? 'border-[#254194] bg-[#254194] text-white hover:bg-[#1a2d6b] hover:text-white'
                : 'border-white bg-white text-[#254194] hover:text-[#254194] dark:bg-[#e2e2e2]'
            }`}

          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
