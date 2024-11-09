"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // آیکون‌های زیبا از Font Awesome

// آرایه‌ای از مسیر تصاویر در پوشه‌ی public
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
    <div className="relative w-full h-[500px] bg-black flex items-center justify-center">
      {/* بخش تصویر اسلایدر */}
      <div className="relative w-2/3 h-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full transition-transform duration-700 ease-in-out"
           style={{objectFit:"initial"}}
        />
      </div>

      {/* دکمه‌های پیمایش وسط‌چین و زیباتر شده در پایین بخش سیاه */}
      <div className="absolute bottom-4 left-24 right-0 flex  space-x-4">
        <button
          onClick={goToPrevious}
          className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] text-black p-4 rounded-full shadow-2xl focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl flex items-center justify-center"
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
          }}
        >
          <FaArrowLeft className="text-xl text-black" />
        </button>
        <button
          onClick={goToNext}
          className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] text-black p-4 rounded-full shadow-2xl focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl flex items-center justify-center"
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
          }}
        >
          <FaArrowRight className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
