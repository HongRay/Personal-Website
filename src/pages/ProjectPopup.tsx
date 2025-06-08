import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import { projectPopUpDetails } from '@/lib/information/project';
import { HashLink as Link } from 'react-router-hash-link';
import ProjectCarousel from '@/components/ProjectCarousel';

const ProjectPopup = () => {
  const location = useLocation();
  const fromIndex = location.state?.fromIndex;
  const { id } = useParams<{ id: string }>();

  const project = projectPopUpDetails.find((proj) => proj.id === id);

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
          {/* Back Button */}
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
            <ProjectCarousel images={project.image} />
            {/* Content */}
            <div className="px-8 pt-0 pb-8">
              <h1 className="text-3xl font-bold text-[#254194] mb-2">{project.title}</h1>
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
              {/* Achievements (if available) */}
              {project.achievements && project.achievements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
                  <ul className="space-y-3">
                    {project.achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="shrink-0 w-[10px] h-[10px] bg-[#254194] rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-[#fabc2d] mt-[6px]" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
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
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ProjectPopup;
