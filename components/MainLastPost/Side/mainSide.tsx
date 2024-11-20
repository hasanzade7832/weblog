'use client'
import React from 'react'
import SearchSide from '../Side/searchSide'
import NewestPosts from '../Side/newestPosts'
import Categories from '../Side/categorySide'

interface SidebarProps {
  posts: Array<any>;
}

const Sidebar: React.FC<SidebarProps> = ({ posts }) => {
  return (
    <div className="w-full md:w-1/4 bg-gray-50 rounded-lg shadow-sm p-3 space-y-3 order-2 md:order-1">
      <div
        className="bg-white rounded-lg shadow p-3 sticky top-120"
      >
        <SearchSide />
      </div>
      <div className="bg-white rounded-lg shadow p-3">
        <NewestPosts posts={posts} />
      </div>
      <div className="bg-white rounded-lg shadow p-3">
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;

