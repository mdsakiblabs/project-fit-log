import React from 'react'

const ExcerciseMuniteAndCalSection = () => {
  return (
    <div className="flex items-center w-full bg-[#13161D] border border-[#272B35] rounded-xl p-6">

      {/* Exercises */}
      <div className="w-1/3 border-r border-[#20242D]">
        <h2 className="text-1xl text-[#8A92A0]">Exercises</h2>
        <h2 className="text-4xl font-bold text-[#B8FF00]">2</h2>
      </div>

      {/* Minutes */}
      <div className="w-1/3 pl-6 border-r border-[#20242D]">
        <h2 className="text-1xl text-[#8A92A0]">Minutes</h2>
        <h2 className="text-4xl font-bold text-white">23</h2>
      </div>

      {/* Calories */}
      <div className="w-1/3 pl-6">
        <h2 className="text-1xl text-[#8A92A0]">Calories</h2>
        <h2 className="text-4xl font-bold text-white">190</h2>
      </div>

    </div>
  )
}

export default ExcerciseMuniteAndCalSection