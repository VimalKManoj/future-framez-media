"use client";
import Image from "next/image";
import React, { useRef } from "react";
import backgroundImage5 from "../../../public/hero-banner-4.jpg";
import Why from "./Why";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import OurServices from "./OurServices";

gsap.registerPlugin(ScrollTrigger);

function WhyAndService() {
  const WhyContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: WhyContainerRef.current,
            start: "top top", // Starts at 40% of viewport height
            end: "bottom -10%", // Ends at 100vh from the start of videoContainerRef
            scrub: true,
          },
        });

        timeline.to(".parallax-img", {
          y: 300,

          ease: "power1.inOut",
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: WhyContainerRef.current,
              start: "30% top", // Starts at 40% of viewport height
              end: "bottom -20%", // Ends at 100vh from the start of videoContainerRef
              scrub: true,
            },
          })
          .to(".number", { y: 200, ease: "power1.inOut" });

        // .to(".video-wrapper", { scale: 0.8, duration: 1 });
      }, WhyContainerRef);

      return () => ctx.revert();
    },
    { scope: WhyContainerRef }
  );
  return (
    <div
      className="relative w-full h-full 2xl:px-28 overflow-hidden "
      ref={WhyContainerRef}
    >
      <div className="absolute top-0 left-0 h-[20vh] w-full  z-20 bg-gradient-to-b from-black "></div>
      <div className="absolute bottom-0 left-0 h-[20vh] w-full  z-20 bg-gradient-to-t from-black "></div>
      <div className="absolute top-0 left-0 h-full w-[35vw]  z-20 bg-gradient-to-r from-black "></div>
      <div className="absolute top-0 right-0 h-full w-[30vw]  z-20 bg-gradient-to-l from-black "></div>
      <div>
        <Image
          src={backgroundImage5}
          width={1000}
          height={1000}
          alt="bg"
          className=" w-full h-full object-cover relative bottom-60 z-0 parallax-img"
        />
      </div>

      <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
        <Why />
        <OurServices />
      </div>
    </div>
  );
}

export default WhyAndService;
