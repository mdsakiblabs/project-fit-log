"use client";

import React, { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";

const RemoveBtnOfTodayPlanAndSavedPageCard = ({ data }) => {
  const { activeTab, removeFromTodayPlan, removeFromSavedExercises } =
    useContext(ExerciseContext);
  return (
    <div>
      <i
        onClick={() => {
          if (activeTab === "today") {
            removeFromTodayPlan(data.id);
          } else {
            removeFromSavedExercises(data.id);
          }
        }}
        className="ri-close-large-line cursor-pointer hover:bg-[#374151] px-2 py-1 rounded-full"
      ></i>
    </div>
  );
};

export default RemoveBtnOfTodayPlanAndSavedPageCard;
