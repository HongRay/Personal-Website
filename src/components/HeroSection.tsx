
import React from 'react';
import AnimatedTechStack from './AnimatedTechStack';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#254194] to-[#1a2d6b] text-white overflow-hidden">
      <AnimatedTechStack />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-200">
            Computer Science Student & Future Software Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing Computer Science with a focus on software development and emerging technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#254194] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#254194] transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-2xl">↓</div>
      </div>
    </section>
  );
};

export default HeroSection;
