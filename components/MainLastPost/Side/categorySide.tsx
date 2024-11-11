import React from 'react';
import { FaTag } from 'react-icons/fa'; // آیکون نمونه برای دسته‌بندی‌ها

const LatestTopics = () => {
    const topics = [
        "آموزش",
        "اینترنت",
        "فناوری",
        "موبایل",
    ];

    return (
        <div className="rounded-lg p-4 space-y-6 w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rtl">
            {/* Header */}
            <div className="bg-blue-500 text-white text-center rounded-md py-2 font-semibold">
                 دسته بندی ها
            </div>

            {/* Topics List */}
            <div className="space-y-4">
                {topics.map((topic, index) => (
                    <div 
                        key={index} 
                        className="flex items-center justify-center text-right px-4 py-2 rounded-md bg-white shadow-md transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-gray-100 cursor-pointer"
                    >
                        <span className="text-gray-800 font-medium text-sm">
                            {topic}
                        </span>
                        {/* <FaTag className="text-blue-500 ml-4 transition-colors duration-300" /> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestTopics;
