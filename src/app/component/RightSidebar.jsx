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
    <div className="w-full lg:w-1/4 bg-gray-100 text-black p-4 md:sticky md:top-0">
      <h2 className="text-xl font-bold mb-4 p-4 text-center md:text-left">
        Section Info
      </h2>
      <div className="mb-6">
        <div>
          <h3 className="font-bold mb-2 text-center md:text-left">Advisor</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src={selectedSection.advisor.image || "/placeholder.svg"}
              alt={selectedSection.advisor.name}
              width={50}
              height={50}
              className="rounded-full border border-green-600 h-20 w-20 mb-4 md:mr-4"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">
                {selectedSection.advisor.name}
              </h2>
              <p className="text-lg text-gray-500 mb-2 flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-gray-700" />
                <a
                  href={`mailto:${selectedSection.advisor.email}`}
                  className="text-blue-500"
                >
                  {selectedSection.advisor.email}
                </a>
              </p>
              <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2 text-gray-700" />
                <a
                  href={`tel:${selectedSection.advisor.phone}`}
                  className="text-blue-500"
                >
                  {selectedSection.advisor.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-center md:text-left">CRs</h3>
        {selectedSection.crs.map((cr, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <Image
              src={cr.image || "/placeholder.png"}
              alt={cr.name}
              width={40}
              height={40}
              className="rounded-full border border-purple-600 h-20 w-20 mb-4 md:mr-4"
            />
            <div className="flex-1 min-w-0 text-center md:text-left ">
              <h2 className="text-xl font-semibold text-gray-900 truncate mb-3">
                {cr.name}
              </h2>
              <p className="text-gray-700 text-sm mb-2 flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-gray-700" />
                <a href={`mailto:${cr.email}`} className="text-blue-500">
                  {cr.email}
                </a>
              </p>
              <p className="text-gray-700 text-sm mb-2 flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2 text-gray-700" />
                <a href={`mailto:${cr.phone}`} className="text-blue-500">
                  {cr.phone}
                </a>
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-3 py-2.5 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition duration-200">
              {cr.section}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
