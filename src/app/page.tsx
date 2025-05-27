"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/ui/FeatureCard";
import { FileSearch, BarChart3, Briefcase, Send } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "ATS",
      description:
        "Track and manage applications efficiently with our ATS tool.",
      icon: <FileSearch className="w-8 h-8 text-primary" />,
      href: "/ats",
      gradientFrom: "from-white/90",
      gradientVia: "via-[#e0eaff]/80",
      gradientTo: "to-[#f3e6ff]/80",
      delay: 0.1,
      iconGradientFrom: "from-[#e0eaff]",
      iconGradientTo: "to-[#f3e6ff]",
    },
    {
      title: "Valuator",
      description:
        "Get instant feedback and value your resume with our Valuator.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      href: "/valuator",
      gradientFrom: "from-white/90",
      gradientVia: "via-[#e9d1ff]/80",
      gradientTo: "to-[#e0eaff]/80",
      delay: 0.2,
      iconGradientFrom: "from-[#e9d1ff]",
      iconGradientTo: "to-[#e0eaff]",
    },
    {
      title: "Applymate",
      description:
        "Simplify your job applications with Applymate&apos;s smart tools.",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      href: "/applymate",
      gradientFrom: "from-white/90",
      gradientVia: "via-[#e0eaff]/80",
      gradientTo: "to-[#f3e6ff]/80",
      delay: 0.3,
      iconGradientFrom: "from-[#e0eaff]",
      iconGradientTo: "to-[#e9d1ff]",
    },
    {
      title: "CV Distribution",
      description: "Distribute your CV to top recruiters and companies easily.",
      icon: <Send className="w-8 h-8 text-primary" />,
      href: "/cv-distribution",
      gradientFrom: "from-white/90",
      gradientVia: "via-[#e9d1ff]/80",
      gradientTo: "to-[#e0eaff]/80",
      delay: 0.4,
      iconGradientFrom: "from-[#e9d1ff]",
      iconGradientTo: "to-[#e0eaff]",
    },
  ];

  return (
    <>
      {/* Features Section */}
      <motion.section
        className="w-full flex flex-col items-center bg-[#f3f6fb] py-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1400px] px-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
              gradientFrom={feature.gradientFrom}
              gradientVia={feature.gradientVia}
              gradientTo={feature.gradientTo}
              delay={feature.delay}
              iconGradientFrom={feature.iconGradientFrom}
              iconGradientTo={feature.iconGradientTo}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
}
