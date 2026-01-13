import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Milestones.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* MOTION ELEMENTS */
const MotionDiv = motion.create("div");
const MotionImg = motion.create("img");

/* HERO */
import heroImage from "../../assets/Images/VLT-image-1.webp";

/* IMAGES */
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

/* IMAGE MAP */
const imageMap = {
  "foundation.jpg": foundation,
  "Construction.jpg": Construction,
  "Automotiveproductive.jpg": Automotiveproductive,
  "Designfacility.jpg": Designfacility,
  "Domestic_Sales_Initiated.jpg": Domestic_Sales_Initiated,
  "MENA_Export.jpg": MENA_Export,
  "Certification_Achieved.jpg": Certification_Achieved,
  "ExportNAmerica.jpg": ExportNAmerica,
  "Europeanmarketentry.jpg": Europeanmarketentry,
  "ECRCertified.jpg": ECRCertified,
  "Japan_Market_Expansion.jpg": Japan_Market_Expansion,
  "Architecturalglassline.jpg": Architecturalglassline,
  "expanding-into-asia.jpg": expanding_into_asia,
  "Tempering_Line.jpg": Temperingline,
};

/* FILTERS */
const filters = [
  { label: "All", value: "all" },
  { label: "1990s", value: "1990" },
  { label: "2000s", value: "2000" },
  { label: "2010s", value: "2010" },
  { label: "2020s", value: "2020" },
];

/* DATA (UNCHANGED) */
const milestones = [
  {
    year: "1991",
    title: "Stone Laying Ceremony",
    desc: "The foundation stone was laid, marking the beginning of our manufacturing journey.",
    image: "foundation.jpg",
  },
  {
    year: "1992",
    title: "Construction Completed",
    desc: "Completion of the manufacturing facility and infrastructure development.",
    image: "Construction.jpg",
  },
  {
    year: "1992",
    title: "Automotive Production Line Setup",
    desc: "Installation of the first automotive glass production line.",
    image: "Automotiveproductive.jpg",
  },
  {
    year: "1992",
    title: "Design & Tooling Facility Established",
    desc: "In-house screen and tooling development facility commissioned.",
    image: "Designfacility.jpg",
  },
  {
    year: "1992",
    title: "Domestic Sales Initiated",
    desc: "Commercial operations began with domestic market penetration.",
    image: "Domestic_Sales_Initiated.jpg",
  },
  {
    year: "1993",
    title: "MENA Export Operations",
    desc: "Exports commenced across Middle East and North Africa regions.",
    image: "MENA_Export.jpg",
  },
  {
    year: "1993",
    title: "DOT Certification Achieved",
    desc: "Received DOT certification, meeting international safety standards.",
    image: "Certification_Achieved.jpg",
  },
  {
    year: "1993",
    title: "Exports to North America",
    desc: "Expanded exports to the USA and Canada markets.",
    image: "ExportNAmerica.jpg",
  },
  {
    year: "1994",
    title: "ECE R-43 Certification",
    desc: "Certified under ECE R-43 automotive glass regulations.",
    image: "ECRCertified.jpg",
  },
  {
    year: "1994",
    title: "European Market Entry",
    desc: "Exports initiated to European automotive markets.",
    image: "Europeanmarketentry.jpg",
  },
  {
    year: "1995",
    title: "Japan Market Expansion",
    desc: "Export operations expanded into the Japanese market.",
    image: "Japan_Market_Expansion.jpg",
  },
  {
    year: "1997",
    title: "Architectural Glass Line Setup",
    desc: "Commissioned double-glass architectural production line.",
    image: "Architecturalglassline.jpg",
  },
  {
    year: "1998",
    title: "Asian Market Expansion",
    desc: "Export footprint extended across Asian markets.",
    image: "expanding-into-asia.jpg",
  },
  {
    year: "1998",
    title: "Tempering Line Installed",
    desc: "Advanced glass tempering line commissioned.",
    image: "Tempering_Line.jpg",
  },
  {
    year: "2003",
    title: "Plant Expansion",
    desc: "Manufacturing capacity enhanced through plant expansion.",
    image: "Plantexpansion.webp",
  },
  {
    year: "2005",
    title: "SEF Lamination Furnace Added",
    desc: "Installed SEF Excon laminated glass furnace.",
    image: "SAFLaminated.JPG",
  },
  {
    year: "2006",
    title: "ISO 9001 Certification",
    desc: "Achieved ISO 9001 quality management certification.",
    image: "ISOStandard.jpg",
  },
  {
    year: "2008",
    title: "Curved Glass Furnace Added",
    desc: "Midi furnace installed for curved glass production.",
    image: "Curvedglassfurnace.JPG",
  },
  {
    year: "2010",
    title: "Capacity Enhancement Expansion",
    desc: "Major expansion to meet increasing market demand.",
    image: "CapacityEnhancement.jpg",
  },
  {
    year: "2012",
    title: "Architectural Line Expansion",
    desc: "Architectural glass line capacity further expanded.",
    image: "ArchietecturalExpansion.jpg",
  },
  {
    year: "2013",
    title: "Bus Glass Bending Furnace",
    desc: "Screen Max furnace installed for bus glass applications.",
    image: "BusglassBending.webp",
  },
  {
    year: "2014",
    title: "Tempering Furnace Setup",
    desc: "New tempering furnace commissioned for quality enhancement.",
    image: "Temperingfurnance.jpg",
  },
  {
    year: "2017",
    title: "New Bando Line Installation",
    desc: "Production efficiency improved with Bando line installation.",
    image: "Bandoline.webp",
  },
  {
    year: "2020",
    title: "SGCC Certification",
    desc: "Achieved SGCC certification for automotive safety glass.",
    image: "Certificateachieved.jpg",
  },
  {
    year: "2023",
    title: "OEM Business Collaborations",
    desc: "Automotive OEM visits and collaborations initiated.",
    image: "Collaboration.jpg",
  },
  {
    year: "2023",
    title: "CEER Prototype Development Awarded",
    desc: "Awarded prototype development for P800/P700 models.",
    image: "Awarded.jpg",
  },
  {
    year: "2023",
    title: "ISO 45001 & ISO 14001",
    desc: "Certified for occupational health, safety, and environmental management.",
    image: "ISOStandard.jpg",
  },
  {
    year: "2024",
    title: "Polishing Machine Installation",
    desc: "Advanced polishing machine installed for surface finish improvement.",
    image: "Polishing.jpg",
  },
  {
    year: "2024",
    title: "SNAM Prototype Development",
    desc: "Prototype development initiated for SNAM project.",
    image: "snamcertification.jpg",
  },
  {
    year: "2024",
    title: "OEM Business Discussions",
    desc: "Strategic discussions held with Lucid and Volvo.",
    image: "Discussion.jpg",
  },
  {
    year: "2025",
    title: "CEER PSA Audit Success",
    desc: "Achieved 89.9 score in CEER PSA audit.",
    image: "Success.jpg",
  },
  {
    year: "2025",
    title: "PT2 Sample Development",
    desc: "Successful development of PT2 samples for CEER project.",
    image: "Success.jpg",
  },
  {
    year: "2025",
    title: "Hyundai – HMME Discussions",
    desc: "Business collaboration discussions initiated with Hyundai HMME.",
    image: "Achievement.jpg",
  },
  {
    year: "2025",
    title: "IATF 16949 Certification Initiated",
    desc: "IATF 16949 certification process initiated as part of continuous quality improvement.",
    image: "IATF16949.jpg",
  },
];


