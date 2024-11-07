"use client";
import React, { useRef } from "react";
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
import TransitionLink from "@/libs/TransitionLink";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});

gsap.registerPlugin(ScrollTrigger);



function LandingProjectSection() {
  const LandingProjectRef = useRef<HTMLDivElement | null>(null);
  const ProjectButtonRef = useRef<HTMLDivElement | null>(null);

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
          end: "bottom -15%", // Adjust this to revert earlier or later
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

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const button = document.querySelector(".project-button");

        if (button) {
          const ButtonTl = gsap.timeline({ paused: true });

          ButtonTl.set(".project-button-line", {
            transformOrigin: "left",
            scaleX: 0,
          });

          ButtonTl.to(".project-button-line", {
            scaleX: 1,
            duration: 0.4,
            ease: "power4.inOut",
          });

          ButtonTl.pause();

          button.addEventListener("mouseenter", () => {
            ButtonTl.play();
          });

          button.addEventListener("mouseleave", () => {
            ButtonTl.reverse();
          });
        }
      });

      return () => ctx.revert();
    },
    { scope: ProjectButtonRef }
  );

  return (
    <section
      className={`${primary.className} relative h-screen w-full  flex flex-col justify-around items-center my-52 2xl:mt-52  2xl:my-44 z-0`}
      ref={LandingProjectRef}
    >
      <div className="w-full ">
        <div className="w-full overflow-y-hidden">
          <h1 className="text-3xl md:text-6xl 2xl:text-7xl w-full px-10 md:px-20 xl:px-28 text-center md:text-left  md:mb-4 text-1">
            Bringing Ideas to Life Through
          </h1>
        </div>

        <div className="w-full h-px bg-white/60 project-line scale-x-0 z-40 rounded-xl " />
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-center text-black px-8 md:px-20 xl:px-28   md:mb-0">
          <h1
            className={`text-2xl md:w-2/3 ${secondary.className} order-2 md:order-1 mt-4`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            molestias ex iste et quia ab dolores.
          </h1>
          <h1
            className="text-2 text-3xl md:text-6xl 2xl:text-7xl  w-full text-right mt-4 text-2 md:order-2 pb-10 "
            ref={ProjectButtonRef}
          >
            Creative{" "}
            <TransitionLink
              href="/projects"
              className="relative project-button cursor-pointer "
            >
              Projects{" "}
              <span className="project-button-line absolute -bottom-5 left-0 w-full h-px bg-black scale-x-0 origin-left" />
            </TransitionLink>
          </h1>
        </div>
      </div>

      <div className="w-full h-1/4 md:h-1/3 flex justify-start items-center overflow-hidden ">
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
