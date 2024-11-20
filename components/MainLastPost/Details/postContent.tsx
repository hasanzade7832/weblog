'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const PostPage = () => {
  const { id } = useParams(); // استفاده از useParams برای دریافت id

  const postsData = [
    {
        id: "1",
        title: "نحوه فعال سازی اعلان ها در وردپرس",
        description: "توضیح مختصر در مورد فعال سازی اعلان ها...",
        date: "۳۰ دی ۱۴۰۳",
        category: "شیوه زندگی",
        categoryColor: "bg-pink-200 text-pink-700",
        image: "/image/flower6.webp",
      },
      {
        id: "2",
        title: "سبک زندگی سالم",
        description: "توضیح مختصر در مورد سبک زندگی سالم...",
        date: "۲۷ آبان ۱۴۰۳",
        category: "شیوه زندگی",
        categoryColor: "bg-pink-200 text-pink-700",
        image: "/image/flower7.webp",
      },
      {
        id: "3",
        title: "تکنیک‌های بهبود خواب",
        description: "توضیح مختصر در مورد بهبود خواب...",
        date: "۱۵ مهر ۱۴۰۳",
        category: "شیوه زندگی",
        categoryColor: "bg-pink-200 text-pink-700",
        image: "/image/flower8.webp",
      },
      {
        id: "4",
        title: "مدیریت استرس",
        description: "توضیح مختصر در مورد مدیریت استرس...",
        date: "۱۰ تیر ۱۴۰۳",
        category: "شیوه زندگی",
        categoryColor: "bg-pink-200 text-pink-700",
        image: "/image/flower9.webp",
      },
      {
        id: "5",
        title: "طراحی وب سایت تک صفحه ای با فیگما",
        description: "توضیح مختصر در مورد طراحی وب سایت...",
        date: "۳۰ دی ۱۴۰۳",
        category: "غذا و نوشیدنی",
        categoryColor: "bg-blue-200 text-blue-700",
        image: "/image/flower6.webp",
      },
      {
        id: "6",
        title: "رژیم غذایی مناسب",
        description: "توضیح مختصر در مورد رژیم غذایی...",
        date: "۲۵ دی ۱۴۰۳",
        category: "غذا و نوشیدنی",
        categoryColor: "bg-blue-200 text-blue-700",
        image: "/image/flower7.webp",
      },
      {
        id: "7",
        title: "تکنیک‌های آشپزی",
        description: "توضیح مختصر در مورد آشپزی...",
        date: "۱۱ دی ۱۴۰۳",
        category: "غذا و نوشیدنی",
        categoryColor: "bg-blue-200 text-blue-700",
        image: "/image/flower8.webp",
      },
      {
        id: "8",
        title: "نوشیدنی‌های سالم",
        description: "توضیح مختصر در مورد نوشیدنی‌های سالم...",
        date: "۱ آذر ۱۴۰۳",
        category: "غذا و نوشیدنی",
        categoryColor: "bg-blue-200 text-blue-700",
        image: "/image/flower9.webp",
      },
      {
        id: "9",
        title: "این آخرین بروزرسانی ویندوز...",
        description: "توضیح مختصر در مورد بروزرسانی ویندوز...",
        date: "1 سال پیش",
        category: "فناوری",
        categoryColor: "bg-gray-200 text-gray-700",
        image: "/image/flower6.webp",
      },
      {
        id: "10",
        title: "واکنش جنجالی و جالب...",
        description: "توضیح مختصر در مورد واکنش جنجالی...",
        date: "1 سال پیش",
        category: "اخبار",
        categoryColor: "bg-gray-200 text-gray-700",
        image: "/image/flower7.webp",
      },
      {
        id: "11",
        title: "حیرت انگیز مثل بروزرسانی‌های...",
        description: "توضیح مختصر در مورد بروزرسانی‌های حیرت انگیز...",
        date: "1 سال پیش",
        category: "فناوری",
        categoryColor: "bg-gray-200 text-gray-700",
        image: "/image/flower8.webp",
      },
      {
        id: "12",
        title: "اخبار جدید شبکه ارتباطی",
        description: "توضیح مختصر در مورد شبکه ارتباطی...",
        date: "1 سال پیش",
        category: "شبکه ارتباطی",
        categoryColor: "bg-gray-200 text-gray-700",
        image: "/image/flower9.webp",
      },
  ];

  const post = postsData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">پست یافت نشد</h1>
        <p className="mt-4 text-lg">پستی با این شناسه وجود ندارد.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mt-4" />
      <p className="mt-4 text-lg">{post.description}</p>
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <span>{post.date}</span>
        <span>دسته‌بندی: {post.category}</span>
      </div>
    </div>
  );
};

export default PostPage;
