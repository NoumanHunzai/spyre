"use client";
import React, { useState } from "react";
import FileUpload from "@/components/ui/FileUpload";

// Mock data for recruiters count based on sector
const RECRUITERS_COUNT = {
  Technology: 150,
  Finance: 120,
  Healthcare: 100,
  Engineering: 90,
  Marketing: 80,
  Sales: 110,
  Education: 70,
  Other: 50,
};

export default function CVDistribution() {
  const [cvData, setCvData] = useState<null | {
    fileName?: string;
  }>(null);

  const [targetSector, setTargetSector] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [recruitersCount, setRecruitersCount] = useState<number | null>(null);

  const handleFileUpload = (file: File) => {
    setCvData({
      fileName: file.name,
    });
  };

  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sector = e.target.value;
    setTargetSector(sector);
    setRecruitersCount(
      RECRUITERS_COUNT[sector as keyof typeof RECRUITERS_COUNT] || null
    );
  };

  return (
    <div className="min-h-screen bg-[#f3f6fb] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          CV Distribution
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

              {/* Target Sector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Sector
                </label>
                <select
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-white"
                  value={targetSector}
                  onChange={handleSectorChange}
                >
                  <option value="">Select a sector</option>
                  {Object.keys(RECRUITERS_COUNT).map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. London, UK"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Recruiters Count */}
              {recruitersCount && (
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <p className="text-indigo-700 font-medium">
                    Your CV will be sent to {recruitersCount} recruiters in the{" "}
                    {targetSector} sector
                  </p>
                </div>
              )}

              {/* Pay Button */}
              <button
                type="button"
                className={`mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out ${
                  targetSector && location && email
                    ? "hover:bg-primary/90"
                    : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!targetSector || !location || !email}
              >
                Pay and Distribute CV
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
