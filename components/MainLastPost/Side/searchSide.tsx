'use client'

import React from 'react'

interface SearchBoxProps {
  placeholder?: string
  onSearch?: (value: string) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'جستجو',
  onSearch
}) => {
  const [searchValue, setSearchValue] = React.useState('')

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue)
    }
  }

  return (
    <div className='flex flex-col items-center w-full space-y-3 rtl'>
      <div className='text-sm font-semibold text-[#1d4ed8] text-center bg-[#bfdbfe] py-2 rounded-md p-5'>
        دنبال چی می‌گردی؟
      </div>

      <div className='relative w-full'>
        <input
          type='text'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder={placeholder}
          className='border border-gray-200 rounded-full px-4 py-2 w-full text-sm text-gray-800 text-right focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow duration-300 shadow-sm'
        />
        <button
          onClick={handleSearch}
          className='absolute inset-y-0 left-3 flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M11 4a7 7 0 105.53 12.59l4.24 4.24a1 1 0 001.42-1.42l-4.24-4.24A7 7 0 0011 4z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchBox
