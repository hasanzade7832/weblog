import React, { useState } from 'react'
import { Button } from 'primereact/button'

const CommentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    saveInfo: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, saveInfo: e.target.checked })
  }

  const handleSubmit = () => {
    console.log('Form Data:', formData)
    // اینجا می‌توانید کد ارسال فرم را اضافه کنید
    alert('دیدگاه شما ارسال شد!')
  }

  return (
    <div className='bg-gray-50 p-4 rounded-lg mt-6 shadow-md border border-gray-200'>
      <div className='flex gap-4 flex-row-reverse mb-4'>
        <input
          type='text'
          name='name'
          placeholder='نام'
          className='border border-gray-300 rounded-lg p-2 w-full text-right'
          value={formData.name}
          onChange={handleInputChange}
          dir='rtl'
        />
        <input
          type='email'
          name='email'
          placeholder='ایمیل'
          className='border border-gray-300 rounded-lg p-2 w-full text-right'
          value={formData.email}
          onChange={handleInputChange}
          dir='rtl'
        />
        <input
          type='text'
          name='website'
          placeholder='وبسایت'
          className='border border-gray-300 rounded-lg p-2 w-full text-right'
          value={formData.website}
          onChange={handleInputChange}
          dir='rtl'
        />
      </div>
      <div className='flex items-center flex-row-reverse mb-4'>
        <input
          type='checkbox'
          id='saveInfo'
          className='ml-2'
          checked={formData.saveInfo}
          onChange={handleCheckboxChange}
        />
        <label htmlFor='saveInfo' className='text-gray-600 text-sm'>
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم
        </label>
      </div>
      <Button
        label='ارسال دیدگاه'
        className='p-button-outlined text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 mx-auto block'
        onClick={handleSubmit}
      />
    </div>
  )
}

export default CommentForm
