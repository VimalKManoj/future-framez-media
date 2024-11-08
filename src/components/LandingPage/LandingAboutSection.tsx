"use client";
import Image from "next/image";
import React, { useRef } from "react";
import image1 from "../../../public/projects/11grams/project_1.png";
import image2 from "../../../public/projects/Forest.jpg";
import image3 from "../../../public/4.jpg";
import image4 from "../../../public/5.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Button from "../Button";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });

gsap.registerPlugin(ScrollTrigger);

function LandingAboutSection() {
  const AboutSectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: AboutSectionRef.current,
              start: "top top", // Starts at 40% of viewport height
              end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
              scrub: true,
            },
          });

          timeline
            .to(".card-one", { rotate: 5, duration: 1 })
            .to(".card-two", { rotate: -6, duration: 1 }, "+=2.5")
            .to(".card-three", { rotate: 7, duration: 1 }, "+=2.5")
            .to(".card-four", { rotate: -4, duration: 1 }, "+=2.5");
        }, AboutSectionRef);

        return () => ctx.revert();
      }
    },
    { scope: AboutSectionRef }
  );

  return (
    <div
      className="flex w-screen h-full justify-between items-center"
      ref={AboutSectionRef}
    >
      {/* Parent div -total height */}
      <div className="relative h-[500vh] w-full md:w-1/2  flex flex-col items-center justify-between">
        {/* Sticky Sections */}
        <div className="sticky top-10 md:top-20 w-full h-screen flex justify-around items-center flex-col mb-72 card-one">
          <div className="h-4/6 md:h-5/6 w-5/6 md:w-2/3 bg-green-200 overflow-hidden">
            <Image
              src={image1}
              alt="bg"
              className="h-full object-cover w-full "
              priority={true}
              loading="eager"
            />
          </div>
          <Button
            placeholder={"See All Projects"}
            className="mt-20 md:hidden"
            href="/projects"
          />
        </div>
        <div className="sticky  top-10 md:top-20 w-full h-screen flex justify-around items-center flex-col  mb-72 card-two">
          <div className="h-4/6 md:h-5/6 w-5/6 md:w-2/3 bg-green-200 overflow-hidden">
            <Image
              src={image4}
              alt="bg"
              className="h-full object-cover w-full "
              priority={true}
              loading="eager"
            />
          </div>
          <div className="h-36 w-full md:hidden"></div>
        </div>
        <div className="sticky  top-10 md:top-20  w-full h-screen flex justify-around items-center flex-col  mb-72 card-three">
          <div className="h-4/6 md:h-5/6 w-5/6 md:w-2/3 bg-green-200 overflow-hidden">
            <Image
              src={image3}
              alt="bg"
              className="h-full  object-cover w-full "
              priority={true}
              loading="eager"
            />
          </div>
          <div className="h-24 w-full md:hidden"></div>
        </div>
        <div className="sticky top-10 md:top-20 w-full h-screen flex justify-around items-center flex-col  mb-72 card-four">
          <div className="h-4/6 md:h-5/6 w-5/6 md:w-2/3 bg-green-200 overflow-hidden">
            <Image
              src={image2}
              alt="bg"
              className="h-full object-cover w-full "
              priority={true}
              loading="eager"
            />
          </div>
          <div className="h-10 w-full md:hidden"></div>
        </div>
      </div>
      <div className="hidden md:flex relative h-[450vh] w-1/2  flex-col items-center justify-between">
        {" "}
        <div className="sticky top-20 w-full  h-screen flex justify-center items-start flex-col ">
          <h1
            className={`text-3xl md:text-6xl 2xl:text-7xl ${primary.className}`}
          >
            Bringing Ideas to Life Through Creative Projects
          </h1>
          <Button
            placeholder={"See All Projects"}
            className="mt-20"
            href="/projects"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingAboutSection;
