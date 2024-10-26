"use client";

import React, { use, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Initially muted
  const [isScaled, setIsScaled] = useState(false);

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    // Toggle mute and scale
    event.preventDefault();
    if (videoRef.current) {
      setIsMuted((prevMuted) => !prevMuted); // Toggle mute
      setIsScaled((prevScaled) => !prevScaled); // Toggle scale

      // Directly update the video muted property after state change
      videoRef.current.muted = !isMuted; // Use the updated mute state
      videoRef.current.play();
    }
  };

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "-30% top", // Starts at 40% of viewport height
            end: "center center", // Ends at 100vh from the start of videoContainerRef
            scrub: 1,
          },
        });

        // Initial scaling animation
        timeline.fromTo(
          ".video-wrapper",
          { scale: 0.8, yPercent: 20, duration: 1 },
          { scale: 1.1, yPercent: 0, duration: 1 }
        );

        gsap.timeline({
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "40% top",
            end: "bottom -50%",
            scrub: 1,
          },
        });
        // .to(".video-wrapper", { scale: 0.8, duration: 1 });
      }, videoContainerRef);

      return () => ctx.revert();
    },
    { scope: videoContainerRef }
  );

  return (
    <div
      className="video-container relative h-screen  w-full flex justify-center items-center overflow-hidden"
      ref={videoContainerRef}
    >
      <div className="video-wrapper absolute top-0 left-0 w-screen overflow-x-hidden h-screen object-cover z-10 opacity-60 overflow-hidden flex flex-col justify-center items-center">
        <video
          ref={videoRef}
          className={`w-2/3 h-2/3 object-cover hero-video`}
          autoPlay
          playsInline
          controls={isScaled}
          muted={isMuted} // Reflect the state
          loop
          preload="auto"
          onClick={handleVideoClick}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
