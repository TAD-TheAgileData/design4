import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import heroImg from "../../assets/Images/VLT-image-1.webp";
/* FONT STACK */
const FONT_STACK =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",system-ui,sans-serif';
/* ===== DATA ===== */
const certCards = [
  {
    title: "ISO 9001:2015",
    desc:
      "Design, development, manufacturing glassware, ceramic labelled glass bottles, moulds, IS machines and accessories.",
    color: "#8b5a4a",
  },
  {
    title: "ISO 45001:2018",
    desc: "Manufacture & Dispatch of Glassware incl. Applied Ceramic Labelling",
    color: "#b49a6b",
  },
  {
    title: "ISO 14001:2015",
    desc: "Manufacture & Dispatch of Glassware incl. Applied Ceramic Labelling",
    color: "#b49a6b",
  },
  {
    title: "FSSC 22000",
    desc:
      "Manufacture & Dispatch of Glassware used in Food Packaging",
    color: "#b49a6b",
  },
  {
    title: "CII ENCON Award 2020",
    desc: "Large Scale Category of Energy Conservation",
    color: "#b49a6b",
  },
];

export default function WhyChooseUs() {
  return (
    <Box>

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "60vh", md: "75vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.85)",
            transform: "scale(1.05)",
          }}
        />

        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
          }}
        />

        {/* GLASS REFLECTION */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0) 75%)",
            pointerEvents: "none",
          }}
        />

        {/* LIGHT SWEEP */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "-120%",
            width: "60%",
            height: "100%",
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)",
            transform: "skewX(-20deg)",
            animation: "heroSweep 6s infinite linear",
            pointerEvents: "none",
          }}
        />

        {/* HERO CONTENT */}
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" fontWeight={800} color="#fff" gutterBottom>
              World-Class Glass Manufacturing
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640 }}
            >
              Delivering certified, innovative, and sustainable glass solutions
              trusted by global OEMs and industry leaders.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= CERTIFICATIONS ================= */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Certifications & Compliance
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Globally recognized standards ensuring safety, quality, and
            regulatory compliance.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {certCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  bgcolor: card.color,
                  color: "#fff",
                  p: 4,
                  minHeight: 280,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
                  },
                  "&:hover .lightSweep": {
                    left: "120%",
                  },
                }}
              >
                {/* GLASS REFLECTION */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%)",
                    opacity: 0.6,
                    pointerEvents: "none",
                  }}
                />

                {/* LIGHT SWEEP */}
                <Box
                  className="lightSweep"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "-120%",
                    width: "60%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)",
                    transform: "skewX(-20deg)",
                    transition: "left 1.1s ease",
                    pointerEvents: "none",
                  }}
                />

                <Typography textAlign="center" fontSize={40} mb={2}>
                  ★
                </Typography>

                <Typography variant="h6" fontWeight={700}>
                  {card.title}
                </Typography>

                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  {card.desc}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes heroSweep {
            0% { left: -120%; }
            100% { left: 120%; }
          }
        `}
      </style>
    </Box>
  );
}
