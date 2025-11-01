import React from "react";
import { FaRocket, FaLightbulb, FaGlobe, FaCogs } from "react-icons/fa";

function About() {
  const styles = {
    section: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d6efd, #6610f2, #ff007f, #ff6a00)",
      backgroundSize: "400% 400%",
      animation: "gradientShift 10s ease infinite",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      color: "#fff",
      textAlign: "center",
    },
    card: {
      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(12px)",
      borderRadius: "20px",
      padding: "40px 25px",
      maxWidth: "950px",
      width: "100%",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      transition: "all 0.4s ease",
    },
    infoCard: {
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "16px",
      padding: "25px",
      backdropFilter: "blur(6px)",
      transition: "all 0.4s ease",
      flex: 1,
      margin: "10px",
      minWidth: "260px",
    },
    icon: {
      fontSize: "2.2rem",
      background: "linear-gradient(45deg, #00d4ff, #ff00c8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
      transition: "transform 0.3s ease",
    },
    title: {
      fontWeight: "700",
      color: "#fff",
      marginBottom: "10px",
    },
    text: {
      color: "#f1f1f1",
      fontSize: "1rem",
    },
    fadeIn: {
      animation: "fadeIn 1.2s ease forwards",
      opacity: 0,
    },
    responsiveRow: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "30px",
    },
  };

  return (
    <>
      <style>
        {`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          .info-card {
            padding: 20px !important;
          }
          .main-card {
            padding: 25px !important;
          }
        }
        .info-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.2);
        }
        .info-card:hover .icon {
          transform: scale(1.15) rotate(10deg);
        }
        .main-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
        }
      `}
      </style>

      <div style={styles.section}>
        <div className="main-card" style={styles.card}>
          <div style={styles.fadeIn}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <FaCogs
                className="icon"
                style={{
                  ...styles.icon,
                  fontSize: "2.5rem",
                  color: "#0dcaf0",
                }}
              />
              <h2 style={styles.title}>About Us</h2>
            </div>

            <p style={styles.text}>
              <strong>DE Tech Solutions Pvt. Ltd.</strong> is a
              technology-driven company specializing in{" "}
              <strong>software development</strong>, <strong>AI</strong>, and{" "}
              <strong>digital transformation</strong>. We deliver scalable and
              efficient solutions that simplify operations and accelerate
              business growth.
            </p>

            <div style={styles.responsiveRow}>
              {/* Mission */}
              <div className="info-card" style={styles.infoCard}>
                <FaRocket className="icon" style={styles.icon} />
                <h4 style={styles.title}>Our Mission</h4>
                <p style={styles.text}>
                  To empower organizations with innovative technology that
                  enhances efficiency, productivity, and success.
                </p>
              </div>

              {/* Vision */}
              <div className="info-card" style={styles.infoCard}>
                <FaLightbulb className="icon" style={styles.icon} />
                <h4 style={styles.title}>Our Vision</h4>
                <p style={styles.text}>
                  To be a global leader in next-generation software and AI
                  innovation, transforming ideas into impactful realities.
                </p>
              </div>

              {/* Global */}
              <div className="info-card" style={styles.infoCard}>
                <FaGlobe className="icon" style={styles.icon} />
                <h4 style={styles.title}>Global Reach</h4>
                <p style={styles.text}>
                  Serving clients across industries and continents with a
                  commitment to excellence and innovation.
                </p>
              </div>

              {/* Innovation */}
              <div className="info-card" style={styles.infoCard}>
                <FaCogs className="icon" style={styles.icon} />
                <h4 style={styles.title}>Innovation Focus</h4>
                <p style={styles.text}>
                  Driving continuous improvement through cutting-edge research,
                  automation, and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
