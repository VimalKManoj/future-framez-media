"use client";
import React, { useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import image1 from "../../../public/1.jpg";
import image2 from "../../../public/3.jpg";
import image3 from "../../../public/4.jpg";
import image4 from "../../../public/5.jpg";
import image5 from "../../../public/6.jpg";
import image6 from "../../../public/7.jpg";
import image7 from "../../../public/hero-banner-3.jpg";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../../app/fonts/Suisse_Intl_Regular.ttf" });

gsap.registerPlugin(ScrollTrigger);

const sarabun = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function LandingProjectSection() {
  const LandingProjectRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: LandingProjectRef.current,
            start: "-40% top", // Starts at 40% of viewport height
            end: "bottom -10%", // Ends at 100vh from the start of videoContainerRef
            scrub: true,
          },
        });

        timeline.to(".slider-container", {
          x: -700,
          ease: "power1.inOut",
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: LandingProjectRef.current,
              start: "top 40%",
              end: "bottom bottom",
              toggleActions: "play none none reverse",
            },
          })
          .to(".project-line", {
            scaleX: 1,
            duration: 1,
            ease: "power1.inOut",
          })
          .fromTo(
            ".text-1",
            { yPercent: 120 },
            { yPercent: 0, duration: 1 },
            "<"
          )
          .fromTo(
            ".text-2",
            { yPercent: -120 },
            { yPercent: 0, duration: 1 },
            "<"
          );

        ScrollTrigger.create({
          trigger: LandingProjectRef.current,
          start: "top 40%", // Adjust this to trigger earlier or later
          end: "bottom -40%", // Adjust this to revert earlier or later
          scrub: 1.5, // Smooth out the scroll effect, makes it more gradual
          onEnter: () => {
            gsap.to(document.documentElement, {
              backgroundColor: "white", // Change background to white
              duration: 1, // Smooth transition
              ease: "power1.inOut",
            });

            gsap.to(".project-line", {
              backgroundColor: "black",
              duration: 1,
              ease: "power1.inOut",
            });

            gsap.to(".text-1", {
              color: "black",
              duration: 1,
              ease: "power1.inOut",
            });

            gsap.to(".text-2", {
              color: "black",
              duration: 1,
              ease: "power1.inOut",
            });
          },
          onLeave: () => {
            gsap.to(document.documentElement, {
              backgroundColor: "black", // Revert background to black
              duration: 1, // Smooth transition
              ease: "power1.inOut",
            });
          },
          onEnterBack: () => {
            gsap.to(document.documentElement, {
              backgroundColor: "white", // Change background to white
              duration: 1, // Smooth transition
              ease: "power1.inOut",
            });

            gsap.to(".project-line", {
              backgroundColor: "black",
              duration: 1,
              ease: "power1.inOut",
            });

            gsap.to(".text-1", {
              color: "black",
              duration: 1,
              ease: "power1.inOut",
            });

            gsap.to(".text-2", {
              color: "black",
              duration: 1,
              ease: "power1.inOut",
            });
          },
          onLeaveBack: () => {
            gsap.to(document.documentElement, {
              backgroundColor: "black", // Revert background to black
              duration: 1, // Smooth transition
              ease: "power1.inOut",
            });
          },
        });
      }, LandingProjectRef);

      return () => ctx.revert();
    },
    { scope: LandingProjectRef }
  );
  return (
    <section
      className={`${sarabun.className} relative h-screen w-full  flex flex-col justify-around items-center   2xl:my-44 z-0`}
      ref={LandingProjectRef}
    >
      <div className="w-full mx-10">
        <div className="w-full overflow-y-hidden">
          <h1 className=" md:text-7xl xl:text-8xl 2xl:text-9xl w-full text-center relative right-24 mb-4 text-1">
            Bringing Ideas to Life Through
          </h1>
        </div>

        <div className="w-full h-px bg-white/60 project-line scale-x-0 z-40 rounded-xl" />
        <div className="w-full overflow-hidden flex justify-center items-center text-black">
          <h1 className={`pl-20 relative w-2/3 ${myFont.className}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            molestias ex iste et quia ab dolores.
          </h1>
          <h1 className="md:text-7xl xl:text-8xl 2xl:text-9xl w-full text-center mt-4 text-2">
            Creative Projects
          </h1>
        </div>
      </div>

      <div className="w-full h-1/3 flex justify-start items-center overflow-hidden ">
        <div className="w-full h-full flex justify-start items-center gap-6 slider-container">
          <Image
            src={image1}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
          <Image
            src={image2}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
          <Image
            src={image3}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
          <Image
            src={image7}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
          <Image
            src={image5}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
          <Image
            src={image6}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
          <Image
            src={image4}
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingProjectSection;
