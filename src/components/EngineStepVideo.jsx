import React from "react";
import "./EngineStepVideo.css";

export default function EngineStepVideo({ label, video }) {
    return (
        <div className="engine-video-card">
            <span className="engine-video-label">{label}</span>

            <video
                src={video}
                controls
                muted
                playsInline
                preload="metadata"
            />
        </div>
    );
}
