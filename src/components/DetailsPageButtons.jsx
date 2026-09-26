"use client";

import React, { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";

const DetailsPageButtons = ({data}) => {
    const { addToTodayPlan, saveForLater } = useContext(ExerciseContext);


  return (
    <div className="flex gap-5 text-xl font-semibold mt-5">
      <button 
       onClick={() => addToTodayPlan(data)}
      className="bg-[#CCFF00] text-[#0F1115] px-4 py-2 rounded-2xl cursor-pointer"
      >
        Add to today's plan
      </button>

      <button 
      onClick={() => saveForLater(data)}
      className="bg-transparent border border-[#374151] text-[#E5E7EB] px-4 py-2 rounded-2xl cursor-pointer"
      >
        Save for later
      </button>
    </div>
  );
}

export default DetailsPageButtons
