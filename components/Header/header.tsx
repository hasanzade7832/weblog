"use client";

import React, { useState, useRef } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const menuItems = [
    { label: "خانه", icon: "🏠" },
    { label: "دسته بندی‌ها", icon: "📂" },
    { label: "محصولات جدید", icon: "🆕" },
    { label: "پرفروش‌ها", icon: "🔥" },
    { label: "تخفیف‌ها", icon: "💸" },
    { label: "ارتباط با ما", icon: "📞" },
    { label: "درباره ما", icon: "ℹ️" },
  ];

  return (
    <div>
      {/* Header */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-center py-4 px-8 bg-gray-100 shadow-md border-b border-gray-300">
        <div className="hidden sm:flex items-center space-x-4 rtl:space-x-reverse">
          <button className="p-button-outlined bg-white text-gray-700 border border-gray-400 hover:bg-gray-300 hover:text-gray-900 flex items-center px-4 py-2 rounded-full text-sm cursor-pointer transition duration-300">
            <BiLogIn className="text-lg ml-2" />
            <span>ورود | ثبت‌نام</span>
          </button>
        </div>

        <div className=" flex items-center justify-between w-full sm:hidden">
          <button
            className="text-gray-600 text-2xl focus:outline-none cursor-pointer hover:bg-gray-300 p-2 rounded-full transition duration-300"
            onClick={toggleSearch}
          >
            <FaSearch />
          </button>
          <div className="text-lg sm:text-2xl font-bold tracking-wider text-gray-800">
            🍱 برند شما
          </div>
          <button
            className="text-gray-600 text-2xl focus:outline-none ml-2 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition duration-300"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>

        <div
          className={` relative flex items-center transition-all duration-300 ease-in-out ${
            isSearchOpen ? "w-full sm:w-1/3 mt-4" : "w-0 overflow-hidden"
          } sm:w-1/3 sm:mt-0`}
        >
          <input
            type="text"
            placeholder="جستجو..."
            className=" w-full pl-10 pr-4 py-2 rounded-full bg-white shadow-md text-gray-700 text-right focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{ boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}
          />
          <FaSearch className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-500 hidden sm:block" />
          <div className="w-1/2 hidden sm:block text-lg sm:text-2xl font-bold tracking-wider text-gray-800 ml-20">
            🍱 برند شما 
          </div>
        </div>
      </header>

      {/* Menu Section */}
      <nav className="w-full bg-gray-200 py-3 shadow-md">
        <ul className="flex flex-wrap justify-center gap-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-1 rtl:space-x-reverse text-gray-700 text-base font-medium hover:bg-gray-300 hover:text-gray-900 rounded-full px-3 py-1 cursor-pointer transition-colors duration-300 ease-in-out"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
