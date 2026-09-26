"use client";

import Link from "next/link";
import React from "react";
import { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";
import TodaysPlanAndSaveLinks from "./TodaysPlanAndSaveLinks";

const TodaysPlanSavedAndSortbySec = () => {
  const { sortBy, setSortBy } = useContext(ExerciseContext);

  return (
    // todays plan and save 
    <div className="w-full flex justify-between items-center my-5">
      <TodaysPlanAndSaveLinks/>

      {/* sortby section */}

      <div className="flex items-center gap-3">
        <label htmlFor="sortBy" className="text-sm text-[#8A92A0]">
          Sort by:
        </label>

        <select
          id="sortBy"
          name="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#15171D] text-white text-sm px-2  py-2.5 rounded-lg border border-[#292D36] outline-none cursor-pointer focus:border-[#8A92A0] transition"
        >
          <option value="duration">Duration</option>
          <option value="caloriesBurned">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default TodaysPlanSavedAndSortbySec;
