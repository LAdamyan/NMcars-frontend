import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import BeforeAfterImage from "./BeforeAfterImage";
import BeforeAfterVideo from "./BeforeAfterVideo";

// Import your image assets
import polishBefore1 from "../assets/works/photo/polishBefore1.jpg";
import polishAfter1 from "../assets/works/photo/polishAfter1.jpg";
// Add more imports as you get more images:
// import polishBefore2 from "../assets/works/photo/polishBefore2.jpg";
// import polishAfter2 from "../assets/works/photo/polishAfter2.jpg";

// Import your video assets
import work1before from "../assets/works/video/work1before.mp4";
import work1after from "../assets/works/video/work1after.mp4";
// Add more imports as you get more videos:
// import work2before from "../assets/works/video/work2before.mp4";
// import work2after from "../assets/works/video/work2after.mp4";

import "./OurWorks.css";
import EngineStepVideo from "./EngineStepVideo";

import engineBefore from "../assets/works/video/engine/engine_before.mp4";
import engineExplain from "../assets/works/video/engine/engine_explain.mp4";
import engineRepair from "../assets/works/video/engine/engine_repair.mp4";
import engineAfter from "../assets/works/video/engine/engine_after.mp4";

export default function OurWorks() {
    const { t } = useTranslation();
    const [category, setCategory] = useState("polish");
    const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

    const engineSteps = [
        { label: t("before"), video: engineBefore },
        { label: t("explanation"), video: engineExplain },
        { label: t("repair"), video: engineRepair },
        { label: t("after"), video: engineAfter },
    ];

    // Define all your works data
    const worksData = {
        polish: {
            description: t("polishText"),
            items: [
                {
                    id: 1,
                    before: polishBefore1,
                    after: polishAfter1,
                    title: t("polishWork1Title", "Car Polish Work #1"),
                    description: t("polishWork1Desc", "Complete exterior polishing and restoration")
                },
                // Add more polish works here:
                // {
                //     id: 2,
                //     before: polishBefore2,
                //     after: polishAfter2,
                //     title: t("polishWork2Title", "Car Polish Work #2"),
                //     description: t("polishWork2Desc", "Scratch removal and deep polishing")
                // },
            ],
            type: "image"
        },
        repair: {
            description: t("repairText"),
            items: [
                {
                    id: 1,
                    before: work1before,
                    after: work1after,
                    title: t("repairWork1Title", "Repair Work #1"),
                    description: t("repairWork1Desc", "Body repair and paint restoration")
                },
                // Add more repair works here:
                // {
                //     id: 2,
                //     before: work2before,
                //     after: work2after,
                //     title: t("repairWork2Title", "Repair Work #2"),
                //     description: t("repairWork2Desc", "Dent removal and panel restoration")
                // },
            ],
            type: "video"
        },
        engine: {
            description: t("engineText"),
            items: [
                {
                    id: 1,
                    title: t("engineCaseTitle"),
                    description: t("engineCaseText")
                }
            ],
            type: "engine"
        }
    };

    const currentCategory = worksData[category];
    const currentWork = currentCategory.items[currentWorkIndex];

    // Navigation functions
    const nextWork = () => {
        setCurrentWorkIndex((prevIndex) =>
            prevIndex === currentCategory.items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevWork = () => {
        setCurrentWorkIndex((prevIndex) =>
            prevIndex === 0 ? currentCategory.items.length - 1 : prevIndex - 1
        );
    };

    const selectWork = (index) => {
        setCurrentWorkIndex(index);
    };

    // Handle category change
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setCurrentWorkIndex(0);
    };

    return (
        <div className="our-works">
            <h2 className="section-title">{t("ourWorks")}</h2>

            <div className="categories">
                {Object.keys(worksData).map((cat) => (
                    <button
                        key={cat}
                        className={category === cat ? "active" : ""}
                        onClick={() => handleCategoryChange(cat)}
                    >
                        {t(cat)}
                    </button>
                ))}
            </div>

            {/* Works Gallery Section */}
            <div className="works-gallery">
                {/* Category Description */}
                <p className="works-description">{currentCategory.description}</p>

                {/* Work Counter */}
                <div className="work-counter">
                    <span className="current-work">{currentWorkIndex + 1}</span>
                    <span className="total-works">/{currentCategory.items.length}</span>
                </div>

                {/* Work Title and Description */}
                <h3 className="work-title">{currentWork.title}</h3>
                <p className="work-specific-description">{currentWork.description}</p>

                {/* Media Display Area */}
                <div className="media-container">
                    {category === "polish" && currentCategory.type === "image" && (
                        <BeforeAfterImage
                            before={currentWork.before}
                            after={currentWork.after}
                        />
                    )}

                    {category === "repair" && currentCategory.type === "video" && (
                        <BeforeAfterVideo
                            before={currentWork.before}
                            after={currentWork.after}
                        />
                    )}

                    {category === "engine" && (
                        <>
                            <div className="video-compare engine-compare">
                                <video src={engineBefore} controls muted />
                                <video src={engineExplain} controls muted />
                                <video src={engineRepair} controls muted />
                                <video src={engineAfter} controls muted />
                            </div>
                        </>
                    )}
                </div>

                {/* Navigation Controls */}
                <div className="gallery-controls">
                    <button
                        className="nav-btn prev-btn"
                        onClick={prevWork}
                        disabled={currentCategory.items.length <= 1}
                        aria-label="Previous work"
                    >
                        ← {t("previous", "Previous")}
                    </button>

                    {/* Thumbnail Navigation */}
                    <div className="thumbnails">
                        {currentCategory.items.map((work, index) => (
                            <button
                                key={work.id}
                                className={`thumbnail ${index === currentWorkIndex ? 'active' : ''}`}
                                onClick={() => selectWork(index)}
                                title={`View work ${index + 1}: ${work.title}`}
                                aria-label={`Select work ${index + 1}`}
                            >
                                {category === "polish" && work.before ? (
                                    <img
                                        src={work.before}
                                        alt={`Work ${index + 1} thumbnail`}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '📷';
                                            e.target.parentElement.style.fontSize = '1.5rem';
                                        }}
                                    />
                                ) : category === "repair" ? (
                                    <div className="video-thumbnail">
                                        ▶️
                                    </div>
                                ) : (
                                    <div className="placeholder-thumbnail">
                                        🔧
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <button
                        className="nav-btn next-btn"
                        onClick={nextWork}
                        disabled={currentCategory.items.length <= 1}
                        aria-label="Next work"
                    >
                        {t("next", "Next")} →
                    </button>
                </div>
            </div>
        </div>
    );
}