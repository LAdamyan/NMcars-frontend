import React from "react";
import "./ServiceList.css";
import { useTranslation } from 'react-i18next';// optional for custom styling

export default function ServiceList() {
    const { t } = useTranslation();
    const services = [
        t('serviceSmallMaintenance'),
        t('serviceLargeMaintenance'),
        t('serviceEngineRepair'),
        t('serviceElectrical'),
        t('serviceTimingBelt'),
        t('serviceTimingChain')
    ];

    return (
        <div className="services-container">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <h3>{service}</h3>
                </div>
            ))}
        </div>
    );
}

