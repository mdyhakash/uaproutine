"use client";

import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showRoutine, setShowRoutine] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        selectedSection,
        setSelectedSection,
        selectedCourse,
        setSelectedCourse,
        showRoutine,
        setShowRoutine,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
