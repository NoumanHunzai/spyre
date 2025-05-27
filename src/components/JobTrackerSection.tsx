"use client";
import React, { forwardRef, useState } from "react";
import FileUpload from "@/components/ui/FileUpload";

const JobTrackerSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [applications, setApplications] = useState("");
  const [notes, setNotes] = useState("");

  const handleApplicationsUpload = (file: File) => {
    setApplications(`Applications uploaded: ${file.name}`);
  };

  return (
    <section
      ref={ref}
      className="w-full max-w-5xl mx-auto mt-24 bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-8"
    >
      <h2 className="text-2xl font-bold mb-4">Job Tracker</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Applications Column */}
        <div className="flex-1 bg-[#f7fafc] rounded-xl border border-border p-4 flex flex-col">
          <span className="font-semibold mb-2">Applications</span>
          <textarea
            className="w-full h-40 bg-transparent border-none outline-none resize-none text-muted-foreground mb-4"
            placeholder="Paste or upload your job applications here…"
            value={applications}
            onChange={(e) => setApplications(e.target.value)}
          />
          <FileUpload
            onFileSelect={handleApplicationsUpload}
            acceptedFileTypes=".csv,.xlsx,.txt"
            maxFileSize={2 * 1024 * 1024} // 2MB
            label="Upload applications list"
          />
        </div>
        {/* Notes Column */}
        <div className="flex-1 bg-[#f7fafc] rounded-xl border border-border p-4 flex flex-col">
          <span className="font-semibold mb-2">Notes</span>
          <textarea
            className="w-full h-40 bg-transparent border-none outline-none resize-none text-muted-foreground"
            placeholder="Add notes or reminders for your applications…"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-muted-foreground">Tracked jobs: 0</span>
        <button
          className={`from-purple-600 to-blue-600 bg-gradient-to-r text-white px-6 py-2 rounded-lg font-semibold ${
            applications ? "" : "cursor-not-allowed opacity-50"
          }`}
          disabled={!applications}
        >
          Add Application
        </button>
      </div>
    </section>
  );
});

JobTrackerSection.displayName = "JobTrackerSection";

export default JobTrackerSection;
