import Link from 'next/link'
import React from 'react'

const EmptyTodaysAndSavedCard = () => {
  return (
    <div className='flex flex-col justify-center items-center  bg-[#13161D] border border-[#272B35] p-10 rounded-2xl'>
      <h2 className='text-2xl font-bold'>NOTHING HERE YET</h2>
      <p className='text-[#A1A1AA] text-[14px] mb-5 '>Browse the library and add a lift to get today moving.</p>
      <Link href={'/'}>
      <button className='font-semibold text-xl text-black py-2 px-4 bg-[#C2F10D] rounded-full cursor-pointer'>Go to workouts</button>
      </Link>
    </div>
  )
}

export default EmptyTodaysAndSavedCard
