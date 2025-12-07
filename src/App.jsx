import React from "react";
import { useTranslation } from 'react-i18next';
import ServiceList from "./components/ServiceList";
import OurWorks from "./components/OurWorks";
import Location from "./components/Location";
import WorkingHours from "./components/WorkingHours";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import WhatsAppButton from "./components/WhatsAppButton";
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import './i18n/i18n';

export default function App() {
    const { t } = useTranslation();

    return (
        <div className="app">
            <header className="hero">
                <div className="flags-container">
                    <LanguageSwitcher />
                </div>{/* Top-right flags */}
                <div className="overlay"></div>
            </header>

            <main className="content">
                <section>
                    <h2 className="section-title">{t('services')}</h2>
                    <ServiceList />
                </section>

                <section>
                    <h2 className="section-title">{t('ourWorks')}</h2>
                    <OurWorks />
                </section>

                <section>
                    <h2 className="section-title">{t('location')}</h2>
                    <Location />
                </section>

                <section>
                    <h2 className="section-title">{t('workingHours')}</h2>
                    <WorkingHours />
                </section>
            </main>

            <Footer />
            <FloatingCallButton />

        </div>
    );
}
