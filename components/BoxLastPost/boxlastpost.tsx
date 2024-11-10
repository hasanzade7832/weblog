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
  buttons?: ButtonProps[];
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttons = [] }) => {
  return (
    <div className="w-full rounded-3xl overflow-hidden transition-transform duration-500 ease-in-out p-1 bg-gray-200 shadow-xl shadow-gray-300 hover:shadow-2xl hover:shadow-gray-400 hover:scale-105">
      <div className="w-full bg-white rounded-3xl flex flex-col md:flex-row items-center md:items-start p-4 gap-4 transition-all duration-500 ease-in-out">
        {/* محتوا */}
        <div className="w-full md:flex-1 text-center md:text-right">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end mt-4 gap-2">
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
        {/* تصویر در سمت راست */}
        <div className="w-full md:w-32 md:h-32 flex-shrink-0 mb-4 md:mb-0">
          <img className="w-full h-full object-cover rounded-3xl" src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card;
