"use client";
import React, { forwardRef } from "react";

const ResumeScanSection = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="w-full max-w-5xl mx-auto mt-2 bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-8"
  >
    <h2 className="text-2xl font-bold mb-4">New scan</h2>
    <div className="flex flex-col md:flex-row gap-8">
      {/* Resume Column */}
      <div className="flex-1 bg-[#f7fafc] rounded-xl border border-border p-4 flex flex-col">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-semibold">Resume</span>
          <span className="ml-auto text-sm text-muted-foreground cursor-pointer hover:underline">
            <span className="inline-block align-middle">★</span> Saved Resumes
          </span>
        </div>
        <textarea
          className="w-full h-40 bg-transparent border-none outline-none resize-none text-muted-foreground"
          placeholder="Paste resume text…"
        />
        <div className="mt-4">
          <label className="block w-full border border-dashed border-border rounded-lg p-2 text-center text-muted-foreground cursor-pointer hover:bg-accent transition">
            <input type="file" className="hidden" />
            <span className="inline-flex items-center gap-2">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline-block"
              >
                <path d="M7 17v-6h4v6m5-6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16-4l-8-8-8 8" />
              </svg>
              Drag & Drop or Upload
            </span>
          </label>
        </div>
      </div>
      {/* Job Description Column */}
      <div className="flex-1 bg-[#f7fafc] rounded-xl border border-border p-4 flex flex-col">
        <span className="font-semibold mb-2">Job Description</span>
        <textarea
          className="w-full h-40 bg-transparent border-none outline-none resize-none text-muted-foreground"
          placeholder="Copy and paste job description here"
        />
      </div>
    </div>
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-muted-foreground">
        Available scans: 5{" "}
        <a className="text-primary underline ml-2" href="#">
          Upgrade
        </a>
      </span>
      <button
        className="from-purple-600 to-blue-600 bg-gradient-to-r text-white  px-6 py-2 rounded-lg font-semibold cursor-not-allowed"
        disabled
      >
        Scan
      </button>
    </div>
  </section>
));
ResumeScanSection.displayName = "ResumeScanSection";
export default ResumeScanSection;
