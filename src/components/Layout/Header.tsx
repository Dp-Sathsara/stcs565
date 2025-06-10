import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        
        {/* Logo and Text */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="https://i.postimg.cc/y8Tc8jXd/SCSSA-Logo2.jpg" alt="SCSSA Logo" className="h-10 md:h-12" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold text-gray-1000 dark:text-white">SCSSA</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">University Of Kelaniya</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Home
          </Link>
          <Link to="/events" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Upcoming Events
          </Link>
          <Link to="/news" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            News & Highlights
          </Link>
          <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Contact
          </Link>
          <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            About Us
          </Link>
          <ThemeToggle />
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Join SCSSA
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2">
              Home
            </Link>
            <Link to="/events" onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2">
              Events
            </Link>
            <Link to="/news" onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2">
              News
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2">
              Contact
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2">
              About Us
            </Link>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
              onClick={toggleMenu}
            >
              Join SCSSA
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
