import React from "react";
import Image from "next/image";

import { Projects } from "@/libs/constants";
import Button from "../Button";
import localFont from "next/font/local";
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});

interface NextProjectProps {
  currentProjectSlug: string;
}

const NextProject: React.FC<NextProjectProps> = ({ currentProjectSlug }) => {
  // Filter out the current project from the list
  const filteredProjects = Projects.filter(
    (project) => project.slug !== currentProjectSlug
  );

  // Get a random project from the remaining projects
  const randomProject =
    filteredProjects[Math.floor(Math.random() * filteredProjects.length)];

  if (!randomProject) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-8">
      <h2 className={`${secondary.className} text-3xl font-semibold mb-4`}>
        Next Project
      </h2>
      <div className="w-1/2 max-w-md">
        <Image
          src={randomProject.bannerImageDesktop}
          alt={`${randomProject.title} banner`}
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <h3 className={`${secondary.className} text-2xl mt-4`}>
        {randomProject.title}
      </h3>
      <Button
        href={`/projects/${randomProject.slug}`}
        className="mt-4"
        placeholder="View Project"
      />
    </div>
  );
};

export default NextProject;
