import React from 'react';

interface CardItemProps {
  title: string;
  description: string;
  category: string;
  date: string;
  categoryColor: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, description, category, date, categoryColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4 flex flex-col text-right">
      <div className="rounded-lg overflow-hidden -mx-4 -mt-4">
        <img
          src="https://via.placeholder.com/300x200"
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
      colorClass: "bg-pink-500 text-white",
      items: [
        { title: "نحوه فعال سازی اعلان ها در وردپرس", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-pink-500 text-white" },
        { title: "سبک زندگی سالم", description: "توضیح مختصر...", date: "۲۷ آبان ۱۴۰۳", categoryColor: "bg-pink-500 text-white" },
        { title: "تکنیک‌های بهبود خواب", description: "توضیح مختصر...", date: "۱۵ مهر ۱۴۰۳", categoryColor: "bg-pink-500 text-white" },
        { title: "مدیریت استرس", description: "توضیح مختصر...", date: "۱۰ تیر ۱۴۰۳", categoryColor: "bg-pink-500 text-white" },
      ],
    },
    {
      name: "غذا و نوشیدنی",
      iconClass: "pi pi-utensils",
      colorClass: "bg-yellow-500 text-white",
      items: [
        { title: "طراحی وب سایت تک صفحه ای با فیگما", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-yellow-500 text-white" },
        { title: "رژیم غذایی مناسب", description: "توضیح مختصر...", date: "۲۵ دی ۱۴۰۳", categoryColor: "bg-yellow-500 text-white" },
        { title: "تکنیک‌های آشپزی", description: "توضیح مختصر...", date: "۱۱ دی ۱۴۰۳", categoryColor: "bg-yellow-500 text-white" },
        { title: "نوشیدنی‌های سالم", description: "توضیح مختصر...", date: "۱ آذر ۱۴۰۳", categoryColor: "bg-yellow-500 text-white" },
      ],
    },
    {
      name: "سلامتی",
      iconClass: "pi pi-medkit",
      colorClass: "bg-green-500 text-white",
      items: [
        { title: "معرفی افزونه های کاربردی وردپرس", description: "توضیح مختصر...", date: "۳۰ دی ۱۴۰۳", categoryColor: "bg-green-500 text-white" },
        { title: "ورزش روزانه", description: "توضیح مختصر...", date: "۱۸ آذر ۱۴۰۳", categoryColor: "bg-green-500 text-white" },
        { title: "اهمیت مصرف ویتامین‌ها", description: "توضیح مختصر...", date: "۲۲ آبان ۱۴۰۳", categoryColor: "bg-green-500 text-white" },
        { title: "سلامت روان", description: "توضیح مختصر...", date: "۱۰ مهر ۱۴۰۳", categoryColor: "bg-green-500 text-white" },
      ],
    },
  ];

  return (
    <div className="w-full p-4 md:p-12 lg:p-16 space-y-4">
      {categories.map((category, index) => (
        <div key={index} className="w-full mb-4">
          {/* دسته‌بندی */}
          <div className="flex items-center justify-end bg-gray-100 rounded-full p-3 shadow-sm mb-4 -mt-12">
            <span className="text-gray-800 font-medium mr-2">{category.name}</span>
            <span className="text-gray-500">
              <i className={category.iconClass}></i>
            </span>
          </div>

          {/* بخش کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.items.map((item, itemIndex) => (
              <CardItem
                key={itemIndex}
                title={item.title}
                description={item.description}
                category={category.name}
                date={item.date}
                categoryColor={item.categoryColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
