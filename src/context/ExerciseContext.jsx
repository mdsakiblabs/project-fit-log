"use client";

import { createContext, useState } from "react";

const ExerciseContext = createContext();

const ExerciseProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedExercises, setSavedExercises] = useState([]);
  const [activeTab, setActiveTab] = useState("today");

  const [sortBy, setSortBy] = useState("duration");

  const addToTodayPlan = (exercise) => {
    setTodayPlan((previousExercises) => {
      const alreadyExists = previousExercises.some(
        (item) => item.id === exercise.id,
      );

      if (alreadyExists) {
        return previousExercises;
      }

      return [...previousExercises, exercise];
    });
  };

  const saveForLater = (exercise) => {
    setSavedExercises((previousExercises) => {
      const alreadyExists = previousExercises.some(
        (item) => item.id === exercise.id,
      );

      if (alreadyExists) {
        return previousExercises;
      }

      return [...previousExercises, exercise];
    });
  };

  const removeFromTodayPlan = (exerciseId) => {
    setTodayPlan((previousExercises) => {
      return previousExercises.filter((item) => item.id !== exerciseId);
    });
  };

  const removeFromSavedExercises = (exerciseId) => {
    setSavedExercises((previousExercises) => {
      return previousExercises.filter((item) => item.id !== exerciseId);
    });
  };

  return (
    <ExerciseContext.Provider
      value={{
        todayPlan,
        savedExercises,
        addToTodayPlan,
        saveForLater,
        activeTab,
        setActiveTab,
        removeFromTodayPlan,
        removeFromSavedExercises,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseProvider };
export default ExerciseContext;
