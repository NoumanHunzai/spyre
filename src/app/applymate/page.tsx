"use client";
import React, { useState } from "react";
import FileUpload from "@/components/ui/FileUpload";

export default function Applymate() {
  const [cvData, setCvData] = useState<null | {
    name: string;
    email: string;
    phone: string;
    summary: string;
    experience: string[];
    education: string[];
    fileName?: string;
  }>(null);

  const [postcode, setPostcode] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [numRoles, setNumRoles] = useState(1);

  const handleFileUpload = (file: File) => {
    // Here you would parse the file and setCvData with real data
    // For now, we'll use mock data
    setCvData({
      name: "Jane Doe",
      email: "jane.doe@email.com",
      phone: "+1 234 567 890",
      summary:
        "Experienced software engineer with a passion for building impactful products.",
      experience: [
        "Frontend Developer at TechCorp (2021-2023)",
        "UI/UX Designer at Designify (2019-2021)",
      ],
      education: [
        "B.Sc. in Computer Science, University of Example (2015-2019)",
      ],
      fileName: file.name,
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f6fb] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Automated Job Application
        </h1>

        {/* CV Upload Section */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Upload Your CV
          </h2>
          <FileUpload
            onFileSelect={handleFileUpload}
            acceptedFileTypes=".pdf,.doc,.docx"
            maxFileSize={5 * 1024 * 1024} // 5MB
            label="Upload your CV"
            className="mb-4"
          />
        </div>

        {/* Input Details Form */}
        {cvData && (
          <div className="w-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Input Details
            </h2>
            <form className="w-full space-y-5">
              {/* CV File (Read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CV File
                </label>
                <input
                  className="w-full border border-border rounded-lg px-4 py-2 bg-accent/30 text-gray-700 cursor-not-allowed"
                  value={cvData.fileName || "Uploaded"}
                  readOnly
                />
              </div>
              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postcode
                </label>
                <input
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Enter your postcode"
                />
              </div>
              {/* Desired location city */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Desired location city
                </label>
                <input
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. London"
                />
              </div>
              {/* Desired salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Desired salary
                </label>
                <input
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="e.g. 50000"
                  type="number"
                  min={0}
                />
              </div>
              {/* Number of roles to apply */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of roles to apply
                </label>
                <input
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  value={numRoles}
                  onChange={(e) => setNumRoles(Number(e.target.value))}
                  type="number"
                  min={1}
                  max={50}
                />
              </div>
              {/* Continue Button */}
              <button
                type="button"
                className={`mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out ${
                  postcode && location && salary
                    ? "hover:bg-primary/90"
                    : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!postcode || !location || !salary}
              >
                Continue
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
