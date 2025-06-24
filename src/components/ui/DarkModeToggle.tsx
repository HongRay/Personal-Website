import React, { useEffect, useState } from 'react';
import { Moon, SunMedium } from 'lucide-react';

const DarkModeToggleButton: React.FC = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${
        isDark ? 'bg-[#254194]/80' : 'bg-gray-300'
      }`}
      aria-label="Toggle Theme"
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-transform duration-300 shadow-md ${
          isDark
            ? 'translate-x-8 bg-gray-300'
            : 'translate-x-0 bg-yellow-500'
        }`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-[#254194]" />
        ) : (
          <SunMedium className="w-4 h-4 text-white" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggleButton;
