import React from 'react';

interface CardItemProps {
  title: string;
  description: string;
  category: string;
  date: string;
  categoryColor: string;
  image: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, description, category, date, categoryColor, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4 flex flex-col text-right">
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

const CardList: React.FC = () => {
  const categories = [
    {
      name: "شیوه زندگی",
      iconClass: "pi pi-heart",
      colorClass: "bg-pink-200 text-pink-700",
      items: [
        { title: "نحوه فعال سازی اعلان ها در وردپرس", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower6.webp" },
        { title: "سبک زندگی سالم", description: "توضیح مختصر...", date: "۲۷ آبان ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower7.webp" },
        { title: "تکنیک‌های بهبود خواب", description: "توضیح مختصر...", date: "۱۵ مهر ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower8.webp" },
        { title: "مدیریت استرس", description: "توضیح مختصر...", date: "۱۰ تیر ۱۴۰۳", categoryColor: "bg-pink-200 text-pink-700", image: "/image/flower9.webp" },
      ],
    },
    {
      name: "غذا و نوشیدنی",
      iconClass: "pi pi-utensils",
      colorClass: "bg-blue-200 text-blue-700",
      items: [
        { title: "طراحی وب سایت تک صفحه ای با فیگما", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower6.webp" },
        { title: "رژیم غذایی مناسب", description: "توضیح مختصر...", date: "۲۵ دی ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower7.webp" },
        { title: "تکنیک‌های آشپزی", description: "توضیح مختصر...", date: "۱۱ دی ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower8.webp" },
        { title: "نوشیدنی‌های سالم", description: "توضیح مختصر...", date: "۱ آذر ۱۴۰۳", categoryColor: "bg-blue-200 text-blue-700", image: "/image/flower9.webp" },
      ],
    },
    {
      name: "سلامتی",
      iconClass: "pi pi-medkit",
      colorClass: "bg-green-200 text-green-700",
      items: [
        { title: "معرفی افزونه های کاربردی وردپرس", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-green-200 text-green-700", image: "/image/flower6.webp" },
        { title: "ورزش روزانه", description: "توضیح مختصر...", date: "۱۸ آذر ۱۴۰۳", categoryColor: "bg-green-200 text-green-700", image: "/image/flower7.webp" },
        { title: "اهمیت مصرف ویتامین‌ها", description: "توضیح مختصر...", date: "۲۲ آبان ۱۴۰۳", categoryColor: "bg-green-200 text-green-700", image: "/image/flower8.webp" },
        { title: "سلامت روان", description: "توضیح مختصر...", date: "۱۰ مهر ۱۴۰۳", categoryColor: "bg-green-200 text-green-700", image: "/image/flower9.webp" },
      ],
    },
  ];

  return (
    <div className="w-full p-1 md:p-3 lg:p-4 space-y-20 text-right">
      {categories.map((category, index) => (
        <div key={index} className="w-full mb-4">
          <div className={`flex items-center justify-end ${category.colorClass} rounded-full p-3 shadow-sm mb-4`}>
            <span className="text-gray-800 font-medium ml-2">{category.name}</span>
            <span className="text-gray-500">
              <i className={category.iconClass}></i>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.items.map((item, itemIndex) => (
              <CardItem
                key={itemIndex}
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
