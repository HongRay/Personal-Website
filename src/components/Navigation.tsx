
import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, SunMedium, Moon } from 'lucide-react';
import { RESUME_PATH, GITHUB_LINK, LINKEDIN_LINK, EMAIL_LINK} from "@/lib/configs";
import DarkModeToggleButton from './ui/DarkModeToggle'

const Navigation = () => {
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: GITHUB_LINK, label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: LINKEDIN_LINK, label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />,href: EMAIL_LINK, label: 'Email'},
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 dark:bg-[#181616]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-[#254194] hover:scale-105 transition-transform duration-300 dark:text-[#e2e2e2]">
              Hong Ray
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-[#254194] bg-gray-200 shadow-sm dark:bg-gray-800 dark:text-[#e2e2e2]'
                      : 'text-gray-800 hover:text-[#254194] hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-[#e2e2e2]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#254194] transition-all duration-300 transform hover:scale-110 dark:text-[#e2e2e2] dark:hover:text-[#254194]"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
                href={RESUME_PATH}
                download
                className="bg-[#254194] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a2d6b] transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg 
                dark:bg-[#1a2d6b] dark:hover:bg-[#254194]"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
              <div className="flex items-center space-x-4">
                <DarkModeToggleButton />
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
