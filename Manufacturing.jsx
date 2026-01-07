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

/* ================= HERO IMAGE ================= */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* ================= MACHINE IMAGES ================= */
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

/* ================= LOGOS ================= */
import northGlassLogo from "../../assets/Images/VLT-image-1.webp";
import glastonLogo from "../../assets/Images/VLT-image-1.webp";
import tamglassLogo from "../../assets/Images/VLT-image-1.webp";
import bandoLogo from "../../assets/Images/VLT-image-1.webp";
import joisonLogo from "../../assets/Images/VLT-image-1.webp";

/* ================= FALLBACK LOGO ================= */
const defaultLogo = northGlassLogo;

/* ================= DATA ================= */
const blocks = [
  {
    image: img1,
    logo: bandoLogo,
    make: "Japan",
    process: "Cut & Grinding",
    desc: "High-precision CNC cutting and edge grinding ensure accurate dimensions and smooth finishes.",
  },
  {
    image: img2,
    logo: joisonLogo,
    make: "China",
    process: "Screen Printing",
    desc: "Automated ceramic printing delivers uniform patterns with long-term durability.",
  },
  {
    image: img3,
    logo: joisonLogo,
    make: "China",
    process: "Enamel Drying",
    desc: "Controlled drying stabilizes coatings for color consistency and adhesion strength.",
  },
  {
    image: img4,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: "Advanced furnaces provide precise curvature control with optical clarity.",
  },
  {
    image: img5,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: "Thermal forming enables complex geometries with repeatable accuracy.",
  },
  {
    image: img6,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: "Engineered bending lines ensure uniform curvature and minimal distortion.",
  },
  {
    image: img7,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: "Precision-controlled bending supports architectural glass applications.",
  },
  {
    image: img8,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: "High-volume bending with consistent quality and dimensional accuracy.",
  },
  {
    image: img9,
    logo: glastonLogo,
    make: "Finland",
    process: "Deairing",
    desc: "Vacuum deairing eliminates trapped air for flawless lamination.",
  },
  {
    image: img10,
    logo: glastonLogo,
    make: "Finland",
    process: "Autoclave",
    desc: "Autoclave bonding ensures maximum strength and durability.",
  },
  {
    image: img11,
    logo: defaultLogo,
    make: "China",
    process: "Autoclave",
    desc: "Industrial autoclaves ensure uniform lamination quality.",
  },
  {
    image: img12,
    logo: defaultLogo,
    make: "China",
    process: "Bending",
    desc: "Optimized bending operations support scalable production.",
  },
  {
    image: img13,
    logo: defaultLogo,
    make: "China",
    process: "Cutting",
    desc: "High-speed cutting maintains tight tolerances with minimal waste.",
  },
  {
    image: img14,
    logo: defaultLogo,
    make: "USA",
    process: "Cutting",
    desc: "Precision cutting delivers clean edges for demanding applications.",
  },
  {
    image: img15,
    logo: defaultLogo,
    make: "China",
    process: "Flat Lamination",
    desc: "Flat lamination produces high-strength safety glass.",
  },
];

/* ================= MOTION ================= */
const MotionCard = motion.create(Card);

/* ================= INFO ROW ================= */
const InfoRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      px: 1.5,
      py: 0.6,
      mt: 1,
      borderRadius: "8px",
      background: "#f4f6fb",
      fontSize: "0.75rem",
      fontWeight: 600,
    }}
  >
    <span>{label}</span>
    <span>{value}</span>
  </Box>
);

/* ================= COMPONENT ================= */
const ManufacturingPremium = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography variant="h2" fontWeight={800}>
            Our Capacity & Capabilities
          </Typography>
          <Typography variant="h6">
            Precision-driven glass manufacturing excellence
          </Typography>
        </Box>
      </Box>

      {/* ================= CONTENT ================= */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {blocks.map((block, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                  }}
                  sx={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={block.image}
                    alt={block.process}
                  />

                  <CardContent sx={{ p: 2, textAlign: "center" }}>
                    <Box sx={{ mb: 1 }}>
                      <Box
                        component="img"
                        src={block.logo}
                        sx={{ height: 32 }}
                      />
                    </Box>

                    <InfoRow label="MAKE" value={block.make} />
                    <InfoRow label="PROCESS" value={block.process} />

                    <Typography
                      sx={{
                        mt: 1.5,
                        fontSize: "0.8rem",
                        lineHeight: 1.6,
                        color: "#475569",
                      }}
                    >
                      {block.desc}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ManufacturingPremium;
