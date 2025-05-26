"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ResumeScanSection from "@/components/ResumeScanSection";
import { useRef } from "react";
import JobTrackerSection from "@/components/JobTrackerSection";
import Footer from "@/components/footer";

export default function Home() {
  const scanSectionRef = useRef<HTMLDivElement>(null);
  const jobTrackerSectionRef = useRef<HTMLDivElement>(null);

  const scrollToScanSection = () => {
    scanSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToJobTrackerSection = () => {
    jobTrackerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Features Section */}
      <motion.section
        className="w-full flex flex-col items-center bg-[#f3f6fb] py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {/* ATS Card */}
          <motion.div
            className="bg-gradient-to-br from-white/90 via-[#e0eaff]/80 to-[#f3e6ff]/80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(90, 128, 213, 0.15)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mb-4 text-primary">
              {/* Icon Placeholder */}
              <span className="inline-block w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#e0eaff] to-[#f3e6ff]">
                <span className="text-2xl font-bold">A</span>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">ATS</h3>
            <p className="text-muted-foreground mb-6">
              Track and manage applications efficiently with our ATS tool.
            </p>
            <Button
              className="w-full py-2 rounded-lg border border-primary from-purple-600 to-blue-600 bg-gradient-to-r text-white  font-semibold hover:bg-primary hover:text-primary-foreground transition"
              onClick={scrollToScanSection}
            >
              Get Started
            </Button>
          </motion.div>
          {/* Valuator Card */}
          <motion.div
            className="bg-gradient-to-br from-white/90 via-[#e9d1ff]/80 to-[#e0eaff]/80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(128, 90, 213, 0.15)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 text-primary">
              <span className="inline-block w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#e9d1ff] to-[#e0eaff]">
                <span className="text-2xl font-bold">V</span>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Valuator</h3>
            <p className="text-muted-foreground mb-6">
              Get instant feedback and value your resume with our Valuator.
            </p>
            <Button
              className="w-full py-2 rounded-lg border border-primary from-purple-600 to-blue-600 bg-gradient-to-r text-white font-semibold hover:bg-primary hover:text-primary-foreground transition"
              onClick={scrollToJobTrackerSection}
            >
              Get Started
            </Button>
          </motion.div>
          {/* Applymate Card */}
          <motion.div
            className="bg-gradient-to-br from-white/90 via-[#e0eaff]/80 to-[#f3e6ff]/80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(90, 128, 213, 0.15)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4 text-primary">
              <span className="inline-block w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#e0eaff] to-[#e9d1ff]">
                <span className="text-2xl font-bold">AP</span>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Applymate</h3>
            <p className="text-muted-foreground mb-6">
              Simplify your job applications with Applymate&apos;s smart tools.
            </p>
            <Button className="w-full py-2 rounded-lg border border-primary from-purple-600 to-blue-600 bg-gradient-to-r text-white font-semibold hover:bg-primary hover:text-primary-foreground transition">
              Get Started
            </Button>
          </motion.div>
          {/* CV Distribution Card */}
          <motion.div
            className="bg-gradient-to-br from-white/90 via-[#e9d1ff]/80 to-[#e0eaff]/80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(128, 90, 213, 0.15)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 text-primary">
              <span className="inline-block w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#e9d1ff] to-[#e0eaff]">
                <span className="text-2xl font-bold">CV</span>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">CV Distribution</h3>
            <p className="text-muted-foreground mb-6">
              Distribute your CV to top recruiters and companies easily.
            </p>
            <Button className="w-full py-2 rounded-lg border border-primary from-purple-600 to-blue-600 bg-gradient-to-r text-white font-semibold hover:bg-primary hover:text-primary-foreground transition">
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.section>
      {/* Resume Scan Section */}
      <ResumeScanSection ref={scanSectionRef} />
      <JobTrackerSection ref={jobTrackerSectionRef} />
      <Footer />
    </>
  );
}
