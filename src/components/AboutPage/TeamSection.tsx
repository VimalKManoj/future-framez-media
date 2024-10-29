"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import React, { useRef } from "react";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TeamMembers = [
  {
    id: 1,
    name: "S. Suresh Suryavanshi",
    role: "Chief Executive Officer",
    image: "/team/surya.jpg",
  },
  {
    id: 2,
    name: "Ashwinth Kumar",
    role: "Head of communications",
    image: "/team/ashwinth.jpg",
  },
  {
    id: 3,
    name: "Shreejith Shashi",
    role: "Head of Production and Creative",
    image: "/team/sreejith.jpg",
  },
  {
    id: 4,
    name: "Milan K Manoj",
    role: "Creative Director",
    image: "/team/milan.jpg",
  },
  {
    id: 5,
    name: "Diwakar Chavan",
    role: "Head of Digital Marketing",
    image: "/team/divakar.jpg",
  },
  {
    id: 6,
    name: "Nishita Mariam George",
    role: "Stylist",
    image: "/team/nisitha.jpg",
  },
  {
    id: 7,
    name: "Varun Kaladharan",
    role: "Cinematographer",
    image: "/team/varun.jpg",
  },
  {
    id: 8,
    name: "Sharath Raam",
    role: "Creative Director",
    image: "/team/sharath.jpg",
  },
  {
    id: 9,
    name: "Tanya Bhatnagar",
    role: "Production Manager",
    image: "/team/tanya.jpg",
  },
  {
    id: 10,
    name: "Rahul Kuttappy",
    role: "Editor",
    image: "/team/rahul.jpg",
  },
  {
    id: 11,
    name: "Rohit Baburaj",
    role: "Photographer",
    image: "/team/rohith.jpg",
  },
  {
    id: 12,
    name: "Kavana",
    role: "Business Developer",
    image: "/team/kavana.jpg",
  },
];

function TeamSection() {
  const TeamSectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const TeamMembers = gsap.utils.toArray(
          ".team-member-card"
        ) as HTMLElement[];

        TeamMembers.forEach((TeamMembers) => {
          const TeamTl = gsap.timeline({
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
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center p-10"
      ref={TeamSectionRef}
    >
      <h1 className={`${bebas.className} text-7xl 2xl:text-7xl mb-10`}>
        The Great minds behind our works
      </h1>
      <div className="w-2/3 h-full  team-banner">
        <Image
          src="/team/team.jpg"
          alt="team-banner"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className={`${bebas.className} text-7xl 2xl:text-7xl mb-10`}>
        Meet our team Members
      </h1>
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
    <div className="relative w-3/4 h-12 flex justify-between items-center border-b border-black first:border-t team-member-card cursor-pointer">
      <h1 className={`ml-32 ${bebas.className} text-2xl`}>{name}</h1>
      <h1 className="mr-32 ">{role}</h1>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-center z-10 w-52 h-64 image-card shadow-xl">
        <Image
          src={image}
          alt="team-member"
          width={400}
          height={400}
          className=" object-cover  w-full h-full border "
        />
      </div>
      <div className="absolute w-full h-full flex justify-between items-center bg-black z-0  content">
        <h1 className={`ml-32 ${bebas.className} text-2xl text-white name`}>
          {name}
        </h1>
        <h1 className="mr-32   text-white">{role}</h1>
      </div>
    </div>
  );
};
