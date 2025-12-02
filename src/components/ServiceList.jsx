import React, { useEffect, useState } from "react";

export default function ServiceList() {
    const [services, setServices] = useState([]);
    const [query, setQuery] = useState(""); // optional search input
    const [loading, setLoading] = useState(true); // for loading state
    const [error, setError] = useState(null); // for error handling

    // Deployed backend URL
    const BACKEND_URL = "https://nmcars-backend.onrender.com/api";

    useEffect(() => {
        setLoading(true);
        setError(null);

        // Choose endpoint based on query
        const url = query
            ? `${BACKEND_URL}/search?q=${encodeURIComponent(query)}`
            : `${BACKEND_URL}/services`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => setServices(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [query]);

    return (
        <div className="services">
            {/* Search input */}
            <input
                type="text"
                placeholder="Search by address..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    marginBottom: "20px",
                    padding: "10px",
                    width: "100%",
                    maxWidth: "400px",
                    fontSize: "16px",
                }}
            />

            {/* Loading / Error / Services */}
            {loading && <p>Loading services...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && services.length === 0 && <p>No services found.</p>}

            {!loading && !error && services.length > 0 && (
                <div className="service-list">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <p>Address: {service.address}</p>
                            <p>Price: €{service.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
