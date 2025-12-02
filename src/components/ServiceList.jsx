import React, { useEffect, useState } from "react";

export default function ServiceList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://nmcars-backend.onrender.com/api/services") // production backend
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="services">
            {services.length === 0 ? (
                <p>Loading services...</p>
            ) : (
                services.map((service) => (
                    <div key={service.id} className="service-card">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <p>Address: {service.address}</p>
                        <p>Price: €{service.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}
