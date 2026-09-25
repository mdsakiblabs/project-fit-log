import Link from 'next/link'
import React from 'react'

const TodaysPlanSavedAndSortbySec = () => {
  return (
    <div className='w-full flex justify-between items-center my-5'>
      <div className='flex gap-5 bg-[#151921] py-2 px-5 rounded-2xl'>
        <Link href={'/my-plan/todays-plan'}>
        <h2 className='text-xl font-semibold cursor-pointer '>Todays Plan</h2>
        </Link>

        <Link href={'/my-plan/saved'}>
        <h2 className='text-xl font-semibold cursor-pointer'>Saved</h2>
        </Link>
      </div>

      <div>
        <label htmlFor="sortBy">Sort by: </label>

        <select id="sortBy" name="sortBy">
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  )
}

export default TodaysPlanSavedAndSortbySec