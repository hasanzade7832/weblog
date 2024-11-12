import React from 'react';

const ImageBoxes: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center px-2 md:px-6 lg:px-18">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-96 bg-transparent border-gray-300">
        
        {/* Left Container (Box 2, Box 3, and Box 4) */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-1">
          {/* Box 2 */}
          <div className="lg:h-48 h-auto min-h-[12rem] p-1 relative group">
            <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <div className="absolute top-2 right-2 flex space-x-1 z-20">
                <span className="bg-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
                <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
              </div>
              <img src="/image/flower6.webp" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" alt="Flower 6" />
              <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
                عنوان تصویر
              </div>
            </div>
          </div>

          {/* Box 3 and Box 4 */}
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 lg:h-48 h-auto">
            <div className="w-full md:w-1/2 lg:h-full h-auto p-1 relative group">
              <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <div className="absolute top-2 right-2 flex space-x-1 z-20">
                  <span className="bg-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
                  <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
                </div>
                <img src="/image/flower7.webp" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" alt="Flower 7" />
                <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
                  عنوان تصویر
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:h-full h-auto p-1 relative group">
              <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <div className="absolute top-2 right-2 flex space-x-1 z-20">
                  <span className="bg-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
                  <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
                </div>
                <img src="/image/flower8.webp" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" alt="Flower 8" />
                <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
                  عنوان تصویر
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container (Box 1) */}
        <div className="w-full lg:w-1/2 lg:h-full h-auto min-h-[24rem] p-1 relative group">
          <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <div className="absolute top-2 right-2 flex space-x-1 z-20">
              <span className="bg-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 1</span>
              <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold">دسته‌بندی 2</span>
            </div>
            <img src="/image/flower9.webp" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" alt="Flower 9" />
            <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
              عنوان تصویر
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBoxes;
