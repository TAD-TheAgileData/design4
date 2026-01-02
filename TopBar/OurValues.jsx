import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { FaStar, FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa";

/* HERO IMAGE */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* CARD IMAGE */
import cardImg from "../../assets/Images/VLT-image-1.webp";

/* VALUES DATA */
const values = [
  {
    title: "Quality",
    icon: <FaStar />,
    text:
      "We deliver glass products that meet the highest standards of safety, performance, and reliability.",
  },
  {
    title: "Integrity",
    icon: <FaShieldAlt />,
    text:
      "We operate with transparency, ethics, and accountability in every relationship.",
  },
  {
    title: "Innovation",
    icon: <FaLightbulb />,
    text:
      "Advanced technology and continuous improvement drive our future-ready glass solutions.",
  },
  {
    title: "Customer Commitment",
    icon: <FaHandshake />,
    text:
      "We focus on long-term value through tailored solutions and dependable service.",
  },
];

const MotionCard = motion(Card);

export default function OurValues() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        ref={heroRef}
        sx={{
          height: "65vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background image with parallax */}
        <motion.div
          style={{ y: heroY }}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(2,6,23,0.7),rgba(2,6,23,0.9))",
          }}
        />

        {/* Floating light orbs */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity }}
            style={{
              position: "absolute",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(56,189,248,0.18)",
              filter: "blur(120px)",
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              background:
                "linear-gradient(90deg,#FF6F61,#00FFF0,#0B3D91)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "300% 300%",
              animation: "textShimmer 4s linear infinite",
              mb: 2,
            }}
          >
            Our Values
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#e5e7eb", maxWidth: 720, mx: "auto" }}
          >
            Principles guiding our engineering, manufacturing, and global partnerships.
          </Typography>
        </motion.div>
      </Box>

      {/* ================= VALUES ================= */}
      <Box sx={{ bgcolor: "#ffffff", py: 16 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {values.map((item, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
                <MotionCard
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 30px 70px rgba(2,6,23,0.18), 0 0 40px rgba(0,255,240,0.35)",
                  }}
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "#ffffff",
                    position: "relative",
                    border: "2px solid transparent",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -2,
                      borderRadius: 4,
                      background:
                        "linear-gradient(270deg,#FF6F61,#00FFF0,#0B3D91)",
                      backgroundSize: "400% 400%",
                      animation: "gradientMove 10s ease infinite",
                      zIndex: -1,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={cardImg}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  {/* Content */}
                  <CardContent sx={{ p: 5 }}>
                    {/* Floating icon */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        fontSize: 28,
                        color: "#2563eb",
                        marginBottom: 12,
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <Typography
                      variant="h5"
                      fontWeight={800}
                      gutterBottom
                      sx={{
                        background:
                          "linear-gradient(90deg,#FF6F61,#0B3D91,#00FFF0)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        backgroundSize: "300% 300%",
                        animation: "textShimmer 4s linear infinite",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography sx={{ color: "#334155", lineHeight: 1.7 }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= KEYFRAMES ================= */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes textShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </>
  );
}
