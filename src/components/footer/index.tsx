"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const features = ["ATS", "Valuator", "Applymate", "CV Distribution"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <footer className="flex flex-col w-full gap-10 lg:gap-[68px] mx-auto pt-16 lg:pt-[120px] px-5 lg:px-0 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl mx-auto max-md:gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 lg:gap-[35px] pb-10 lg:pb-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <a
                href="#"
                rel="noreferrer"
                className="text-6xl font-extrabold tracking-tighter leading-[70px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 transition-all duration-500"
              >
                SPYRE
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 lg:gap-[35px]"
          >
            <h3 className="text-2xl leading-[32px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">
              Features
            </h3>
            <div className="flex flex-col gap-3 lg:gap-6">
              {features.map((feature, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} className="group">
                  <Link href={"/"} className="flex items-center gap-2">
                    <span className="text-base font-medium text-gray-700 group-hover:text-indigo-600 transition-all duration-300">
                      {feature}
                    </span>
                    <ArrowRight className="w-4 h-4 text-indigo-600 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 lg:gap-[35px]"
          >
            <h3 className="text-2xl leading-[32px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-bold tracking-tight">
              Contact us
            </h3>
            <div className="flex flex-col gap-4 lg:gap-6">
              <motion.div whileHover={{ x: 5 }} className="group">
                <Link
                  href={"tel:01234567819"}
                  className="flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-indigo-600 transition-all duration-300">
                    020 30515084
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="group">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-indigo-600 transition-all duration-300">
                    Ashbourne Mansions, Finchley, London, NW11 0AB
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />
          <div className="mt-8 lg:mt-10 opacity-80 font-medium text-gray-600 text-sm lg:text-base tracking-wide leading-relaxed text-center">
            © 2025 SPYRE Tech Ltd. All Rights Reserved
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
