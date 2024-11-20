import React from 'react';

const Tags = () => {
  return (
    <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
      <div className='flex flex-wrap items-center justify-end gap-2'>
        <span className='bg-blue-500 text-white py-1 px-3 rounded-lg text-sm cursor-pointer hover:bg-blue-700 transition'>
          مجله‌ای
        </span>
        <span className='bg-blue-500 text-white py-1 px-3 rounded-lg text-sm cursor-pointer hover:bg-blue-700 transition'>
          طراحی
        </span>
        <span className='bg-blue-500 text-white py-1 px-3 rounded-lg text-sm cursor-pointer hover:bg-blue-700 transition'>
          سلام
        </span>
        <span className='bg-blue-500 text-white py-1 px-3 rounded-lg text-sm cursor-pointer hover:bg-blue-700 transition'>
          ایران
        </span>
        <span className='text-gray-700'>: برچسب‌ها</span>
      </div>
    </div>
  );
};

export default Tags;
