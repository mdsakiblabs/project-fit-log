"use client";

import React, { useContext, useEffect } from "react";

import ExerciseContext from "@/context/ExerciseContext";

import TodaysPlanAndSavedTabCard from "@/components/my-plan-page-components/TodaysPlanAndSavedTabCard";

import EmptyTodaysAndSavedCard from "@/components/my-plan-page-components/EmptyTodaysAndSavedCard";

const page = () => {
  const { todayPlan, setActiveTab, sortBy } = useContext(ExerciseContext);

  useEffect(() => {
    setActiveTab("today");
  }, [setActiveTab]);

  const sortedTodayPlan = [...todayPlan].sort((a, b) => {
    return a[sortBy] - b[sortBy];
  });

  return (
    <div className="w-full">
      {todayPlan.length === 0 ? (
        <EmptyTodaysAndSavedCard />
      ) : (
        sortedTodayPlan.map((item, ind) => {
          return <TodaysPlanAndSavedTabCard key={ind} data={item} />;
        })
      )}
    </div>
  );
};

export default page;
