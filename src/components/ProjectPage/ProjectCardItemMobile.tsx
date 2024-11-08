import React from "react";
import Image from "next/image";
import TransitionLink from "@/libs/TransitionLink";
import { cn } from "@/libs/util";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  services: string[];
  link: string;
  primaryClassName: string;
  secondaryClassName: string;
  className?: string;
}

const ProjectCardItemMobile: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  subtitle,
  services,
  link,
  primaryClassName,
  secondaryClassName,
  className,
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 w-full h-screen flex justify-between items-center flex-col bg-green-200 p-4",
        className
      )}
    >
      <div className="w-full h-1/2">
        <Image
          src={imageUrl}
          alt={`${title} project card`}
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-4 pb-10">
        <h1
          className={`${primaryClassName} text-4xl text-white text-center w-full`}
        >
          {title}
        </h1>
        <h1
          className={`${secondaryClassName} text-2xl 2xl:text-7xl text-center  text-white/70`}
        >
          {subtitle}
        </h1>
        <div className="text-base text-center flex flex-col text-white/70">
          {services.map((service, index) => (
            <h1 key={index}>{service}</h1>
          ))}
        </div>
        <TransitionLink
          className="bg-black text-white py-4 px-6 rounded-3xl"
          href={link}
        >
          See The Project
        </TransitionLink>
      </div>
    </div>
  );
};

export default ProjectCardItemMobile;
