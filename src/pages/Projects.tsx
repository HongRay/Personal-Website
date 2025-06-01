
import React from 'react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import { projectDetails } from '@/lib/info';
import ProjectSection from '../components/ProjectSection'

const Projects = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Projects;
