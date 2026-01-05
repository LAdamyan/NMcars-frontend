import React, { useRef, useState } from "react";
import "./BeforeAfter.css";

export default function BeforeAfterVideo({ before, after }) {
    const beforeVideoRef = useRef(null);
    const afterVideoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            beforeVideoRef.current.pause();
            afterVideoRef.current.pause();
            setIsPlaying(false);
        } else {
            beforeVideoRef.current.play();
            afterVideoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoClick = (videoRef) => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="video-compare">
            <div className="video-container">
                <div className="video-label">BEFORE</div>
                <video
                    ref={beforeVideoRef}
                    src={before}
                    muted
                    controls
                    playsInline
                    onClick={() => handleVideoClick(beforeVideoRef)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />
            </div>

            <div className="video-container">
                <div className="video-label">AFTER</div>
                <video
                    ref={afterVideoRef}
                    src={after}
                    muted
                    controls
                    playsInline
                    onClick={() => handleVideoClick(afterVideoRef)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />
            </div>

            {/* Optional: Sync play/pause button */}
            <div className="video-controls-overlay">
                <button
                    className="sync-play-btn"
                    onClick={handlePlayPause}
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(197, 222, 228, 0.8)',
                        color: '#0a192f',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        zIndex: 10
                    }}
                >
                    {isPlaying ? '⏸️ Pause Both' : '▶️ Play Both'}
                </button>
            </div>
        </div>
    );
}