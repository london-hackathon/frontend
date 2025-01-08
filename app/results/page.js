// app/results/page.js
"use client";
import { useSearchParams } from "next/navigation";

export default function Results() {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  // Parse the result if it exists
  const analysisResult = result ? JSON.parse(decodeURIComponent(result)) : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-light mb-8">Analysis Results</h1>

        {analysisResult ? (
          <div className="space-y-6">
            <div className="border-2 border-gray-400 rounded-lg p-6">
              <h2 className="text-2xl font-light mb-4">Dataset Information</h2>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="font-medium">File:</span>{" "}
                  {analysisResult.filename}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Demographic:</span>{" "}
                  {analysisResult.demographic}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Description:</span>{" "}
                  {analysisResult.description}
                </p>
              </div>
            </div>

            {/* Add more sections for actual bias analysis results when available */}
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
