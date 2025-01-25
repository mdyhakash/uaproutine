"use client";

import Image from "next/image";
import { useDashboard } from "../context/DashboardContext";

export function RightSidebar() {
  const { selectedSection, selectedSubSection } = useDashboard();

  if (!selectedSection) {
    return null;
  }

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4 p-4">Section Info</h2>
      <div className="mb-4 ">
        <h3 className="font-bold mb-2">Advisor</h3>
        <div className="flex items-center ">
          <Image
            src={selectedSection.advisor.image || "/placeholder.svg"}
            alt={selectedSection.advisor.name}
            width={50}
            height={50}
            className="rounded-full mr-4 border border-green-600 h-20 w-20"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {selectedSection.advisor.name}
            </h2>
            <p className="text-lg text-gray-600">
              {selectedSection.advisor.email}
            </p>
            <p className="text-lg text-gray-600">
              {selectedSection.advisor.phone}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-2">CRs</h3>
        {selectedSection.crs.map((cr, index) => (
          <div key={index} className="flex items-center mb-2">
            <Image
              src={cr.image || "/placeholder.svg"}
              alt={cr.name}
              width={40}
              height={40}
              className="rounded-full mr-4 border border-purple-600 h-20 w-20"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">{cr.name}</h2>
              <p className=" text-gray-600">{cr.email}</p>
              <p className=" text-gray-600">{cr.phone}</p>
              <button className="p-2 bg-green-500 rounded-lg text-white hover:bg-green-600">
                {cr.section}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
