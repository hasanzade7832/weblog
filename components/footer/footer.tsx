import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white pt-14 pb-20 px-5 text-center overflow-hidden">
      <div className="wave-container">
        {/* موج پایین فوتر */}
        <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="wave">
          <path
            d="M0,160 C200,260 400,60 600,160 C800,260 1000,60 1200,160 V300 H0 Z"
            className="fill-current text-blue-300 opacity-30"
          ></path>
        </svg>
      </div>

      {/* محتویات فوتر */}
      <div className="container mx-auto flex flex-row justify-center gap-20 text-on-wave">
        <p className="text-gray-200 text-md md:text-lg font-medium animate-bounce">
          تماس با ما
        </p>
        <p className="text-gray-200 text-md md:text-lg font-medium animate-bounce">
          ارتباط با ما
        </p>
      </div>
    </footer>
  );
};

export default Footer;
