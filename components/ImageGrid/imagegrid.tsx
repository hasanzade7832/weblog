import React from 'react';

const ImageBoxes: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 md:px-12 lg:px-36 mc"> {/* فاصله از چپ و راست */}
      {/* Container */}
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-96 bg-transparent border-gray-300">
        
        {/* Left Container (Box 2, Box 3, and Box 4) */}
        <div className="w-full lg:w-1/2 h-full flex flex-col">
          {/* Box 2 */}
          <div className="h-48 md:h-1/2 p-2 relative group">
            <div className="bg-white shadow-lg rounded-lg h-full overflow-hidden relative">
              {/* دسته‌بندی‌ها */}
              <div className="absolute top-2 right-2 flex space-x-2 z-20">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
              </div>
              {/* تصویر و افکت هاور */}
              <img src="/image/flower6.webp" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110" alt="Flower 6" />
              {/* تایتل راست‌چین */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm font-bold z-10">
                عنوان تصویر
              </div>
            </div>
          </div>

          {/* Box 3 and Box 4 */}
          <div className="flex flex-col md:flex-row h-48 md:h-1/2">
            <div className="w-full md:w-1/2 p-2 relative group">
              <div className="bg-white shadow-lg rounded-lg h-full overflow-hidden relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-20">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
                </div>
                <img src="/image/flower7.webp" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110" alt="Flower 7" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm font-bold z-10">
                  عنوان تصویر
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-2 relative group">
              <div className="bg-white shadow-lg rounded-lg h-full overflow-hidden relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-20">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
                </div>
                <img src="/image/flower8.webp" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110" alt="Flower 8" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm font-bold z-10">
                  عنوان تصویر
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container (Box 1) */}
        <div className="w-full lg:w-1/2 h-48 lg:h-full p-2 relative group">
          <div className="bg-white shadow-lg rounded-lg h-full overflow-hidden relative">
            <div className="absolute top-2 right-2 flex space-x-2 z-20">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
            </div>
            <img src="/image/flower9.webp" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110" alt="Flower 9" />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm font-bold z-10">
              عنوان تصویر
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBoxes;
