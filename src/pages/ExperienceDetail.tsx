
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import { experiencesDetails } from '@/lib/information/experience';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const ExperienceDetail = () => {
  const location = useLocation();
  const fromIndex = location.state?.fromIndex;
  const { id } = useParams<{ id: string }>();

  const experience = experiencesDetails.find(exp => exp.id === id);
  console.log('fromIndex:', location.state?.fromIndex);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Experience not found</h1>
          <Link 
            to={fromIndex ? '/' : '/experience'}
            className="inline-flex items-center text-[#254194] hover:underline"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {fromIndex ? 'Back to Home' : 'Back to Experience'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back Left Arrow */}
            <Link 
              to={fromIndex ? '/#experience' : '/experience'}
              className="inline-flex items-center text-[#254194] hover:text-[#1a2d6b] mb-8 transition-colors duration-300 hover:translate-x-1 transform"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {fromIndex ? 'Back to Home' : 'Back to Experience'}
            </Link>
            {/* Experience Logo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-start gap-6">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-20 h-20 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  {/* Title and Company */}
                  <div className="flex-grow">
                    <h1 className="text-3xl font-bold text-[#254194] mb-2">{experience.title}</h1>
                    <h2 className="text-2xl text-gray-700 font-semibold mb-4">{experience.company}</h2>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      {/* Date */}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      {/* Location */}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Overview */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
                      <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                    </div>
                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full hover:bg-[#1a2d6b] transition-colors duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Achievements */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-2 h-2 bg-[#254194] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-600 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Projects */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Notable Projects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {experience.projects.map((project, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#254194] transition-colors duration-300" />
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 bg-white text-gray-700 text-xs rounded border hover:border-[#254194] transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ExperienceDetail;
