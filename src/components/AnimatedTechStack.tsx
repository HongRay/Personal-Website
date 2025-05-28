import React, { useState } from 'react';

const AnimatedTechStack = () => {
  const [clickedIcons, setClickedIcons] = useState<Set<number>>(new Set());

  const techIcons = [
    { name: 'React', icon: '⚛️', delay: '0s' },
    { name: 'HTML5', icon: '🌐', delay: '0.5s' },
    { name: 'CSS3', icon: '🎨', delay: '1s' },
    { name: 'Tailwind CSS', icon: '💨', delay: '1.5s' },
    { name: 'TypeScript', icon: '📘', delay: '2s' },
    { name: 'Node.js', icon: '🟢', delay: '2.5s' },
    { name: 'Express.js', icon: '🚀', delay: '3s' },
    { name: 'Python', icon: '🐍', delay: '3.5s' },
    { name: 'Java', icon: '☕', delay: '4s' },
    { name: 'C++', icon: '⚡', delay: '4.5s' },
    { name: 'MongoDB', icon: '🍃', delay: '5s' },
    { name: 'PostgreSQL', icon: '🐘', delay: '5.5s' },
    { name: 'Git', icon: '📚', delay: '6s' },
    { name: 'Docker', icon: '🐳', delay: '6.5s' },
    { name: 'AWS', icon: '☁️', delay: '7s' },
    { name: 'JavaScript', icon: '🟨', delay: '7.5s' },
    { name: 'Redux', icon: '🔄', delay: '8s' },
    { name: 'Firebase', icon: '🔥', delay: '8.5s' },
    { name: 'Linux', icon: '🐧', delay: '9s' },
  ];

  const positions = [
    { left: '10%', top: '15%' },
    { left: '85%', top: '20%' },
    { left: '20%', top: '35%' },
    { left: '75%', top: '45%' },
    { left: '15%', top: '60%' },
    { left: '80%', top: '65%' },
    { left: '25%', top: '80%' },
    { left: '70%', top: '85%' },
    { left: '5%', top: '40%' },
    { left: '90%', top: '35%' },
    { left: '30%', top: '25%' },
    { left: '65%', top: '15%' },
    { left: '40%', top: '70%' },
    { left: '55%', top: '55%' },
    { left: '35%', top: '45%' },
    { left: '12%', top: '75%' },
    { left: '88%', top: '50%' },
    { left: '50%', top: '30%' },
    { left: '8%', top: '25%' },
  ];

  const handleIconClick = (index: number) => {
    setClickedIcons(prev => new Set(prev).add(index));
    
    // Remove the clicked state after animation completes
    setTimeout(() => {
      setClickedIcons(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 600); // Duration matches the pop animation
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((tech, index) => (
        <div
          key={tech.name}
          className="absolute animate-float pointer-events-none"
          style={{
            left: positions[index]?.left || `${Math.random() * 80 + 10}%`,
            top: positions[index]?.top || `${Math.random() * 80 + 10}%`,
            animationDelay: tech.delay,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          <div 
            className={`text-5xl opacity-20 hover:opacity-60 transition-opacity duration-300 cursor-pointer pointer-events-auto select-none inline-block ${
              clickedIcons.has(index) ? 'animate-pop' : ''
            }`}
            onClick={() => handleIconClick(index)}
            title={tech.name}
            style={{
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            {tech.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTechStack;
