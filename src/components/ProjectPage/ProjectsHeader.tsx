"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});

gsap.registerPlugin(ScrollTrigger);

import TextMarquee from "../Marquee/TextMarque";

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
    <>
      <header
        className={` flex w-full h-[calc(100vh-96px)] flex-col items-start justify-center p-10 z-10 header mt-16 md:mt-0 ${primary.className}  text-black`}
        ref={projectHeaderRef}
      >
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl text-center md:text-left header mb-6 md:mb-20 w-full">
          Our Projects
        </h1>
        <h2
          className={`md:text-4xl text-xl mb-6 md:mb-16 w-full text-center md:text-left ${secondary.className}`}
        >
          Our team of creative professionals is dedicated to providing
          exceptional services across various industries, ensuring every project
          is executed with precision and creativity. Whether it’s a high-energy
          commercial, an elegant wedding film, or a corporate video, we bring
          your vision to life. Discover our full range of projects.
        </h2>
      </header>
      <div
        className={`${secondary.className} flex text-black justify-around w-full h-24 border-y border-black overflow-hidden`}
      >
        <ul className="flex w-full justify-around items-center h-full text-xl ">
          <TextMarquee
            texts={[
              "Fashion",
              "Branding",
              "Furniture",
              "Wedding Films",
              "Architecture",
              "Product Photography",
              "Web development",
              "Social Media Management ",
            ]}
          />
        </ul>
      </div>
    </>
  );
}

export default ProjectsHeader;
