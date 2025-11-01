import React from "react";

function Projects() {
  const projects = [
    {
      name: "Smart ERP",
      details: "A cloud-based ERP system for logistics.",
      img: "https://via.placeholder.com/300",
    },
    {
      name: "HealthTrack App",
      details: "Mobile app for health record management.",
      img: "https://via.placeholder.com/300",
    },
    {
      name: "AI Chat Assistant",
      details: "Custom chatbot for business automation.",
      img: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4 text-center">Our Projects</h2>
      <div className="row">
        {projects.map((p, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow-sm h-100">
              <img src={p.img} alt={p.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-primary">{p.name}</h5>
                <p className="card-text">{p.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
