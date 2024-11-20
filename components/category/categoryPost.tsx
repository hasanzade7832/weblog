'use client'
import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import BoxLastPost from '../../components/BoxLastPost/boxlastpost'
import SideBar from '../MainLastPost/Side/mainSide'

const CategoryPage: React.FC = () => {
  const router = useRouter()
  const { id } = useParams() // گرفتن categoryId از URL

  const postsData = [
    {
      id: '1',
      title: 'نحوه فعال سازی اعلان ها در وردپرس',
      shortDescription: 'آموزش فعال‌سازی اعلان‌ها در وردپرس به زبان ساده.',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۳۰ دی ۱۴۰۳',
      category: 'شیوه زندگی',
      categoryId: '1',
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
      categoryId: '1',
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
      categoryId: '1',
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
      categoryId: '1',
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
      categoryId: '2',
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
      categoryId: '2',
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
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      date: '۱۱ دی ۱۴۰۳',
      category: 'غذا و نوشیدنی',
      categoryId: '2',
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
      categoryId: '2',
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
      categoryId: '3',
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
      categoryId: '4',
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
      categoryId: '3',
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
      categoryId: '5',
      categoryColor: 'bg-gray-200 text-gray-700',
      views: 110,
      author: 'نیلوفر ابراهیمی',
      image: '/image/flower9.webp'
    }
  ]
  

  // فیلتر کردن پست‌ها براساس categoryId
  const filteredPosts = postsData.filter(post => post.categoryId === id)

  const handlePostClick = (postId: string) => {
    router.push(`/postContent/${postId}`)
  }

  return (
    <div className='w-full flex flex-col md:flex-row p-4 md:p-12 lg:p-16 space-y-4 md:space-y-0 md:space-x-8 items-start'>
      {/* Sidebar */}
      <SideBar posts={filteredPosts} />
      {/* Main Content */}
      <div className='w-full md:flex-1 rounded-3xl p-1 space-y-4 order-1 md:order-2 shadow-xl shadow-gray-300'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className='cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4'
            >
              <BoxLastPost
                title={post.title}
                description={post.shortDescription}
                imageUrl={post.image}
                buttons={[
                  {
                    label: post.author,
                    icon: '👤',
                    color: 'bg-blue-500',
                    hoverColor: 'hover:bg-blue-600'
                  },
                  {
                    label: post.date,
                    icon: '📅',
                    color: 'bg-gray-300',
                    hoverColor: 'hover:bg-gray-400'
                  },
                  {
                    label: 'مشاهده پست',
                    icon: '📘',
                    color: 'bg-purple-500',
                    hoverColor: 'hover:bg-purple-600'
                  }
                ]}
              />
            </div>
          ))
        ) : (
          <div className='text-gray-600 text-center'>پستی برای این دسته‌بندی وجود ندارد.</div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
