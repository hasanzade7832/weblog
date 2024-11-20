// components/Sidebar.tsx
'use client'
import React from 'react'
import SearchSide from '../Side/searchSide'
import NewestPosts from '../Side/newestPosts'
import Categories from '../Side/categorySide'

interface SidebarProps {
  posts: Array<any>; // می‌توانید نوع داده را دقیق‌تر تعریف کنید
}

const Sidebar: React.FC<SidebarProps> = ({ posts }) => {
  return (
    <div className='w-full md:w-1/4 bg-gray-200 rounded-3xl shadow-xl shadow-gray-300 p-4 space-y-4 order-2 md:order-1'>
      <div className='flex items-center justify-center bg-white rounded-3xl shadow-md p-4'>
        <SearchSide />
      </div>
      <div className='flex items-center justify-center bg-white rounded-3xl shadow-md p-4'>
        <NewestPosts posts={posts} />
      </div>
      <div className='flex items-center justify-center bg-white rounded-3xl shadow-md p-4'>
        <Categories />
      </div>
    </div>
  )
}

export default Sidebar
