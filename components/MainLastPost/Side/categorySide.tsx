'use client'

import React from 'react'

const LatestTopics = () => {
  const topics = ['آموزش', 'اینترنت', 'فناوری', 'موبایل']

  return (
    <div className='p-4 space-y-4 rtl w-full'>
      <div className='text-sm font-semibold text-[#1d4ed8] text-center bg-[#bfdbfe] py-2 rounded-md p-5'>
        دسته‌بندی‌ها
      </div>

      <div className='space-y-3'>
        {topics.map((topic, index) => (
          <div
            key={index}
            className='text-sm text-center font-medium text-gray-800 p-3 bg-white rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer'
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestTopics
