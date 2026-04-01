"use client";

import { useRef, useState, useCallback } from "react";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";

export default function VideoPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-x-8 -top-10 h-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(229,67,255,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Glass border shell — gradient top-to-bottom for that glass edge look */}
      <div
        className="relative rounded-[28px] p-[7px]"
        style={{
          background:
            "linear-gradient(175deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)",
          boxShadow:
            "0 2px 0 0 rgba(255,255,255,0.06) inset, 0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.4)",
        }}
      >
        {/* Inner video surface */}
        <div
          className="relative overflow-hidden rounded-[21px]"
          style={{ background: "#0c0c0e" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={toggle}
        >
          {/* 16:9 aspect container */}
          <div className="aspect-video w-full">
            <video
              ref={videoRef}
              src="/assets/videos/digeto-hero-video.mp4"
              className="h-full w-full object-cover"
              poster="/assets/images/digeto-video-preview.png"
              preload="none"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              playsInline
            />

            {/* Play / pause overlay */}
            <div
              className="absolute inset-0 flex cursor-pointer items-center justify-center transition-opacity duration-200"
              style={{ opacity: !playing || hovered ? 1 : 0 }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-200"
                style={{
                  transform: hovered ? "scale(1.08)" : "scale(1)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {playing ? (
                  <IconPlayerPause size={20} className="text-white" fill="white" />
                ) : (
                  <IconPlayerPlay size={20} className="text-white" fill="white" style={{ marginLeft: "2px" }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
