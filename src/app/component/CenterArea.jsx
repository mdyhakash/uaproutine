"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { toast } from "react-toastify";
import { useDashboard } from "../context/DashboardContext";
export function CenterArea() {
  const {
    selectedSection,
    selectedCourse,
    setSelectedCourse,
    showRoutine,
    setShowRoutine,
  } = useDashboard();
  const [activeCourseCode, setActiveCourseCode] = useState(null);

  const handleCourseClick = (course) => {
    if (!selectedSection) {
      toast.error("Please select a section first!");
      return;
    }
    setSelectedCourse(course);
    setShowRoutine(false);
    setActiveCourseCode(course.code); // Set the active course code here
  };

  const handleRoutineClick = () => {
    if (!selectedSection) {
      toast.error("Please select a section first!");
      return;
    }
    setShowRoutine(true);
    setSelectedCourse(null);
    setActiveCourseCode(null); // Reset active course when viewing routine
  };

  return (
    <div className="flex-1 p-4">
      {selectedSection && (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Section {selectedSection.name}
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
            {selectedSection.courses.map((course) => (
              <div key={course.code} className="space-y-2">
                <button
                  onClick={() => handleCourseClick(course)}
                  className={`w-full text-sm rounded font-semibold border px-4 py-2 ${
                    activeCourseCode === course.code
                      ? "bg-blue-500 text-white border-transparent"
                      : "bg-transparent text-blue-700 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent"
                  }`}
                >
                  {course.code}
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleRoutineClick}
            className={`w-full rounded font-semibold border px-4 py-2 mb-4 ${
              showRoutine
                ? "bg-blue-500 text-white border-transparent"
                : "bg-transparent text-blue-700 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent"
            }`}
          >
            Routine
          </button>
          {selectedCourse && !showRoutine && (
            <div className="bg-gray-100 p-4 rounded-lg shadow max-w-4xl">
              <h3 className="text-xl font-bold mb-2">{selectedCourse.name}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 items-center justify-center mb-2">
                <div className="">
                  <Image
                    src={selectedCourse.teacher.image || "/placeholder.png"}
                    alt={selectedCourse.teacher.name}
                    width={300}
                    height={300}
                    className="border rounded-md mt-4"
                  />
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 w-full lg:max-w-lg mx-auto">
                  <div className="">
                    <p className="font-bold text-2xl text-gray-800 mb-4">
                      {selectedCourse.teacher.name}
                    </p>
                    <p className="text-lg text-gray-500 mb-2 flex items-center">
                      <FaEnvelope className="mr-2 text-gray-700" />
                      <a
                        href={`mailto:${selectedCourse.teacher.email}`}
                        className="text-blue-500"
                      >
                        {selectedCourse.teacher.email}
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <FaPhoneAlt className="mr-2 text-gray-700" />
                      <a
                        href={`tel:${selectedCourse.teacher.phone}`}
                        className="text-blue-500 "
                      >
                        {selectedCourse.teacher.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showRoutine && (
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center">
              <p className="text-lg text-gray-500">
                Routine for Section {selectedSection.name}
              </p>
              <div className="mt-4">
                {selectedSection.routineImage && (
                  <Image
                    src={selectedSection.routineImage}
                    alt={`Routine for Section ${selectedSection.name}`}
                    width={600}
                    height={400}
                    className="w-full max-w-full h-auto"
                  />
                )}
              </div>
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
