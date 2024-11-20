// components/cardItem.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface CardItemProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  categoryColor: string;
  image: string;
}

const CardItem: React.FC<CardItemProps> = ({ id, title, description, category, date, categoryColor, image }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/postContent/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4 flex flex-col text-right cursor-pointer"
    >
      <div className="rounded-lg overflow-hidden -mx-4 -mt-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition duration-300 hover:opacity-80"
        />
      </div>
      <h2 className="text-lg font-bold mt-3">{title}</h2>
      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center mt-4 text-right">
        <div className="flex items-center text-gray-400 text-sm" dir="rtl">
          <span>{date}</span>
          <i className="pi pi-calendar mr-2"></i>
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded-md ${categoryColor}`}>
          {category}
        </span>
      </div>
    </div>
  );
};

export default CardItem;
