import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import heroImage from "../../assets/Images/VLT-image-1.webp";

/* Motion elements */
const MotionBox = motion(Box);

/* Regions for modal */
const regions = [
  { name: "USA", x: 240, y: 220, desc: "Automotive OEM & aftermarket supply hub." },
  { name: "Canada", x: 220, y: 170, desc: "Cold-climate certified glass solutions." },
  { name: "Europe", x: 580, y: 180, desc: "ECE R43 compliant automotive glass." },
  { name: "Africa", x: 620, y: 300, desc: "NM & regional export markets." },
  { name: "Middle East", x: 670, y: 260, desc: "High-temperature performance glazing." },
  { name: "Asia", x: 860, y: 230, desc: "High-volume OEM manufacturing support." },
  { name: "Japan", x: 920, y: 210, desc: "Precision & safety-critical glass." },
];

const testimonials = [
  {
    name: "Ahmed Al Rashid",
    company: "Automotive OEM – Middle East",
    review:
      "The glass quality, optical clarity, and delivery precision exceeded our OEM expectations. A truly reliable manufacturing partner.",
  },
  {
    name: "Michael Turner",
    company: "Aftermarket Distributor – USA",
    review:
      "Consistent lamination quality and excellent logistics support. Their global compliance expertise is impressive.",
  },
  {
    name: "Kenji Nakamura",
    company: "Tier-1 Supplier – Japan",
    review:
      "Exceptional process control and safety performance. Perfect alignment with Japanese quality standards.",
  },
];

const theme = createTheme();

