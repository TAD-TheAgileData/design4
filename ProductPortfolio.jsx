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

/* ===== PRODUCTS DATA ===== */
const products = [
  { title: "Windshields (Laminated)", desc: "Laminated glass ensuring impact resistance and acoustic insulation.", image: windshieldImg, link: "/products/windshields" },
  { title: "Backlites (Tempered)", desc: "Heat-strengthened glass with superior durability and safety.", image: backliteImg, link: "/products/backlites" },
  { title: "Sidelites", desc: "Precision sidelites for clarity, safety, and aesthetics.", image: sideliteImg, link: "/products/sidelites" },
  { title: "Sunroofs", desc: "Panoramic and standard sunroof glass with UV protection.", image: sunroofImg, link: "/products/sunroofs" },
  { title: "Quarter Glasses", desc: "Custom-shaped quarter glasses for structural integration.", image: quarterImg, link: "/products/quarter" },
  { title: "Specialty High-Performance Glass", desc: "Advanced glass solutions for demanding applications.", image: specialtyImg, link: "/products/specialty" },
];

/* ===== CARD ANIMATION ===== */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" } }),
};

/* ===== BACKGROUND CIRCLE ANIMATION ===== */
const floatingCircle = (size, color, style, duration = 30, delay = 0) => (
  <motion.div
    animate={{
      y: ["0%", "20%", "0%"], // vertical floating
      x: ["0%", "15%", "0%"], // horizontal subtle movement
      rotate: [0, 360, 0],     // rotation
    }}
    transition={{
      repeat: Infinity,
      repeatType: "mirror",
      duration,
      delay,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      opacity: 0.15,
      ...style,
      zIndex: 0,
    }}
  />
);

export default function ProductPortfolio() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#ffffff", position: "relative", overflow: "hidden" }}>
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
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.45))" }} />
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h2" fontWeight={900} sx={{ color: "#fff", mb: 2 }}>
            Product Portfolio
          </Typography>
          <Typography sx={{ color: "#E5E7EB", maxWidth: 650 }}>
            Automotive glass solutions engineered to global OEM standards.
          </Typography>
        </Container>
      </Box>

      {/* ================= PRE-CARD CONTENT ================= */}
      <Container maxWidth="md" sx={{ color: "#176179", py: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Explore Our Premium Automotive Glass
        </Typography>
        <Typography sx={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8 }}>
          From windshields to specialty high-performance glass, our products are designed to meet the highest safety and quality standards. Perfect fit, exceptional durability, and superior clarity.
        </Typography>
      </Container>

      {/* ================= PRODUCTS WITH COLORFUL FLOATING BACKGROUND ================= */}
      <Box sx={{ position: "relative" }}>
        {/* Floating Circles */}
        {floatingCircle(400, "#2563EB", { top: -150, left: -100 }, 60, 0)}
        {floatingCircle(300, "#22C55E", { bottom: -100, right: -50 }, 45, 10)}
        {floatingCircle(250, "#F59E0B", { top: 200, right: -100 }, 50, 5)}
        {floatingCircle(200, "#EC4899", { bottom: 150, left: -50 }, 40, 2)}

        {/* Products Grid */}
        <Container maxWidth="lg" sx={{ py: 12, position: "relative", zIndex: 1 }}>
          <Grid container spacing={3}>
            {products.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: 400,
                      p: 3,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.95)",
                      border: "1px solid #E5E7EB",
                      boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
                      backdropFilter: "blur(10px)", // subtle glass effect
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        borderRadius: 2,
                        mb: 2,
                      }}
                    />

                    {/* TEXT */}
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" fontWeight={800}>{item.title}</Typography>
                      <Typography sx={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </Box>

                    {/* BUTTON */}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, width: "100%" }}
                      onClick={() => navigate(item.link)}
                    >
                      View More
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= POST-CARD CONTENT ================= */}
      <Container maxWidth="md" sx={{ color:"#176179" ,py: 8, textAlign: "center", bgcolor: "#F9FAFB", borderRadius: 3, mx: "auto", mb: 12 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Why Choose Our Glass?
        </Typography>
        <Typography sx={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8 }}>
          Our automotive glass combines safety, durability, and style. Each product is rigorously tested and crafted to OEM standards, ensuring long-lasting performance and peace of mind on the road.
        </Typography>
      </Container>
    </Box>
  );
}
