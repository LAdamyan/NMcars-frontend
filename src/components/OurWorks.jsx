import React from "react";
import cars from '../assets/cars.jpg';
import { useTranslation } from 'react-i18next';
export default function OurWorks() {
    const { t } = useTranslation();
    return (
        <div className="our-works">
            <img src={cars} alt="Garage" className="garage-image" />
            <p>{t('garageText')}</p>
        </div>
    );
}
