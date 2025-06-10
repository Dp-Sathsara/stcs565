import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  LinkedinIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="scssa-logo.png"
                alt="SCSSA Logo"
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold leading-tight">SCSSA</h3>
                <div className="text-base font-semibold">University of Kelaniya</div>
              </div>
            </div>

            <p className="text-gray-300 max-w-md mt-2">
              The Statistics and Computer Science Students' Association
              represents and supports students in the Department of Statistics
              and Computer Science at the University of Kelaniya.
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-blue-400"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white hover:text-green-400"
              >
                {/* Placeholder WhatsApp icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-400"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/events" className="text-gray-300 hover:text-white">Upcoming Events</Link>
              <Link to="/news" className="text-gray-300 hover:text-white">News & Highlights</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              <Link to="/exco" className="text-gray-300 hover:text-white">Committee</Link>
            </div>

            <h3 className="text-xl font-semibold mt-6">Resources</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="https://science.kln.ac.lk/index.php/for-students/handbooks" className="text-gray-300 hover:text-white">Student Handbook</a>
              <a href="https://science.kln.ac.lk/images//im/Calendar.pdf" className="text-gray-300 hover:text-white">Academic Calendar</a>
              <a href="https://science.kln.ac.lk/depts/stcs/" className="text-gray-300 hover:text-white">Department Website</a>
              <a href="https://studentportal.kln.ac.lk/" className="text-gray-300 hover:text-white">University Portal</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon size={20} className="flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Department of Statistics & Computer Science,<br />
                  Faculty of Science,<br />
                  University of Kelaniya,<br />
                  Kelaniya, Sri Lanka
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon size={20} />
                <p className="text-gray-300">+94 11 2903470</p>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon size={20} />
                <p className="text-gray-300">scssa@kln.ac.lk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Statistics and Computer Science Students Association. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white mr-6">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-gray-400 text-sm hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
