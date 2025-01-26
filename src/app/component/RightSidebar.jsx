"use client";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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
            <p className="text-lg text-gray-500 mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-gray-700" />
              <a
                href={`mailto:${selectedSection.advisor.email}`}
                className="text-blue-500"
              >
                {selectedSection.advisor.email}
              </a>
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <FaPhoneAlt className="mr-2 text-gray-700" />
              <a
                href={`tel:${selectedSection.advisor.phone}`}
                className="text-blue-500 "
              >
                {selectedSection.advisor.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-2">CRs</h3>
        {selectedSection.crs.map((cr, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image
              src={cr.image || "/placeholder.png"}
              alt={cr.name}
              width={40}
              height={40}
              className="rounded-full mr-4 border border-purple-600 h-20 w-20"
            />
            <div className="flex items-center justify-between w-9/12 p-4 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold text-gray-900 truncate">
                  {cr.name}
                </h2>
                <p className="text-gray-700 text-sm">{cr.email}</p>
                <p className="text-gray-700 text-sm">{cr.phone}</p>
              </div>

              <button className="px-3 py-2.5 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition duration-200">
                {cr.section}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
