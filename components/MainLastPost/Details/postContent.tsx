'use client'
import React from 'react'
import Sidebar from '../Side/mainSide'
import Tags from './tags'
import { useParams } from 'next/navigation'
import { FaCalendarAlt, FaUser, FaEye } from 'react-icons/fa'
import Comment from './comments' // آیکون‌ها

const PostPage = () => {
  const { id } = useParams()
  const postsData = [
    {
      id: '1',
      title: 'نحوه فعال سازی اعلان ها در وردپرس',
      shortDescription: 'آموزش فعال‌سازی اعلان‌ها در وردپرس به زبان ساده.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۳۰ دی ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 105,
      author: 'حمید اسلامی',
      image: '/image/flower6.webp'
    },
    {
      id: '2',
      title: 'سبک زندگی سالم',
      shortDescription: 'نکات کلیدی برای حفظ سلامتی در زندگی روزمره.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۲۷ آبان ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 83,
      author: 'زهرا احمدی',
      image: '/image/flower7.webp'
    },
    {
      id: '3',
      title: 'تکنیک‌های بهبود خواب',
      shortDescription: 'روش‌هایی برای تجربه خواب عمیق و باکیفیت.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۱۵ مهر ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 94,
      author: 'علی رضایی',
      image: '/image/flower8.webp'
    },
    {
      id: '4',
      title: 'مدیریت استرس',
      shortDescription: 'بهترین تکنیک‌ها برای کنترل و کاهش استرس.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۱۰ تیر ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryColor: 'bg-pink-200 text-pink-700',
      views: 120,
      author: 'مینا بهشتی',
      image: '/image/flower9.webp'
    },
    {
      id: '5',
      title: 'طراحی وب سایت تک صفحه ای با فیگما',
      shortDescription: 'آموزش طراحی سایت با ابزار محبوب فیگما.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۳۰ دی ۱۴۰۳',
      category: 'غذا و نوشیدنی',
      categoryColor: 'bg-blue-200 text-blue-700',
      views: 95,
      author: 'محمد کریمی',
      image: '/image/flower6.webp'
    },
    {
      id: '6',
      title: 'رژیم غذایی مناسب',
      shortDescription: 'راهنمایی برای انتخاب رژیم غذایی سالم و متعادل.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۲۵ دی ۱۴۰۳',
      category: 'غذا و نوشیدنی',
      categoryColor: 'bg-blue-200 text-blue-700',
      views: 112,
      author: 'سارا امیری',
      image: '/image/flower7.webp'
    },
    {
      id: '7',
      title: 'تکنیک‌های آشپزی',
      shortDescription: 'آموزش تکنیک‌های حرفه‌ای برای پخت و پز.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۱۱ دی ۱۴۰۳',
      category: 'غذا و نوشیدنی',
      categoryColor: 'bg-blue-200 text-blue-700',
      views: 75,
      author: 'فاطمه حسنی',
      image: '/image/flower8.webp'
    },
    {
      id: '8',
      title: 'نوشیدنی‌های سالم',
      shortDescription: 'معرفی نوشیدنی‌های طبیعی و مفید برای سلامتی.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۱ آذر ۱۴۰۳',
      category: 'غذا و نوشیدنی',
      categoryColor: 'bg-blue-200 text-blue-700',
      views: 89,
      author: 'رضا تیموری',
      image: '/image/flower9.webp'
    },
    {
      id: '9',
      title: 'این آخرین بروزرسانی ویندوز...',
      shortDescription: 'اطلاعات جدید درباره آخرین بروزرسانی ویندوز.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '1 سال پیش',
      category: 'فناوری',
      categoryColor: 'bg-gray-200 text-gray-700',
      views: 133,
      author: 'علی افشار',
      image: '/image/flower6.webp'
    },
    {
      id: '10',
      title: 'واکنش جنجالی و جالب...',
      shortDescription: 'تحلیل واکنش‌های جنجالی اخیر در فضای خبری.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '1 سال پیش',
      category: 'اخبار',
      categoryColor: 'bg-gray-200 text-gray-700',
      views: 140,
      author: 'مهسا کیانی',
      image: '/image/flower7.webp'
    },
    {
      id: '11',
      title: 'حیرت انگیز مثل بروزرسانی‌های...',
      shortDescription: 'مروری بر تغییرات شگفت‌انگیز نسخه‌های جدید.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '1 سال پیش',
      category: 'فناوری',
      categoryColor: 'bg-gray-200 text-gray-700',
      views: 98,
      author: 'علیرضا نوروزی',
      image: '/image/flower8.webp'
    },
    {
      id: '12',
      title: 'اخبار جدید شبکه ارتباطی',
      shortDescription: 'تازه‌ترین اخبار درباره شبکه‌های ارتباطی.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '1 سال پیش',
      category: 'شبکه ارتباطی',
      categoryColor: 'bg-gray-200 text-gray-700',
      views: 110,
      author: 'نیلوفر ابراهیمی',
      image: '/image/flower9.webp'
    }
  ]

  const post = postsData.find(p => p.id === id)

  if (!post) {
    return (
      <div className='p-4'>
        <h1 className='text-2xl font-bold text-center'>پست یافت نشد</h1>
        <p className='mt-4 text-lg text-right'>پستی با این شناسه وجود ندارد.</p>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col md:flex-row p-4 md:p-12 lg:p-16 space-y-4 md:space-y-0 md:space-x-4 items-start'>
      {/* سایدبار */}
      <Sidebar posts={postsData} />
  
      {/* بخش اصلی */}
      <div className='w-full md:w-2/3 flex-1 rounded-3xl p-6 space-y-4 order-1 md:order-2 shadow-xl shadow-gray-300 bg-white'>
        {/* دسته‌بندی و عنوان */}
        <div className='flex flex-wrap md:flex-nowrap justify-between items-center p-4'>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${post.categoryColor}`}
          >
            {post.category}
          </span>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-right'>
            {post.title}
          </h1>
        </div>
  
        {/* تصویر */}
        <div className='relative mt-2'>
          <img
            src={post.image}
            alt={post.title}
            className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg border border-gray-200'
          />
        </div>
  
       {/* اطلاعات اضافی */}
<div className='flex flex-wrap justify-end items-center mt-6 gap-x-4 gap-y-2 text-gray-700'>
  <div className='flex items-center gap-x-2'>
    <span className='text-sm font-bold'>تاریخ: {post.date}</span>
    <FaCalendarAlt className='text-blue-500' />
  </div>
  <div className='flex items-center gap-x-2'>
    <span className='text-sm font-bold'>توسط: {post.author}</span>
    <FaUser className='text-green-500' />
  </div>
  <div className='flex items-center gap-x-2'>
    <span className='text-sm font-bold'>{post.views} بازدید</span>
    <FaEye className='text-orange-500' />
  </div>
</div>

  
        {/* خط‌چین */}
        <hr className='border-dashed border-gray-300 my-6' />
  
        {/* توضیحات */}
        <p className='mt-4 text-base sm:text-lg text-right'>{post.description}</p>
  
        {/* باکس استاتیک */}
        <div className='mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-6 bg-gray-100 rounded-lg shadow-lg'>
          <div className='flex-shrink-0 w-full md:w-1/4'>
            <img
              src='/image/flower7.webp'
              alt='تصویر استاتیک'
              className='w-full h-[150px] object-cover rounded-lg shadow-md'
            />
          </div>
          <div className='w-full md:w-3/4 text-right'>
            <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mb-2'>
              عنوان استاتیک
            </h2>
            <p className='text-gray-700 leading-7 text-sm sm:text-base'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و...
            </p>
          </div>
        </div>
  
        {/* کارت استاتیک */}
        <div className='mt-6 mx-auto w-full sm:w-3/4 lg:w-1/2 p-6 bg-white rounded-lg shadow-lg border border-gray-300 text-center transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white'>
          <p className='text-gray-700 leading-7 italic hover:text-white'>
            "طراحی یک محصول با تمرکز بر روی رفتارهای یک قشر از جامعه کار بسیار..."
          </p>
          <div className='mt-4 flex justify-between items-center'>
            <button className='px-4 py-1 bg-blue-600 text-white rounded-lg shadow-md text-sm hover:bg-blue-800 hover:text-white transition-colors duration-300'>
              استیو جابز
            </button>
            <div className='flex items-center hover:text-white'>
              <hr className='border-gray-300 flex-grow mx-2 hover:border-white transition-colors duration-300' />
              <span className='text-blue-600 text-2xl font-bold transition-colors duration-300'>
                &#8221;
              </span>
            </div>
          </div>
        </div>
  
        {/* باکس جدید استاتیک */}
        <div className='mt-6 p-6 bg-gray-50 rounded-lg shadow-md'>
          <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-right mb-4'>
            عنوان باکس جدید
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* ستون اول */}
            <ul className='space-y-4'>
              {['۱', '۲', '۳', '۴'].map((item, idx) => (
                <li className='flex items-start' key={idx}>
                  <p className='text-gray-700 leading-6 text-right flex-1'>
                    توضیح مورد {item} به صورت ساده و قابل فهم...
                  </p>
                  <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm font-bold ml-4'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
  
            {/* ستون دوم */}
            <ul className='space-y-4'>
              {['-', '-', '-', '-'].map((item, idx) => (
                <li className='flex items-start' key={idx}>
                  <p className='text-gray-700 leading-6 text-right flex-1'>
                    توضیح مورد {idx + 5} به صورت ساده و قابل فهم...
                  </p>
                  <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm font-bold ml-4'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* کامپوننت برچسب‌ها */}
        <Tags />
  
        {/* کامنت‌ها */}
        <Comment />
      </div>
    </div>
  )
  
}

export default PostPage
