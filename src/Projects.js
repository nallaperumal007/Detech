import React, { useEffect } from "react";
import {
  FaCode,
  FaRobot,
  FaCloud,
  FaHeartbeat,
  FaChartBar,
  FaMobileAlt,
} from "react-icons/fa";

function Projects() {
  useEffect(() => {
    const container = document.querySelector(".project-particles");
    if (container && container.children.length === 0) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "p-particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(particle);
      }
    }
  }, []);

  const projects = [
    {
      name: "Smart ERP System",
      details:
        "A cloud-based ERP platform that automates logistics, inventory, and HR management with real-time dashboards.",
      img: "https://images.unsplash.com/photo-1581091870627-3a7583d5dce4?auto=format&fit=crop&w=800&q=80",
      icon: <FaCloud />,
    },
    {
      name: "HealthTrack Mobile App",
      details:
        "Track and manage patient health data securely with advanced AI-driven monitoring and alerts.",
      img: "https://images.unsplash.com/photo-1581090700227-3c84d1e6f1b4?auto=format&fit=crop&w=800&q=80",
      icon: <FaHeartbeat />,
    },
    {
      name: "AI Chat Assistant",
      details:
        "Custom chatbot built with NLP to automate customer support and improve business engagement.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      icon: <FaRobot />,
    },
    {
      name: "Business Analytics Dashboard",
      details:
        "Interactive analytics dashboard with charts, KPIs, and predictive AI models for data-driven decisions.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      icon: <FaChartBar />,
    },
    {
      name: "Smart Education Portal",
      details:
        "An e-learning platform featuring AI-powered quizzes, student progress tracking, and live classes.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      icon: <FaCode />,
    },
    {
      name: "Mobile Commerce App",
      details:
        "Feature-rich eCommerce mobile app with payment integration, product management, and order tracking.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      icon: <FaMobileAlt />,
    },
  ];

  const styles = {
    section: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #0d6efd, #6610f2, #ff007f, #ff6a00, #00d4ff)",
      backgroundSize: "400% 400%",
      animation: "bgShift 12s ease infinite",
      color: "#fff",
      padding: "80px 20px",
      position: "relative",
      overflow: "hidden",
    },
    heading: {
      textAlign: "center",
      fontWeight: "800",
      fontSize: "2.5rem",
      marginBottom: "50px",
      animation: "fadeDown 1s ease both",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px",
      position: "relative",
      zIndex: 2,
    },
    card: {
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "18px",
      width: "340px",
      overflow: "hidden",
      boxShadow: "0 0 20px rgba(255,255,255,0.1)",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
      animation: "fadeUp 1.2s ease both",
    },
    imgWrapper: {
      position: "relative",
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      transition: "transform 0.8s ease",
    },
    cardBody: {
      padding: "25px",
      textAlign: "center",
    },
    icon: {
      fontSize: "2.5rem",
      marginBottom: "10px",
      background: "linear-gradient(45deg, #00d4ff, #ff00c8, #ff6a00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "transform 0.4s ease, filter 0.4s ease",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#fff",
    },
    text: {
      fontSize: "0.95rem",
      color: "#e8e8e8",
      lineHeight: "1.6",
    },
  };

  return (
    <>
      <style>
        {`
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatParticle {
          0% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-40px) scale(1.3); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.5; }
        }

        .project-particles .p-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: floatParticle 6s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(255,255,255,0.5);
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 15px 35px rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.15);
        }

        .project-card:hover img {
          transform: scale(1.1);
        }

        .project-card:hover .project-icon {
          transform: rotate(10deg) scale(1.2);
          filter: drop-shadow(0 0 10px #fff);
        }

        @media (max-width: 768px) {
          .project-card {
            width: 90% !important;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
      `}
      </style>

      <section style={styles.section}>
        <div className="project-particles"></div>

        <h2 style={styles.heading}>Our Projects</h2>

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div className="project-card" style={styles.card} key={i}>
              <div style={styles.imgWrapper}>
                <img src={p.img} alt={p.name} style={styles.img} />
              </div>
              <div style={styles.cardBody}>
                <div className="project-icon" style={styles.icon}>
                  {p.icon}
                </div>
                <h5 style={styles.title}>{p.name}</h5>
                <p style={styles.text}>{p.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
