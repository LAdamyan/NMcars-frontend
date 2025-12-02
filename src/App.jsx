import React from "react";
import ServiceList from "./components/ServiceList";
import OurWorks from "./components/OurWorks";
import Location from "./components/Location";
import WorkingHours from "./components/WorkingHours";

export default function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>NM Cars</h1>
                <p>Your trusted car service garage in the Netherlands!</p>
            </header>

            <main>
                <section>
                    <h2>Our Services</h2>
                    <ServiceList />
                </section>

                <section>
                    <h2>Our Works</h2>
                    <OurWorks />
                </section>

                <section>
                    <h2>Location</h2>
                    <Location />
                </section>

                <section>
                    <h2>Working Hours</h2>
                    <WorkingHours />
                </section>
            </main>

            <footer>
                <p>Phone: +31 6 12 34 56 78</p>
                <p>Address: Main Street 12, Amsterdam</p>
            </footer>
        </div>
    );
}
