import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ====== IMAGES ====== */
import heroImg from "../../assets/Images/VLT-image-1.webp";
import plant1 from "../../assets/Images/VLT-image-1.webp";
import plant2 from "../../assets/Images/VLT-image-1.webp";
import plant3 from "../../assets/Images/VLT-image-1.webp";

/* ====== COLORS ====== */
const COLORS = {
  white: "#FFFFFF",
  frost: "#6B7280",
  ice: "#E5E7EB",
  primary: "#176179",
  navy: "#0F172A",
  steel: "#CBD5E1",
};

/* ====== ANIMATIONS ====== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: "0 35px 80px rgba(0,0,0,0.15)",
    transition: { duration: 0.35 },
  },
};

const glass = {
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

/* ====== COMPONENT ====== */
export default function ManufacturingFootprint() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 400], ["0%", "20%"]);

  const capabilities = [
    {
      title: "Production Capacity",
      desc: "High-volume manufacturing capability supporting major infrastructure and commercial developments. Our production lines ensure fast turnaround for large-scale projects.",
    },
    {
      title: "Technology & Automation",
      desc: "Advanced CNC systems, automated production lines, robotics, and real-time quality control for precision output across all manufacturing units.",
    },
    {
      title: "Quality & Compliance",
      desc: "Manufacturing aligned with international certifications, ISO standards, testing protocols, and strict inspection procedures to guarantee top-notch quality.",
    },
  ];

  const plants = [
    {
      img: plant1,
      title: "Primary Manufacturing Plant",
      location: "Middle East",
      desc: "High-capacity facility with tempering, lamination, coating, and cutting technologies. Supports large-scale production and exports to global markets.",
    },
    {
      img: plant2,
      title: "Advanced Processing Unit",
      location: "Regional Hub",
      desc: "Specialized glass solutions for architectural and industrial applications. Equipped for precision engineering and customized specifications.",
    },
    {
      img: plant3,
      title: "R&D & Testing Center",
      location: "Innovation Campus",
      desc: "Dedicated to research, product innovation, performance testing, and certification of high-performance and sustainable glass products.",
    },
  ];

  return (
    <div style={pageBg()}>

      {/* ===== HERO ===== */}
      <motion.div
        style={{
          ...heroSection(heroImg),
          backgroundPositionY: bgY,
        }}
      >
        <div style={heroOverlay()}>
          <h1 style={heroTitle()}>Manufacturing Footprint</h1>
          <p style={heroSubtitle()}>
            Advanced Facilities • Global Reach • Precision Manufacturing
          </p>
        </div>
      </motion.div>

      <div style={container()}>

        {/* ===== OVERVIEW ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ ...overviewCard(), ...glass }}
        >
          <h2 style={sectionTitle()}>Global Manufacturing Presence</h2>
          <p style={sectionText()}>
            Technoglass operates multiple state-of-the-art facilities engineered to meet international quality, safety, and performance standards.
            Strategically located plants ensure efficiency, scalability, and consistent quality across global markets.
          </p>
        </motion.div>

        {/* ===== PLANTS ===== */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ marginBottom: 70 }}
        >
          <h2 style={sectionTitle()}>Manufacturing Facilities</h2>
          <div style={plantGrid()}>
            {plants.map((plant, i) => (
              <PlantCard
                key={i}
                img={plant.img}
                title={plant.title}
                location={plant.location}
                desc={plant.desc}
              />
            ))}
          </div>
        </motion.div>

        {/* ===== CAPABILITIES ===== */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={capabilityGrid()}
        >
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{ ...capabilityCard(), ...glass }}
              {...hoverLift}
            >
              <h3 style={capabilityTitle()}>{item.title}</h3>
              <p style={capabilityText()}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

/* ====== PLANT CARD ====== */
const PlantCard = ({ img, title, location, desc }) => (
  <motion.div variants={fadeUp} style={plantCard()} {...hoverLift}>
    <img src={img} alt={title} style={plantImg()} />
    <div style={plantContent()}>
      <h3 style={plantTitle()}>{title}</h3>
      <span style={plantLocation()}>{location}</span>
      <p style={{ color: COLORS.frost, marginTop: 8, lineHeight: 1.6 }}>{desc}</p>
    </div>
  </motion.div>
);

/* ====== STYLES ====== */
const pageBg = () => ({ background: COLORS.white, minHeight: "100vh" });
const container = () => ({ maxWidth: 1100, margin: "auto", padding: "80px 16px" });

/* HERO */
const heroSection = (img) => ({ height: 360, background: `url(${img}) center/cover no-repeat` });
const heroOverlay = () => ({ height: "100%", background: "rgba(15,23,42,0.6)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" });
const heroTitle = () => ({ color: "#fff", fontSize: "3rem", fontWeight: 800 });
const heroSubtitle = () => ({ color: COLORS.ice, marginTop: 12 });

/* OVERVIEW */
const overviewCard = () => ({ borderRadius: 26, padding: 42, marginBottom: 70, border: `1px solid ${COLORS.steel}`, boxShadow: "0 25px 70px rgba(0,0,0,0.12)" });
const sectionTitle = () => ({ fontSize: "2rem", fontWeight: 800, color: COLORS.navy, marginBottom: 12 });
const sectionText = () => ({ color: COLORS.frost, lineHeight: 1.8 });

/* PLANTS */
const plantGrid = () => ({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 32, marginBottom: 50 });
const plantCard = () => ({ background: "#fff", borderRadius: 24, overflow: "hidden", border: `1px solid ${COLORS.steel}`, boxShadow: "0 20px 55px rgba(0,0,0,0.1)" });
const plantImg = () => ({ width: "100%", height: 240, objectFit: "cover" });
const plantContent = () => ({ padding: 26 });
const plantTitle = () => ({ fontWeight: 700, color: COLORS.navy });
const plantLocation = () => ({ color: COLORS.primary, fontWeight: 600 });

/* CAPABILITIES */
const capabilityGrid = () => ({ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28, marginBottom: 80 });
const capabilityCard = () => ({ padding: 32, borderRadius: 22, border: `1px solid ${COLORS.steel}`, boxShadow: "0 18px 45px rgba(0,0,0,0.08)" });
const capabilityTitle = () => ({ fontWeight: 700, color: COLORS.navy });
const capabilityText = () => ({ color: COLORS.frost, lineHeight: 1.7 });
