
import React from 'react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import TechStackCarousel from '../components/TechStackCarousel';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#254194] mb-4">Technical Skills</h1>
            <div className="w-24 h-1 bg-[#254194] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Here are the technologies and tools I've been working with during my Computer Science studies
            </p>
          </div>

          <TechStackCarousel />
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Skills;
