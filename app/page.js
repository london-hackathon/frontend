"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState(""); // Initialize with an empty string
  const [demographic, setDemographic] = useState(""); // State for selected demographic
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectDemographic = (option) => {
    setDemographic(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="">
      <div className="flex justify-center items-center ">
        <div className="text-center text-5xl text-white font-light pt-10">
          Hello World
        </div>
      </div>
      <div className="mx-64 my-20">
        <div className="text-white text-2xl font-light pb-3">
          Summarize the Dataset Usage
        </div>
        <div>
          <input
            type="text"
            placeholder="Describe your dataset here..."
            value={description} // Bind state to input
            onChange={(e) => setDescription(e.target.value)} // Update state on change
            className="w-full border-2 border-gray-400 rounded-[15px] p-4 pb-20 bg-transparent focus:outline-none focus:border-blue-400 "
          />
        </div>
        <div className="flex justify-start mt-6">
          <div className="text-white text-xl font-light pr-5 pt-2">
            Select Demographic
          </div>
          <div className="relative">
            <div
              className="border-2 border-gray-400 rounded-[10px] p-2 w-48 cursor-pointer"
              onClick={toggleDropdown}
            >
              {demographic || "Choose..."}
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 border-2 border-gray-400 rounded-[10px] p-4 w-48 text-white z-10">
                <div
                  className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => selectDemographic("Ethnicity")}
                >
                  Ethnicity
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => selectDemographic("Sex")}
                >
                  Sex
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => selectDemographic("Age")}
                >
                  Age
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
