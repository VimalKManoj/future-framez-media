"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
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
    <div
      className="relative h-screen w-full z-30 bg-hero-pattern_vertical bg-center  bg-no-repeat flex flex-col  justify-end  items-start p-10 md:p-20 md:h-screen  md:bg-hero-pattern bg-cover md:bg-center md:justify-center xl:p-28"
      ref={heroBannerRef}
    >
      <div
        className={`${primary.className}  flex flex-col justify-center items-center text-6xl  z-40 2xl:p-0 md:text-8xl md:w-[70%] 2xl:text-[9rem] tracking-wide`}
      >
        <div className="overflow-hidden h-fit ">
          <h1 className="text-left text-white banner  m-0 p-0  md:text-balance ">
            {" "}
            {splitText("Your story, our vision")}
          </h1>
        </div>
      </div>

      <div
        className={`${secondary.className} flex pb-20 md:pb-10  justify-between items-end z-50 py-10 md:text-4xl `}
      >
        <div className="overflow-hidden">
          <h1 className="w-full banner-cap">
            Future Frames is your one-stop solution{" "}
            <br className="hidden md:block" /> for all visual storytelling
            needs.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;

{
  /* Background Image */
}

{
  /* <div className="relative w-full h-full ">
        <Image
          src={backgroundImage1}
          layout="fill"
          alt="bg"
          className="w-full h-full object-cover z-20 pointer-events-none"
        />
      </div> */
}
