import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialButtons() {
    return (
        <div style={containerStyle}>
            <a
                href="https://www.facebook.com/profile.php?id=61585179322723"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...iconStyle, background: "#1877F2" }}
                aria-label="Facebook"
            >
                <FaFacebookF />
            </a>

            <a
                href="https://www.instagram.com/nmcars_net/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...iconStyle, background: "#E1306C" }}
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
        </div>
    );
}

/* Styles */
const containerStyle = {
    position: "fixed",
    bottom: "75px",   // above WhatsApp
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 9999
};

const iconStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    cursor: "pointer",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    textDecoration: "none",
    transition: "transform 0.2s ease"
};