export default function GlobalReach() {
  const ref = useRef(null);
  const [activeRegion, setActiveRegion] = useState(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  // Auto rotation
  const autoRotate = useMotionValue(0);
  const rotateZ = useTransform(autoRotate, [0, 360], [0, 360]);

  useEffect(() => {
    let a = 0;
    const i = setInterval(() => {
      a = (a + 0.04) % 360;
      autoRotate.set(a);
    }, 30);
    return () => clearInterval(i);
  }, [autoRotate]);

  const handleMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: { xs: "65vh", md: "80vh" },
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ================= PREMIUM GLOW SECTION ================= */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft background glow */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          sx={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: 280,
            background: "radial-gradient(circle, rgba(23,97,121,0.15), transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h3"
              align="center"
              fontWeight={900}
              sx={{ color: "#176179", letterSpacing: "0.5px", mb: 3 }}
            >
              Global Reach
            </Typography>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 90 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                height: 4,
                margin: "0 auto 28px",
                borderRadius: 4,
                background: "linear-gradient(90deg, #176179, #4fd1c5)",
              }}
            />

            <Typography
              align="center"
              sx={{ maxWidth: 900, mx: "auto", color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.9 }}
            >
              Supplying automotive glass solutions across the Middle East, USA,
              Canada, Japan, Asia, Africa, and Europe.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= HOW WE DELIVER GLOBALLY ================= */}
      <Box sx={{ py: 18, bgcolor: "#fff", position: "relative" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" fontWeight={800} sx={{ color: "#176179", mb: 12 }}>
            How We Deliver Globally
          </Typography>

          <Grid container spacing={6}>
            {[
              {
                title: "OEM Engineering Alignment",
                desc: "Early design collaboration & homologation.",
                steps: ["Concept feasibility", "Design validation", "OEM approvals"],
              },
              {
                title: "Global Certification",
                desc: "ECE, DOT & regional compliance.",
                steps: ["ECE R43", "DOT FMVSS", "Local regulations"],
              },
              {
                title: "Advanced Manufacturing",
                desc: "Encapsulation & laminated glass expertise.",
                steps: ["Heat strengthening", "Safety lamination"],
              },
              {
                title: "Export & Logistics",
                desc: "Optimized global supply chain delivery.",
                steps: ["Secure packaging", "Sea & air freight", "On-time delivery"],
              },
            ].map((item, i) => (
              <Grid item xs={12} md={6} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      p: 5,
                      height: "100%",
                      borderRadius: 5,
                      background: "#F8FAFC",
                      border: "1px solid #E5E7EB",
                      boxShadow: "0 30px 60px rgba(2,6,23,0.08)",
                      "&:hover": { transform: "translateY(-8px)", boxShadow: "0 40px 80px rgba(37,99,235,0.18)" },
                    }}
                  >
                    {/* Indicator */}
                    <MotionBox
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                      sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#2563EB", mb: 2 }}
                    />

                    <Typography variant="h6" fontWeight={800} sx={{ color: "#0e2c6e", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography color="grey.700" sx={{ mb: 3 }}>
                      {item.desc}
                    </Typography>

                    <Grid container spacing={2}>
                      {item.steps.map((step, idx) => (
                        <Grid item xs={12} key={idx}>
                          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.12 }}>
                            <Box sx={{ p: 2, borderRadius: 3, background: "#fff", border: "1px solid #E5E7EB", fontWeight: 600, boxShadow: "0 10px 25px rgba(2,6,23,0.06)" }}>
                              {step}
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <MotionBox initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} sx={{ mt: 14, p: 7, borderRadius: 6, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,23,42,0.1)", textAlign: "center", boxShadow: "0 40px 80px rgba(2,6,23,0.12)" }}>
            <Typography color="#176179" variant="h5" fontWeight={800} gutterBottom>
              From Factory to Global Roads
            </Typography>
            <Typography color="grey.700">
              A structured delivery framework integrating engineering, certification, manufacturing, and global logistics.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* ================= CUSTOMER TESTIMONIALS ================= */}
      <Box sx={{ py: 18, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" fontWeight={800} sx={{ color: "#0e2c6e", mb: 3 }}>
            What Our Customers Say
          </Typography>
          <Typography align="center" sx={{ maxWidth: 720, mx: "auto", mb: 12, color: "grey.700", fontSize: "1.05rem" }}>
            Trusted by global automotive OEMs, Tier-1 suppliers, and aftermarket distributors worldwide.
          </Typography>

          <Grid container spacing={5} justifyContent="center" alignItems="stretch">
            {testimonials.map((item, i) => (
              <Grid item xs={12} md={4} key={i} sx={{ display: "flex" }}>
                <MotionBox initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }} sx={{ width: "100%", display: "flex", flexDirection: "column", p: 5, borderRadius: 5, background: "linear-gradient(180deg, #ffffff, #f9fbff)", border: "1px solid #E5E7EB", boxShadow: "0 30px 70px rgba(2,6,23,0.08)", "&:hover": { transform: "translateY(-10px)", boxShadow: "0 45px 90px rgba(37,99,235,0.18)" } }}>
                  <Typography sx={{ fontSize: "3.2rem", lineHeight: 1, color: "#2563EB", mb: 2, opacity: 0.85 }}>“</Typography>
                  <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.9, color: "grey.700", mb: 4, flexGrow: 1 }}>
                    {item.review}
                  </Typography>
                  <Box sx={{ height: 1, width: "100%", bgcolor: "#E5E7EB", mb: 3 }} />
                  <Box>
                    <Typography fontWeight={800} sx={{ color: "#0e2c6e", fontSize: "1rem" }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: "0.85rem", color: "grey.600" }}>{item.company}</Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= REGION MODAL ================= */}
      <Dialog open={Boolean(activeRegion)} onClose={() => setActiveRegion(null)} maxWidth="sm" fullWidth PaperProps={{ sx: { backdropFilter: "blur(20px)", background: "rgba(2,6,23,0.95)", color: "#fff", borderRadius: 4 } }}>
        {activeRegion && (
          <>
            <DialogTitle fontWeight={700}>{activeRegion.name}</DialogTitle>
            <DialogContent>
              <Typography color="grey.300">{activeRegion.desc}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </ThemeProvider>
  );
}
