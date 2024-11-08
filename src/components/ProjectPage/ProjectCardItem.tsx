"use client";
import Image from "next/image";
import React, { useRef } from "react";
import localFont from "next/font/local";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
import { cn } from "@/libs/util";
import TransitionLink from "@/libs/TransitionLink";

type ProjectCardItemProps = {
  name: string;
  src: string;
  category: string;
  services: string;
  className?: string;
  classNameCategory?: string;
  slug: string;
};

function ProjectCardItem({
  className,
  classNameCategory,
  name,
  src,
  category,
  services,
  slug,
}: ProjectCardItemProps) {
  const projectCardItemRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className={cn(
        "relative h-full w-full text-7xl text-black flex flex-col items-center justify-between px-20 overflow-hidden",
        className
      )}
      ref={projectCardItemRef}
    >
      <h1 className={`${primary.className} mt-24 z-10`}>{name}</h1>
      <div className="flex w-full h-1/2 items-center justify-between pb-60 z-10">
        <h1
          className={cn(
            `${secondary.className} text-5xl 2xl:text-7xl opacity-70 w-1/3`,
            classNameCategory
          )}
        >
          {category}
        </h1>
        <div
          className={`flex items-end text-right justify-between flex-col w-1/3 ${secondary.className}`}
        >
          <h1 className="text-xl">{services}</h1>
          <div className="relative mt-10 ">
            <TransitionLink
              href={`/projects/${slug}`}
              className={cn(
                `${secondary.className} text-lg  px-7 py-4 border  rounded-3xl hover:bg-black hover:text-white trasition-all duration-300`,
                className
              )}
            >
              See The Project
            </TransitionLink>
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full project-image-card z-0">
        <Image
          src={src}
          alt={"project-card-item"}
          className="w-full h-full object-cover object-top project-image-card"
          width={1500}
          height={1500}
        />
      </div>
    </div>
  );
}

export default ProjectCardItem;
