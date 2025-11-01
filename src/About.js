import React, { useEffect } from "react";
import { FaRocket, FaLightbulb, FaGlobe, FaCogs } from "react-icons/fa";

function About() {
  useEffect(() => {
    const container = document.querySelector(".floating-particles");
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
    }
  }, []);

  const styles = {
    section: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #0d6efd, #6f42c1, #ff007f, #ff6a00, #00d4ff)",
      backgroundSize: "400% 400%",
      animation: "gradientFlow 12s ease infinite",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    },
    card: {
      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(12px)",
      borderRadius: "20px",
      padding: "50px 25px",
      maxWidth: "1000px",
      width: "100%",
      boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)",
      transition: "all 0.4s ease",
      position: "relative",
      zIndex: 2,
      animation: "fadeSlideUp 1.2s ease both",
      transformStyle: "preserve-3d",
    },
    infoCard: {
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "16px",
      padding: "30px",
      flex: 1,
      margin: "10px",
      minWidth: "260px",
      transition:
        "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease, background 0.5s ease",
      animation: "flipFadeIn 1.2s ease both",
      transformOrigin: "center bottom",
      perspective: "800px",
    },
    icon: {
      fontSize: "2.5rem",
      background: "linear-gradient(45deg, #00d4ff, #ff00c8, #ff6a00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "12px",
      transition: "transform 0.4s ease, filter 0.4s ease",
    },
    title: {
      fontWeight: "700",
      fontSize: "1.3rem",
      color: "#fff",
      marginBottom: "10px",
    },
    text: {
      color: "#e8e8e8",
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    responsiveRow: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "35px",
    },
  };

  return (
    <>
      <style>
        {`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flipFadeIn {
          0% { transform: rotateY(90deg) translateY(50px); opacity: 0; }
          60% { transform: rotateY(-10deg) translateY(0); opacity: 1; }
          100% { transform: rotateY(0deg); }
        }

        @keyframes floatPulse {
          0%, 100% { transform: translateY(0); box-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { transform: translateY(-10px); box-shadow: 0 0 30px rgba(255,255,255,0.25); }
        }

        @keyframes floatParticle {
          0% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.5; }
        }

        .floating-particles .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: floatParticle 6s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .info-card:hover {
          transform: rotateY(10deg) translateY(-15px) scale(1.05);
          background: rgba(255,255,255,0.25);
          box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
          animation: floatPulse 2s ease-in-out infinite;
        }

        .info-card:hover .icon {
          transform: rotate(15deg) scale(1.3);
          filter: drop-shadow(0 0 15px #fff);
        }

        .main-card:hover {
          transform: scale(1.02) rotateX(2deg);
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .main-card {
            padding: 30px !important;
          }
          .info-card {
            min-width: 100%;
          }
        }

        /* Staggered entry delay for each card */
        .info-card:nth-child(1) { animation-delay: 0.3s; }
        .info-card:nth-child(2) { animation-delay: 0.6s; }
        .info-card:nth-child(3) { animation-delay: 0.9s; }
        .info-card:nth-child(4) { animation-delay: 1.2s; }
      `}
      </style>

      <div style={styles.section}>
        <div className="floating-particles"></div>
        <div className="main-card" style={styles.card}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <FaCogs
                className="icon"
                style={{
                  ...styles.icon,
                  fontSize: "2.8rem",
                }}
              />
              <h2 style={styles.title}>About Us</h2>
            </div>

            <p style={styles.text}>
              <strong>DE Tech Solutions Pvt. Ltd.</strong> is a
              technology-driven company specializing in{" "}
              <strong>software development</strong>, <strong>AI</strong>, and{" "}
              <strong>digital transformation</strong>. We deliver scalable,
              efficient, and future-ready solutions that help businesses
              simplify operations and accelerate growth.
            </p>

            <div style={styles.responsiveRow}>
              <div className="info-card" style={styles.infoCard}>
                <FaRocket className="icon" style={styles.icon} />
                <h4 style={styles.title}>Our Mission</h4>
                <p style={styles.text}>
                  To empower organizations with cutting-edge technology that
                  boosts efficiency, productivity, and success.
                </p>
              </div>

              <div className="info-card" style={styles.infoCard}>
                <FaLightbulb className="icon" style={styles.icon} />
                <h4 style={styles.title}>Our Vision</h4>
                <p style={styles.text}>
                  To be a global leader in next-generation software and AI
                  innovation — transforming bold ideas into reality.
                </p>
              </div>

              <div className="info-card" style={styles.infoCard}>
                <FaGlobe className="icon" style={styles.icon} />
                <h4 style={styles.title}>Global Reach</h4>
                <p style={styles.text}>
                  Serving clients worldwide with a deep focus on innovation,
                  collaboration, and long-term success.
                </p>
              </div>

              <div className="info-card" style={styles.infoCard}>
                <FaCogs className="icon" style={styles.icon} />
                <h4 style={styles.title}>Innovation Focus</h4>
                <p style={styles.text}>
                  Driving progress through automation, research, and the latest
                  in AI and emerging technologies.
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
