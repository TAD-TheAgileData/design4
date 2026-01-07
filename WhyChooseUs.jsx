import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid } from "@mui/material";

/* IMAGES */
import heroImg from "../../assets/Images/VLT-image-1.webp";
import iso9001 from "../../assets/Images/VLT-image-1.webp";
import iso45001 from "../../assets/Images/VLT-image-1.webp";
import iso14001 from "../../assets/Images/VLT-image-1.webp";
import fssc from "../../assets/Images/VLT-image-1.webp";
import encon from "../../assets/Images/VLT-image-1.webp";

/* DATA */
const certCards = [
  {
    title: "IATF 16949:2016 – Automotive Quality Management System",
    image: iso9001,
    desc: `
Ensures consistent quality, defect prevention, and reduction of variation and waste.

• Harmonizes global automotive quality requirements  
• Ensures suppliers meet OEM expectations  
• Focuses on customer satisfaction and continuous improvement
`,
  },
  {
    title: "ISO 9001:2015 – Quality Management System",
    image: iso9001,
    desc: `
Delivers a structured framework for consistent product and service quality.

• Improves operational efficiency  
• Enhances customer satisfaction  
• Encourages continual improvement
`,
  },
  {
    title: "ISO 14001:2015 – Environmental Management System",
    image: iso14001,
    desc: `
Supports environmental responsibility and sustainability.

• Reduces environmental impact  
• Ensures regulatory compliance  
• Promotes pollution prevention
`,
  },
  {
    title: "ISO 45001:2018 – Occupational Health & Safety",
    image: iso45001,
    desc: `
Improves workplace safety and employee well-being.

• Identifies hazards and risks  
• Reduces work-related incidents  
• Demonstrates OH&S compliance
`,
  },
  {
    title: "ECE R-43 – Automotive Safety Glazing",
    image: fssc,
    desc: `
UN regulation for automotive glazing materials.

• Prevents dangerous glass fragmentation  
• Ensures optical clarity  
• Withstands mechanical stress
`,
  },
  {
    title: "CoP Certification – Conformity of Production",
    image: encon,
    desc: `
Ensures mass production consistency.

• Maintains approved specifications  
• Reduces recall risks  
• Builds regulatory confidence
`,
  },
  {
    title: "NM 22.0.010 – Morocco Automotive Standard",
    image: encon,
    desc: `
Mandatory Moroccan automotive compliance.

• Meets national safety laws  
• Required for exporters  
• Confirms product conformity
`,
  },
  {
    title: "Global Tier-1 Partnership for Strategic Materials",
    image: encon,
    desc: `
Strategic partnerships with global suppliers.

Raw Glass:
• Guardian – Thailand  
• Asahi – China  
• Pilkington – China  

PVB:
• Eastman Saflex – Belgium  
• Trosifol – Germany  
• Sekisui – Japan  

Black Ceramic:
• Ferro – Germany  
• Torrecid – Spain
`,
  },
];

export default function Certifications() {
  return (
    <Box sx={{ position: "relative", bgcolor: "#f8fafc", overflow: "hidden" }}>
      {/* ================= PARTICLE BACKGROUND ================= */}
      <Box className="particle-background" />

      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "60vh", md: "75vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              color="#fff"
              gutterBottom
              letterSpacing={-1}
            >
              Certifications & Compliance
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "#d1d5db", maxWidth: 650, lineHeight: 1.6 }}
            >
              International standards ensuring quality, safety, and sustainable
              manufacturing excellence.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= LIST ================= */}
      <Container maxWidth="lg" sx={{ py: 16, position: "relative" }}>
        {/* Vertical spine */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            bgcolor: "#e5e7eb",
            display: { xs: "none", md: "block" },
          }}
        />

        {certCards.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <Grid
              container
              key={index}
              spacing={8}
              alignItems="center"
              direction={reverse ? "row-reverse" : "row"}
              sx={{ mb: 14, position: "relative" }}
            >
              {/* IMAGE */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0], rotateY: [0, 3, -3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "easeInOut",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 210,
                        width: 240,
                        mx: "auto",
                        borderRadius: 5,
                        bgcolor: "#fff",
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        boxShadow: "0 40px 90px rgba(0,0,0,0.28)",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          transform: "rotateY(8deg) scale(1.08)",
                          boxShadow: "0 50px 120px rgba(0,0,0,0.32)",
                        },
                      }}
                    />

                    {/* Pedestal */}
                    <Box
                      sx={{
                        mt: 2,
                        mx: "auto",
                        width: 120,
                        height: 6,
                        borderRadius: 10,
                        bgcolor: "#e5e7eb",
                        filter: "blur(0.5px)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              </Grid>

              {/* CONTENT */}
              <Grid item xs={12} md={8}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      bgcolor: "#fff",
                      p: { xs: 4.5, md: 5.5 },
                      borderRadius: 4,
                      maxWidth: 760,
                      ml: reverse ? "auto" : 0,
                      mr: reverse ? 0 : "auto",
                      boxShadow: "0 30px 100px rgba(0,0,0,0.09)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Ambient gradient shimmer */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(120deg, rgba(15,23,42,0.04), transparent)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Accent bar */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: 5,
                        bgcolor: "#0f172a",
                        borderRadius: "5px 0 0 5px",
                      }}
                    />

                    <Typography
                      variant="h5"
                      fontWeight={800}
                      gutterBottom
                      sx={{ pl: 3, letterSpacing: -0.4 }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        pl: 3,
                        color: "#475569",
                        lineHeight: 1.95,
                        whiteSpace: "pre-line",
                        fontSize: 15.5,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          );
        })}
      </Container>

      {/* ================= PARTICLE BACKGROUND CSS ================= */}
      <style>
        {`
          .particle-background {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            background: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 20px 20px;
            animation: moveParticles 60s linear infinite;
          }

          @keyframes moveParticles {
            0% { background-position: 0 0; }
            100% { background-position: 2000px 2000px; }
          }
        `}
      </style>
    </Box>
  );
}
