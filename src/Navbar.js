import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm py-3"
      style={{
        background:
          "linear-gradient(135deg, #0d6efd, #6f42c1, #ff007f, #ff6a00)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 15s ease infinite",
        boxShadow: "0 3px 15px rgba(0,0,0,0.3)",
      }}
    >
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .navbar-brand {
            font-weight: 700;
            font-size: 1.4rem;
            letter-spacing: 0.5px;
            color: #fff !important;
            text-shadow: 0 0 10px rgba(255,255,255,0.6);
          }

          .nav-link {
            color: rgba(255,255,255,0.85) !important;
            font-weight: 500;
            font-size: 1.05rem;
            margin: 0 10px;
            position: relative;
            transition: all 0.3s ease;
          }

          .nav-link:hover {
            color: #fff !important;
            text-shadow: 0 0 10px rgba(255,255,255,0.8);
            transform: translateY(-2px);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 0%;
            height: 2px;
            background-color: #fff;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 40%;
          }

          .navbar-toggler {
            border: none;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          .navbar-toggler-icon {
            filter: brightness(0) invert(1);
          }

          .nav-icon {
            margin-right: 8px;
            font-size: 1.1rem;
          }
        `}
      </style>

      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fa-solid fa-robot me-2 text-warning"></i>
          DE Tech Solutions
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fa-solid fa-house nav-icon text-info"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fa-solid fa-circle-info nav-icon text-success"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <i className="fa-solid fa-gears nav-icon text-warning"></i>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <i className="fa-solid fa-diagram-project nav-icon text-danger"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="fa-solid fa-paper-plane nav-icon text-light"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
