
import React from 'react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default About;
