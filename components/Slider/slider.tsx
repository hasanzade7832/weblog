"use client";
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/image/flower6.webp',
  '/image/flower7.webp',
  '/image/flower8.webp',
  '/image/flower9.webp',
  '/image/flower10.webp',
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #111111, #2d2d2d, #3e3e3e, #595959)',
        backgroundSize: '400% 400%',
        animation: 'gradient 20s ease infinite',
      }}
    >
      {/* بخش تصویر اسلایدر */}
      <div className="relative w-2/3 h-full overflow-hidden rounded-lg shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-105"
          style={{
            objectFit: "cover",
            filter: "brightness(0.9) contrast(1.1)",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* دکمه‌های پیمایش در کناره‌های تصویر، نزدیک به پایین */}
      <button
        onClick={goToPrevious}
        className="absolute left-12 bottom-6 p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-50 transform hover:scale-110"
        style={{
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <FaChevronLeft className="text-3xl text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute left-32 bottom-6 p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-50 transform hover:scale-110"
        style={{
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <FaChevronRight className="text-3xl text-white" />
      </button>

      {/* استایل انیمیشن گرادیان */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Slider;
