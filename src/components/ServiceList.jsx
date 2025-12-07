import React from "react";
import "./ServiceList.css"; // optional for custom styling

export default function ServiceList() {
    const services = [
        "Kleine onderhoudsbeurt",
        "Grote onderhoudsbeurt",
        "Motor reparatie",
        "Elektrische werkzaamheden",
        "Distributierem vervangen ongeveer",
        "Distributieketting vervangen"
    ];

    return (
        <div className="services-container">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <h3>{service}</h3>
                </div>
            ))}
        </div>
    );
}

