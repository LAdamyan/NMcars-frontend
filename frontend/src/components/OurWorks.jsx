import React from "react";
import cars from '../assets/cars.jpg';
export default function OurWorks() {
    return (
        <div className="our-works">
            <img src={cars} alt="Garage" className="garage-image" />
            <p>Take a look at our garage and recent work on vehicles!</p>
        </div>
    );
}
