"use client";

import { motion } from "framer-motion";
import JobTrackerSection from "@/components/JobTrackerSection";

export default function ValuatorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f3f6fb]"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Resume Valuator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Get instant feedback and value your resume with our advanced
            AI-powered valuator tool. Understand your market worth and improve
            your chances of landing your dream job.
          </motion.p>
        </div>
      </section>

      {/* Valuator Component */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <JobTrackerSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use Our Valuator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-[#e0eaff]/50 to-[#f3e6ff]/50 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600">
                Our advanced AI technology analyzes your resume against industry
                standards and current market trends.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-[#e0eaff]/50 to-[#f3e6ff]/50 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Market Value Insights
              </h3>
              <p className="text-gray-600">
                Get detailed insights into your market value based on your
                experience, skills, and industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-[#e0eaff]/50 to-[#f3e6ff]/50 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Improvement Suggestions
              </h3>
              <p className="text-gray-600">
                Receive actionable suggestions to enhance your resume and
                increase your market value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
