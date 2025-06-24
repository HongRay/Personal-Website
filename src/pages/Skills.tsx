
import React from 'react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import TechStackCarousel from '../components/TechStackCarousel';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="animate-fade-in">
        <section className="py-20 bg-white dark:bg-[#181616]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#254194] mb-4 dark:text-[#e2e2e2]">Technical <span className='text-[#fabc2d]'>Skills</span></h1>
              <div className="w-24 h-1 bg-[#254194] mx-auto mb-6 dark:bg-[#e2e2e2]"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 dark:text-[#e2e2e2]">
                Here are the technologies and tools I've been working with
              </p>
            </div>

            <TechStackCarousel />
          </div>
        </section>
        <ContactSection />
      </div>
    </div>
  );
};

export default Skills;
