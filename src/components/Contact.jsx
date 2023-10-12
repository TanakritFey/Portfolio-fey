import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full m-auto md:pl-20 p-4 py-16  bg-[#000000]'>
        <div className='max-w-[1040px] mx-auto'>
        <div className='text-center mb-3'>
        <h1 className=' text-6xl font-bold text-center text-white font-Bangers inline border-b-4'>Contact</h1>
        </div>
        {/* form action เพิ่มลิ้งรับ form ที่เราสร่้างไว้เก็บข้อมูล ใช้ method POST ในการสร้าง database เก็บข้อมูล */}
        <form action="https://getform.io/f/8679defc-1fb3-429d-8dbf-916a6e88297f" method='POST' encType='multipart/form-data' >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-Nanum text-white'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-Nanum text-white'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="number" name='phone'/>
                </div> 
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 font-Nanum text-white'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 font-Nanum text-white'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 font-Nanum text-white'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' type="text" rows='10' name='message'/>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg font-Nanum'>
                Send Message
            </button>
        </form>
        </div>
    </div>
  )
}

export default Contact