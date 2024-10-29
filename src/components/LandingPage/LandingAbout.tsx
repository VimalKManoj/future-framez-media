"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../../app/fonts/IvyMode-Regular.woff" });
const secondary = localFont({ src: "./../../app/fonts/Luxca.woff" });
import backgroundImage from "../../../public/bg-1.png";
import backgroundImage2 from "../../../public/bg-2.png";
import backgroundImage3 from "../../../public/bg-3.png";
import backgroundImage4 from "../../../public/bg-4.png";
import backgroundImage5 from "../../../public/2.jpg";

gsap.registerPlugin(ScrollTrigger);

function LandingAbout() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "-20% top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        timeline
          .set(".landing-about-wrapper ", {
            perspective: 600,
          })
          .fromTo(
            ".bg-image",
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1 },
            "<"
          )
          .to(".about-us-cap", { y: 0, duration: 1.2 }, "-=.2")
          .to(".about-us-cap", { yPercent: -150, duration: 2 }, ">1")

          .to(
            ".bg-image",
            {
              scale: 0.4,
              zIndex: 30,
              rotateX: -45,
              ease: "power1.inOut",
              duration: 1,
            },
            "-=1"
          )
          .set(".bg-images-2", { rotateX: -45 }, "<")
          .to(".bg-images-2", { display: "flex ", yPercent: 100 }, "-=.4")
          .to(".bg-image", { rotateX: 0, ease: "power1.inOut" })
          .to(".bg-images-2", { rotateX: 0, ease: "power1.inOut" }, "<");

        // 2. Fade out the header after the video scales down
        gsap.to(".header", {
          yPercent: -100, // Move header upwards
          // autoAlpha: 0, // Fade out (if you want)
          duration: 1.8,
          ease: "circ.inOut",
          delay: 0.5, // Optionally delay it a bit
        });
      }, heroRef);

      return () => ctx.revert(); // Clean up GSAP context on unmount
    },
    { scope: heroRef }
  );
  return (
    <section
      ref={heroRef}
      className="relative w-screen h-[350vh]  flex flex-col justify-between items-center  "
    >
      <div className="sticky -top-0 w-screen h-screen flex justify-center items-center flex-col ">
        <div className="flex justify-center items-center absolute top-0 left-0 w-screen h-screen flex-col z-20 ">
          <div className=" w-4/5 text-center overflow-hidden ">
            <h1
              className={`text-6xl mr-20 about-us-cap translate-y-[240%] ${myFont.className} uppercase`}
            >
              Storytelling — crafted with purpose.
            </h1>
          </div>
          <div className=" w-4/5 text-center overflow-hidden ">
            <h1
              className={`${secondary.className} text-2xl mb-20 mr-20 about-us-cap translate-y-[220%] `}
            >
              we transform your brand’s unique essence into a powerful visual
              narrative that forges a deep connection with your audience.
              Through authentic storytelling and immersive design, we create
              experiences that resonate and inspire.
            </h1>
          </div>
        </div>
        <div className="landing-about-wrapper  absolute top-0 left-0 w-screen opacity-70 h-screen object-cover z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-screen h-screen object-cover z-10 overflow-hidden   bg-image">
            <Image
              src={backgroundImage}
              width={1000}
              height={1000}
              alt="bg"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-screen h-screen object-cover z-10  overflow-hidden   justify-between hidden  bg-images-2 -translate-y-full">
            <div className="flex flex-col w-1/3 h-screen gap-5 p-10 bg-group-1">
              <Image
                src={backgroundImage2}
                width={1000}
                height={1000}
                alt="bg"
                className=" relative left-32 w-full h-full object-cover "
              />
              <Image
                src={backgroundImage3}
                width={1000}
                height={1000}
                alt="bg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-100 ease-in-out  "
              />
            </div>
            <div className="flex flex-col w-1/3 h-screen gap-5 p-10 bg-group-2">
              <Image
                src={backgroundImage4}
                width={1000}
                height={1000}
                alt="bg"
                className="relative right-48 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-100 ease-in-out"
              />
              <Image
                src={backgroundImage5}
                width={1000}
                height={1000}
                alt="bg"
                className=" w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-100 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAbout;
