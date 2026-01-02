import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* Motion elements */
const MotionSVG = motion.create("svg");
const MotionPath = motion.create("path");
const MotionCircle = motion.create("circle");
const MotionBox = motion.create(Box);


/* Regions */
const regions = [
  { name: "USA", x: 240, y: 220, desc: "Automotive OEM & aftermarket supply hub." },
  { name: "Canada", x: 220, y: 170, desc: "Cold-climate certified glass solutions." },
  { name: "Europe", x: 580, y: 180, desc: "ECE R43 compliant automotive glass." },
  { name: "Africa", x: 620, y: 300, desc: "NM & regional export markets." },
  { name: "Middle East", x: 670, y: 260, desc: "High-temperature performance glazing." },
  { name: "Asia", x: 860, y: 230, desc: "High-volume OEM manufacturing support." },
  { name: "Japan", x: 920, y: 210, desc: "Precision & safety-critical glass." },
];

export default function GlobalReach() {
  const ref = useRef(null);
  const [activeRegion, setActiveRegion] = useState(null);

  /* Mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  /* Auto rotation */
  const autoRotate = useMotionValue(0);
  const rotateZ = useTransform(autoRotate, [0, 360], [0, 360]);

  useEffect(() => {
    let a = 0;
    const i = setInterval(() => {
      a = (a + 0.04) % 360;
      autoRotate.set(a);
    }, 30);
    return () => clearInterval(i);
  }, []);

  const handleMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <>
      {/* ================= GLOBAL REACH ================= */}
      <Box
        ref={ref}
        onMouseMove={handleMouseMove}
        sx={{
          minHeight: "100vh",
          bgcolor: "#020617",
          position: "relative",
          overflow: "hidden",
          perspective: "1600px",
        }}
      >
        {/* Glow */}
        <MotionBox
          style={{ x: mouseX, y: mouseY }}
          sx={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(77,163,255,0.25), transparent 65%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <MotionSVG
          viewBox="0 0 1200 600"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            rotateX,
            rotateY,
            rotateZ,
          }}
        >
          {[
            "M120 200 L260 150 L340 190 L300 260 L180 280 Z",
            "M520 160 L600 150 L640 180 L600 210 L540 200 Z",
            "M560 230 L640 260 L610 360 L520 330 Z",
            "M700 160 L900 170 L980 240 L840 300 L720 240 Z",
          ].map((d, i) => (
            <MotionPath
              key={i}
              d={d}
              fill="none"
              stroke="rgba(77,163,255,0.6)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, delay: i * 0.3 }}
            />
          ))}

          <MotionPath
            d="M240 220 C480 120, 700 140, 880 220"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
          />

          {regions.map((r, i) => (
            <MotionCircle
              key={i}
              cx={r.x}
              cy={r.y}
              r="6"
              fill="#4DA3FF"
              animate={{
                scale: [1, 1.9, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              whileHover={{ scale: 2.5 }}
              onClick={() => setActiveRegion(r)}
            />
          ))}
        </MotionSVG>

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            sx={{
              backdropFilter: "blur(22px)",
              background: "rgba(255,255,255,0.1)",
              borderRadius: 6,
              p: 6,
              maxWidth: 720,
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <Typography variant="h2" fontWeight={800} color="#fff" gutterBottom>
              Global Reach
            </Typography>
            <Typography variant="h6" color="grey.300">
              Supplying automotive glass solutions across the Middle East, USA,
              Canada, Japan, Asia, Africa, and Europe.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* ================= HOW WE DELIVER GLOBALLY ================= */}
     {/* ================= HOW WE DELIVER GLOBALLY ================= */}
<Box sx={{ py: 18, bgcolor: "#fff", position: "relative" }}>
  <Container maxWidth="lg">
    <Typography
      variant="h3"
      align="center"
      fontWeight={800}
      sx={{ color: "#176179", mb: 12 }}
    >
      How We Deliver Globally
    </Typography>

    <Grid container spacing={6}>
      {[
        {
          title: "OEM Engineering Alignment",
          desc: "Early design collaboration & homologation.",
          steps: [
            "Concept feasibility",
            "Design validation",
            "OEM approvals",
          ],
        },
       
        {
          title: "Global Certification",
          desc: "ECE, DOT & regional compliance.",
          steps: [
            "ECE R43",
            "DOT FMVSS",
            "Local regulations",
          ],
        },
         {
          title: "Advanced Manufacturing",
          desc: "Encapsulation & laminated glass expertise.",
          steps: [
            
            "Heat strengthening",
            "Safety lamination",
          ],
        },
        {
          title: "Export & Logistics",
          desc: "Optimized global supply chain delivery.",
          steps: [
            "Secure packaging",
            "Sea & air freight",
            "On-time delivery",
          ],
        },
      ].map((item, i) => (
        <Grid item xs={12} md={6} key={i}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* ================= OUTER CARD ================= */}
            <Box
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 5,
                background: "#F8FAFC",
                border: "1px solid #E5E7EB",
                boxShadow: "0 30px 60px rgba(2,6,23,0.08)",
                position: "relative",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 40px 80px rgba(37,99,235,0.18)",
                },
              }}
            >
              {/* Animated indicator */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#2563EB",
                    mb: 2,
                  }}
                />
              </motion.div>

              <Typography
                variant="h6"
                fontWeight={800}
                sx={{ color: "#0e2c6e", mb: 1 }}
              >
                {item.title}
              </Typography>

              <Typography color="grey.700" sx={{ mb: 3 }}>
                {item.desc}
              </Typography>

              {/* ================= INNER CARDS ================= */}
              <Grid container spacing={2}>
                {item.steps.map((step, idx) => (
                  <Grid item xs={12} key={idx}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.12,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          background: "#fff",
                          border: "1px solid #E5E7EB",
                          fontWeight: 600,
                          boxShadow:
                            "0 10px 25px rgba(2,6,23,0.06)",
                        }}
                      >
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

    {/* ================= BOTTOM HIGHLIGHT CARD ================= */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          mt: 14,
          p: 7,
          borderRadius: 6,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "#176179",
          border: "1px solid rgba(15,23,42,0.1)",
          textAlign: "center",
          boxShadow: "0 40px 80px rgba(2,6,23,0.12)",
        }}
      >
        <Typography color="#176179" variant="h5" fontWeight={800} gutterBottom>
          From Factory to Global Roads
        </Typography>
        <Typography color="grey.700">
          A structured delivery framework integrating engineering,
          certification, manufacturing, and global logistics.
        </Typography>
      </Box>
    </motion.div>
  </Container>
</Box>



      {/* ================= REGION MODAL ================= */}
      <Dialog
        open={Boolean(activeRegion)}
        onClose={() => setActiveRegion(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backdropFilter: "blur(20px)",
            background: "rgba(2,6,23,0.95)",
            color: "#fff",
            borderRadius: 4,
          },
        }}
      >
        {activeRegion && (
          <>
            <DialogTitle fontWeight={700}>{activeRegion.name}</DialogTitle>
            <DialogContent>
              <Typography color="grey.300">
                {activeRegion.desc}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
