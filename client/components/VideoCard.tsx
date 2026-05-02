"use client";

import { useRef, useState } from "react";

export default function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="absolute inset-0 cursor-pointer" onClick={toggle}>
      <video
        ref={videoRef}
        src="/assets/videos/digeto-hero-video.mp4"
        poster="/assets/images/digeto-video-preview.png"
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      {/* Button: always visible when paused, fades in on hover when playing */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          playing ? "opacity-0 hover:opacity-100" : "opacity-100"
        }`}
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="3" width="4" height="14" rx="1.5" fill="white" />
              <rect x="12" y="3" width="4" height="14" rx="1.5" fill="white" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M5 3.5L16.5 10 5 16.5V3.5Z" fill="white" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
