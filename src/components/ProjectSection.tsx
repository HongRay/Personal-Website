import React from 'react';
import { projectDetails } from '@/lib/information/project';
import { Link } from 'react-router-dom';

const isVideo = (filePath: string) => {
  return filePath.endsWith('.mp4') || filePath.endsWith('.webm');
};

const getCardLink = (project) =>
  project.hasDetailPage ? `/projects/iex` : project.codeLink;

const Projects = ({ isIndexPage = false }: { isIndexPage?: boolean }) => {

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
        <section id = "projects" className="py-20 bg-gray-50 ">
          <div className="max-w-6xl mx-auto px-6 animate-fade-in">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#254194] mb-4">Featured <span className='text-[#fabc2d]'>Projects</span></h1>
              <div className="w-24 h-1 bg-[#254194] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Here are some of the projects I've worked on during my studies and personal time
              </p>
            </div>
            {/* Project Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectDetails.map((project, index) => (
                <Link
                  key={index}
                  to={getCardLink(project)}
                  state={{fromIndex: isIndexPage}}
                  target={project.hasDetailPage ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 md:hover:-translate-y-2 md:hover:scale-[1.02] md:hover:shadow-2xl overflow-visible  h-full block"
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative mb-4 aspect-[16/9]">
                      <div className="absolute inset-0 z-10 transition-transform duration-500 transform rounded-md md:group-hover:scale-110 md:group-hover:rotate-3 md:group-hover:ring-[3px] md:group-hover:ring-[#254194] pointer-events-none">
                        {isVideo(project.image) ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-md"
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-md"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-md">
                          <span className="text-white text-lg font-semibold text-center leading-snug">
                            Click To <br /> View More
                          </span>
                        </div>
                      </div>
                    </div>
                     <div>
                      <h2 className="text-xl font-semibold text-[#254194] mb-3">{project.title}</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed break-words">{project.description}</p>
                    </div>
                    {/* tech stacks */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      <div className="w-full h-px bg-gray-200 my-4 rounded-full" />
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full hover:bg-[#fabc2d] hover:text-[#254194]">
                          {tech}
                        </span>
                      ))}
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

export default Projects;
