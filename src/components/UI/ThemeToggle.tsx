import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
      {isDarkMode ? <SunIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" /> : <MoonIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
    </button>;
};
export default ThemeToggle;