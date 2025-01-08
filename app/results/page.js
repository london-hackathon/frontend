"use client";
import { useSearchParams } from "next/navigation";

export default function Results() {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  let analysisResult = null;
  try {
    if (result) {
      console.log("Raw result received:", result); // Log the raw result string
      analysisResult = JSON.parse(decodeURIComponent(result));
      console.log("Parsed analysis result:", analysisResult); // Log the parsed result
    }
  } catch (error) {
    console.error("Error parsing analysis result:", error);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-light mb-8">Analysis Results</h1>

        {analysisResult ? (
          <div className="space-y-6">
            {/* Dataset Information Section */}
            <div className="border-2 border-gray-400 rounded-lg p-6">
              <h2 className="text-2xl font-light mb-4">Dataset Information</h2>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="font-medium">Demographic:</span>{" "}
                  {analysisResult.demographic}
                </p>
              </div>
            </div>

            {/* Bias Analysis Section */}
            <div className="border-2 border-gray-400 rounded-lg p-6">
              <h2 className="text-2xl font-light mb-4">Bias Analysis</h2>
              <p className="text-gray-300">
                <span className="font-medium">Explanation:</span>{" "}
                {analysisResult.explanation}
              </p>
              <p className="text-gray-300 mt-4">
                <span className="font-medium">Bias Score:</span>{" "}
                {analysisResult.score}%
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-400">
              No analysis results available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
