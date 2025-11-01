import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }
    localStorage.setItem("contactForm", JSON.stringify(form));
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0d6efd, #6f42c1, #ff007f, #ff6a00)",
        backgroundSize: "500% 500%",
        animation: "gradientShift 12s ease infinite",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(60px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .contact-card {
            backdrop-filter: blur(25px);
            background: rgba(255, 255, 255, 0.12);
            border-radius: 20px;
            box-shadow: 0 0 35px rgba(255, 255, 255, 0.2);
            padding: 45px 35px;
            width: 100%;
            max-width: 520px;
            animation: fadeInUp 1.2s ease;
            border: 1px solid rgba(255,255,255,0.25);
            transition: transform 0.3s ease;
          }

          .contact-card:hover {
            transform: translateY(-8px);
          }

          .contact-title {
            font-size: 2.2rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 1.5rem;
            text-shadow: 0 0 15px rgba(255,255,255,0.6);
          }

          .contact-icon {
            color: #00ffd5;
            font-size: 2rem;
            animation: pulseGlow 2s infinite ease-in-out;
          }

          @keyframes pulseGlow {
            0%, 100% { text-shadow: 0 0 10px #00ffd5, 0 0 20px #00ffd5; }
            50% { text-shadow: 0 0 20px #00ffd5, 0 0 35px #00ffd5; }
          }

          .form-group {
            position: relative;
            margin-bottom: 25px;
          }

          .form-control {
            width: 100%;
            background: rgba(255,255,255,0.18);
            border: 1px solid rgba(255,255,255,0.3);
            color: #fff;
            border-radius: 12px;
            padding: 14px 15px;
            transition: all 0.3s ease;
            font-size: 1rem;
          }

          .form-control::placeholder {
            color: transparent;
          }

          .form-label {
            position: absolute;
            top: 12px;
            left: 15px;
            color: rgba(255,255,255,0.7);
            font-size: 1rem;
            transition: 0.3s;
            pointer-events: none;
          }

          .form-control:focus,
          .form-control:not(:placeholder-shown) {
            background: rgba(255,255,255,0.25);
            border-color: #fff;
            box-shadow: 0 0 20px rgba(255,255,255,0.4);
            outline: none;
          }

          .form-control:focus + .form-label,
          .form-control:not(:placeholder-shown) + .form-label {
            top: -12px;
            left: 10px;
            font-size: 0.85rem;
            color: #00ffd5;
            background: rgba(255,255,255,0.15);
            padding: 0 6px;
            border-radius: 6px;
          }

          .btn-submit {
            background: linear-gradient(135deg, #00ffd5, #0d6efd, #ff007f);
            border: none;
            border-radius: 50px;
            color: #fff;
            font-weight: 600;
            padding: 14px 25px;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 0 25px rgba(255,255,255,0.4);
          }

          .btn-submit:hover {
            transform: scale(1.1);
            box-shadow: 0 0 45px rgba(255,255,255,0.8), 0 0 60px #00ffd5;
          }

          .success-message {
            color: #00ff9d;
            text-shadow: 0 0 12px rgba(0,255,157,0.7);
            font-weight: 600;
            animation: fadeIn 0.8s ease;
            margin-top: 15px;
          }
        `}
      </style>

      <div className="contact-card text-center">
        <h2 className="contact-title">
          <i className="fa-solid fa-envelope-circle-check contact-icon"></i>
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
            />
            <label className="form-label">Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
            />
            <label className="form-label">Your Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="form-control"
            ></textarea>
            <label className="form-label">Your Message</label>
          </div>

          <button type="submit" className="btn btn-submit w-100">
            <i className="fa-solid fa-paper-plane me-2"></i> Send Message
          </button>

          {success && (
            <p className="success-message">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
