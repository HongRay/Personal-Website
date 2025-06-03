
import React from 'react';
import { projectDetails } from '@/lib/info';

const Projects = () => {

  return (
    <div className="min-h-screen bg-gray-50">
        <section id = "projects" className="py-20 bg-gray-50 ">
          <div className="max-w-6xl mx-auto px-6 animate-fade-in">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#254194] mb-4">Featured Projects</h1>
              <div className="w-24 h-1 bg-[#254194] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are some of the projects I've worked on during my studies and personal time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectDetails.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-lg border border-gray-120 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="mb-4 text-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="mx-auto w-full h-40 object-cover rounded-md shadow-sm transition-transform duration-500 transform group-hover:rotate-2 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-[#254194] mb-3">{project.title}</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed break-words">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.viewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#254194] text-white py-2 px-4 rounded hover:bg-[#1a2d6b] transition-colors duration-300 text-center"
                      >
                        View Project
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-[#254194] text-[#254194] py-2 px-4 rounded hover:bg-[#254194] hover:text-white transition-all duration-300 text-center"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

export default Projects;
