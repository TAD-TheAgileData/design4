import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

/* ===== IMAGE ===== */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* ===== DATA ===== */
const trustCards = [
  {
    title: "Certifications & Compliance",
    desc: "Global safety & regulatory standards ensuring international compliance.",
    image: heroImg,
  },
  {
    title: "Quality Assurance",
    desc: "Precision-driven quality systems delivering consistent excellence.",
    image: heroImg,
  },
  {
    title: "Environmental Compliance",
    desc: "Sustainable, eco-friendly manufacturing aligned with global norms.",
    image: heroImg,
  },
  {
    title: "Partnerships & Clients",
    desc: "Trusted partnerships with global industry leaders and OEMs.",
    image: heroImg,
  },
  {
    title: "Media & Gallery",
    desc: "Explore our facilities, processes, and project showcases.",
    image: heroImg,
  },
  {
    title: "Case Studies",
    desc: "Real-world engineering success stories and innovations.",
    image: heroImg,
  },
];

export default function Trust() {
  const [selectedCard, setSelectedCard] = useState(null);

  /* ================= HERO ================= */
  const HeroSection = () => (
    <Box
      sx={{
        height: "70vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${selectedCard?.image || heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.9))",
        }}
      />

      {/* CONTENT */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" fontWeight={900} mb={2}>
          {selectedCard
            ? selectedCard.title
            : "Trust, Compliance & Excellence"}
        </Typography>

        <Typography color="#E5E7EB" maxWidth={600}>
          {selectedCard
            ? selectedCard.desc
            : "Our commitment to quality, sustainability, and global standards."}
        </Typography>
      </Container>
    </Box>
  );

  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* DETAIL SECTION */}
      {selectedCard && (
        <Container maxWidth="md" sx={{ py: 8 }}>
          <IconButton onClick={() => setSelectedCard(null)} sx={{ mb: 3 }}>
            <ArrowBackIcon />
          </IconButton>

          <Typography fontSize={18} lineHeight={1.9} color="#475569">
            {selectedCard.desc}
          </Typography>
        </Container>
      )}

      {/* CARD SECTION */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={4}>
          {trustCards.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 360,
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* DARK OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.85))",
                  }}
                />

                {/* CONTENT (ALWAYS VISIBLE) */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    color: "#fff",
                  }}
                >
                  <Typography fontWeight={800} fontSize={20}>
                    {item.title}
                  </Typography>

                  <Typography fontSize={14} opacity={0.9} my={1}>
                    {item.desc}
                  </Typography>

                  <Button
                    variant="outlined"
                    onClick={() => setSelectedCard(item)}
                    sx={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,0.6)",
                      width: "fit-content",
                      mt: 1,
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
