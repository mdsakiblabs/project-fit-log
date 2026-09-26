"use client";

import React, { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";
import TodaysPlanAndSavedTabCard from "@/components/my-plan-page-components/TodaysPlanAndSavedTabCard";
import EmptyTodaysAndSavedCard from "@/components/my-plan-page-components/EmptyTodaysAndSavedCard";

const page = () => {
  const { todayPlan } = useContext(ExerciseContext);

  return (
    <div className="w-full">
      {todayPlan.length === 0 ? (
        <EmptyTodaysAndSavedCard />
      ) : (
        todayPlan.map((item, ind) => {
          return <TodaysPlanAndSavedTabCard key={ind} data={item} />;
        })
      )}
    </div>
  );
};

export default page;
