"use client";
import React, { useRef } from "react";
import backgroundImage1 from "../../../public/hero-banner-2.jpg";
import Image from "next/image";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../../app/fonts/Morganite-Bold.ttf" });

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroBanner() {
  const heroBannerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const text = heroBannerRef.current?.querySelectorAll(".letter"); // Target each letter
        if (text && text.length > 0) {
          const timeline = gsap.timeline();

          // Animation: Stagger letters from translateY(100%) to 0 with a delay between them
          timeline
            .fromTo(
              text, // Target the individual letters
              { y: "100%", opacity: 0 }, // Start with translateY(100%) and invisible
              {
                y: "0%", // End at translateY(0)
                opacity: 1,
                duration: 0.8, // Duration for each letter
                stagger: 0.02, // Stagger each letter animation by 0.05 seconds
                ease: "power1.out", // Smooth easing
              }
            )
            .fromTo(
              ".banner-cap",
              { opacity: 0 }, // Start with translateY(100%) and invisible
              {
                // End at translateY(0)
                opacity: 1,
                duration: 1, // Duration for each letter
                stagger: 0.02, // Stagger each letter animation by 0.05 seconds
                ease: "power1.out", // Smooth easing
              }
            ),
            "-=.5";
        }
      }, heroBannerRef);

      // Cleanup on component unmount
      return () => ctx.revert();
    },
    { scope: heroBannerRef }
  );

  const splitText = (text: string) =>
    text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-[1.5rem]">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="letter inline-block">
            {char}
          </span>
        ))}
      </span>
    ));
  return (
    <div className="relative h-screen w-full" ref={heroBannerRef}>
      {/* Text Overlay */}
      <div
        className={`${myFont.className} absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-50 p-10  text-[15rem] tracking-wide`}
      >
        <div className="overflow-hidden h-fit ">
          <h1 className="text-white banner  m-0 p-0">
            {" "}
            {splitText("FUTURE FRAMEZ MEDIA")}
          </h1>
        </div>
      </div>
      <div
        className={`${myFont.className} absolute top-0 left-0 w-screen h-screen flex  justify-between items-end z-50 p-10  text-2xl `}
      >
        <div className="overflow-hidden">
          <h1 className="w-40 banner-cap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            ducimus? 
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-4xl banner-cap">We define the future</h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src={backgroundImage1}
          layout="fill"
          alt="bg"
          className="w-full h-full object-cover z-20 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
