"use client";

import React, { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";
import TodaysPlanAndSavedTabCard from "@/components/my-plan-page-components/TodaysPlanAndSavedTabCard";
import EmptyTodaysAndSavedCard from "@/components/my-plan-page-components/EmptyTodaysAndSavedCard";

const page = () => {
  const { savedExercises } = useContext(ExerciseContext);

  return (
    <div className="w-full">
      {savedExercises.length === 0 ? (
        <EmptyTodaysAndSavedCard />
      ) : (
        savedExercises.map((item, ind) => {
          return <TodaysPlanAndSavedTabCard key={ind} data={item} />;
        })
      )}
    </div>
  );
};

export default page;
