"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../../app/fonts/IvyMode-Regular.woff" });
const secondary = localFont({ src: "./../../app/fonts/Luxca.woff" });
import backgroundImage1 from "../../../public/1.jpg";
import backgroundImage2 from "../../../public/6.jpg";
import backgroundImage3 from "../../../public/3.jpg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WorkSectionHero() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Animation setup...
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "10% 20%",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "play none none reverse",
            pin: true,
          },
        });

        timeline.to(".our-projects-title", {
          y: 0,
          duration: 0.8,
          ease: "power1.inOut",
        });

        timeline
          .to(
            ".our-projects-description",
            {
              y: 0,
              duration: 1,
              ease: "power1.inOut",
            },
            "-=0.5"
          )
          .to(
            "button",
            {
              opacity: 1,
              duration: 0.8,
              ease: "power1.inOut",
            },
            "-=0.5"
          );

        const scrubTl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top center", // Start rotation before the ref reaches the viewport
            end: "center center", // End after it leaves the viewport
            markers: true, // Enable markers for debugging
            scrub: true, // Scrub smoothly based on scroll position
          },
        });

        // Set initial perspective and rotation
        gsap.set(".project-image-container", { perspective: 600 });
        gsap.set(".project-image-1", { rotateY: -90, y: 40 });
        gsap.set(".project-image-2", { rotateY: -90, y: 30 });
        gsap.set(".project-image-3", { rotateY: -90, y: 30 });

        // Define the first half of the rotation (rotate to 0 when reaching the middle)
        scrubTl
          .to(".project-image-1", {
            y: 0,
            rotateY: 0,

            duration: 2,
            ease: "power1.inOut",
          })
          .to(
            ".project-image-2",
            {
              y: 0,
              rotateY: 0,

              duration: 2,
              ease: "power1.inOut",
            },
            "-=1.6"
          )
          .to(
            ".project-image-3",
            {
              y: 0,
              rotateY: 0,

              duration: 2,
              ease: "power1.inOut",
            },
            "-=1.3"
          );

        // Define the second half (rotate to 90 degrees after leaving the viewport)
      }, ref); // Pass the reference to the context scope

      // Cleanup on component unmount
      return () => ctx.revert();
    },
    { scope: ref }
  );
  return (
    <section
      ref={ref}
      className="relative h-screen w-full  flex justify-between items-start work-section-hero p-14  2xl:p-20 z-0"
    >
      <div className="flex-1 flex justify-between h-full items-center flex-col  ">
        <div>
          <div className="overflow-hidden pb-4">
            <h1
              className={`${myFont.className} md:pt-10 2xl:pt-0 text-8xl 2xl:text-9xl z-30 our-projects-title md:translate-y-[110%] 2xl:translate-y-[101%]`}
            >
              Our Projects
            </h1>
          </div>

          <button
            className={`${myFont.className} text-black rounded-3xl border border-black  px-4 py-2 font-bold mt-10 opacity-0`}
          >
            See all projects
          </button>
        </div>

        <div className="overflow-hidden mb-20">
          <h1
            className={`${secondary.className} text-2xl 2xl:text-3xl font-semibold our-projects-description translate-y-full`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eum dolores sapiente illum ab! Optio exercitationem commodi
            repudiandae iusto nihil. Rem aliquam sed ratione vero deserunt
            necessitatibus minima fugit sequi.
          </h1>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center flex-col mt-10 relative md:left-10 xl:left-0 2xl:left-10 z-0 md:pr-10 xl:pr-0">
        <div className="flex ">
          <div className="md:h-60 xl:h-72 2xl:h-80  mr-10 rounded-md project-image-container ">
            <Image
              src={backgroundImage2}
              width={500}
              height={500}
              alt=""
              className="h-full w-full rounded-md project-image-1 object-cover"
            />
          </div>
          <div className="w-60  rounded-md project-image-container">
            <Image
              src={backgroundImage1}
              width={500}
              height={500}
              alt=""
              className="h-full w-full rounded-md object-cover project-image-2"
            />
          </div>
        </div>
        <div className="md:w-64 md:mt-6 xl:w-64 2xl:w-72  mr-32 rounded-md  project-image-container">
          <Image
            src={backgroundImage3}
            width={500}
            height={500}
            alt=""
            className="h-full w-full rounded-md object-cover project-image-3"
          />
        </div>
      </div>
    </section>
  );
}

export default WorkSectionHero;
