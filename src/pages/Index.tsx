
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TechStackCarousel from '../components/TechStackCarousel';
import ContactSection from '../components/ContactSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ExperienceSection from '../components/ExperienceSection';
import AnimatedTechStack from '@/components/AnimatedTechStack';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* Skills Section */}
      <section className="relative py-20 bg-gradient-to-br to-[#1a2d6b] from-[#254194] text-white overflow-hidden pointer-events-none">
        <AnimatedTechStack className="absolute inset-0 z-0" isIndexTechStackPage/>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
              Here are the <span className='text-[#fabc2d] font-semibold'>technologies</span> and tools I've been working with
            </p>
          </div>
          <div className="pointer-events-auto">
            <TechStackCarousel isIndexPage />
          </div>
        </div>
      </section>
      <ProjectSection />
      <section id="experience">
        <ExperienceSection isIndexPage />
      </section>
      <ContactSection isIndexPage/>
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        // Animation in index.css and not in tailwind's config
        className="fixed bottom-12 right-20 z-50  w-12 h-12 bg-[#fabc2d] text-[#254194] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-float-updown-button"
      >
        ↑
      </button>
    </div>
  );
};

export default Index;
