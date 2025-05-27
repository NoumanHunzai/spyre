import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./button";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  delay?: number;
  iconGradientFrom?: string;
  iconGradientTo?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  href,
  onClick,
  gradientFrom = "from-white/90",
  gradientVia = "via-[#e0eaff]/80",
  gradientTo = "to-[#f3e6ff]/80",
  delay = 0,
  iconGradientFrom = "from-[#e0eaff]",
  iconGradientTo = "to-[#f3e6ff]",
}: FeatureCardProps) => {
  const ButtonContent = () => (
    <Button
      className="w-full py-3 text-base rounded-lg border border-primary bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-[1.02]"
      onClick={onClick}
    >
      Get Started
    </Button>
  );

  return (
    <motion.div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-border relative overflow-hidden group min-h-[420px]`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 32px 0 rgba(90, 128, 213, 0.15)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container with gradient background */}
      <div className="relative mb-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
        />
        <div className="relative w-20 h-20 border-2 border-primary rounded-xl flex items-center justify-center bg-white/80 backdrop-blur-sm group-hover:bg-white/90 transition-colors duration-300">
          <div className="scale-125">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-8 text-lg min-h-[72px] leading-relaxed">
        {description}
      </p>

      {/* Button with hover effect */}
      {onClick ? (
        <div className="w-full mt-auto">
          <ButtonContent />
        </div>
      ) : (
        <Link href={href} className="w-full mt-auto">
          <ButtonContent />
        </Link>
      )}

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:opacity-75 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 group-hover:opacity-75 transition-opacity duration-300" />
    </motion.div>
  );
};

export default FeatureCard;
