import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

/* ================= IMAGES ================= */
import heroImg from "../../assets/Images/VLT-image-1.webp";
import LaminatedImg from "../../assets/Images/VLT-image-1.webp";
import TemperedImg from "../../assets/Images/VLT-image-1.webp";
import AdvancedImg from "../../assets/Images/VLT-image-1.webp";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= SERVICES DATA ================= */
const serviceSections = [
  {
    id: "laminated",
    title: "Laminated Glass",
    description:
      "High-performance laminated glass engineered for safety, acoustic comfort, and superior optical clarity in automotive and architectural applications.",
    bgImage: LaminatedImg,
    columns: 3,
    cards: [
      {
        title: "PVB Lamination",
        desc:
          "High-quality PVB interlayers ensuring safety, sound insulation, and impact resistance.",
        img: "/images/pvb.jpg",
        link: "/services/pvb-lamination",
      },
      {
        title: "Autoclave Capacity",
        desc:
          "Advanced autoclave systems enabling uniform bonding, durability, and high production efficiency.",
        img: "/images/autoclave.jpg",
        link: "/services/autoclave-capacity",
      },
      {
        title: "Optical Quality Control",
        desc:
          "Precision inspection systems ensuring distortion-free, high-clarity laminated glass.",
        img: "/images/optical.jpg",
        link: "/services/optical-quality",
      },
    ],
  },

  {
    id: "tempered",
    title: "Tempered Glass",
    description:
      "High-strength tempered glass manufactured to meet stringent safety, durability, and compliance standards.",
    bgImage: TemperedImg,
    bgAlt: true,
    columns: 3,
    cards: [
      {
        title: "Advanced Tempering Furnaces",
        desc:
          "State-of-the-art furnaces delivering consistent strength and thermal performance.",
        img: "/images/tempering.jpg",
        link: "/services/advanced-tempering",
      },
      {
        title: "Bending Capabilities",
        desc:
          "Precision-controlled bending processes for complex glass geometries.",
        img: "/images/bending.jpg",
        link: "/services/bending-capabilities",
      },
      {
        title: "Fragmentation Standard",
        desc:
          "Controlled fragmentation meeting international safety and regulatory compliance requirements.",
        img: "/images/fragmentation.jpg",
        link: "/services/fragmentation-standard",
      },
    ],
  },

  {
    id: "advanced",
    title: "Advanced Manufacturing Capabilities",
    description:
      "Precision-driven processes supporting high-performance automotive and architectural glass solutions.",
    bgImage: AdvancedImg,
    columns: 4,
    cards: [
      {
        title: "Ceramic Printing",
        img: "/images/ceramic-printing.jpg",
        link: "/services/ceramic-printing",
      },
      {
        title: "CNC Shaping",
        img: "/images/cnc-shaping.jpg",
        link: "/services/cnc-shaping",
      },
      {
        title: "Coating Technologies",
        img: "/images/coating-technologies.jpg",
        link: "/services/coating-technologies",
      },
      {
        title: "Edge Finishing",
        img: "/images/edge-finishing.jpg",
        link: "/services/edge-finishing",
      },
    ],
  },
];

/* ================= MAIN COMPONENT ================= */
export default function Services() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fff" }}>
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
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h2" fontWeight={900} sx={{ color: "#fff", mb: 2 }}>
            Services
          </Typography>
          <Typography sx={{ color: "#E5E7EB", maxWidth: 720 }}>
            Advanced glass manufacturing technologies engineered for safety,
            precision, and global OEM standards.
          </Typography>
        </Container>
      </Box>

      {/* ================= CARD-BASED SECTION NAVIGATION ================= */}
      {serviceSections.map((section) => (
        <Box
          key={section.id}
          sx={{ bgcolor: section.bgAlt ? "#F9FAFB" : "#ffffff" }}
        >
          <Container maxWidth="lg" sx={{ py: 12 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 40px 90px rgba(0,0,0,0.15)",
              }}
            >
              {/* BACKGROUND IMAGE */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${section.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.85)",
                }}
              />

              {/* GLASS WRAPPER */}
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 4, md: 6 },
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.97))",
                  backdropFilter: "blur(14px)",
                }}
              >
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" fontWeight={800} mb={1}>
                    {section.title}
                  </Typography>

                  <Typography sx={{ color: "#475569", maxWidth: 760, mb: 3 }}>
                    {section.description}
                  </Typography>

                  <Divider sx={{ width: 80, mb: 5 }} />

                  <Grid container spacing={4}>
                    {section.cards.map((card, index) => (
                      <Grid
                        item
                        xs={12}
                        md={12 / section.columns}
                        key={index}
                      >
                        <motion.div
                          whileHover={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              borderRadius: 3,
                              overflow: "hidden",
                              background: "rgba(255,255,255,0.95)",
                              boxShadow:
                                "0 25px 50px rgba(0,0,0,0.15)",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {/* IMAGE */}
                            <Box
                              sx={{
                                height: 180,
                                backgroundImage: `url(${card.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />

                            {/* CONTENT */}
                            <Box sx={{ p: 3, flexGrow: 1 }}>
                              <Typography fontWeight={800} mb={1}>
                                {card.title}
                              </Typography>

                              {card.desc && (
                                <Typography
                                  sx={{
                                    color: "#475569",
                                    lineHeight: 1.6,
                                    mb: 3,
                                  }}
                                >
                                  {card.desc}
                                </Typography>
                              )}

                              <Button
                                variant="contained"
                                fullWidth
                                onClick={() => navigate(card.link)}
                                sx={{
                                  borderRadius: 2,
                                  textTransform: "none",
                                  fontWeight: 600,
                                }}
                              >
                                Learn More
                              </Button>
                            </Box>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}

      {/* ================= TECHNICAL RESOURCES ================= */}
      <Box sx={{ bgcolor: "#F9FAFB" }}>
        <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography variant="h4" fontWeight={800} mb={2}>
              Technical Resources
            </Typography>

            <Divider sx={{ width: 80, mx: "auto", mb: 4 }} />

            <Typography
              sx={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Supported by experienced engineers, testing laboratories, and
              continuous R&D, our technical resources ensure compliance with
              global standards and consistent product excellence.
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
