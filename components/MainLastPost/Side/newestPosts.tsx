"use client";

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
        <div className="rounded-lg p-4 space-y-4 w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rtl">
            {/* Header */}
            <div className="bg-blue-500 text-white text-center rounded-md py-2 font-semibold">
                محبوب ترین مطالب
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {posts.slice(0, 4).map((post, index) => (
                    <div 
                        key={index} 
                        className="flex flex-row-reverse items-center text-right w-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-md p-2 cursor-pointer"
                    >
                        {/* Post Image */}
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-10 h-10 rounded-full object-cover ml-3 transition-transform duration-500 ease-in-out hover:scale-110" 
                        />

                        {/* Post Info */}
                        <div className="flex-1 text-right overflow-hidden">
                            {/* Title */}
                            <h3 className="text-gray-800 font-semibold text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                                {post.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestPosts;
