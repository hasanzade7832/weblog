"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// داده‌های پست‌ها
const postsData = [
  {
    id: "1",
    title: "مدیریت استرس",
    shortDescription: "بهترین تکنیک‌ها برای کنترل و کاهش استرس.",
    description: "توضیح مختصر در مورد مدیریت استرس...",
    date: "۱۰ تیر ۱۴۰۳",
    category: "شیوه زندگی",
    categoryColor: "bg-pink-200 text-pink-700",
    views: 120,
    author: "مینا بهشتی",
    image: "https://picsum.photos/500/150?random=1",
  },
  {
    id: "2",
    title: "مدیریت استرس",
    shortDescription: "بهترین تکنیک‌ها برای کنترل و کاهش استرس.",
    description: "توضیح مختصر در مورد مدیریت استرس...",
    date: "۱۰ تیر ۱۴۰۳",
    category: "شیوه زندگی",
    categoryColor: "bg-pink-200 text-pink-700",
    views: 120,
    author: "مینا بهشتی",
    image: "https://picsum.photos/500/150?random=2",
  },
  {
    id: "3",
    title: "مدیریت استرس",
    shortDescription: "بهترین تکنیک‌ها برای کنترل و کاهش استرس.",
    description: "توضیح مختصر در مورد مدیریت استرس...",
    date: "۱۰ تیر ۱۴۰۳",
    category: "شیوه زندگی",
    categoryColor: "bg-pink-200 text-pink-700",
    views: 120,
    author: "مینا بهشتی",
    image: "https://picsum.photos/500/150?random=3",
  },
  {
    id: "4",
    title: "مدیریت استرس",
    shortDescription: "بهترین تکنیک‌ها برای کنترل و کاهش استرس.",
    description: "توضیح مختصر در مورد مدیریت استرس...",
    date: "۱۰ تیر ۱۴۰۳",
    category: "شیوه زندگی",
    categoryColor: "bg-pink-200 text-pink-700",
    views: 120,
    author: "مینا بهشتی",
    image: "https://picsum.photos/500/150?random=4",
  },
];

// تابعی برای تصادفی کردن آرایه
const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ImageBoxes: React.FC = () => {
  const router = useRouter();
  const [shuffledPostsData, setShuffledPostsData] = useState(postsData);

  // اعمال تصادفی‌سازی فقط در کلاینت
  useEffect(() => {
    setShuffledPostsData(shuffleArray(postsData));
  }, []);

  // هنگام کلیک بر روی تصویر، کاربر به صفحه جزئیات پست هدایت می‌شود.
  const handlePostClick = (id: string) => {
    router.push(`/postContent/${id}`); // هدایت به صفحه جزئیات پست
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-16 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Side (3 images) */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          {/* Top Image */}
          {shuffledPostsData[0] && (
            <div
              className="h-auto min-h-[12rem] relative group cursor-pointer"
              onClick={() => handlePostClick(shuffledPostsData[0].id)}
            >
              <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <div className="absolute top-2 right-2 flex space-x-1 z-20">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${shuffledPostsData[0].categoryColor}`}
                  >
                    {shuffledPostsData[0].category}
                  </span>
                </div>
                <img
                  src={shuffledPostsData[0].image}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  alt={shuffledPostsData[0].title}
                />
                <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
                  {shuffledPostsData[0].title}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Images (2 side-by-side) */}
          <div className="flex gap-4">
            {shuffledPostsData.slice(1, 3).map((post) => (
              <div
                key={post.id}
                className="w-1/2 min-h-[12rem] h-auto relative group cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                  <div className="absolute top-2 right-2 flex space-x-1 z-20">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <img
                    src={post.image}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    alt={post.title}
                  />
                  <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
                    {post.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Large Image) */}
        {shuffledPostsData[3] && (
          <div
            className="col-span-1 lg:col-span-2 h-auto lg:h-full relative group cursor-pointer"
            onClick={() => handlePostClick(shuffledPostsData[3].id)}
          >
            <div className="bg-white shadow-md rounded-lg h-full overflow-hidden relative transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <div className="absolute top-2 right-2 flex space-x-1 z-20">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${shuffledPostsData[3].categoryColor}`}
                >
                  {shuffledPostsData[3].category}
                </span>
              </div>
              <img
                src={shuffledPostsData[3].image}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                alt={shuffledPostsData[3].title}
              />
              <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
                {shuffledPostsData[3].title}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBoxes;
