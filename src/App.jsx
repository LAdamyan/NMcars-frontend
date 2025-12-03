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

            </header>

            <main className="content">
                <section>
                    <h2 className="section-title">Our Services</h2>
                    <ServiceList />
                </section>

                <section>
                    <h2 className="section-title">Our Works</h2>
                    <OurWorks />
                </section>

                <section>
                    <h2 className="section-title">Location</h2>
                    <Location />
                </section>

                <section>
                    <h2 className="section-title">Working Hours</h2>
                    <WorkingHours />
                </section>
            </main>

            <footer className="footer">
                <p>📞 +31 6 19 90 52 83</p>
                <p>📍 Industrieweg 4A 5281 RW Boxtel</p>
                <p>© 2025 NM Cars</p>
            </footer>
        </div>
    );
}
