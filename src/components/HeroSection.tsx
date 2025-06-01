
import React from 'react';
import AnimatedTechStack from './AnimatedTechStack';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#254194] to-[#1a2d6b] text-white overflow-hidden">
      <AnimatedTechStack />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pointer-events-none">
        <div className="animate-fade-in">
          <div className="animate-float-updown">
            <img
              src="/Profile pic.jpg"
              alt="Hong Ray"
              className="mx-auto mb-6 w-[344px] h-[344px] rounded-full object-cover object-[0_80%] border-4 border-white shadow-md"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent max-w-4xl pb-2">
              Hi! I'm Hong Ray
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-200">
            Computer Science Student & Future Software Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I am currently a Computer Science student at NUS. I'm passionate about creating fun and innovative solutions through code - Try clicking on the floating icons in the background to see for yourself!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-[#254194] px-8 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-white border-2 hover:border-white transition-all duration-300 transform hover:scale-105 text-center pointer-events-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#254194] transition-all duration-300 transform hover:scale-105 text-center pointer-events-auto"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-12 animate-bounce text-white text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
