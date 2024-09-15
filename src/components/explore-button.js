"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";
import { containerVariants, glowVariants, rocketVariants, particleVariants } from "../utils/motionVariants"

const ExploreButton = () => {
  return (
    <Link
      href="/destination"
      aria-label="Explore destination"
      title="Explore destination"
    >
      <motion.div
        className=" -0 relative flex size-40 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#0B0D19] to-[#0C1D39] md:size-60"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={containerVariants}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        role="button"
      >
        {/* Rocket Icon */}
        <motion.div variants={rocketVariants}>
          <FaRocket className="text-5xl text-white md:text-7xl" />
        </motion.div>

        {/* Cool Blue Glow */}
        <motion.div
          className="absolute bottom-0 size-12 rounded-full bg-blue-500 opacity-0 blur-xl filter md:size-16"
          variants={glowVariants}
        />

        {/* Particle Trail */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 size-2 rounded-full bg-blue-400 blur-sm filter"
            style={{
              left: `${i * 20}%`,
              opacity: 0.7 - i * 0.2,
            }}
            variants={particleVariants}
          />
        ))}

        {/* Explore Text */}
        <motion.span className="absolute bottom-6 text-xl uppercase tracking-widest text-white md:text-2xl font-headings">
          Explore
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default ExploreButton;