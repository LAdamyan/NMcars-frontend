import React, { useEffect, useState } from "react";

export default function ServiceList() {
    const [services, setServices] = useState([]);
    const [query, setQuery] = useState(""); // optional search input

    // Use your deployed backend URL
    const BACKEND_URL = "https://nmcars-backend.onrender.com/api";

    useEffect(() => {
        // Build the URL dynamically depending on query
        const url = query
            ? `${BACKEND_URL}/search?q=${encodeURIComponent(query)}`
            : `${BACKEND_URL}/services`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setServices(data))
            .catch((err) => console.error("Failed to fetch services:", err));
    }, [query]); // re-run effect when query changes

    return (
        <div className="services">
            {/* Search input */}
            <input
                type="text"
                placeholder="Search by address..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ marginBottom: "20px", padding: "5px", width: "100%" }}
            />

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
