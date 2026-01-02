import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

/* IMPORT HERO IMAGE */
import heroImg from "../../assets/Images/VLT-image-1.webp"; 

/* IMPORT CARD IMAGES */
import img1 from "../../assets/Images/VLT-image-1.webp";
import img2 from "../../assets/Images/VLT-image-1.webp";
import img3 from "../../assets/Images/VLT-image-1.webp";
import img4 from "../../assets/Images/VLT-image-1.webp";
import img5 from "../../assets/Images/VLT-image-1.webp";

const blocks = [
  {
    title: "Advanced Manufacturing Infrastructure",
    text: "Our manufacturing facility integrates precision CNC cutting, automatic ceramic printing, high-accuracy bending, and controlled lamination processes. Each operation is optimized to ensure dimensional accuracy, surface quality, and consistent performance.",
    image: img1,
  },
  {
    title: "Precision Engineering & Process Control",
    text: "From raw glass selection to final inspection, every product is engineered through controlled parameters and monitored processes. Automation combined with skilled technical expertise ensures repeatability, reliability, and compliance with international standards.",
    image: img2,
  },
  {
    title: "Safety, Clarity & Long-Term Durability",
    text: "Our glass products are designed for safety-critical applications where impact resistance, optical clarity, and durability are essential. Controlled tempering and lamination processes ensure consistent fragmentation behavior and long-term performance.",
    image: img3,
  },
  {
    title: "Technology-Driven Continuous Improvement",
    text: "We continuously invest in advanced equipment, process optimization, and workforce development. Data-driven monitoring and preventive maintenance enable stable production, reduced variability, and improved efficiency.",
    image: img4,
  },
  {
    title: "Quality Embedded at Every Stage",
    text: "Quality is built into every stage of our manufacturing process. In-process inspections, laboratory testing, and full traceability ensure that each product meets defined safety, performance, and regulatory requirements.",
    image: img5,
  },
];

const MotionCard = motion.create(Card);

const ManufacturingPremium = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: "70vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          color: "#fff",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1,
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ maxWidth: 900, position: "relative", zIndex: 2 }}
          className="floating-text"
        >
          <Typography
            variant="h2"
            fontWeight={700}
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #FF6F61, #0B3D91, #00FFF0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "textShimmer 3s linear infinite",
            }}
          >
            Manufacturing Excellence
          </Typography>
          <Typography variant="h6" color="#f0f0f0" sx={{ mt: 2 }}>
            Advanced glass processing technologies combined with disciplined
            manufacturing systems to deliver precision-engineered, safety-critical
            glass solutions.
          </Typography>
        </motion.div>
      </Box>

      {/* CONTENT SECTION */}
      <Box sx={{ py: 12, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {blocks.map((block, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MotionCard
                  className="motion-card"
                  elevation={0}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 3,
                    rotateY: 3,
                    boxShadow: "0 25px 60px rgba(255,111,97,0.3), 0 0 20px rgba(11,61,145,0.5)",
                  }}
                  sx={{
                    borderRadius: 3,
                    p: 0,
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid transparent",
                    backgroundClip: "padding-box",
                    position: "relative",
                    overflow: "hidden",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      zIndex: -1,
                      borderRadius: 3,
                      background: "linear-gradient(135deg, #8b8d8cff)",
                    },
                  }}
                >
                  {/* CARD IMAGE */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={block.image}
                    alt={block.title}
                  />

                  <CardContent>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                          background: "linear-gradient(90deg, #FF6F61, #0B3D91, #00FFF0)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          animation: "textShimmer 3s linear infinite",
                        }}
                      >
                        {block.title}
                      </Typography>
                      <Typography variant="body1" color="#334155">
                        {block.text}
                      </Typography>
                    </motion.div>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TEXT ANIMATION KEYFRAMES */}
      <style>
        {`
          @keyframes textShimmer {
            0% { background-position: -500px; }
            100% { background-position: 500px; }
          }
        `}
      </style>
    </>
  );
};

export default ManufacturingPremium;
