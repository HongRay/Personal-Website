
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TechStackCarousel from '../components/TechStackCarousel';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#254194] mb-4">Technical Skills</h2>
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

export default Index;
