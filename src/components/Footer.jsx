import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
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
            <p>{t('address')}: Industrieweg 4, 5281 RW Boxtel</p>
            <p>{t('email')}: info@nmcars.net</p>
            <p>{t('phone')}: +31 6 19 90 52 83</p>


                      <p style={{ marginTop: "20px", fontSize: "0.9rem", opacity: 0.8 }}>
                          <p>© 2025 NMcars – {t('rights')}</p>
            </p>
        </footer>
    );
}