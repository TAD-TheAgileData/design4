import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Manufacturing.css";

/* HERO */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* IMAGES */
import img1 from "../../assets/Images/VLT-image-1.webp";
import img2 from "../../assets/Images/VLT-image-1.webp";
import img3 from "../../assets/Images/VLT-image-1.webp";
import img4 from "../../assets/Images/VLT-image-1.webp";
import img5 from "../../assets/Images/VLT-image-1.webp";
import img6 from "../../assets/Images/VLT-image-1.webp";
import img7 from "../../assets/Images/VLT-image-1.webp";
import img8 from "../../assets/Images/VLT-image-1.webp";
import img9 from "../../assets/Images/VLT-image-1.webp";
import img10 from "../../assets/Images/VLT-image-1.webp";
import img11 from "../../assets/Images/VLT-image-1.webp";
import img12 from "../../assets/Images/VLT-image-1.webp";
import img13 from "../../assets/Images/VLT-image-1.webp";
import img14 from "../../assets/Images/VLT-image-1.webp";
import img15 from "../../assets/Images/VLT-image-1.webp";

/* LOGOS */
import northGlassLogo from "../../assets/Images/VLT-image-1.webp";
import glastonLogo from "../../assets/Images/VLT-image-1.webp";
import tamglassLogo from "../../assets/Images/VLT-image-1.webp";
import bandoLogo from "../../assets/Images/VLT-image-1.webp";
import joisonLogo from "../../assets/Images/VLT-image-1.webp";

/* DATA */
const cardData = [
  { image: img1, logo: bandoLogo, make: "Japan", process: "Cut & Grinding", desc: ["High-precision CNC cutting","Smooth edge grinding","Accurate dimensions"] },
  { image: img2, logo: joisonLogo, make: "China", process: "Screen Printing", desc: ["Automated ceramic printing","Uniform patterns","Long durability"] },
  { image: img3, logo: joisonLogo, make: "China", process: "Enamel Drying", desc: ["Controlled drying","Color consistency","Strong adhesion"] },
  { image: img4, logo: tamglassLogo, make: "Finland", process: "Bending", desc: ["Advanced furnaces","Optical clarity","Precise curvature"] },
  { image: img5, logo: tamglassLogo, make: "Finland", process: "Bending", desc: ["Thermal forming","Complex geometry","Repeatable accuracy"] },
  { image: img6, logo: tamglassLogo, make: "Finland", process: "Bending", desc: ["Engineered bending lines","Uniform curvature","Minimal distortion"] },
  { image: img7, logo: northGlassLogo, make: "China", process: "Bending", desc: ["Precision control","Architectural glass","High reliability"] },
  { image: img8, logo: northGlassLogo, make: "China", process: "Bending", desc: ["High-volume output","Consistent quality","Dimensional accuracy"] },
  { image: img9, logo: glastonLogo, make: "Finland", process: "Deairing", desc: ["Vacuum deairing","No air bubbles","Perfect lamination"] },
  { image: img10, logo: glastonLogo, make: "Finland", process: "Autoclave", desc: ["High-pressure bonding","Maximum strength","Durable lamination"] },
  { image: img11, logo: northGlassLogo, make: "China", process: "Autoclave", desc: ["Uniform bonding","Industrial scale","Quality consistency"] },
  { image: img12, logo: northGlassLogo, make: "China", process: "Bending", desc: ["Optimized workflow","Scalable production","High efficiency"] },
  { image: img13, logo: northGlassLogo, make: "China", process: "Cutting", desc: ["High-speed cutting","Low material waste","Tight tolerances"] },
  { image: img14, logo: northGlassLogo, make: "USA", process: "Cutting", desc: ["Precision edges","Clean finish","Demanding applications"] },
  { image: img15, logo: northGlassLogo, make: "China", process: "Flat Lamination", desc: ["Safety glass","High strength","Uniform bonding"] },
];

/* ANIMATION */
const cardVariants = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -120 : 120,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionCard = motion.create(Card);

/* COMPONENT */
export default function ManufacturingPremium() {
  return (
    <>
      {/* HERO */}
      <Box className="mc-hero">
        <img src={heroImg} className="mc-hero-img" alt="" />
        <Box className="mc-hero-overlay">
          <Box>
            <h1 className="mc-hero-title">Manufacturing Excellence</h1>
            <p className="mc-hero-subtitle">Precision • Automation • Global Standards</p>
          </Box>
        </Box>
      </Box>

      {/* CARDS */}
      <Container maxWidth="lg" className="mc-container">
        <Grid container spacing={5}>
          {cardData.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <Grid item xs={12} key={index}>
                <MotionCard
                  className="mc-card"
                  custom={reverse ? "right" : "left"}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Box
                    className="mc-zigzag"
                    sx={{
                      flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
                    }}
                  >
                    {/* IMAGE */}
                    <Box className="mc-image-wrap">
                      <CardMedia component="img" image={item.image} className="mc-image" />
                      <div className="mc-image-badge">{item.process}</div>
                    </Box>

                    {/* CONTENT */}
                    <CardContent className="mc-content">
                      <img src={item.logo} className="mc-logo" alt="" />
                      <Typography className="mc-make">MAKE: {item.make}</Typography>
                      <Typography className="mc-process">PROCESS: {item.process}</Typography>

                      <ul className="mc-desc">
                        {item.desc.map((p, i) => (
                          <li key={i}>
                            <CheckCircleIcon className="mc-bullet-icon" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Box>
                </MotionCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
