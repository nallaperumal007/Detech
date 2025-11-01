import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <section
      className="text-white text-center position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0d6efd, #6f42c1, #ff007f, #ff6a00)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 15s ease infinite",
      }}
    >
      <style>
        {`
          /* 🌈 Gradient Flow Animation */
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }

          @keyframes glow {
            0%, 100% { text-shadow: 0 0 8px rgba(255,255,255,0.6); }
            50% { text-shadow: 0 0 20px rgba(255,255,255,1); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.07); }
          }

          .hero-container {
            position: relative;
            z-index: 3;
            padding: 120px 20px 80px;
            animation: fadeUp 1.3s ease-out;
            max-width: 1000px;
            margin: 0 auto;
          }

          .company-name {
            font-size: 3.5rem;
            font-weight: 800;
            text-shadow: 0 0 30px rgba(255,255,255,0.5);
            animation: glow 3s ease-in-out infinite;
          }

          .tagline {
            font-size: 1.4rem;
            color: rgba(255,255,255,0.95);
            margin-top: 20px;
          }

          .intro-text {
            font-size: 1.1rem;
            color: rgba(255,255,255,0.85);
            line-height: 1.8;
            margin-top: 25px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .btn-explore {
            margin-top: 40px;
            background: linear-gradient(90deg, #fff, #e3e3e3);
            color: #0d6efd;
            border: none;
            padding: 14px 40px;
            border-radius: 50px;
            font-size: 1.15rem;
            font-weight: 700;
            box-shadow: 0 0 25px rgba(255,255,255,0.6);
            transition: all 0.4s ease;
            animation: pulse 3s infinite ease-in-out;
          }

          .btn-explore:hover {
            transform: scale(1.12);
            box-shadow: 0 0 45px rgba(255,255,255,0.9);
            color: #6f42c1;
          }

          /* Floating Glowing Orbs */
          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.4;
            animation: float 10s ease-in-out infinite;
          }

          .orb1 { width: 280px; height: 280px; background: #0d6efd; top: 15%; left: 8%; animation-delay: 0s; }
          .orb2 { width: 320px; height: 320px; background: #ff007f; bottom: 10%; right: 10%; animation-delay: 2s; }
          .orb3 { width: 220px; height: 220px; background: #ff6a00; bottom: 25%; left: 35%; animation-delay: 4s; }

          /* Floating Tech Icons */
          .floating-icons {
            position: absolute;
            top: 10%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 35px;
            font-size: 1.8rem;
            opacity: 0.2;
            z-index: 1;
          }

          .floating-icons i {
            animation: float 6s ease-in-out infinite;
          }

          /* Feature Cards */
          .features {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 25px;
            margin-top: 50px;
          }

          .feature-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px 20px;
            width: 260px;
            box-shadow: 0 0 20px rgba(255,255,255,0.15);
            transition: all 0.4s ease;
          }

          .feature-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 0 35px rgba(255,255,255,0.3);
          }

          .feature-icon {
            font-size: 2rem;
            color: #00ffd5;
            margin-bottom: 10px;
          }

          .feature-title {
            font-weight: 600;
            font-size: 1.1rem;
            color: #fff;
          }

          .feature-text {
            font-size: 0.95rem;
            color: rgba(255,255,255,0.85);
          }

          /* Mission Section */
          .mission-section {
            margin-top: 90px;
            padding: 50px 15px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
            animation: fadeUp 1.8s ease-in-out;
          }

          .mission-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            text-shadow: 0 0 10px rgba(255,255,255,0.6);
          }

          .mission-text {
            font-size: 1.05rem;
            line-height: 1.8;
            color: rgba(255,255,255,0.9);
          }

          /* Responsive */
          @media (max-width: 768px) {
            .company-name { font-size: 2.4rem; }
            .tagline { font-size: 1.15rem; }
            .intro-text { font-size: 1rem; }
            .feature-card { width: 90%; }
            .mission-title { font-size: 1.6rem; }
          }

          @media (max-width: 480px) {
            .floating-icons { display: none; }
            .hero-container { padding-top: 80px; }
            .btn-explore { font-size: 1rem; padding: 12px 30px; }
          }
        `}
      </style>

      {/* Floating Background Orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <i className="fa-solid fa-code"></i>
        <i className="fa-solid fa-robot"></i>
        <i className="fa-solid fa-cloud"></i>
        <i className="fa-solid fa-database"></i>
        <i className="fa-solid fa-brain"></i>
      </div>

      {/* Hero Section */}
      <div className="hero-container">
        <h1 className="company-name">DE Tech Solutions Pvt. Ltd.</h1>
        <p className="tagline">
          Building the Future with <strong>AI</strong> &{" "}
          <strong>Next-Gen Software</strong>
        </p>
        <p className="intro-text">
          We empower startups and enterprises with powerful, human-centered
          digital experiences — combining AI, cloud, and innovation to help you
          grow faster and smarter.
        </p>
        <Link to="/services" className="btn btn-explore mt-4">
          <i className="fa-solid fa-rocket me-2"></i> Explore Services
        </Link>

        {/* Why Choose Us Section */}
        <div className="features mt-5">
          <div className="feature-card">
            <i className="fa-solid fa-microchip feature-icon"></i>
            <h5 className="feature-title">Cutting-Edge Tech</h5>
            <p className="feature-text">
              Harnessing AI, ML, and modern frameworks to craft smart digital
              ecosystems.
            </p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-users feature-icon"></i>
            <h5 className="feature-title">Expert Team</h5>
            <p className="feature-text">
              Skilled engineers, designers, and strategists shaping tomorrow’s
              digital landscape.
            </p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-bolt feature-icon"></i>
            <h5 className="feature-title">Fast & Scalable</h5>
            <p className="feature-text">
              Optimized for speed, performance, and seamless scalability.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section mt-5">
          <h2 className="mission-title">
            <i className="fa-solid fa-bullseye me-2"></i> Our Mission
          </h2>
          <p className="mission-text">
            To empower every business — small or large — to harness technology
            as their greatest advantage. We believe in innovation that feels
            human, AI that enables creativity, and software that brings ideas to
            life beautifully.
          </p>
          <h2 className="mission-title mt-5">
            <i className="fa-solid fa-eye me-2"></i> Our Vision
          </h2>
          <p className="mission-text">
            To be a global leader in intelligent digital transformation — where
            creativity meets automation and technology becomes an art of
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
