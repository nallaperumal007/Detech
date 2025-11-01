import React from "react";

function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, scalable, and responsive websites.",
    },
    {
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile app solutions.",
    },
    {
      title: "Cloud Solutions",
      desc: "Reliable cloud-based integration & deployment.",
    },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4 text-center">Our Services</h2>
      <div className="row">
        {services.map((s, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-primary">{s.title}</h5>
                <p className="card-text">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
