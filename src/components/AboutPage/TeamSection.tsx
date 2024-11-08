"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import React, { useRef } from "react";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
const secondary_light = localFont({
  src: "./../../app/fonts/BlauerNue-Light.woff",
});

import localFont from "next/font/local";
import { TeamMembers } from "@/libs/constants";

function TeamSection() {
  const TeamSectionRef = useRef<HTMLDivElement | null>(null);
  const ImageRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const TeamMembers = gsap.utils.toArray(
          ".team-member-card"
        ) as HTMLElement[];

        TeamMembers.forEach((TeamMembers) => {
          gsap.timeline({
            defaults: { duration: 0.4, ease: "power1.inOut" },
          });

          const imageCard = TeamMembers.querySelector(
            ".image-card"
          ) as HTMLElement | null;
          const content = TeamMembers.querySelector(
            ".content"
          ) as HTMLElement | null;
          const name = TeamMembers.querySelector(".name") as HTMLElement | null;
          // Ensure primary and secondary elements exist
          if (imageCard && content) {
            // Ensure the initial state is set directly
            gsap.set(imageCard, {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              y: "10px",
            });
            gsap.set(content, {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", // Corrected to make it open from bottom to top
            });
            // Create the hover animation timeline
            const TeamTl = gsap.timeline({ paused: true });

            TeamTl.to(
              imageCard,
              {
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", // Corrected to make it open from bottom to top
                y: "0px",
                rotate: "-10deg",
                duration: 0.4,
                ease: "power1.inOut",
              },
              "start"
            )
              .to(
                content,
                {
                  clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", // Corrected to make it open from bottom to top
                  duration: 0.4,
                  ease: "power1.inOut",
                },
                "start"
              )
              .to(
                name,
                {
                  x: 20,
                  duration: 0.4,
                  ease: "power1.inOut",
                },
                "start"
              );

            TeamTl.pause(); // Pause the timeline initially

            // Add mouseenter and mouseleave event listeners
            TeamMembers.addEventListener("mouseenter", () => {
              TeamTl.play(); // Play the timeline on hover
            });

            TeamMembers.addEventListener("mouseleave", () => {
              TeamTl.reverse(); // Reverse the timeline on hover out
            });
          }
        });
      }, TeamSectionRef); // Use linksRef for scoping

      // Cleanup on unmount
      return () => ctx.revert();
    },
    { scope: TeamSectionRef }
  );

  useGSAP(
    () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ImageRef.current,
              start: "15% center", // Starts at 40% of viewport height
              end: "bottom center", // Ends at 100vh from the start of videoContainerRef
              scrub: true,
              toggleActions: "play none none reverse",
            },
          });

          timeline.to(".team-photo", {
            objectPosition: "100% center",
            ease: "power1.inOut",
            duration: 8,
          });
        }, ImageRef);

        return () => ctx.revert();
      }
    },
    { scope: ImageRef }
  );

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center pb-10 select-none"
      ref={TeamSectionRef}
    >
      <div className="relative w-full h-screen flex flex-col justify-start items-center  ">
        <h1
          className={`${primary.className} text-center md:text-left text-3xl md:text-6xl 2xl:text-6xl mt-10 z-20 `}
        >
          The Great minds behind our works
        </h1>
        <div
          className="w-full h-full  team-banner absolute top-0 left-0 z-0 "
          ref={ImageRef}
        >
          <Image
            src="/team/team.jpg"
            alt="team-banner"
            width={2000}
            height={2000}
            className="w-full h-full object-cover team-photo object-left md:object-center bottom-10 "
          />
        </div>
      </div>
      <div className="">
        <h1
          className={`${primary.className} text-center md:text-left text-3xl md:text-6xl 2xl:text-6xl mt-10`}
        >
          Meet our team Members
        </h1>
        <h1
          className={`${secondary_light.className} md:text-2xl 2xl:text-2xl my-10 text-center md:text-left `}
        >
          Dreamers, Artists, Film buffs, and Fashion enthusiasts{" "}
          <br className="hidden md:block" /> amalgamated to one singular force
          of vision.
        </h1>
      </div>

      {TeamMembers.map((member) => (
        <TeamMemberCard key={member.id} {...member} />
      ))}
    </div>
  );
}

export default TeamSection;

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
};

const TeamMemberCard = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="relative w-full md:w-3/4 md:h-12 flex flex-col md:flex-row justify-between items-center border-b border-black first:border-t team-member-card cursor-pointer select-none">
      <h1 className={`md:ml-32 ${secondary.className} text-2xl my-4`}>
        {name}
      </h1>
      <h1 className="md:mr-32 my-2">{role}</h1>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-center z-10 md:w-44 h-44 md:h-56 2xl:w-52 2xl:h-64 image-card shadow-xl">
        <Image
          src={image}
          alt="team-member"
          width={400}
          height={400}
          className=" object-cover  w-full h-full border "
        />
      </div>
      <div className="absolute w-full h-full flex justify-between items-center bg-black z-0  content">
        <h1
          className={`md:ml-32 ${secondary.className} md:text-2xl text-white name`}
        >
          {name}
        </h1>
        <h1 className="md:ml-32   text-white">{role}</h1>
      </div>
    </div>
  );
};
