"use client";

import { motion } from "framer-motion";
import ResumeScanSection from "@/components/ResumeScanSection";

export default function ATSPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f3f6fb]"
    >
      {/* Hero Section */}
      <section className="pt-32  px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          >
            ATS Resume Scanner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Optimize your resume for Applicant Tracking Systems (ATS) and
            increase your chances of getting noticed by recruiters. Our
            AI-powered scanner helps you create an ATS-friendly resume that
            stands out.
          </motion.p>
        </div>
      </section>

      {/* ATS Scanner Component */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ResumeScanSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use Our ATS Scanner?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-[#e0eaff]/50 to-[#f3e6ff]/50 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">Real-time Analysis</h3>
              <p className="text-gray-600">
                Get instant feedback on your resume's ATS compatibility with our
                advanced scanning technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-[#e0eaff]/50 to-[#f3e6ff]/50 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Keyword Optimization
              </h3>
              <p className="text-gray-600">
                Identify and optimize key industry terms and skills to improve
                your resume's visibility.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-[#e0eaff]/50 to-[#f3e6ff]/50 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">Formatting Check</h3>
              <p className="text-gray-600">
                Ensure your resume follows ATS-friendly formatting guidelines
                for better parsing and readability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
