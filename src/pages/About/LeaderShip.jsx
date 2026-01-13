import React from "react";
import { motion } from "framer-motion";

/* ====== IMAGES ====== */
import heroImg from "../../assets/Images/VLT-image-1.webp";
import chairmanImg from "../../assets/Images/VLT-image-1.webp";
import mdImg from "../../assets/Images/VLT-image-1.webp";

/* ====== COLORS ====== */
const COLORS = {
  white: "#FFFFFF",
  frost: "#6B7280",
  ice: "#E5E7EB",
  primary: "#176179",
  navy: "#0F172A",
  steel: "#CBD5E1",
};

/* ====== ANIMATION VARIANTS ====== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: "0 40px 90px rgba(0,0,0,0.15)",
    transition: { duration: 0.35 },
  },
};
const mdCard = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "320px 1fr",
  gap: 36,
  padding: isMobile ? 22 : 42,
  marginBottom: 60,
  borderRadius: 26,
  background: "#fff",
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
});

const mdLeft = (isMobile) => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
});

const mdRight = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const mdImgStyle = {
  width: "100%",
  height: 280,
  borderRadius: 18,
  objectFit: "cover",
};
const mdFlowWrap = () => ({
  width: "100%",
});

const mdFloatImg = (isMobile) => ({
  width: isMobile ? "100%" : 300,
  height: isMobile ? 260 : 280,
  float: isMobile ? "none" : "left",
  marginRight: isMobile ? 0 : 28,
  marginBottom: 18,
  borderRadius: 18,
  objectFit: "cover",
});


/* ====== COMPONENT ====== */
export default function LeadershipMessage() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={pageBg()}>
      {/* ===== HERO ===== */}
      <div style={heroSection(heroImg)}>
        <div style={heroOverlay()}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={heroTitle(isMobile)}
          >
            Leadership Message
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={heroSubtitle(isMobile)}
          >
            Vision • Integrity • Commitment to Excellence
          </motion.p>
        </div>
      </div>

      <div style={container(isMobile)}>
        {/* ===== CHAIRMAN ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={leaderCard(isMobile)}
          {...hoverLift}
        >
          <motion.img
            src={chairmanImg}
            alt="Chairman"
            style={leaderImg(isMobile)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <div style={leaderContent(isMobile)}>
            <h2 style={leaderName(isMobile)}>Mr. Hashim Al Sheikh</h2>
            <span style={leaderRole()}>Chairman</span>

            <p style={text()}>
              <strong>Leadership</strong> begins with vision and responsibility.
              At <strong>Technoglass</strong>, our journey has always been
              guided by integrity, trust, and long-term partnerships.
            </p>

            <p style={text()}>
              We believe sustainable growth is achieved through ethical
              leadership, continuous innovation, and an unwavering commitment to
              quality.
            </p>
          </div>
        </motion.div>

        {/* ===== MANAGING DIRECTOR ===== */}
 {/* ===== MANAGING DIRECTOR ===== */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  style={leaderCard(isMobile)}
  {...hoverLift}
>
  <div style={mdFlowWrap(isMobile)}>
    {/* FLOAT IMAGE */}
    <motion.img
      src={mdImg}
      alt="Managing Director"
      style={mdFloatImg(isMobile)}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4 }}
    />

    {/* FLOWING CONTENT — UNCHANGED */}
    <h2 style={leaderName(isMobile)}>Mr. Mousa Al Gedaily</h2>
    <span style={leaderRole()}>Managing Director</span>

    <p style={text()}>
     For the last three decades, Technoglass has provided the
              automotive replacement glass market from KSA to Gulf regions and
              is a leading independent exporter to the rest of the world. For
              many years, we have witnessed consistent growth, achieved
              long-term success, and faced challenging times. In the recent past
              economic conditions of the Gulf region, we worked hard to navigate
              both the global economy and the significant changes in our
              business. We did so with the ever-present priority to preserve the
              culture and guiding Purpose, Vision, and Mission of our company.
              We pride ourselves on being the customer’s first choice, ensuring
              every glass delivered provides a great experience to our
              customers. Technoglass is one of the biggest companies in the
              Architectural & Automotive market in the Gulf region and holds
              international homologation certificates such as AS-1, ECE
              Regulation, SABS, Saudi Made, DUNS, etc. Technoglass continuously
              adapts its organization and resources to match the MENA (Middle
              East and Africa) market situation and the shifting balance of the
              markets in which we operate. We take these measures from a
              position of financial and strategic strength, reacting to certain
              trends and anticipating others. The result of this continuous
              process is an efficient, flexible, and dedicated organization.
              However, the more things change, the more some things stay the
              same. Technoglass will always aim to be an indispensable trade
              partner—a recipe that has proven successful for many years. Our
              key strategic business plan is now to shift our focus toward
              becoming a preferred OEM supplier through process innovations
              using state-of-the-art equipment, in partnership with our
              long-term technical partner TAMGLASS, Finland. We work
              continuously to provide our customers with superior service and
              high-quality products at competitive prices. To achieve this, our
              strategic drivers are Sustainability, Profitability &
              Competitiveness, People Development, and Customer Satisfaction. 
              <br />
              On Quality Management Systems The Technoglass management team is
              committed to the company’s core values, which have been the
              foundation of Technoglass’s success over the years. Technoglass’s
              success is built on professional commitment, dedication, hard
              work, integrity, and honesty.
            </p>

    

    

    <div style={{ clear: "both" }} />
  </div>
