import React, { useState } from 'react';
import { techIcons, positions } from '@/lib/techData';  

const AnimatedTechStack = () => {
  const [clickedIcons, setClickedIcons] = useState<Set<number>>(new Set());
  
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
            animationDuration: tech.duration,
          }}
        >
          <div 
            className={`text-5xl opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-pointer pointer-events-auto select-none inline-block ${
              clickedIcons.has(index) ? 'animate-pop' : ''
            }`}
            onClick={() => handleIconClick(index)}
            title={tech.name}
            style={{
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className={`w-14 h-14 transition-all duration-300 ${
                clickedIcons.has(index) ? 'brightness-[1.5]' : ''
              }`}
              style={{ filter: clickedIcons.has(index) ? 'drop-shadow(0 0 20px blue)' : 'none' }}
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTechStack;
