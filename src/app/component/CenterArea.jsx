"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { useDashboard } from "../context/DashboardContext";
import { Button } from "./ui/button";

export function CenterArea() {
  const {
    selectedSection,
    selectedCourse,
    setSelectedCourse,
    showRoutine,
    setShowRoutine,
  } = useDashboard();

  const handleCourseClick = (course) => {
    if (!selectedSection) {
      toast.error("Please select a section first!");
      return;
    }
    setSelectedCourse(course);
    setShowRoutine(false);
  };

  const handleRoutineClick = () => {
    if (!selectedSection) {
      toast.error("Please select a section first!");
      return;
    }
    setShowRoutine(true);
    setSelectedCourse(null);
  };

  return (
    <div className="flex-1 p-4">
      {selectedSection && (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Section {selectedSection.name}
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {selectedSection.courses.map((course) => (
              <div key={course.code} className="space-y-2">
                <Button
                  onClick={() => handleCourseClick(course)}
                  variant={selectedCourse === course ? "default" : "outline"}
                  className="w-full"
                >
                  {course.code}
                </Button>
              </div>
            ))}
          </div>
          <Button onClick={handleRoutineClick} className="mb-4">
            Routine
          </Button>
          {selectedCourse && !showRoutine && (
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{selectedCourse.name}</h3>
              <div className="grid grid-cols-2 items-center mb-2">
                <Image
                  src={selectedCourse.teacher.image || "/placeholder.png"}
                  alt={selectedCourse.teacher.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{selectedCourse.teacher.name}</p>
                  <p className="text-sm text-gray-600">
                    {selectedCourse.teacher.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedCourse.teacher.phone}
                  </p>
                </div>
              </div>
            </div>
          )}
          {showRoutine && (
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Routine</h3>
              <p>Routine for Section {selectedSection.name}</p>
            </div>
          )}
        </>
      )}
      {!selectedSection && (
        <p className="text-xl">
          Please select a section from the left sidebar.
        </p>
      )}
    </div>
  );
}
