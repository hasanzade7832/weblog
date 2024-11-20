'use client';

import React from 'react';

interface Post {
  title: string;
  image: string;
  date: string;
}

interface LatestPostsProps {
  posts: Post[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <div className="p-4 space-y-4 rtl w-full">
      {/* عنوان */}
      <div className="text-sm font-semibold text-[#1d4ed8] text-center bg-[#bfdbfe] py-2 rounded-md p-5">
        محبوب‌ترین مطالب
      </div>

      {/* باکس‌های داخلی */}
      <div className="space-y-3">
        {posts.slice(0, 4).map((post, index) => (
          <div
            key={index}
            className="flex items-center w-full max-w-full p-3 bg-white rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1 text-sm text-gray-800 truncate text-right">{post.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
