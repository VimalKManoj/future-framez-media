"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./styles.css";
import ProjectCardItem from "./ProjectCardItem";

function ProjectCard() {
  const projectCardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: projectCardRef.current, // Trigger based on the parent scroll position
            start: "top top", // Start when the top of the parent is at 80% of the viewport height
            end: "+=200%", // End when the bottom of the parent reaches the center
            scrub: true, // Smoothly animate as you scroll
            markers: true,
          },
        });
        // gsap.set(".project-card-1 .project-image-card", {
        //   clipPath: " polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        // });
        timeline
          .to(".two", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .to(
            ".two .project-image-card",
            {
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power1.inOut",
              duration: 10,
            },
            "-=9"
          )
          .to(".three", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .to(
            ".three .project-image-card",
            {
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power1.inOut",
              duration: 10,
            },
            "-=9"
          )
          .to(".four", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .to(
            ".four .project-image-card",
            {
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power1.inOut",
              duration: 10,
            },
            "-=9"
          );

        // Animate the card appearance
      }, projectCardRef);

      return () => ctx.revert(); // Cleanup on unmount
    },
    { scope: projectCardRef }
  );

  return (
    <div className="h-[500vh] w-full">
      <div
        className="w-full h-screen bg-[#BFCCD8] sticky top-0 z-10 project-card-1 flex flex-col items-center justify-center"
        ref={projectCardRef}
      >
        <ProjectCardItem
          name={"Urban Ladder"}
          src={"/bg-4.png"}
          category="Furniture"
          services="Design / Illustration / Videography"
        />
        <div className="w-full h-screen bg-red-100 absolute top-0 z-10 project-cards two flex flex-col items-center justify-center">
          <ProjectCardItem
            name={"Umber"}
            src={"/bg-3.png"}
            category="Furniture"
            services="Design / Illustration / Videography"
          />
        </div>
        <div className="w-full h-screen bg-blue-300 absolute top-0 z-10 project-cards three flex flex-col items-center justify-center">
          <ProjectCardItem
            name={"Moksha"}
            src={"/bg-1.png"}
            category="Tourism"
            services="Design / Illustration / Videography"
          />
        </div>{" "}
        <div className="w-full h-screen bg-slate-50 absolute top-0 z-10 project-cards four flex flex-col items-center justify-center">
          <ProjectCardItem
            name={"Cult"}
            src={"/bg-2.png"}
            category="Sports"
            services="Design / Illustration / Videography"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
