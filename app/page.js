"use client";
import { useState, useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [demographic, setDemographic] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectDemographic = (option) => {
    setDemographic(option);
    setIsDropdownOpen(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
    } else {
      alert("Please upload a CSV file");
      event.target.value = null;
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCheckBias = async () => {
    // Validate inputs
    if (!selectedFile) {
      alert("Please upload a CSV file first");
      return;
    }
    if (!demographic) {
      alert("Please select a demographic");
      return;
    }
    if (!description.trim()) {
      alert("Please provide a dataset description");
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("demographic", demographic);
    formData.append("description", description);

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/bias", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze bias");
      }

      const result = await response.json();

      // Navigate to results page with the analysis data
      const encodedResult = encodeURIComponent(JSON.stringify(result));
      router.push(`/results?result=${encodedResult}`);
    } catch (error) {
      console.error("Error analyzing bias:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-2 border-gray-400 rounded-[15px] p-4 pb-20 bg-transparent focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <div className="text-white text-xl font-light pr-5">
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
          <div className="flex items-center gap-4">
            {selectedFile && (
              <div className="text-white text-sm">{selectedFile.name}</div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".csv"
              className="hidden"
            />
            <button
              onClick={handleUploadClick}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <MdOutlineFileUpload size={24} />
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleCheckBias}
          disabled={isLoading}
          className={`px-8 py-3 bg-blue-500 text-white text-lg font-light rounded-lg transition-colors
            ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
        >
          {isLoading ? "Analyzing..." : "Check Bias"}
        </button>
      </div>
    </div>
  );
}
