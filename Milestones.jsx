import { useState } from "react";
import { motion } from "framer-motion";
import "./Milestones.css";

import heroImage from "../../assets/Images/VLT-image-1.webp";
import foundation from "../../assets/Images/VLT-image-1.webp";
import Construction from "../../assets/Images/VLT-image-1.webp";
import Automotiveproductive from "../../assets/Images/VLT-image-1.webp";
import Designfacility from "../../assets/Images/VLT-image-1.webp";
import Domestic_Sales_Initiated from "../../assets/Images/VLT-image-1.webp";
import MENA_Export from "../../assets/Images/VLT-image-1.webp";
import Certification_Achieved from "../../assets/Images/VLT-image-1.webp";
import ExportNAmerica from "../../assets/Images/VLT-image-1.webp";
import Europeanmarketentry from "../../assets/Images/VLT-image-1.webp";
import ECRCertified from "../../assets/Images/VLT-image-1.webp";
import Japan_Market_Expansion from "../../assets/Images/VLT-image-1.webp";
import Architecturalglassline from "../../assets/Images/VLT-image-1.webp";
import expanding_into_asia from "../../assets/Images/VLT-image-1.webp";
import Temperingline from "../../assets/Images/VLT-image-1.webp";

// ================= DATA =================
const milestones = [
  { year: "1991", title: "Stone Laying Ceremony", desc: "The foundation stone was laid, marking the beginning of our manufacturing journey.", image: foundation },
  { year: "1992", title: "Construction Completed", desc: "Completion of the manufacturing facility and infrastructure development.", image: Construction },
  { year: "1992", title: "Automotive Production Line Setup", desc: "Installation of the first automotive glass production line.", image: Automotiveproductive },
  { year: "1992", title: "Design & Tooling Facility Established", desc: "In-house screen and tooling development facility commissioned.", image: Designfacility },
  { year: "1992", title: "Domestic Sales Initiated", desc: "Commercial operations began with domestic market penetration.", image: Domestic_Sales_Initiated },
  { year: "1993", title: "MENA Export Operations", desc: "Exports commenced across Middle East and North Africa regions.", image: MENA_Export },
  { year: "1993", title: "DOT Certification Achieved", desc: "Received DOT certification, meeting international safety standards.", image: Certification_Achieved },
  { year: "1993", title: "Exports to North America", desc: "Expanded exports to the USA and Canada markets.", image: ExportNAmerica },
  { year: "1994", title: "ECE R-43 Certification", desc: "Certified under ECE R-43 automotive glass regulations.", image: ECRCertified },
  { year: "1994", title: "European Market Entry", desc: "Exports initiated to European automotive markets.", image: Europeanmarketentry },
  { year: "1995", title: "Japan Market Expansion", desc: "Export operations expanded into the Japanese market.", image: Japan_Market_Expansion },
  { year: "1997", title: "Architectural Glass Line Setup", desc: "Commissioned double-glass architectural production line.", image: Architecturalglassline },
  { year: "1998", title: "Asian Market Expansion", desc: "Export footprint extended across Asian markets.", image: expanding_into_asia },
  { year: "1998", title: "Tempering Line Installed", desc: "Advanced glass tempering line commissioned.", image: Temperingline },
  { year: "2003", title: "Plant Expansion", desc: "Manufacturing capacity enhanced through plant expansion.", image: heroImage },
  { year: "2005", title: "SEF Lamination Furnace Added", desc: "Installed SEF Excon laminated glass furnace.", image: heroImage },
  { year: "2006", title: "ISO 9001 Certification", desc: "Achieved ISO 9001 quality management certification.", image: heroImage },
  { year: "2008", title: "Curved Glass Furnace Added", desc: "Midi furnace installed for curved glass production.", image: heroImage },
  { year: "2010", title: "Capacity Enhancement Expansion", desc: "Major expansion to meet increasing market demand.", image: heroImage },
  { year: "2012", title: "Architectural Line Expansion", desc: "Architectural glass line capacity further expanded.", image: heroImage },
  { year: "2013", title: "Bus Glass Bending Furnace", desc: "Screen Max furnace installed for bus glass applications.", image: heroImage },
  { year: "2014", title: "Tempering Furnace Setup", desc: "New tempering furnace commissioned for quality enhancement.", image: heroImage },
  { year: "2017", title: "New Bando Line Installation", desc: "Production efficiency improved with Bando line installation.", image: heroImage },
  { year: "2020", title: "SGCC Certification", desc: "Achieved SGCC certification for automotive safety glass." },
  { year: "2023", title: "OEM Business Collaborations", desc: "Automotive OEM visits and collaborations initiated.", image: heroImage },
  { year: "2023", title: "CEER Prototype Development Awarded", desc: "Awarded prototype development for P800/P700 models.", image: heroImage },
  { year: "2023", title: "ISO 45001 & ISO 14001", desc: "Certified for occupational health, safety, and environmental management.", image: heroImage },
  { year: "2024", title: "Polishing Machine Installation", desc: "Advanced polishing machine installed for surface finish improvement.", image: heroImage },
  { year: "2024", title: "SNAM Prototype Development", desc: "Prototype development initiated for SNAM project.", image: heroImage },
  { year: "2024", title: "OEM Business Discussions", desc: "Strategic discussions held with Lucid and Volvo.", image: heroImage },
  { year: "2025", title: "CEER PSA Audit Success", desc: "Achieved 89.9 score in CEER PSA audit.", image: heroImage },
  { year: "2025", title: "PT2 Sample Development", desc: "Successful development of PT2 samples for CEER project.", image: heroImage },
  { year: "2025", title: "Hyundai – HMME Discussions", desc: "Business collaboration discussions initiated with Hyundai HMME.", image: heroImage },
  { year: "2025", title: "IATF 16949 Certification Initiated", desc: "IATF 16949 certification process initiated as part of continuous quality improvement.", image: heroImage },
];

// ================= FILTERS =================
const filters = [
  { label: "All", value: "all" },
  { label: "1990s", value: "1990" },
  { label: "2000s", value: "2000" },
  { label: "2010s", value: "2010" },
  { label: "2020s", value: "2020" },
];

export default function Milestones() {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? milestones
      : milestones.filter(
          (m) => Math.floor(Number(m.year) / 10) * 10 === Number(filter)
        );

  return (
    <section className="milestones-page">
      {/* HERO */}
      <div className="milestones-hero">
        <img src={heroImage} alt="Milestones" />
        <div className="hero-overlay">
          <h1>Our Milestones</h1>
        </div>
      </div>

      {/* FILTER */}
      <div className="timeline-filters">
        {filters.map((f) => (
          <button
            key={f.value}
            className={filter === f.value ? "active" : ""}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        {filteredData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* YEAR */}
            <span className="dot">
              {item.year}
              <span className={`arrow ${index % 2 === 0 ? "left" : "right"}`}>
                {index % 2 === 0 ? "<" : ">"}
              </span>
            </span>

            {/* CARD */}
            <motion.div
              className="timeline-content"
              whileHover={{ scale: 1.02 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              {item.image && (
                <div className="timeline-image-wrapper">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="timeline-image"
                    whileHover={{ scale: 1.08, rotateZ: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    }}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
