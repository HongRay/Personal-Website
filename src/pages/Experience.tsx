
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import { experiences } from '@/lib/info';
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
