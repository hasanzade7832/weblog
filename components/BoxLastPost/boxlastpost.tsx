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
  reverseLayout?: boolean;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttons = [], reverseLayout = true }) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out p-4 hover:bg-gray-200">
      <div
        className={`w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out flex flex-col md:flex-${
          reverseLayout ? 'row-reverse' : 'row'
        } items-center md:items-start p-4`}
      >
        {/* تصویر */}
        <div
          className={`w-full md:w-32 md:h-32 flex-shrink-0 mb-4 md:mb-0 ${
            reverseLayout ? 'md:ml-4 lg:ml-8' : 'md:mr-4 lg:mr-8'
          }`}
        >
          <img className="w-full h-full object-cover rounded-md" src={imageUrl} alt={title} />
        </div>
        {/* محتوا */}
        <div className="w-full md:flex-1 text-center md:text-right">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
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
      </div>
    </div>
  );
};

export default Card;