</motion.div>


        {/* ===== MANAGEMENT TEAM ===== */}
        <motion.div variants={stagger} initial="hidden" whileInView="show">
          <h2 style={sectionTitle(isMobile)}>
            Management & Engineering Leadership
          </h2>
          <p style={sectionSubtitle()}>
            Driving precision, innovation, and operational strength.
          </p>

          <div style={teamGrid()}>
  <TeamCard
    name="General Manager"
    role="General Manager"
    desc="Responsible for overall business operations, strategic execution, and organizational performance."
  />
  <TeamCard
    name="Head of Engineering"
    role="Head of Engineering"
    desc="Leads engineering governance, manufacturing systems, and technical compliance."
  />
  <TeamCard
    name="Head of R&D"
    role="Research & Development"
    desc="Drives innovation, advanced material research, and next-generation glass solutions."
  />
  <TeamCard
    name="Engineering Lead"
    role="Engineering Lead"
    desc="Manages complex engineering projects, design validation, and execution excellence."
  />
</div>

        </motion.div>
      </div>
    </div>
  );
}

/* ====== TEAM CARD ====== */
const TeamCard = ({ img, name, role, desc }) => (
  <motion.div variants={fadeUp} style={teamCard()} whileHover={{ y: -10 }}>
    
    <div style={teamContent()}>
      <h3 style={teamName()}>{name}</h3>
      <span style={teamRole()}>{role}</span>
      <p style={teamDesc()}>{desc}</p>
    </div>
  </motion.div>
);

/* ====== STYLES ====== */
const pageBg = () => ({ background: COLORS.white });

const container = (isMobile) => ({
  maxWidth: 1100,
  margin: "auto",
  padding: isMobile ? "48px 16px" : "80px 16px",
});

const heroSection = (img) => ({
  height: 360,
  background: `url(${img}) center/cover no-repeat`,
});

const heroOverlay = () => ({
  height: "100%",
  background: "rgba(15,23,42,0.6)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const heroTitle = (isMobile) => ({
  color: COLORS.white,
  fontSize: isMobile ? "1.9rem" : "3rem",
  fontWeight: 800,
});

const heroSubtitle = (isMobile) => ({
  color: COLORS.ice,
  fontSize: isMobile ? "0.95rem" : "1rem",
  marginTop: 10,
  padding: isMobile ? "0 14px" : 0,
});

const leaderCard = (isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: isMobile ? "center" : "flex-start",
  gap: isMobile ? 22 : 40,
  padding: isMobile ? 22 : 42,
  marginBottom: isMobile ? 40 : 60,
  borderRadius: 26,
  background: "#fff",
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
  textAlign: isMobile ? "center" : "left",
});

const leaderImg = (isMobile) => ({
  width: isMobile ? "100%" : 220,
  maxWidth: isMobile ? 260 : "none",
  height: isMobile ? 300 : 260,
  borderRadius: 18,
  objectFit: "cover",
});

const leaderContent = (isMobile) => ({ flex: 1 });
const leaderName = (isMobile) => ({
  fontSize: isMobile ? "1.3rem" : "1.6rem",
  fontWeight: 700,
  color: COLORS.navy,
});
const leaderRole = () => ({ color: COLORS.primary, fontWeight: 600 });
const text = () => ({
  color: COLORS.frost,
  lineHeight: 1.75,
  fontSize: "0.95rem",

  /* ✅ Perfect left & right alignment */
  textAlign: "justify",
  textJustify: "inter-word",
  hyphens: "auto",
});

const sectionTitle = (isMobile) => ({
  fontSize: isMobile ? "1.6rem" : "2rem",
  fontWeight: 800,
  textAlign: "center",
  marginBottom: 12,
});

const sectionSubtitle = () => ({
  textAlign: "center",
  color: COLORS.frost,
  marginBottom: 40,
});

const teamGrid = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
  gap: 26,
});


const teamCard = () => ({
  background: "#fff",
  borderRadius: 24,
  minHeight: 260,
display: "flex",
flexDirection: "column",
justifyContent: "center",

  overflow: "hidden",
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 20px 55px rgba(0,0,0,0.1)",
});

const teamImg = () => ({ width: "100%", height: 240, objectFit: "cover" });
const teamContent = () => ({ padding: 26 });
const teamName = () => ({ fontWeight: 700, color: COLORS.navy });
const teamRole = () => ({ color: COLORS.primary, fontWeight: 600 });
const teamDesc = () => ({ color: COLORS.frost, lineHeight: 1.6 });

const messageGrid = () => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 28,
  marginTop: 60,
});

const messageCard = () => ({
  padding: 32,
  borderRadius: 22,
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
});

const messageTitle = () => ({ fontWeight: 700, color: COLORS.navy });
const messageText = () => ({ color: COLORS.frost, lineHeight: 1.7 });