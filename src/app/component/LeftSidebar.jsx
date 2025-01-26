"use client";

import { useState } from "react";
import data from "../../../data";
import { useDashboard } from "../context/DashboardContext";
///import { Button } from "./ui/button";

export function LeftSidebar() {
  const { setSelectedSection, setSelectedCourse, setShowRoutine } =
    useDashboard();
  const [isActive, setIsActive] = useState(false);
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedCourse(null);
    setShowRoutine(false);
    setIsActive(section.name);
  };

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Sections</h2>
      <div className="space-y-2">
        {data.sections.map((section) => (
          <button
            key={section.name}
            onClick={() => handleSectionClick(section)}
            className={`w-full px-4 py-5 rounded font-semibold border ${
              isActive === section.name
                ? "bg-blue-500 text-white border-transparent"
                : "bg-transparent text-blue-700 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent"
            }`}
          >
            Section {section.name}
          </button>
        ))}
      </div>
    </div>
  );
}
