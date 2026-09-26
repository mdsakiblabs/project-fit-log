"use client";

import React, { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";
import toast from "react-hot-toast";

const DetailsPageButtons = ({ data }) => {
  const { todayPlan, savedExercises, addToTodayPlan, saveForLater } =
    useContext(ExerciseContext);

  return (
    <div className="flex gap-5 text-xl font-semibold mt-5">
      <button
        onClick={() => {
          const alreadyExists = todayPlan.some((item) => item.id === data.id);

          if (alreadyExists) {
            toast.error("Already in your plan");
            return;
          }

          addToTodayPlan(data);
          toast.success("Added To Todays Plan");
        }}
        className="bg-[#CCFF00] text-[#0F1115] px-4 py-2 rounded-2xl cursor-pointer"
      >
        Add to today's plan
      </button>

      <button
        onClick={() => {
          const alreadyExists = savedExercises.some(
            (item) => item.id === data.id,
          );

          if (alreadyExists) {
            toast.error("Already saved for later");
            return;
          }

          saveForLater(data);
          toast.success("Saved For Later");
        }}
        className="bg-transparent border border-[#374151] text-[#E5E7EB] px-4 py-2 rounded-2xl cursor-pointer"
      >
        Save for later
      </button>
    </div>
  );
};

export default DetailsPageButtons;
