"use client";

import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // کنترل باز بودن منوی موبایل
  const [isSearchOpen, setIsSearchOpen] = useState(false); // کنترل باز شدن کادر جستجو

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // باز و بسته کردن منوی موبایل
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen); // باز و بسته کردن جستجو

  const menuItems = [
    { label: "ورود | ثبت‌نام", icon: <BiLogIn />, isLogin: true },
    { label: "خانه", icon: "🏠" },
    { label: "دسته‌بندی‌ها", icon: "📂" },
    { label: "محصولات جدید", icon: "🆕" },
    { label: "پرفروش‌ها", icon: "🔥" },
    { label: "تخفیف‌ها", icon: "💸" },
    { label: "ارتباط با ما", icon: "📞" },
    { label: "درباره ما", icon: "ℹ️" },
  ];

  return (
    <div className="relative">
      {/* Header Section */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-center py-4 px-8 bg-gray-100 shadow-md border-b border-gray-300">
        {/* موبایل: آیکون جستجو، برند، و منو */}
        <div className="flex items-center w-full sm:hidden justify-between">
          <button
            className="text-gray-600 text-2xl focus:outline-none cursor-pointer hover:bg-gray-300 p-2 rounded-full transition duration-300"
            onClick={toggleSearch}
          >
            <FaSearch />
          </button>
          <div className="text-lg font-bold text-gray-800">🍱 برند شما</div>
          <button
            className="text-gray-600 text-2xl focus:outline-none cursor-pointer hover:bg-gray-300 p-2 rounded-full transition duration-300"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>

        {/* دسکتاپ: منو، جستجو، برند و ورود */}
        <div className="hidden sm:flex items-center justify-between w-full">
          {/* دکمه ورود */}
          <button className="bg-white text-gray-700 border border-gray-400 hover:bg-gray-300 hover:text-gray-900 flex items-center px-4 py-2 rounded-full text-sm cursor-pointer transition duration-300">
            <BiLogIn className="text-lg ml-2" />
            <span>ورود | ثبت‌نام</span>
          </button>

          {/* منو */}
          <nav className="flex items-center gap-4">
            {menuItems.slice(1).map((item, index) => (
              <div
                key={index}
                className="flex items-center text-gray-700 text-base font-bold hover:bg-gray-300 hover:text-gray-900 rounded-full px-2 py-1 cursor-pointer transition duration-300 ease-in-out"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="ml-2">{item.label}</span>
              </div>
            ))}
          </nav>

          {/* جستجو */}
          <div className="relative flex items-center w-1/4">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white shadow-md text-gray-700 text-right focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* برند */}
          <div className="text-lg sm:text-2xl font-bold tracking-wider text-gray-800">
            🍱 برند شما
          </div>
        </div>
      </header>

      {/* موبایل: کادر جستجو */}
      <div
        className={`sm:hidden bg-white shadow-md w-full absolute top-16 left-0 px-4 py-2 transition-transform duration-300 ${
          isSearchOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 shadow-sm text-gray-700 text-right focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* موبایل: منو */}
      <nav
        className={`sm:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-200 shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-gray-300 shadow-md">
          <span className="text-lg font-bold text-gray-700">منو</span>
          <button
            className="text-gray-600 text-2xl focus:outline-none cursor-pointer hover:bg-gray-300 p-2 rounded-full transition duration-300"
            onClick={toggleMenu}
          >
            ✖️
          </button>
        </div>
        <ul className="flex flex-col items-start gap-4 px-4 py-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center text-gray-700 text-base font-medium hover:bg-gray-300 hover:text-gray-900 rounded-full px-3 py-1 cursor-pointer transition duration-300 ease-in-out w-full ${
                item.isLogin ? "font-bold text-gray-800" : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="ml-2">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
