import React from "react";

export default function FloatingCallButton() {
    return (
        <a
            href="tel:+31619905283"
            className="pulse-call"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                background: "#088317",
                color: "white",
                padding: "14px 20px",
                borderRadius: "50px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                fontWeight: "bold",
                textDecoration: "none",
                zIndex: 9999
            }}
        >
            📞 Bel
        </a>
    );
}