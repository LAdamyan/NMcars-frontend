import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to NMcars",
            address: "Address",
            email: "Email",
            phone: "Phone",
            rights: "All rights reserved",
            services: "Our Services",
            ourWorks: "Our Works",
            location: "Location",
            workingHours: "Working Hours",
            hoursWeekdays: "Monday - Friday: 08:00 - 18:00",
            hoursSaturday: "Saturday: 09:00 - 13:00",
            hoursSunday: "Sunday: Closed",
            serviceSmallMaintenance: "Small Maintenance",
            serviceLargeMaintenance: "Large Maintenance",
            serviceEngineRepair: "Engine Repair",
            serviceElectrical: "Electrical Work",
            serviceTimingBelt: "Timing Belt Replacement ",
            serviceTimingChain: "Timing Chain Replacement",
            garageText: "Take a look at our garage and see recent work on our vehicles!"

        }
    },
    nl: {
        translation: {
            welcome: "Welkom bij NMcars",
            address: "Adres",
            email: "E-mail",
            phone: "Telefoon",
            rights: "Alle rechten voorbehouden",
            services: "Onze diensten",
            ourWorks: "Onze werken",
            location: "Locatie",
            workingHours: "Werkuren",
            hoursWeekdays: "Maandag - Vrijdag: 08:00 - 18:00",
            hoursSaturday: "Zaterdag: 09:00 - 13:00",
            hoursSunday: "Zondag: Gesloten",
            serviceSmallMaintenance: "Kleine onderhoudsbeurt",
            serviceLargeMaintenance: "Grote onderhoudsbeurt",
            serviceEngineRepair: "Motor reparatie",
            serviceElectrical: "Elektrische werkzaamheden",
            serviceTimingBelt: "Distributierem vervangen ",
            serviceTimingChain: "Distributieketting vervangen",
            garageText: "Neem een kijkje in onze garage en bekijk het recente werk aan onze voertuigen!",

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;
