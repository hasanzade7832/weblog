import React from 'react';

type ButtonProps = {
  label: string;
  icon: string;
  color: string;
  hoverColor: string;
};

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttons?: ButtonProps[];  // آرایه‌ای از دکمه‌ها
  reverseLayout?: boolean; // برای کنترل چینش از راست به چپ یا چپ به راست
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttons = [], reverseLayout = true }) => {
  return (
    <div className="px-4 md:px-12 lg:px-36">
      <div
        className={`w-full border bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out flex ${
          reverseLayout ? 'flex-row-reverse' : 'flex-row'
        } items-center p-2 justify-center hover:bg-gray-200`}
      >
        {/* تصویر */}
        <div className="w-32 h-32 flex-shrink-0 ml-6">
          <img className="w-full h-full object-cover rounded-md" src={imageUrl} alt={title} />
        </div>
        {/* محتوا */}
        <div className="p-8 flex-1 text-right">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
          <div className="flex items-center justify-end mt-4 gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`${button.color} text-white px-3 py-1 rounded-md ${button.hoverColor} transition-colors duration-300 flex items-center`}
              >
                {button.label}
                <span className="ml-1">{button.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
