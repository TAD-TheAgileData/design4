import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BackgroundAnimation from "./BackgroundAnimation";

/* HERO IMAGE */
import heroImg from "../../assets/Images/VLT-image-1.webp";

/* SECTION IMAGES */
import purposeImg from "../../assets/Images/VLT-image-1.webp";
import visionImg from "../../assets/Images/VLT-image-1.webp";
import missionImg from "../../assets/Images/VLT-image-1.webp";

/* ================= ANIMATIONS ================= */
const cardEntrance = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ================= IMAGE COMPONENT ================= */
const CardImage = ({ src }) => (
  <motion.img
    src={src}
    alt=""
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{
      width: "100%",
      height: 360,
      objectFit: "cover",
      borderRadius: 16,
      boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
    }}
  />
);

/* ================= COMPONENT ================= */
const Vision = () => {
  const particlesInit = async (main) => await loadFull(main);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: "75vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              size: { value: { min: 1, max: 4 } },
              opacity: { value: 0.3 },
              links: { enable: true, opacity: 0.2 },
            },
          }}
          style={{ position: "absolute", inset: 0 }}
        />

        <Box sx={{ zIndex: 2 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              background: "linear-gradient(90deg,#FF6F61,#00FFF0,#0B3D91)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Vision · Mission · Purpose
          </Typography>
        </Box>

        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }} />
      </Box>

      {/* ================= PURPOSE (CONTENT | IMAGE) ================= */}
      <Box sx={{ py: 14, bgcolor: "#f8fafc" }}>
        <BackgroundAnimation />
        <Container maxWidth="lg">
          <motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
            <Paper sx={{ p: 6, borderRadius: 4 }}>
              <Grid container spacing={6} alignItems="center" wrap="nowrap">
                <Grid item xs={6}>
                  <Typography variant="h4" fontWeight={700} color="#176179">
                    Our Purpose
                  </Typography>

                  <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    <strong>Supporting Mobility & Home for a Better Life.</strong>
                    <br /><br />
                    Our diverse and multi-lingual <strong>Sales Teams travel the globe constantly</strong>,
                    strengthening customer relationships and keeping us ahead of international trends.
                    <br /><br />
                    <strong>A key to our success is our extensive knowledge of:</strong>
                    <ul>
                      <li>Glass processing</li>
                      <li>World trade</li>
                      <li>Cultures</li>
                      <li>Business customs</li>
                    </ul>
                    By working in collaboration with our business partners, we ensure that our
                    <strong> quality products and services meet or exceed customer expectations.</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <motion.div style={{ y: parallaxY }}>
                    <CardImage src={purposeImg} />
                  </motion.div>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* ================= VISION (IMAGE | CONTENT) ================= */}
      <Box sx={{ py: 14, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
            <Paper sx={{ p: 6, borderRadius: 4 }}>
              <Grid container spacing={6} alignItems="center" wrap="nowrap">
                <Grid item xs={6}>
                  <motion.div style={{ y: parallaxY }}>
                    <CardImage src={visionImg} />
                  </motion.div>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h4" fontWeight={700} color="#176179">
                    Our Vision
                  </Typography>

                  <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    <strong>“Make every glass to deliver a great experience”</strong>
                    <br /><br />
                    Technical Glass Co. success is based on <strong>commitment, dedication, integrity,
                    hard work, and the vision of its founders and employees.</strong>
                    <br /><br />
                    <strong>Leadership:</strong><br />
                    Mr. Hashim Al Sheikh<br />
                    Eng. Mousa Al-Gedaily
                    <br /><br />
                    As a trusted automotive partner, we create innovative glazing solutions that enhance:
                    <ul>
                      <li>Visibility</li>
                      <li>Safety</li>
                      <li>Sustainability</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* ================= MISSION (CONTENT | IMAGE) ================= */}
      <Box sx={{ py: 14, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
            <Paper sx={{ p: 6, borderRadius: 4 }}>
              <Grid container spacing={6} alignItems="center" wrap="nowrap">
                <Grid item xs={6}>
                  <Typography variant="h4" fontWeight={700} color="#176179">
                    Our Mission
                  </Typography>

                  <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    <strong>
                      “To build a Customer Centric organization for achieving sustainable leadership
                      position & profitable growth”
                    </strong>
                    <br /><br />
                    Technical Glass Company Ltd. <strong>(Techno Glass)</strong> was established in 1993,
                    specializing in auto glass manufacturing and technically supported by TAMGLASS, Finland.
                    <br /><br />
                    <strong>Certifications & Standards:</strong>
                    <ul>
                      <li>American & Canadian Standard AS-1 (DOT 531)</li>
                      <li>European ECE Regulation R-43</li>
                      <li>South Africa SABS 1191:1978</li>
                      <li>SAUDI MADE</li>
                      <li>ISO 9001, ISO 14001, ISO 45001</li>
                      <li>D-U-N-S</li>
                    </ul>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <motion.div style={{ y: parallaxY }}>
                    <CardImage src={missionImg} />
                  </motion.div>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Vision;
