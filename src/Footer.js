/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      className="pt-5 pb-4 mt-auto text-white"
      style={{
        background:
          "linear-gradient(135deg, #0d6efd, #6f42c1, #ff007f, #ff6a00)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 15s ease infinite",
        boxShadow: "0 -3px 20px rgba(0,0,0,0.25)",
      }}
    >
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .footer-icon {
            transition: all 0.3s ease;
            text-shadow: 0 0 5px rgba(255,255,255,0.5);
            font-size: 1.3rem;
          }

          .footer-icon:hover {
            transform: scale(1.3);
            text-shadow: 0 0 18px currentColor;
          }

          .footer-link {
            color: #f1f1f1;
            text-decoration: none;
            font-size: 1.05rem;
            transition: all 0.3s ease;
          }

          .footer-link:hover {
            color: #fff;
            text-shadow: 0 0 8px rgba(255,255,255,0.6);
            transform: translateX(5px);
          }

          .fade-up {
            animation: fadeUp 1.2s ease-in-out;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .footer-heading {
            font-size: 1.3rem;
            letter-spacing: 0.5px;
          }

          .footer-text {
            font-size: 1rem;
            line-height: 1.7;
          }

          .social-icon {
            font-size: 1.7rem;
            margin: 0 10px;
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            transform: scale(1.25);
            filter: brightness(1.3);
          }
        `}
      </style>

      <div className="container fade-up">
        <div className="row text-center text-md-start g-4">
          <div className="col-md-4">
            <div className="p-3">
              <h5 className="fw-bold text-uppercase mb-3 footer-heading">
                <i className="fa-solid fa-robot me-2 footer-icon text-info"></i>
                DE Tech Solutions Pvt. Ltd.
              </h5>
              <p className="footer-text text-light mb-0">
                Driving innovation through <b>AI</b>, software, and intelligent
                automation. We help organizations achieve smarter, faster, and
                future-ready transformation with digital excellence.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <h6 className="fw-bold text-uppercase mb-3 text-warning footer-heading">
                Quick Links
              </h6>
              <ul className="list-unstyled small mb-0">
                <li className="mb-3">
                  <a href="/" className="footer-link d-inline-block">
                    <i className="fa-solid fa-house me-3 text-info footer-icon"></i>
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/about" className="footer-link d-inline-block">
                    <i className="fa-solid fa-circle-info me-3 text-success footer-icon"></i>
                    About
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/services" className="footer-link d-inline-block">
                    <i className="fa-solid fa-gears me-3 text-warning footer-icon"></i>
                    Services
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/projects" className="footer-link d-inline-block">
                    <i className="fa-solid fa-diagram-project me-3 text-danger footer-icon"></i>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link d-inline-block">
                    <i className="fa-solid fa-paper-plane me-3 text-primary footer-icon"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <h6 className="fw-bold text-uppercase mb-3 text-info footer-heading">
                Get In Touch
              </h6>
              <p className="footer-text mb-3 text-light">
                <i className="fa-solid fa-location-dot me-3 text-danger footer-icon"></i>
                Chennai, Tamil Nadu, India
              </p>
              <p className="footer-text mb-3 text-light">
                <i className="fa-solid fa-phone me-3 text-success footer-icon"></i>
                +91 98765 43210
              </p>
              <p className="footer-text text-light">
                <i className="fa-solid fa-envelope me-3 text-warning footer-icon"></i>
                info@detechsolutions.com
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ opacity: "0.3", borderColor: "#fff" }} />

        <div className="text-center mb-4">
          {[
            { icon: "fa-facebook-f", color: "#1877f2" },
            { icon: "fa-twitter", color: "#1da1f2" },
            { icon: "fa-linkedin-in", color: "#0077b5" },
            { icon: "fa-instagram", color: "#e1306c" },
            { icon: "fa-github", color: "#ffffff" },
            { icon: "fa-youtube", color: "#ff0000" },
            { icon: "fa-telegram", color: "#0088cc" },
            { icon: "fa-whatsapp", color: "#25d366" },
            { icon: "fa-dribbble", color: "#ea4c89" },
            { icon: "fa-behance", color: "#1769ff" },
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="social-icon"
              style={{ color: social.color }}
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>

        <p
          className="text-center small text-light mb-0"
          style={{ fontSize: "1.05rem" }}
        >
          © {new Date().getFullYear()}{" "}
          <b className="text-white">DE Tech Solutions Pvt. Ltd.</b> | Empowering
          the Future with <span className="text-info">AI</span> &{" "}
          <span className="text-warning">Innovation</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
