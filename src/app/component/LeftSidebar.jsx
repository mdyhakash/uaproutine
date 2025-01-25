"use client";

import data from "../../../data";
import { useDashboard } from "../context/DashboardContext";
import { Button } from "./ui/button";

export function LeftSidebar() {
  const { setSelectedSection, setSelectedCourse, setShowRoutine } =
    useDashboard();

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedCourse(null);
    setShowRoutine(false);
  };

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Sections</h2>
      <div className="space-y-2">
        {data.sections.map((section) => (
          <Button
            key={section.name}
            onClick={() => handleSectionClick(section)}
            className="w-full"
          >
            Section {section.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
