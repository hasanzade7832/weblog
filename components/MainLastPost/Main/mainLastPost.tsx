"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import BoxLastPost from "../../BoxLastPost/boxlastpost";
import SearchSide from "../Side/searchSide";
import NewestPosts from "../Side/newestPosts";
import Categories from "../Side/categorySide";

const App: React.FC = () => {
    const router = useRouter();

    const postsData = [
       { id: "1", title: "نحوه فعال سازی اعلان ها در وردپرس", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower6.webp" },
        { id: "2", title: "سبک زندگی سالم", description: "توضیح مختصر...", date: "۲۷ آبان ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower7.webp" },
        { id: "3", title: "تکنیک‌های بهبود خواب", description: "توضیح مختصر...", date: "۱۵ مهر ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower8.webp" },
        { id: "4", title: "مدیریت استرس", description: "توضیح مختصر...", date: "۱۰ تیر ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower9.webp" },
    ];

    const handlePostClick = (id: string) => {
        router.push(`/postContent/${id}`);
    };

    return (
        <div className="w-full flex flex-col md:flex-row p-4 md:p-12 lg:p-16 space-y-4 md:space-y-0 md:space-x-4 items-start">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-200 rounded-3xl shadow-xl shadow-gray-300 p-4 space-y-4 order-2 md:order-1">
                <div className="flex items-center justify-center bg-white rounded-3xl shadow-md p-4">
                   <SearchSide />
                </div>
                <div className="flex items-center justify-center bg-white rounded-3xl shadow-md p-4">
                    <NewestPosts posts={postsData}/>
                </div>
                <div className="flex items-center justify-center bg-white rounded-3xl shadow-md p-4">
                    <Categories/>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:flex-1 rounded-3xl p-1 space-y-4 order-1 md:order-2 shadow-xl shadow-gray-300">
                {/* Cards */}
                {postsData.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
                    >
                        <BoxLastPost
                            title={post.title}
                            description={`توضیحات پست ${post.id}`}
                            imageUrl={post.image}
                            buttons={[
                                { label: 'مدیر سایت', icon: '👤', color: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
                                { label: post.date, icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                                { label: 'آموزش', icon: '📘', color: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
                            ]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
