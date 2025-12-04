import React from "react";
import cars from '../assets/cars.jpg';
export default function OurWorks() {
    return (
        <div className="our-works">
            <img src={cars} alt="Garage" className="garage-image" />
            <p>Neem een kijkje in onze garage en bekijk het recente werk aan onze voertuigen!</p>
        </div>
    );
}
