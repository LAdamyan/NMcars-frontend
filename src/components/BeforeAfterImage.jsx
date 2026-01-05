import React, { useState } from "react";
import "./BeforeAfter.css";

export default function BeforeAfterImage({ before, after }) {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <div className="side-by-side-compare">
            {/* Before Image - Left Side */}
            <div className="image-side before-side">
                <div className="image-label">BEFORE</div>
                <img
                    src={before}
                    className="compare-image"
                    alt="Before treatment"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML =
                            '<div class="image-error">Image failed to load</div>';
                    }}
                />
            </div>

            {/* Small Space Between Images */}
            <div className="image-separator"></div>

            {/* After Image - Right Side */}
            <div className="image-side after-side">
                <div className="image-label">AFTER</div>
                <img
                    src={after}
                    className="compare-image"
                    alt="After treatment"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML =
                            '<div class="image-error">Image failed to load</div>';
                    }}
                />
            </div>
        </div>
    );
}