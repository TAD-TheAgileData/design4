import React from "react";
import { motion } from "framer-motion";
import "./Codeofethics.css";

/* ================= ANIMATIONS ================= */
const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Container variant to stagger cards
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 }, // cards appear one by one
  },
};

// Individual card animation
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut", 
      staggerChildren: 0.3, // items stagger inside card
    },
  },
};

// List item animation (smooth fade + slide)
const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function CodeOfEthics() {
  const ethicsData = [
    {
      title: "Business Ethics",
      items: [
        "Commitment to Professional Excellence",
        "Mutual Respect",
        "Integrity in All Actions",
        "Loyalty and Solidarity",
      ],
    },
    {
      title: "Code of Conduct",
      items: [
        "Compliance with Laws and Regulations",
        "Environmental Responsibility",
        "Health and Safety of Employees",
        "Protection of Employee Rights",
        "Building Strong Customer Relationships",
      ],
    },
  ];

  return (
    <div className="ethics-page">
      {/* ================= HERO ================= */}
      <section className="ethics-hero">
        <motion.div
          className="hero-content"
          variants={heroVariant}
          initial="hidden"
          animate="visible"
        >
          <h1>Code of Ethics</h1>
          <p>
            At Technoglass, our Code of Ethics defines the values, principles,
            and standards that guide our decisions, behavior, and relationships
            with employees, customers, and society.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="ethics-sections">
        <motion.div
          className="ethics-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ethicsData.map((card, index) => (
            <motion.div
              key={index}
              className="ethics-card"
              variants={cardVariant}
              whileHover={{ y: -12 }}
            >
              <h2>{card.title}</h2>
              <motion.ul>
                {card.items.map((item, i) => (
                  <motion.li key={i} variants={itemVariant}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
