"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* Dynamic grain/noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      
      {/* High-end floating orbs using Framer Motion */}
      <motion.div 
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "8%", "3%", "0%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent/5 mix-blend-screen filter blur-[120px]"
      />
      
      <motion.div 
        animate={{
          x: ["0%", "-8%", "5%", "0%"],
          y: ["0%", "-5%", "10%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#ffffff]/3 mix-blend-screen filter blur-[150px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
    </div>
  );
}

