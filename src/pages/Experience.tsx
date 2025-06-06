
import React from 'react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';

const Experience = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ExperienceSection isIndexPage={false}/>
      <ContactSection />
    </div>
  );
};

export default Experience;
