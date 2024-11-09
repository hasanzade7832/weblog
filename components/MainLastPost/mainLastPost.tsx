import React from 'react';
import BoxLastPost from "../BoxLastPost/boxlastpost";

const App: React.FC = () => {
    return (
        <div className="px-4 md:px-12 lg:px-36 flex flex-col md:flex-row h-screen p-4 space-y-4 md:space-y-0 md:space-x-4">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 space-y-4 border-2 border-gray-300 order-2 md:order-1">
                <div className="flex items-center justify-center h-20 bg-blue-200 rounded-lg">
                    <span className="text-2xl font-semibold">2</span>
                </div>
                <div className="flex items-center justify-center h-20 bg-blue-200 rounded-lg">
                    <span className="text-2xl font-semibold">3</span>
                </div>
                <div className="flex items-center justify-center h-20 bg-blue-200 rounded-lg">
                    <span className="text-2xl font-semibold">4</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:flex-1 bg-white rounded-lg shadow-md p-4 space-y-4 border-2 border-gray-300 order-1 md:order-2">
                {/* Cards */}
                <BoxLastPost
                    title="عنوان کارت اول"
                    description="توضیحات مربوط به کارت اول"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'مدیر سایت', icon: '👤', color: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
                        { label: '1 سال پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'آموزش', icon: '📘', color: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
                    ]}
                />

                <BoxLastPost
                    title="عنوان کارت دوم"
                    description="توضیحات مربوط به کارت دوم"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'نویسنده', icon: '👤', color: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
                        { label: '6 ماه پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'مقاله', icon: '📄', color: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-600' },
                    ]}
                />

                <BoxLastPost
                    title="عنوان کارت سوم"
                    description="توضیحات مربوط به کارت سوم"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'ویرایشگر', icon: '👤', color: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
                        { label: '3 ماه پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'خبر', icon: '📰', color: 'bg-teal-500', hoverColor: 'hover:bg-teal-600' },
                    ]}
                />
            </div>
        </div>
    );
};

export default App;
