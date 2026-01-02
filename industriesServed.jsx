import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


/* ===== HERO IMAGE ===== */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* ===== CARD IMAGES ===== */
import passengerImg from "../../assets/Images/VLT-image-1.webp";
import commercialImg from "../../assets/Images/VLT-image-1.webp";
import offhighwayImg from "../../assets/Images/VLT-image-1.webp";
import railImg from "../../assets/Images/VLT-image-1.webp";
import specialtyImg from "../../assets/Images/VLT-image-1.webp";

/* ===== DATA ===== */
const industries = [
  {
    slug: "passenger-vehicles",
    title: "Passenger Vehicles",
    desc: "Advanced automotive glazing solutions engineered for safety and comfort.",
    
    image: passengerImg,
  },
  {
    slug: "commercial-vehicles",
    title: "Commercial Vehicles",
    desc: "Robust and compliant glass systems for heavy-duty transport.",
    
    image: commercialImg,
  },
  {
    slug: "off-highway-equipment",
    title: "Off-Highway Equipment",
    desc: "High-impact glazing for construction and industrial machinery.",
    
    image: offhighwayImg,
  },
  {
    slug: "rail-metro",
    title: "Rail & Metro",
    desc: "Certified glazing systems for rail and urban transit.",
   
    image: railImg,
  },
  {
    slug: "specialty-applications",
    title: "Specialty Applications",
    desc: "Custom-engineered solutions for demanding environments.",
    
    image: specialtyImg,
  },
];

/* ===== CARD ANIMATION ===== */
const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

export default function IndustriesServed() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#ffffff" }}>

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          height: { xs: "60vh", md: "75vh" },
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
              "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" fontWeight={900} sx={{ color: "#fff", mb: 2 }}>
              Industries Served
            </Typography>

            <Typography
              sx={{
                color: "#E5E7EB",
                maxWidth: 650,
                fontSize: "1.15rem",
                lineHeight: 1.7,
              }}
            >
              Precision-engineered glass solutions trusted by global OEMs
              across automotive, rail, and industrial sectors.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= ANIMATED CENTER CONTENT ================= */}
      <Box sx={{ position: "relative", overflow: "hidden", py: 12 }}>

        {/* Animated Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(37,99,235,0.08), #ffffff, rgba(30,64,175,0.06))",
          }}
        />

        {/* Floating Blobs */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(37,99,235,0.15)",
            filter: "blur(100px)",
            top: "-80px",
            left: "-120px",
          }}
        />

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(30,64,175,0.12)",
            filter: "blur(100px)",
            bottom: "-100px",
            right: "-100px",
          }}
        />

        <Container maxWidth="md" sx={{ color:"#176179",position: "relative", zIndex: 2, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Typography variant="h4" fontWeight={800} mb={3}>
              Engineering Glass for Every Industry
            </Typography>

            <Box
              sx={{
                width: 90,
                height: 4,
                mx: "auto",
                mb: 4,
                borderRadius: 50,
                background: "linear-gradient(90deg, #2563EB, #1E40AF)",
              }}
            />

            <Typography sx={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.8 }}>
              From passenger vehicles to rail systems and heavy-duty equipment,
              our glazing solutions meet the highest standards of safety,
              durability, and optical performance worldwide.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= CARDS SECTION ================= */}
      <Container maxWidth="lg" sx={{ pb: 14 }}>
        <Grid container spacing={4}>
          {industries.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.98))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ fontSize: 30, color: "#2563EB", mb: 1.5 }}>
                    {item.icon}
                  </Box>

                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: 145,
                      objectFit: "cover",
                      borderRadius: 3,
                      mb: 2,
                    }}
                  />

                  <Typography variant="h6" fontWeight={800} mb={1}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: "#475569", mb: 3, flexGrow: 1 }}>
                    {item.desc}
                  </Typography>

                  <Button
                    onClick={() => navigate(`/industries/${item.slug}`)}
                    sx={{
                      alignSelf: "flex-start",
                      px: 3.5,
                      py: 1.1,
                      borderRadius: 50,
                      textTransform: "none",
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, #2563EB, #1E40AF)",
                      color: "#fff",
                    }}
                  >
                    Explore Industry
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
