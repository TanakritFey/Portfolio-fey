import React from 'react'
import Work from './Work'

const WorkItem = ({title,duration,year,company,details}) => {

  return (
    /* นำตัวแปร data จาก Work.jsx ที่เก็บข้อมูล และ map() ค่าแล้ว มาใช้ต่อใน WorkItem.jsx */
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            {/* div ปรับตัว วงกลม ให้อยู่ตรงเส้น และให้ตรงกับ หัวข้อ 1 2 3 */}
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>      {/* สามารถเขียน div แบบนี้ได้เลย */}
            <p className='flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm'>
                <span className='font-Nanum inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
                <span className='font-Nanum text-lg font-semibold text-white'> {title}</span>
                <span className='font-Nanum text-lg font-bold text-white'> {company}</span>
                <span className='font-Nanum my-1 text-sm font-normal leading-none text-stone-400'> {duration}</span>
            </p>
            <p className='font-Nanum my-2 text-base font-normal text-stone-500 text-white'>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem
