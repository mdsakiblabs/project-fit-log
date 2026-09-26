'use client'

import React, { useContext } from "react";
import Link from 'next/link'
import ExerciseContext from "@/context/ExerciseContext";

const NavbarPlanAndSaveSection = () => {
    const { todayPlan, savedExercises } = useContext(ExerciseContext);


  return (
    <div className="flex gap-7 ">

          <Link href={'/my-plan/todays-plan'}>
            <h3 className="text-[#D1D5DB] cursor-pointer">Plan <span className="inline-flex w-6 h-6  items-center justify-center rounded-full bg-[#C2F800] text-black font-bold "> {todayPlan.length} </span>
            </h3>
            </Link>

            <Link href={'/my-plan/saved'}>
            <h3 className="text-[#9CA3AF] cursor-pointer">Saved <span className="inline-flex w-6 h-6  items-center justify-center rounded-full bg-[#2D313B] text-[#D1D5DB] font-bold "> {savedExercises.length} </span>
            </h3>
            </Link>
        </div>
  )
}

export default NavbarPlanAndSaveSection
