import React from "react";
import ServiceList from "./components/ServiceList";
import OurWorks from "./components/OurWorks";
import Location from "./components/Location";
import WorkingHours from "./components/WorkingHours";

export default function App() {
    return (
        <div className="app">
            <header className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>NM Cars</h1>
                    <p>Premium Automotive Service in the Netherlands</p>
                </div>
            </header>

            <main className="content">
                <section>
                    <h2 className="section-title">Onze diensten</h2>
                    <ServiceList />
                </section>

                <section>
                    <h2 className="section-title">Onze werken</h2>
                    <OurWorks />
                </section>

                <section>
                    <h2 className="section-title">Locatie</h2>
                    <Location />
                </section>

                <section>
                    <h2 className="section-title">Werkuren</h2>
                    <WorkingHours />
                </section>
            </main>

            <footer className="footer">
                <p>📞 +31 6 12 34 56 78</p>
                <p>📍 Main Street 12, Amsterdam</p>
                <p>© 2025 NM Cars</p>
            </footer>
        </div>
    );
}
