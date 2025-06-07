import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '../../components/Navigation';
import ContactSection from '../../components/ContactSection';
import { projectDetails } from '@/lib/information/project';
import { HashLink as Link } from 'react-router-hash-link';


const IexProjectPage = () => {
const location = useLocation();
  const fromIndex = location.state?.fromIndex;
  const { id } = useParams<{ id: string }>();

  const project = projectDetails.find((proj) => proj.id === id);

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h1>
          <Link
            to={fromIndex ? '/' : '/projects'}
            className="inline-flex items-center text-[#254194] hover:underline"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {fromIndex ? 'Back to Home' : 'Back to Projects'}
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
          {/* Back button */}
          <Link
            to={fromIndex ? '/#projects' : '/projects'}
            className="inline-flex items-center text-[#254194] hover:text-[#1a2d6b] mb-8 transition-colors duration-300 hover:translate-x-1 transform"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {fromIndex ? 'Back to Home' : 'Back to Projects'}
          </Link>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
            {/* Media */}
            <div className="w-full">
              {project.image.endsWith('.mp4') ? (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-[#254194] mb-2">{project.title}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full hover:bg-[#fabc2d] hover:text-[#254194] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Link */}
              {project.codeLink && project.codeLink !== 'popup' && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#254194] hover:underline font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Code on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default IexProjectPage;
