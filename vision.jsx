import React, { useRef } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaStar, FaGlassMartiniAlt, FaAward } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BackgroundAnimation from "./BackgroundAnimation";

/* HERO IMAGES */
import heroImg from "../../assets/Images/VLT-image-1.webp";
// import missionImg from "../../assets/Images/VLT-image-1.webp";
// import visionImg from "../../assets/Images/VLT-image-1.webp";

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const cardHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0 25px 45px rgba(0,0,0,0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const floatingIcon = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 15, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Card entrance animation (fade + slide + subtle parallax)
const cardEntrance = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};
const valueItems = [
  "Homologation Certification",
  "Experience with OEMs – Volvo & Benz Trucks",
  "Innovative Solutions to Suit OEMs",
  "Technology on Par with OEM Requirements",
  "End-to-End Solutions Provider",
  "Strong Dealer Network",
  "Expertise in Encapsulation Processes",
  "Certified Lab Facility by Regulation Body",
  "Fast NPD as per APQP Plan",
];
const lineReveal = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const GlassTile = ({ text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
    style={{
      backdropFilter: "blur(14px)",
      background:
        "linear-gradient(135deg, rgba(213, 210, 210, 0.18), rgba(255,255,255,0.05))",
      borderRadius: 20,
      padding: "28px",
      boxShadow: "0 30px 80px rgba(224, 201, 201, 0.25)",
      border: "1px solid rgba(255,255,255,0.25)",
      textAlign: "center",
      minHeight: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <Typography
      sx={{
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: "#0f172a",
        fontSize: "0.95rem",
      }}
    >
      {text}
    </Typography>
  </motion.div>
);

const Vision = () => {
  const particlesInit = async (main) => await loadFull(main);

  // Refs for scroll parallax
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  // Parallax transforms
  const { scrollYProgress } = useScroll();
  const visionY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const missionY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <>
    
      {/* ================= HERO WITH PARTICLES ================= */}
      <Box
        sx={{
          height: "75vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.2, width: 1 },
              collisions: { enable: false },
              move: { enable: true, speed: 0.3, outModes: "bounce", random: true },
              number: { value: 50 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
          style={{ position: "absolute", inset: 0, zIndex: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ zIndex: 2, maxWidth: 900 }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              background: "linear-gradient(90deg,#FF6F61,#00FFF0,#0B3D91)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
            }}
          >
            Vision & Mission
          </Typography>

          <Typography variant="h6" sx={{ color: "#e5e7eb" }}>
            Leadership, integrity, and innovation shaping global glass excellence
          </Typography>
        </motion.div>

        <Box
          sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1 }}
        />
      </Box>
<Box sx={{ py: 14, background: "#f8fafc", position: "relative", overflow: "hidden" }}>
  
  <BackgroundAnimation />   {/* ← ADD ONLY THIS */}

  <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      {/* ================= VISION ================= */}
      
          <Grid container spacing={8} alignItems="center">
            {/* Card */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={cardEntrance}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div whileHover="hover" variants={cardHover}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 5,
                      borderRadius: 4,
                      backgroundColor: "#ffffff",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Floating Icons */}
                    <motion.div variants={floatingIcon} animate="animate" style={{ position: "absolute", top: 10, left: 10, fontSize: 20, color: "#FF6F61", opacity: 0.8 }}><FaStar /></motion.div>
                    <motion.div variants={floatingIcon} animate="animate" style={{ position: "absolute", bottom: 20, right: 20, fontSize: 25, color: "#00FFF0", opacity: 0.6 }}><FaGlassMartiniAlt /></motion.div>
                    <motion.div variants={floatingIcon} animate="animate" style={{ position: "absolute", top: 40, right: 40, fontSize: 18, color: "#0B3D91", opacity: 0.7 }}><FaAward /></motion.div>

                    <Typography variant="h4" fontWeight={700} sx={{ mb: 3, color: "#176179", textTransform: "uppercase", letterSpacing: 1.5, position: "relative" }}>
                      Our Vision
                    </Typography>

                    <Typography variant="body1" sx={{ color: "#374151", lineHeight: 1.8 }}>
                      Every successful company requires a clear direction, achieved
                      through visionary leadership. Technoglass’ success is built
                      on commitment, dedication, integrity, hard work, and the
                      inspiring vision of its founders.
                      <br /><br />
                      Led by <strong>Mr. Hashim Al Sheikh (Chairman)</strong> and
                      <strong> Mr. Mousa El Gedaily (Managing Director)</strong>,
                      Technoglass entered the glass industry in 1993 with a strong
                      aspiration to deliver superior glass processing solutions.
                      <br/> <br/>
                     <strong>Today Techno Glass is thriving global trading distribution and consulting firm as a result of our managements dedicated commitment to growing the business.</strong>  <br/>

Techno Glass in one of the leading exporters in the gulf region. <br/>
Techno Glass is a leading independent exporter of automotive replacement glass from Saudi Arabia to the rest of the world. <br/>
Techno Glass is a leading provider of architectural glass in the Saudi Arabian construction market. <br/>
                    </Typography>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Image with scroll parallax */}
            {/* /* ================= VISION IMAGE WITH FLOATING OVERLAY ================= */ }
<Grid item xs={12} md={6} style={{ position: "relative" }}>
  {/* <motion.img
    ref={visionRef}
    // src={visionImg}
    alt="Vision"
    style={{
      width: "100%",
      maxHeight: "450px",
      objectFit: "cover",
      borderRadius: 20,
      boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
      y: visionY,
      zIndex: 1,
    }}
  /> */}
  {/* Floating glass reflection / gradient shapes */}
  <motion.div
    style={{
      position: "absolute",
      top: "10%",
      left: "5%",
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.15)",
      filter: "blur(20px)",
      zIndex: 2,
    }}
    animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    style={{
      position: "absolute",
      bottom: "15%",
      right: "10%",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "rgba(0,255,255,0.12)",
      filter: "blur(15px)",
      zIndex: 2,
    }}
    animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
</Grid>

          </Grid>
        </Container>
      </Box>

      {/* ================= MISSION ================= */}
      <Box sx={{ py: 14, background: "#ffffff",position:"relative", overflow:"hidden",isolation:"isolate", }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center" direction="row-reverse">
            {/* Card */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={cardEntrance}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div whileHover="hover" variants={cardHover}>
                  <Paper
                    elevation={3}
                    sx={{ p: 5, borderRadius: 4, backgroundColor: "#ffffff", position: "relative", overflow: "hidden" }}
                  >
                    {/* Floating Icons */}
                    <motion.div variants={floatingIcon} animate="animate" style={{ position: "absolute", top: 10, right: 10, fontSize: 20, color: "#b91c1c", opacity: 0.8 }}><FaStar /></motion.div>
                    <motion.div variants={floatingIcon} animate="animate" style={{ position: "absolute", bottom: 20, left: 20, fontSize: 25, color: "#facc15", opacity: 0.6 }}><FaGlassMartiniAlt /></motion.div>
                    <motion.div variants={floatingIcon} animate="animate" style={{ position: "absolute", top: 40, left: 40, fontSize: 18, color: "#1e3a8a", opacity: 0.7 }}><FaAward /></motion.div>

                    <Typography variant="h4" fontWeight={700} sx={{ mb: 3, color: "#176179", textTransform: "uppercase", letterSpacing: 1.5, position: "relative" }}>
                      Our Mission
                    </Typography>

                    <Typography variant="body1" sx={{ color: "#373f4bff", lineHeight: 1.8 }}>
                      Techno Glass specializes in automotive, architectural, and laminated safety glass manufacturing, technically supported by TAMGLASS, Finland.
                      <br /><br />
                    <strong>  We hold international homologations:</strong>
                      <ul style={{ paddingLeft: 20 }}>
                        <li>American Standard AS-1 (DOT 531)</li>
                        <li>European ECE Regulation 43</li>
                        <li>South Africa SABS 1191</li>
                        <li>ISO 9001 Certified</li>
                        <li>SAUDI MADE & D-U-N-S Registered</li>
                      </ul>
                     <strong>Our mission is to deliver world-class quality, innovation, and customer satisfaction.</strong><br/><br/>
                     Techno Glass prides itselfinmanufacturing andsupplying customers withhigh-quality products andinorder to
maintain high international standards.<br/>
Techno Glass alwayswelcomes suggestions and comments fromcustomers atalltimes.<br/>
Techno Glass activelyengages ininternational marketing andhasbuilt areputationofprompt
supply tomanykey globalmarkets withhighcustomer service levels andexcellentproducts;
Techno Glass has achievedrecognition as theleaderinArchitectural glass andautomotivewindscreens. <br/><br/>Techno Glass
staffs are
Well-trained through programs allowing only the highest quality of service,care, andpromptdeliveryprocedures.<br/><br/>
                      <strong> Our Plan for Future Success</strong>
                      <ul style={{ paddingLeft: 20 }}>
<li> We commitment to long-term growth.</li>
 <li>We devoted to total customer satisfaction.</li>
<li> We promise to continuous improvement in all that we do.</li>
<li> We dedicated to the highest business standards.</li>
 <li>We dedicated to the highest business standards</li>
 </ul>
                    </Typography>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Mission Image with scroll parallax */}
            <Grid item xs={12} md={6} style={{ position: "relative" }}>
  {/* <motion.img
    ref={missionRef}
    // src={missionImg}
    alt="Mission"
    style={{
      width: "100%",
      maxHeight: "450px",
      objectFit: "cover",
      borderRadius: 20,
      boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
      y: missionY,
      zIndex: 1,
    }}
  /> */}
  {/* Floating overlay for empty space */}
  <motion.div
    style={{
      position: "absolute",
      top: "20%",
      left: "15%",
      width: 50,
      height: 50,
      borderRadius: "50%",
      background: "#ffffff)",
      filter: "blur(18px)",
      zIndex: 2,
    }}
    animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    style={{
      position: "absolute",
      bottom: "10%",
      right: "20%",
      width: 70,
      height: 70,
      borderRadius: "50%",
      background: "rgba(0,0,255,0.08)",
      filter: "blur(25px)",
      zIndex: 2,
    }}
    animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  />
</Grid>
{/* ================= VALUE PROPOSITION ================= */}
{/* ================= VALUE PROPOSITION – VERTICAL 2 CONTENT ================= */}
{/* ================= VALUE PROPOSITION ================= */}
<Box
  sx={{
    py: 18,
    background: "linear-gradient(180deg,#f8fafc,#ffffff)",
    position: "relative",
    overflow: "hidden",
  }}
>
  <Container maxWidth="lg">

    {/* ===== CENTER TITLE ===== */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight={800}
        sx={{
          letterSpacing: 4,
          textTransform: "uppercase",
          background:
            "linear-gradient(90deg,#0f172a,#1e40af,#0284c7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 10,
        }}
      >
        Value Proposition
      </Typography>
    </motion.div>

    {/* ===== ROWS ===== */}
    {valueItems.reduce((rows, item, index) => {
      if (index % 2 === 0)
        rows.push([item, valueItems[index + 1]]);
      return rows;
    }, []).map((pair, rowIndex) => (
      <Grid
        container
        spacing={6}
        alignItems="stretch"
        key={rowIndex}
        sx={{ mb: 6 }}
      >
        {pair.map((text, colIndex) => (
          <Grid item xs={12} md={6} key={colIndex}>
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                x: colIndex === 0 ? -40 : 40,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: rowIndex * 0.1,
              }}
              whileHover={{ scale: 1.04 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.85))",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 22px 60px rgba(15,23,42,0.12)",
                  position: "relative",
                }}
              >
                {/* Accent */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    background:
                      "linear-gradient(90deg,#2563eb,#38bdf8)",
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#0f172a",
                    fontSize: "0.9rem",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    ))}
  </Container>

  {/* ===== AMBIENT GLOW ===== */}
  <Box
    sx={{
      position: "absolute",
      bottom: "15%",
      right: "12%",
      width: 280,
      height: 280,
      background: "rgba(37,99,235,0.18)",
      filter: "blur(120px)",
      borderRadius: "50%",
    }}
  />
</Box>





          </Grid>
           </Container>
</Box>
      <Box
  sx={{
    py: 14,
    background: "#f8fafc",
    position: "relative",
    overflow: "hidden",
  }}
>
  <BackgroundAnimation />

  <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
    {/* YOUR EXISTING GRID / CARDS / CONTENT */}
  </Container>
</Box>

    </>
  );
};

export default Vision;
