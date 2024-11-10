import React from 'react';
import BoxLastPost from "../../BoxLastPost/boxlastpost";
import SearchSide from "../Side/searchSide";
import NewestPosts from "../Side/newestPosts";
import Categories from "../Side/categorySide";

const App: React.FC = () => {
    const postsData = [
        {
            title: "این آخرین بروزرسانی ویندوز...",
            imageUrl: "/image/flower6.webp",
            timeAgo: "1 سال پیش",
            commentsCount: 5,
        },
        {
            title: "واکنش جنجالی و جالب...",
            imageUrl: "/image/flower7.webp",
            timeAgo: "1 سال پیش",
            commentsCount: 8,
        },
        {
            title: "حیرت انگیز مثل بروزرسانی‌های...",
            imageUrl: "/image/flower8.webp",
            timeAgo: "1 سال پیش",
            commentsCount: 10,
        },
        {
            title: "اخبار جدید شبکه ارتباطی",
            imageUrl: "/image/flower9.webp",
            timeAgo: "1 سال پیش",
            commentsCount: 2,
        },
    ];

    return (
        <div className="px-4 md:px-12 lg:px-36 flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4 items-start">
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
                <BoxLastPost
                    title="عنوان کارت اول"
                    description="توضیحات مربوط به کارت اول"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'مدیر سایت', icon: '👤', color: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
                        { label: '1 سال پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'آموزش', icon: '📘', color: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
                    ]}
                />

                <BoxLastPost
                    title="عنوان کارت دوم"
                    description="توضیحات مربوط به کارت دوم"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'نویسنده', icon: '👤', color: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
                        { label: '6 ماه پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'مقاله', icon: '📄', color: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-600' },
                    ]}
                />

                <BoxLastPost
                    title="عنوان کارت سوم"
                    description="توضیحات مربوط به کارت سوم"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'ویرایشگر', icon: '👤', color: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
                        { label: '3 ماه پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'خبر', icon: '📰', color: 'bg-teal-500', hoverColor: 'hover:bg-teal-600' },
                    ]}
                />

                <BoxLastPost
                    title="عنوان کارت چهارم"
                    description="توضیحات مربوط به کارت چهارم"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'ویراستار', icon: '👤', color: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
                        { label: '3 ماه پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'خبر', icon: '📰', color: 'bg-teal-500', hoverColor: 'hover:bg-teal-600' },
                    ]}
                />
            </div>
        </div>
    );
};

export default App;
