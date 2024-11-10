"use client";

import React from 'react';

interface SearchBoxProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "جستجو", onSearch }) => {
    const [searchValue, setSearchValue] = React.useState("");

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchValue);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2 w-full max-w-md">
            {/* Centered Label with auto width based on text */}
            <div className="bg-blue-500 text-white rounded-lg px-4 py-2 mb-2 text-center text-sm font-semibold inline-block">
                دنبال چی می‌گردی؟
            </div>
            <div className="relative w-full">
                {/* Input Field */}
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={placeholder}
                    className="border border-gray-300 rounded-full p-2 pr-10 w-full text-right focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                {/* Search Icon inside input */}
                <button
                    onClick={handleSearch}
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-blue-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 105.53 12.59l4.24 4.24a1 1 0 001.42-1.42l-4.24-4.24A7 7 0 0011 4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
