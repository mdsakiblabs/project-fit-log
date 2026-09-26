"use client";

import React, { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";

const ExcerciseMuniteAndCalSection = () => {
  const { todayPlan, savedExercises, activeTab } = useContext(ExerciseContext);

  const currentExercises = activeTab === "today" ? todayPlan : savedExercises;

  const totalMinutes = currentExercises.reduce((total, item) => {
    return total + Number(item.duration || 0);
  }, 0);

  const totalCalories = currentExercises.reduce((total, item) => {
    return total + Number(item.caloriesBurned || 0);
  }, 0);

  return (
    <div className="flex items-center w-full bg-[#13161D] border border-[#272B35] rounded-xl p-6">
      {/* Exercises */}
      <div className="w-1/3 border-r border-[#20242D]">
        <h2 className="text-1xl text-[#8A92A0]">Exercises</h2>

        <h2 className="text-4xl font-bold text-[#B8FF00]">
          {currentExercises.length}
        </h2>
      </div>

      {/* Minutes */}
      <div className="w-1/3 pl-6 border-r border-[#20242D]">
        <h2 className="text-1xl text-[#8A92A0]">Minutes</h2>

        <h2 className="text-4xl font-bold text-white">{totalMinutes}</h2>
      </div>

      {/* Calories */}
      <div className="w-1/3 pl-6">
        <h2 className="text-1xl text-[#8A92A0]">Calories</h2>

        <h2 className="text-4xl font-bold text-white">{totalCalories}</h2>
      </div>
    </div>
  );
};

export default ExcerciseMuniteAndCalSection;
