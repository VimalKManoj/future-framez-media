"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import your fonts
const myFont = localFont({ src: "./../app/fonts/IvyMode-Regular.woff" });
const secondary = localFont({ src: "./../app/fonts/Luxca.woff" });

function ProjectsHeader() {
  const projectHeaderRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: projectHeaderRef.current, // Trigger animation based on this header
          start: "top top", // Start when the top of the header hits the top of the viewport
          end: "+=300", // End the animation after scrolling 300px
          scrub: true, // Smoothly animate as you scroll
          pin: true, // Pin the header while the animation happens
          // markers: true,
        },
      });

      // Animate the scaling and fading of the header
      timeline.to(projectHeaderRef.current, {
        scale: 0.8,
        opacity: 0,
        ease: "power1.inOut",
      });
    }, projectHeaderRef);

    return () => ctx.revert(); // Cleanup on unmount
  });

  return (
    <header
      className={` flex w-full h-[80vh] flex-col items-center justify-around p-10 z-10 header ${myFont.className}`}
      ref={projectHeaderRef}
    >
      <h1 className="text-9xl header">Our Projects</h1>
      <h2 className={`text-4xl mb-16 w-2/3 text-center ${secondary.className}`}>
        Our team of creative professionals is dedicated to providing exceptional
        services across various industries, ensuring every project is executed
        with precision and creativity. Whether it’s a high-energy commercial, an
        elegant wedding film, or a corporate video, we bring your vision to
        life. Discover our full range of projects.
      </h2>
    </header>
  );
}

export default ProjectsHeader;
