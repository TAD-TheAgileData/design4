import React, { useRef, useEffect, useState } from "react";
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
/* CARD IMAGES */
import qualityImg from "../../assets/Images/VLT-image-1.webp";
import integrityImg from "../../assets/Images/VLT-image-1.webp";
import innovationImg from "../../assets/Images/VLT-image-1.webp";
import customerImg from "../../assets/Images/VLT-image-1.webp";

/* UPDATED VALUES DATA */
const values = [
  {
    title: "Quality",
    icon: <FaStar />,
    image: qualityImg,
    text: `QUALITY - is the degree of excellence in a product, service, or process, measured by how effectively it satisfies customer and stakeholder needs. High quality is associated with reliability, durability, safety, usability, and efficiency.

• Enhanced reputation and customer trust  
• Reduced risks and operational failures  
• Higher efficiency and profitability  
• Stronger stakeholder satisfaction`,
  },
  {
    title: "Integrity",
    icon: <FaShieldAlt />,
    image: integrityImg,
    text: `INTEGRITY - is the quality of being honest, ethical, and consistent in one’s actions, decisions, and behavior. It means doing the right thing even when no one is watching, keeping commitments, and upholding moral and professional principles. Integrity builds trust, strengthens relationships, and forms the foundation of credibility in both personal and organizational life.

• Honesty in communication  
• Transparency in actions  
• Accountability for decisions  
• Consistency between words and behavior  
• Respect for ethical and legal standards`,
  },
  {
    title: "Innovation",
    icon: <FaLightbulb />,
    image: innovationImg,
    text: `INNOVATION - is the process of creating new ideas, improving existing solutions, or applying creative thinking to deliver better products, services, or processes. It involves challenging the status quo, experimenting with new approaches, and turning opportunities into practical, value‑adding outcomes. Innovation drives growth, competitiveness, and long‑term sustainability in any organization.

• Think creatively and question assumptions  
• Embrace change and continuous improvement  
• Use technology and knowledge to solve problems  
• Convert ideas into real, usable solutions  
• Stay ahead of customer needs and market trends

Innovation is not limited to big breakthroughs — even small, incremental improvements can create significant impact over time.`,
  },
  {
    title: "Customer Commitment",
    icon: <FaHandshake />,
     image: customerImg,
    text: `CUSTOMER COMMITMENT - is the dedication an organization shows to understanding, meeting, and exceeding customer needs. It reflects a long‑term focus on building trust, delivering consistent value, and creating positive experiences at every interaction. Customer‑committed organizations listen actively, respond promptly, and continuously improve their products and services based on customer feedback.

• Reliability — delivering what is promised, every time  
• Responsiveness — addressing concerns quickly and professionally  
• Empathy — understanding customer expectations and challenges  
• Quality focus — ensuring products and services meet high standards  
• Continuous improvement — using feedback to enhance performance

Strong customer commitment leads to loyalty, repeat business, and long‑term relationships that strengthen the organization’s reputation and competitiveness.`,
  },
];


const MotionCard = motion(Card);

/* STAGGER CONTAINER */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

/* CARD ANIMATION */
const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function OurValues() {
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* HERO PARALLAX */
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  /* AUTO SCROLL */
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setActiveIndex(index);

      cardRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      index = (index + 1) % values.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        ref={heroRef}
        sx={{
          height: "70vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            y: heroY,
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
              "linear-gradient(180deg,rgba(0,0,0,0.65),rgba(0,0,0,0.9))",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ zIndex: 2, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              background:
                "linear-gradient(90deg,#FF6F61,#00FFF0,#0B3D91)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
            }}
          >
            Our Values
          </Typography>

          <Typography variant="h6" sx={{ color: "#e5e7eb" }}>
            Principles guiding our excellence
          </Typography>
        </motion.div>
      </Box>

      {/* ================= VALUES ================= */}
      <Box sx={{ bgcolor: "#fff", py: 18 }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={7}>
              {values.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <MotionCard
  variants={cardVariants}
  whileHover={{ y: -14, scale: 1.02 }}
  sx={{
    height: "100%",
    borderRadius: 5,
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow:
      activeIndex === index
        ? "0 25px 60px rgba(0,255,240,0.35)"
        : "0 18px 45px rgba(0,0,0,0.18)",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.75))",
    },
  }}
>

                    <CardContent sx={{ p: 5, position: "relative", zIndex: 2 }}>
                      {/* ICON */}
                      <motion.div
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ fontSize: 30, color: "#00FFF0" }}
                      >
                        {item.icon}
                      </motion.div>

                      <Typography
                        variant="h5"
                        fontWeight={800}
                        sx={{ color: "#fff", mt: 2, mb: 2 }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#e5e7eb",
                          whiteSpace: "pre-line",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}