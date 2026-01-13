import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

/* ===== HERO IMAGE ===== */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* ===== PRODUCT IMAGES ===== */
import windshieldImg from "../../assets/Images/VLT-image-1.webp";
import backliteImg from "../../assets/Images/VLT-image-1.webp";
import sideliteImg from "../../assets/Images/VLT-image-1.webp";
import sunroofImg from "../../assets/Images/VLT-image-1.webp";
import quarterImg from "../../assets/Images/VLT-image-1.webp";
import specialtyImg from "../../assets/Images/VLT-image-1.webp";

/* ===== DATA ===== */
const glassSolutions = [
  {
    title: "Windshields (Laminated)",
    desc:
      "Laminated windshields engineered for impact resistance, acoustic insulation, and advanced safety performance.",
    image: windshieldImg,
    link: "/products/windshields",
  },
  {
    title: "Backlites (Tempered)",
    desc:
      "High-strength tempered backlites delivering durability, safety, and thermal resistance.",
    image: backliteImg,
    link: "/products/backlites",
  },
  {
    title: "Sidelites",
    desc:
      "Precision-manufactured sidelites offering clarity, structural integrity, and aesthetic appeal.",
    image: sideliteImg,
    link: "/products/sidelites",
  },
  {
    title: "Sunroofs",
    desc:
      "Panoramic and standard sunroof glass solutions with UV protection and enhanced comfort.",
    image: sunroofImg,
    link: "/products/sunroofs",
  },
  {
    title: "Quarter Glasses",
    desc:
      "Custom-shaped quarter glasses designed for seamless vehicle integration.",
    image: quarterImg,
    link: "/products/quarter-glasses",
  },
  {
    title: "Specialty & High-Performance Glass",
    desc:
      "Advanced automotive glass solutions for demanding safety, performance, and design requirements.",
    image: specialtyImg,
    link: "/products/specialty-glass",
  },
];

/* ===== ANIMATION ===== */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AutomotiveGlassSolutions() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fff", overflow: "hidden" }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: { xs: "55vh", md: "70vh" },
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.45))",
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" fontWeight={900} sx={{ color: "#fff", mb: 2 }}>
            Automotive Glass Solutions
          </Typography>
          <Typography sx={{ color: "#E5E7EB", maxWidth: 650 }}>
            Comprehensive automotive glazing solutions engineered to meet global
            OEM safety, quality, and performance standards.
          </Typography>
        </Container>
      </Box>

      {/* ================= INTRO ================= */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Our Product Portfolio
        </Typography>
        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          From laminated windshields to specialty high-performance glass, our
          solutions combine safety, durability, and advanced engineering.
        </Typography>
      </Container>

      {/* ================= CARDS ================= */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={3}>
          {glassSolutions.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Box
  sx={{
    position: "relative",
    height: 420,
    borderRadius: 3,
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",

    "&:hover .image": {
      transform: "scale(1.12)",
    },

    "&:hover .glass": {
      opacity: 1,
      transform: "translateY(0)",
    },
  }}
>
                  {/* Image */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.6s ease",
                      "&:hover": { transform: "scale(1.08)" },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.85))",
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 3,
                      color: "#fff",
                    }}
                  >
                    <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "#E5E7EB",
                        mb: 2,
                      }}
                    >
                      {item.desc}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        alignSelf: "flex-start",
                        bgcolor: "#2563EB",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#1D4ED8" },
                      }}
                      onClick={() => navigate(item.link)}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= FOOTER ================= */}
      <Container
        maxWidth="md"
        sx={{
          py: 8,
          textAlign: "center",
          bgcolor: "#F9FAFB",
          borderRadius: 3,
          mb: 10,
        }}
      >
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Engineered for Safety & Performance
        </Typography>
        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          Each automotive glass solution is developed using advanced
          manufacturing processes to ensure compliance with international
          safety standards.
        </Typography>
      </Container>
    </Box>
  );
}
