"use client";

import Image from "next/image";
import { useDashboard } from "../context/DashboardContext";

export function RightSidebar() {
  const { selectedSection, selectedSubSection } = useDashboard();

  if (!selectedSection) {
    return null;
  }

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Section Info</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Advisor</h3>
        <div className="flex items-center">
          <Image
            src={selectedSection.advisor.image || "/placeholder.svg"}
            alt={selectedSection.advisor.name}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{selectedSection.advisor.name}</p>
            <p className="text-sm text-gray-600">
              {selectedSection.advisor.email}
            </p>
            <p className="text-sm text-gray-600">
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
              className="rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">{cr.name}</p>
              <p className="text-xs text-gray-600">{cr.email}</p>
              <p className="text-xs text-gray-600">{cr.phone}</p>
              <p className="text-xs text-blue-600">{cr.section}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
