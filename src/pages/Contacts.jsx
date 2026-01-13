import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdWarning,
} from "react-icons/md";

import heroImg from "../assets/Images/VLT-image-1.webp";

/* ---------------- COLORS ---------------- */
const COLORS = {
  white: "#FFFFFF",
  frost: "#6B7280",
  ice: "#E5E7EB",
  primary: "#176179",     // ✅ Brand Color
  steel: "#CBD5E1",
  navy: "#0F172A",
};

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ---------------- COMPONENT ---------------- */
export default function ContactPage() {
  const [tab, setTab] = useState("write");
  const fileRef = useRef(null);

  return (
    <div style={pageBg()}>

      {/* ---------- HERO ---------- */}
      <div style={heroSection(heroImg)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={heroOverlay()}
        >
          <h1 style={heroTitle()}>Contact & RFQ</h1>
          <p style={heroSubtitle()}>
            Corporate Office · Sales & Support · RFQ · Distributor Network
          </p>
        </motion.div>
      </div>

      <div style={container()}>

        {/* ---------- TABS ---------- */}
        <div style={tabs()}>
          {[
            ["write", "RFQ Form"],
            ["touch", "Corporate Office"],
            ["support", "Sales & Support"],
            ["distributor", "Distributor Network"],
            ["visit", "Visit"],
            ["map", "Map"],
          ].map(([id, label]) => (
            <span
              key={id}
              onClick={() => setTab(id)}
              style={tabBtn(tab === id)}
            >
              {label}
            </span>
          ))}
        </div>

        {/* ---------- CONTENT ---------- */}
        <AnimatePresence mode="wait">

          {/* RFQ FORM */}
          {tab === "write" && (
            <motion.form
              key="write"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              style={glassCard()}
            >
              <label style={label()}>Upload Drawings (PDF)</label>
              <div style={upload()} onClick={() => fileRef.current.click()}>
                Click or drag PDF file
              </div>
              <input type="file" accept="application/pdf" hidden ref={fileRef} />

              <label style={label()}>Message</label>
              <textarea rows="4" style={input()} />

              <div style={grid()}>
                <input placeholder="Name" style={input()} />
                <input placeholder="Email" style={input()} />
                <input placeholder="Phone" style={input()} />
              </div>

              <p style={note()}>Response within 24–48 hours.</p>
              <button style={btn()}>Submit RFQ</button>
            </motion.form>
          )}

          {/* CORPORATE OFFICE */}
          {tab === "touch" && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" style={glassCard()}>
              <Info icon={<MdLocationOn />} title="Corporate Office">
                Industrial Area Phase 5, Street 74<br />
                Jeddah, Saudi Arabia
              </Info>
            </motion.div>
          )}

          {/* SALES & SUPPORT */}
          {tab === "support" && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" style={glassCard()}>
              <Info icon={<MdPhone />} title="Phone">
                +966 12 637 9909
              </Info>
              <Info icon={<MdEmail />} title="Email">
                info@technoglass.com.sa
              </Info>
            </motion.div>
          )}

          {/* DISTRIBUTOR NETWORK */}
          {tab === "distributor" && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" style={glassCard()}>
              <h3 style={sectionTitle()}>Global Distributor Network</h3>

              <motion.div variants={stagger} initial="hidden" animate="show" style={distGrid()}>
                <Distributor region="Middle East" company="Gulf Glass Trading" phone="+971 4 123 4567" email="sales@gulfglass.com" />
                <Distributor region="Europe" company="Euro Glass Solutions" phone="+49 30 9876 543" email="contact@euroglass.eu" />
                <Distributor region="Asia" company="Asia Pacific Glass" phone="+65 6789 1234" email="info@apglass.asia" />
              </motion.div>
            </motion.div>
          )}

          {/* VISIT */}
          {tab === "visit" && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" style={glassCard()}>
              <h3 style={sectionTitle()}>
                <MdWarning /> Visit Our Facility
              </h3>
              <ul style={list()}>
                <li>Safety shoes mandatory</li>
                <li>No photography inside plant</li>
                <li>Follow safety instructions</li>
              </ul>
            </motion.div>
          )}

          {/* MAP */}
          {tab === "map" && (
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Industrial+Area+Phase+5,+Jeddah&output=embed"
                style={map()}
                loading="lazy"
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */
const Info = ({ icon, title, children }) => (
  <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
    <div style={iconBox()}>{icon}</div>
    <div>
      <strong style={{ color: COLORS.navy }}>{title}</strong>
      <div style={{ color: COLORS.frost }}>{children}</div>
    </div>
  </div>
);

const Distributor = ({ region, company, phone, email }) => (
  <motion.div whileHover={{ y: -8 }} style={distCard()}>
    <strong>{region}</strong>
    <p>{company}</p>
    <p>{phone}</p>
    <p>{email}</p>
  </motion.div>
);

/* ---------------- STYLES ---------------- */
const pageBg = () => ({ background: COLORS.white, minHeight: "100vh" });

const container = () => ({
  maxWidth: 1100,
  margin: "auto",
  padding: "80px 16px",
  fontFamily: "Inter, Segoe UI, sans-serif",
});

const heroSection = (img) => ({
  height: 420,
  background: `url(${img}) center/cover no-repeat`,
});

const heroOverlay = () => ({
  height: "100%",
  background: "rgba(15,23,42,0.55)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const heroTitle = () => ({
  color: COLORS.white,
  fontSize: "clamp(2.5rem,5vw,3.5rem)",
  fontWeight: 800,
});

const heroSubtitle = () => ({
  color: COLORS.ice,
  marginTop: 12,
});

const tabs = () => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 16,
  marginBottom: 40,
});

const tabBtn = (active) => ({
  padding: "10px 22px",
  borderRadius: 999,
  cursor: "pointer",
  fontWeight: 600,
  color: active ? COLORS.white : COLORS.frost,
  background: active ? COLORS.primary : "transparent",
  transition: "all .35s ease",
});

const glassCard = () => ({
  background: "rgba(255,255,255,0.9)",
  borderRadius: 24,
  padding: 32,
  border: "1px solid #E5E7EB",
  boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
});

const label = () => ({ fontWeight: 600, marginBottom: 6, display: "block" });

const input = () => ({
  width: "100%",
  padding: 14,
  borderRadius: 14,
  border: "1px solid #CBD5E1",
});

const upload = () => ({
  padding: 34,
  border: `2px dashed ${COLORS.primary}`,
  borderRadius: 18,
  textAlign: "center",
  cursor: "pointer",
  marginBottom: 18,
});

const grid = () => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 14,
});

const note = () => ({ fontSize: 13, color: COLORS.frost });

const btn = () => ({
  marginTop: 24,
  padding: "16px 38px",
  borderRadius: 999,
  border: "none",
  background: COLORS.primary,
  color: COLORS.white,
  fontWeight: 700,
  cursor: "pointer",
});

const iconBox = () => ({
  width: 42,
  height: 42,
  borderRadius: 10,
  background: COLORS.primary,
  color: COLORS.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const sectionTitle = () => ({
  color: COLORS.navy,
  marginBottom: 16,
});

const list = () => ({ color: COLORS.frost, lineHeight: 1.8 });

const map = () => ({
  width: "100%",
  height: 360,
  border: 0,
  borderRadius: 20,
});

const distGrid = () => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 20,
});

const distCard = () => ({
  padding: 22,
  borderRadius: 18,
  background: "#fff",
  border: "1px solid #E5E7EB",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
});