/* ================= COMPONENT ================= */
export default function Milestones() {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? [...milestones].sort((a, b) => b.year - a.year)
      : milestones.filter(
          (m) => Math.floor(Number(m.year) / 10) * 10 === Number(filter)
        );

  return (
    <section className="milestones-page">
      {/* HERO */}
      <div className="milestones-hero">
        <MotionImg
          src={heroImage}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="hero-overlay">
          <h1>Our Milestones</h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="milestones-intro">
        <p>
          Since our establishment, Technoglass has steadily evolved into a
          trusted automotive glass manufacturer.
        </p>
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
        <div className="timeline-present">
          <span>PRESENT</span>
          <div className="present-line"></div>
        </div>

        {filteredData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <MotionDiv
              key={index}
              className={`timeline-item ${isLeft ? "left" : "right"}`}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* YEAR */}
              <MotionDiv className="year-dot">{item.year}</MotionDiv>

              {/* CARD */}
              <MotionDiv
                className="timeline-content"
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
              >
                <div className="card-header">
                  {isLeft && <h3>{item.title}</h3>}
                  <span className="direction-icon">
                    {isLeft ? <FaChevronLeft /> : <FaChevronRight />}
                  </span>
                  {!isLeft && <h3>{item.title}</h3>}
                </div>

                <p>{item.desc}</p>

                <MotionImg
                  src={imageMap[item.image]}
                  className="timeline-image"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
              </MotionDiv>
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
}