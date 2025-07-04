
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { experiences } from '@/lib/information/experience';
import AnimatedTechStack from '@/components/AnimatedTechStack';

const Experience = ({ isIndexPage = false }: { isIndexPage?: boolean }) => {
  return (
    <div className="min-h-screen">
      <section className={`relative py-20 ${isIndexPage ? 'bg-gradient-to-br from-[#1a2d6b] to-[#254194] z-0 dark:from-[#0d1b53] dark:to-[#1a2d6b]' : 'bg-gray-50 dark:bg-[#181616]'}`}>
        {isIndexPage && (
          <div className="absolute inset-0 z-10">
            <AnimatedTechStack className="w-full h-full pointer-events-auto" isIndexPage />
          </div>
        )}
        <div className="relative z-20 max-w-6xl mx-auto px-6 pointer-events-none">
          <div className={`text-center mt-12 pb-10 animate-fade-in ${isIndexPage ? 'text-white dark:text-[#e2e2e2]' : 'text-white dark:text-[#e2e2e2]'} `}>
            <h1 className={`text-4xl font-bold mb-4  ${isIndexPage ? 'text-white' : 'text-[#254194] dark:text-[#e2e2e2]'} `}>
              Work <span className="text-[#fabc2d]">Experience</span>
              </h1>
            <div className={`w-24 h-1 mx-auto mb-6  ${isIndexPage ? 'bg-white dark:text-[#e2e2e2]' : 'bg-[#254194] dark:bg-[#e2e2e2]'} `}></div>
            <p className={`text-xl max-w-3xl mx-auto  ${isIndexPage ? 'text-gray-200 dark:text-[#e2e2e2]' : 'text-gray-600 dark:text-[#e2e2e2]'} `}>
              My professional journey and experiences in software development
            </p>
          </div>
          <div className={`text-center mt-12 pb-10 animate-fade-in  ${isIndexPage ? 'text-gray-200 dark:text-[#e2e2e2]' : 'text-gray-600 dark:text-[#e2e2e2]'} `}>
            <p className="italic">Click on any experience to view detailed information</p>
          </div>
          {/* Experience Cards */}
          <div className="space-y-8 animate-fade-in pointer-events-auto">
            {experiences.map((experience, index) => (
              <Link 
                key={experience.id}
                to={`/experience/${experience.id}`}
                state={{ fromIndex: isIndexPage }}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer
                dark:bg-[#e5e5e5]">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Experience Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`}
                        className="w-24 h-24 rounded-lg shadow-md object-contain bg-white p-2 transition-transform duration-300 group-hover:rotate-3 group-hover:shadow-lg group-hover:scale-[1.2]"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        {/* Title and company */}
                        <div>
                          <h2 className="text-2xl font-semibold text-[#254194] mb-1 group-hover:text-[#1a2d6b] transition-colors duration-300
                          dark:text-[#0d1b53]">
                            {experience.title}
                          </h2>
                          <h3 className="text-xl text-gray-700 font-medium">{experience.company}</h3>
                        </div>
                        {/* Date and arrow */}
                        <div className="flex items-center gap-3 mt-2 md:mt-0">
                          <span className="text-gray-500 font-medium">{experience.duration}</span>
                          <ArrowRight className="w-5 h-5 text-[#254194] group-hover:translate-x-2 transition-transform duration-300 dark:text-[#0d1b53]" />
                        </div>
                      </div>
                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {/* Tech Stacks */}
                        {experience.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full hover:bg-[#fabc2d] hover:text-[#254194] transition-colors duration-300
                            dark:bg-[#0d1b53] dark:hover:text-[#fabc2d] dark:hover:bg-[#072068]"
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
    </div>
  );
};

export default Experience;
