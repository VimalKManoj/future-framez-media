"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "../styles.css";
import ProjectCardItem from "./ProjectCardItem";
import Footer from "../LandingPage/Footer";

function ProjectCard() {
  const projectCardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: projectCardRef.current, // Trigger based on the parent scroll position
            start: "top top", // Start when the top of the parent is at 80% of the viewport height
            end: "+=800%", // End when the bottom of the parent reaches the center
            scrub: true, // Smoothly animate as you scroll
          },
        });

        timeline
          .to(".two", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".two .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )

          .to(".three", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".three .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".four", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".four .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".five", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".five .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".six", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".six .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".seven", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".seven .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".eight", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".eight .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".nine", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".nine .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          )
          .to(".ten", {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            duration: 10,
          })
          .fromTo(
            ".ten .project-image-card",
            { scale: 1.3, transformOrigin: "center" },
            { scale: 1, duration: 10 },
            "<"
          );

        // Animate the card appearance
      }, projectCardRef);

      return () => ctx.revert(); // Cleanup on unmount
    },
    { scope: projectCardRef }
  );

  return (
    <>
      <div className="hidden md:block md:h-[950vh] w-full">
        <div
          className="w-full h-screen bg-[#BFCCD8] sticky top-0 z-10 project-card-1 flex flex-col items-center justify-center"
          ref={projectCardRef}
        >
          <ProjectCardItem
            name={"11grams"}
            src={"/projects/11grams_1.jpg"}
            category="Furniture"
            services="Design / Illustration / Videography"
            slug="11grams"
          />
          <div className="w-full h-screen bg-[#8C6E5D] absolute top-0 z-10 project-cards two flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Art Legends"}
              src={"/projects/Art_legends_1.jpg"}
              category="Furniture"
              services="Design / Illustration / Videography"
              className="text-[#d3c5be]"
              slug="art-legends"
            />
          </div>
          <div className="w-full h-screen bg-blue-300 absolute top-0 z-10 project-cards three flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Menswear"}
              src={"/projects/menswear_1.jpg"}
              category="Tourism"
              services="Design / Illustration / Videography"
              slug="menswear"
            />
          </div>{" "}
          <div className="w-full h-screen bg-slate-50 absolute top-0 z-10 project-cards four flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Lehanga"}
              src={"/projects/Lehanga_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="lehanga"
            />
          </div>
          <div className="w-full h-screen bg-red-500 absolute top-0 z-10 project-cards five flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Calender"}
              src={"/projects/Calender_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="calender"
            />
          </div>
          <div className="w-full h-screen bg-green-500 absolute top-0 z-10 project-cards six flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Forest Touch"}
              src={"/projects/Forest_touch_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="forest-touch"
            />
          </div>
          <div className="w-full h-screen bg-amber-400 absolute top-0 z-10 project-cards seven flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"High Fashion"}
              src={"/projects/High_fashion_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="high-fashion"
            />
          </div>
          <div className="w-full h-screen bg-orange-700 absolute top-0 z-10 project-cards eight flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Makeup"}
              src={"/projects/Makeup_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="makeup"
            />
          </div>
          <div className="w-full h-screen bg-orange-700 absolute top-0 z-10 project-cards nine flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"SMA"}
              src={"/projects/SMA_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="sma"
            />
          </div>
          <div className="w-full h-screen bg-orange-700 absolute top-0 z-10 project-cards ten flex flex-col items-center justify-center">
            <ProjectCardItem
              name={"Umber"}
              src={"/projects/Umber_1.jpg"}
              category="Sports"
              services="Design / Illustration / Videography"
              slug="umber"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectCard;
