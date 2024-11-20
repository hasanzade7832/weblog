'use client';
import React from 'react';
import CardItem from './cardItem';

const CardList: React.FC = () => {
  const categories = [
    {
      name: "شیوه زندگی",
      colorClass: "bg-pink-200 text-pink-700",
      items: [
        {
          id: "1",
          title: "نحوه فعال سازی اعلان ها در وردپرس",
          shortDescription: "آموزش فعال‌سازی اعلان‌ها در وردپرس به زبان ساده.",
          date: "۳۰ دی ۱۴۰۳",
          categoryColor: "bg-pink-200 text-pink-700",
          image: "/image/flower6.webp",
        },
        {
          id: "2",
          title: "سبک زندگی سالم",
          shortDescription: "نکات کلیدی برای حفظ سلامتی در زندگی روزمره.",
          date: "۲۷ آبان ۱۴۰۳",
          categoryColor: "bg-pink-200 text-pink-700",
          image: "/image/flower7.webp",
        },
        {
          id: "3",
          title: "تکنیک‌های بهبود خواب",
          shortDescription: "روش‌هایی برای تجربه خواب عمیق و باکیفیت.",
          date: "۱۵ مهر ۱۴۰۳",
          categoryColor: "bg-pink-200 text-pink-700",
          image: "/image/flower8.webp",
        },
        {
          id: "4",
          title: "مدیریت استرس",
          shortDescription: "بهترین تکنیک‌ها برای کنترل و کاهش استرس.",
          date: "۱۰ تیر ۱۴۰۳",
          categoryColor: "bg-pink-200 text-pink-700",
          image: "/image/flower9.webp",
        },
      ],
    },
    {
      name: "غذا و نوشیدنی",
      colorClass: "bg-blue-200 text-blue-700",
      items: [
        {
          id: "5",
          title: "طراحی وب سایت تک صفحه ای با فیگما",
          shortDescription: "آموزش طراحی سایت با ابزار محبوب فیگما.",
          date: "۳۰ دی ۱۴۰۳",
          categoryColor: "bg-blue-200 text-blue-700",
          image: "/image/flower6.webp",
        },
        {
          id: "6",
          title: "رژیم غذایی مناسب",
          shortDescription: "راهنمایی برای انتخاب رژیم غذایی سالم و متعادل.",
          date: "۲۵ دی ۱۴۰۳",
          categoryColor: "bg-blue-200 text-blue-700",
          image: "/image/flower7.webp",
        },
        {
          id: "7",
          title: "تکنیک‌های آشپزی",
          shortDescription: "آموزش تکنیک‌های حرفه‌ای برای پخت و پز.",
          date: "۱۱ دی ۱۴۰۳",
          categoryColor: "bg-blue-200 text-blue-700",
          image: "/image/flower8.webp",
        },
        {
          id: "8",
          title: "نوشیدنی‌های سالم",
          shortDescription: "معرفی نوشیدنی‌های طبیعی و مفید برای سلامتی.",
          date: "۱ آذر ۱۴۰۳",
          categoryColor: "bg-blue-200 text-blue-700",
          image: "/image/flower9.webp",
        },
      ],
    },
  ];

  return (
    <div className="w-full p-1 md:p-3 lg:p-4 space-y-20 text-right">
      {categories.map((category, index) => (
        <div key={index} className="w-full mb-4">
          {/* دسته‌بندی */}
          <div className={`flex items-center justify-end ${category.colorClass} rounded-full p-3 shadow-sm mb-4`}>
            <span className="text-gray-800 font-medium ml-2">{category.name}</span>
          </div>

          {/* آیتم‌های مربوط به دسته‌بندی */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.items.map((item, itemIndex) => (
              <CardItem
                key={itemIndex}
                id={item.id}
                title={item.title}
                description={item.shortDescription}
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
