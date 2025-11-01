import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaSearchDollar,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  useEffect(() => {
    const container = document.querySelector(".service-particles");
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "s-particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
    }
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "High-performance, scalable, and responsive websites using modern technologies like React, Next.js, and Node.js.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Custom mobile applications for Android and iOS with seamless UI/UX and high functionality.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      desc: "Secure, scalable, and optimized cloud architecture using AWS, Azure, and Google Cloud platforms.",
    },
    {
      icon: <FaSearchDollar />,
      title: "Digital Marketing",
      desc: "Boost your brand presence with SEO, SEM, and targeted social media campaigns that drive results.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      desc: "Creative, user-centered design solutions that enhance user experience and brand identity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Comprehensive protection for your digital assets through advanced security audits and data encryption.",
    },
  ];

  const styles = {
    section: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #0d6efd, #6610f2, #ff007f, #ff6a00, #00d4ff)",
      backgroundSize: "400% 400%",
      animation: "colorFlow 12s ease infinite",
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
      letterSpacing: "1px",
      animation: "fadeInDown 1s ease both",
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
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "18px",
      padding: "35px 25px",
      width: "300px",
      textAlign: "center",
      transition:
        "transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease",
      boxShadow: "0 0 15px rgba(255,255,255,0.1)",
      animation: "fadeSlideUp 1.2s ease both",
    },
    icon: {
      fontSize: "2.8rem",
      marginBottom: "15px",
      background: "linear-gradient(45deg, #00d4ff, #ff00c8, #ff6a00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "transform 0.4s ease, filter 0.4s ease",
    },
    title: {
      fontWeight: "700",
      fontSize: "1.25rem",
      marginBottom: "10px",
    },
    desc: {
      fontSize: "1rem",
      color: "#e8e8e8",
      lineHeight: "1.6",
    },
  };

  return (
    <>
      <style>
        {`
        @keyframes colorFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatParticle {
          0% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.5; }
        }

        .service-particles .s-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: floatParticle 6s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 15px 35px rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.2);
        }

        .service-card:hover .service-icon {
          transform: rotate(10deg) scale(1.2);
          filter: drop-shadow(0 0 10px #fff);
        }

        @media (max-width: 768px) {
          .service-card {
            width: 90% !important;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
      `}
      </style>

      <section style={styles.section}>
        <div className="service-particles"></div>
        <h2 style={styles.heading}>Our Services</h2>

        <div style={styles.grid}>
          {services.map((s, i) => (
            <div className="service-card" style={styles.card} key={i}>
              <div className="service-icon" style={styles.icon}>
                {s.icon}
              </div>
              <h4 style={styles.title}>{s.title}</h4>
              <p style={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
