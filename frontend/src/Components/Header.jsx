import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md border-b-2 border-black">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <div className="flex items-center space-x-3 group">
          <CodeIcon fontSize="large" className="text-white animate-pulse group-hover:animate-spin-slow" />
          <h1 className="text-3xl font-bold tracking-wide animate-fade-in-up group-hover:animate-bounce">
            Flexicode
          </h1>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center transition-transform duration-300 ease-in-out"
          >
            <span>Menu</span>
            <svg
              className="fill-current h-4 w-4 ml-2 transition-transform duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20 animate-slide-down-fade">
              <Link
                 to="/code-playground"
             
                className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Code Playground
              </Link>
              <Link
                 to="/general-compiler"
            
                className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                General Compiler
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
