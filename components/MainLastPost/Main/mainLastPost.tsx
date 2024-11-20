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
        {
      id: '1',
      title: 'نحوه فعال سازی اعلان ها در وردپرس',
      shortDescription: 'آموزش فعال‌سازی اعلان‌ها در وردپرس به زبان ساده.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۳۰ دی ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 105,
      author: 'حمید اسلامی',
      image: '/image/flower6.webp'
    },
    {
      id: '2',
      title: 'سبک زندگی سالم',
      shortDescription: 'نکات کلیدی برای حفظ سلامتی در زندگی روزمره.',
      description: 'توضیح مختصر در مورد سبک زندگی سالم...',
      date: '۲۷ آبان ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 83,
      author: 'زهرا احمدی',
      image: '/image/flower7.webp'
    },
    {
      id: '3',
      title: 'تکنیک‌های بهبود خواب',
      shortDescription: 'روش‌هایی برای تجربه خواب عمیق و باکیفیت.',
      description: 'توضیح مختصر در مورد بهبود خواب...',
      date: '۱۵ مهر ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 94,
      author: 'علی رضایی',
      image: '/image/flower8.webp'
    },
    {
      id: '4',
      title: 'مدیریت استرس',
      shortDescription: 'بهترین تکنیک‌ها برای کنترل و کاهش استرس.',
      description: 'توضیح مختصر در مورد مدیریت استرس...',
      date: '۱۰ تیر ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 120,
      author: 'مینا بهشتی',
      image: '/image/flower9.webp'
    },
    ];

    const handlePostClick = (id: string) => {
        router.push(`/postContent/${id}`);
    };

    return (
        <div className="w-full flex flex-col md:flex-row p-4 md:p-12 lg:p-16 space-y-4 md:space-y-0 md:space-x-8 items-start">
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
