import React from "react";
import ServiceList from "./components/ServiceList";
import OurWorks from "./components/OurWorks";
import Location from "./components/Location";
import WorkingHours from "./components/WorkingHours";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
    return (
        <div className="app">
            <header className="hero">
                <div className="overlay"></div>
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

            <Footer />
            <p style={{color: "white"}}>TEST</p>
            <FloatingCallButton />
            <WhatsAppButton />


        </div>
    );
}
