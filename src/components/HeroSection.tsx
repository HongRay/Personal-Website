
import React from 'react';
import AnimatedTechStack from './AnimatedTechStack';
import DarkModeToggleButton from './ui/DarkModeToggle';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2d6b] to-[#254194]  text-white overflow-hidden dark:from-[#0d1b53] dark:to-[#1a2d6b]">
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
          <p className="text-lg md:text-xl mb-5 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm also currently in <span className="italic font-semibold text-[#fabc2d]">NUS College</span>, NUS's honours college. 
            I'm passionate about creating fun and innovative solutions through code - 
             <span className="text-xl italic font-semibold">Try <span className ="text-[#fabc2d]">clicking </span>
             on the floating <span className ="text-[#fabc2d]">icons</span> in the background to watch them "pop"!</span>
          </p>
          <p className="text-lg md:text-xl mb-5 text-gray-300 leading-relaxed font-semibold pointer-events-auto">
              NEW: Try Dark Mode On top!!!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-[#254194] px-8 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-white border-2 hover:border-white transition-all duration-300 transform hover:scale-105 text-center pointer-events-auto
              dark:border-white"
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
