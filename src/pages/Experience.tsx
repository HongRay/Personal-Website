
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';

const Experience = () => {
  const experiences = [
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'TechCorp Solutions',
      duration: 'June 2024 - August 2024',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes. Participated in code reviews and agile development processes.',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop',
      skills: ['React', 'Node.js', 'MongoDB', 'Git']
    },
    {
      id: '2',
      title: 'Junior Developer',
      company: 'StartupXYZ',
      duration: 'January 2024 - May 2024',
      description: 'Built responsive web interfaces and implemented RESTful APIs. Worked closely with design team to translate mockups into functional components. Optimized application performance and user experience.',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop',
      skills: ['TypeScript', 'React', 'Express.js', 'PostgreSQL']
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      duration: 'September 2023 - December 2023',
      description: 'Created modern, responsive websites for various clients. Implemented interactive features and animations. Ensured cross-browser compatibility and accessibility standards.',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop',
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-[#254194] mb-4">Work Experience</h1>
            <div className="w-24 h-1 bg-[#254194] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and experiences in software development
            </p>
          </div>

          <div className="text-center mt-12 pb-10">
            <p className="text-gray-600 italic">Click on any experience to view detailed information</p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Link 
                key={experience.id}
                to={`/experience/${experience.id}`}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`}
                        className="w-20 h-20 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-semibold text-[#254194] mb-1 group-hover:text-[#1a2d6b] transition-colors duration-300">
                            {experience.title}
                          </h2>
                          <h3 className="text-xl text-gray-700 font-medium">{experience.company}</h3>
                        </div>
                        <div className="flex items-center gap-3 mt-2 md:mt-0">
                          <span className="text-gray-500 font-medium">{experience.duration}</span>
                          <ArrowRight className="w-5 h-5 text-[#254194] group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full group-hover:bg-[#1a2d6b] transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Experience;
