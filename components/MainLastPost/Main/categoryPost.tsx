'use client';
import React from 'react';
import CardItem from './cardItem';

const CardList: React.FC = () => {
  const categories = [
    {
      name: "شیوه زندگی",
      colorClass: "bg-pink-200 text-pink-700",
      items: [
        { id: "1", title: "نحوه فعال سازی اعلان ها در وردپرس", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower6.webp" },
        { id: "2", title: "سبک زندگی سالم", description: "توضیح مختصر...", date: "۲۷ آبان ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower7.webp" },
        { id: "3", title: "تکنیک‌های بهبود خواب", description: "توضیح مختصر...", date: "۱۵ مهر ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower8.webp" },
        { id: "4", title: "مدیریت استرس", description: "توضیح مختصر...", date: "۱۰ تیر ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower9.webp" },
      ],
    },
    {
      name: "غذا و نوشیدنی",
      colorClass: "bg-blue-200 text-blue-700",
      items: [
        { id: "5", title: "طراحی وب سایت تک صفحه ای با فیگما", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower6.webp" },
        { id: "6", title: "رژیم غذایی مناسب", description: "توضیح مختصر...", date: "۲۵ دی ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower7.webp" },
        { id: "7", title: "تکنیک‌های آشپزی", description: "توضیح مختصر...", date: "۱۱ دی ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower8.webp" },
        { id: "8", title: "نوشیدنی‌های سالم", description: "توضیح مختصر...", date: "۱ آذر ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower9.webp" },
      ],
    },
  ];

  return (
    <div className="w-full p-1 md:p-3 lg:p-4 space-y-20 text-right">
      {categories.map((category, index) => (
        <div key={index} className="w-full mb-4">
          <div className={`flex items-center justify-end ${category.colorClass} rounded-full p-3 shadow-sm mb-4`}>
            <span className="text-gray-800 font-medium ml-2">{category.name}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.items.map((item, itemIndex) => (
              <CardItem
                key={itemIndex}
                id={item.id}
                title={item.title}
                description={item.description}
                category={category.name}
                date={item.date}
                categoryColor={item.categoryColor}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
