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
            location: "Location",
            workingHours: "Working Hours",
            hoursWeekdays: "Monday - Friday: 09:00 - 18:00",
            hoursSaturday: "Saturday: 09:00 - 13:00",
            hoursSunday: "Sunday: Closed",
            serviceSmallMaintenance: "Small Maintenance",
            serviceLargeMaintenance: "Large Maintenance",
            serviceEngineRepair: "Engine Repair",
            serviceElectrical: "Electrical Work",
            serviceTimingBelt: "Timing Belt Replacement ",
            serviceTimingChain: "Timing Chain Replacement",
            garageText: "Take a look at our garage and see recent work on our vehicles!",
            polishTitle: "Polishing – Before & After",
            ourWorks: "Our Works",
            polish: "Polishing",
            repair: "Repair",
            engine: "Engine",
            polishText: "Professional car polishing – see the before and after difference.",
            repairText: "After a thorough diagnosis, we located and addressed the problem in the electrical system. Thanks to the correct analysis and repair, the car starts perfectly again.",
            engineText: "Engine maintenance and technical work.",
            polishWork1Title: "Complete Car Polish",
            polishWork1Desc: "Full exterior polishing and scratch removal",
            repairWork1Title: "Electrical Repair",
            repairWork1Desc: "Fixed electrical system - restored perfect starting",
            engineWork1Title: "Engine Service",
            engineWork1Desc: "Complete engine maintenance and tuning",
            mediaComingSoon: "📸 Media will be added soon",
            checkBackLater: "Check back later for more examples!",
            engineExamplesComing: "Check back later for engine work examples!",
            engineCaseTitle: "Renault Clio – Excessive Oil Consumption",
            engineCaseText: "This Renault Clio was brought in due to excessive oil consumption. After inspection, worn piston rings were identified. After replacement, the engine runs smoothly again.",
            engineProblemOil: "⚠️ Excessive oil consumption",
            engineProblemSmoke: "⚠️ Blue smoke from exhaust",
            engineProblemPower: "⚠️ Loss of engine power"

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
            location: "Locatie",
            workingHours: "Werkuren",
            hoursWeekdays: "Maandag - Vrijdag: 09:00 - 18:00",
            hoursSaturday: "Zaterdag: 09:00 - 13:00",
            hoursSunday: "Zondag: Gesloten",
            serviceSmallMaintenance: "Kleine onderhoudsbeurt",
            serviceLargeMaintenance: "Grote onderhoudsbeurt",
            serviceEngineRepair: "Motor reparatie",
            serviceElectrical: "Elektrische werkzaamheden",
            serviceTimingBelt: "Distributierem vervangen ",
            serviceTimingChain: "Distributieketting vervangen",
            garageText: "Neem een kijkje in onze garage en bekijk het recente werk aan onze voertuigen!",
            polishTitle: "Polijsten – Voor en Na",
            ourWorks: "Onze Werken",
            polish: "Polijsten",
            repair: "Reparatie",
            engine: "Motor",
            polishText: "Professioneel polijsten van voertuigen – bekijk het verschil voor en na.",
            repairText: "Na een grondige diagnose hebben we het probleem in het elektrische systeem opgespoord en aangepakt. Dankzij de juiste analyse en reparatie start de auto weer perfect ",
            engineText: "Motoronderhoud en technische werkzaamheden.",
            polishWork1Title: "Polish Auto Complet",
            polishWork1Desc: "Volledig polijsten van de buitenkant en verwijdering van krassen",
            repairWork1Title: "Elektrotechnische reparatie",
            repairWork1Desc: "Elektrisch systeem gerepareerd - start weer perfect",
            engineWork1Title: "Service Motor",
            engineWork1Desc: "Volledig motoronderhoud en afstelling",
            mediaComingSoon: "📸 Media wordt binnenkort toegevoegd",
            checkBackLater: "Kom later terug voor meer voorbeelden!",
            engineExamplesComing: "Kom later terug voor motorwerk voorbeelden!",
            engineCaseTitle: "Renault Clio – Hoog olieverbruik",
            engineCaseText: "Deze Renault Clio kwam bij ons binnen met extreem hoog olieverbruik. Na inspectie bleek dat de zuigerveren versleten waren. Na vervanging loopt de motor weer gezond.",
            engineProblemOil: "⚠️ Hoog olieverbruik",
            engineProblemSmoke: "⚠️ Blauwe rook uit de uitlaat",
            engineProblemPower: "⚠️ Vermogensverlies"


        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'nl', // default language
        fallbackLng: 'nl',
        interpolation: { escapeValue: false }
    });

export default i18n;
