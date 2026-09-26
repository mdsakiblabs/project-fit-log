"use client";

import { createContext, useState } from "react";

const ExerciseContext = createContext();

const ExerciseProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedExercises, setSavedExercises] = useState([]);


  const addToTodayPlan = (exercise) => {
  setTodayPlan((previousExercises) => [
    ...previousExercises,
    exercise,
  ]);
};

const saveForLater = (exercise) => {
  setSavedExercises((previousExercises) => [
    ...previousExercises,
    exercise,
  ]);
};



  return (
    <ExerciseContext.Provider
      value={{
        todayPlan,
        savedExercises,
        addToTodayPlan,
        saveForLater
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseProvider };
export default ExerciseContext;