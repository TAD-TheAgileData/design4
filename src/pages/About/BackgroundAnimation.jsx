import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundAnimation = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <motion.svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.22,
        pointerEvents: "none",
      }}
    >
      <motion.path
        d="M50 120 Q420 60 760 130 T1150 90"
        fill="none"
        stroke="rgba(30,58,138,0.6)"
        strokeWidth="1"
        strokeDasharray="6 6"
        style={{ y: y1 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.path
        d="M100 340 C300 300 620 410 1100 330"
        fill="none"
        stroke="rgba(14,165,233,0.5)"
        strokeWidth="1"
        strokeDasharray="4 8"
        style={{ y: y2 }}
        animate={{ pathLength: [0, 1] }}
        transition={{
          duration: 5,
          delay: 0.4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.path
        d="M220 520 Q600 460 980 540"
        fill="none"
        stroke="rgba(15,23,42,0.5)"
        strokeWidth="1"
        strokeDasharray="3 10"
        animate={{ pathLength: [0, 1] }}
        transition={{
          duration: 6,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </motion.svg>
  );
};

export default BackgroundAnimation;
