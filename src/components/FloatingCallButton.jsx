import React from "react";
import bellImage from "../assets/call.png";

export default function FloatingCallButton() {
    return (
        <a
            href="tel:+31619905283"
            className="pulse-call"
            style={{
                position: "fixed",
                bottom: "10px",
                right: "20px",
                background: "#018e98",
                padding: "10px",
                borderRadius: "50px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img
                src={bellImage}
                alt="Call"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
        </a>
    );
}