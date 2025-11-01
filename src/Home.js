import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="fw-bold text-primary">DE Tech Solutions Pvt. Ltd.</h1>
      <p className="lead mt-3">
        Empowering businesses with next-generation software and AI solutions.
      </p>
      <Link to="/services" className="btn btn-primary mt-3">
        Explore Services
      </Link>
    </div>
  );
}

export default Home;
