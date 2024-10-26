"use client";
import Image from "next/image";
import React, { useRef } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../app/fonts/IvyMode-Regular.woff" });
const secondary = localFont({ src: "./../app/fonts/Luxca.woff" });
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type ProjectCardItemProps = {
  name: string;
  src: string;
  category: string;
  services: string;
};

function ProjectCardItem({
  name,
  src,
  category,
  services,
}: ProjectCardItemProps) {
  const projectCardItemRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="relative h-full w-full text-8xl text-black flex flex-col items-center justify-between px-20"
      ref={projectCardItemRef}
    >
      <h1 className={`${myFont.className} mt-24 `}>{name}</h1>
      <div className="flex w-full h-1/2 items-center justify-between pb-60">
        <h1 className={`${secondary.className} text-9xl text-black/20`}>
          {category}
        </h1>
        <h1 className="text-xl">{services}</h1>
      </div>
      <div className="absolute bottom-0 w-[27rem] h-[37rem] pt-32 project-image-card">
        <Image
          src={src}
          alt={"project-card-item"}
          className="w-full h-full object-cover"
          width={500}
          height={600}
        />
      </div>
    </div>
  );
}

export default ProjectCardItem;
