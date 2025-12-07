import React from "react";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#364a5a",
                color: "white",
                padding: "30px 20px",
                textAlign: "center",
                marginTop: "40px"
            }}
        >
            <h3>Contact</h3>
            <p>Adres: Industrieweg 4 5281 RW Boxtel</p>
            <p>Email: info@nmcars.net</p>

            <a
                href="tel:+31619905283"
                style={{
                    display: "inline-block",
                    marginTop: "12px",
                    background: "#24612c",
                    padding: "12px 22px",
                    color: "white",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
                }}
            >
                📞 Bel ons: +31 6 19 90 52 83
            </a>

            <p style={{ marginTop: "20px", fontSize: "0.9rem", opacity: 0.8 }}>
                © 2025 NMcars – Alle rechten voorbehouden
            </p>
        </footer>
    );
}