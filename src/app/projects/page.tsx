import NoiseEffect from "@/components/Noise";
import ProjectsHeader from "@/components/ProjectPage/ProjectsHeader";
import React from "react";
import localFont from "next/font/local";
import ProjectCard from "@/components/ProjectPage/ProjectCard";
import Navbar from "@/components/Navbar";
import ProjectWrapper from "@/components/ProjectPage/ProjectWrapper";

const myFont = localFont({ src: "../fonts/IvyMode-Regular.woff" });
const secondary = localFont({ src: "../fonts/Luxca.woff" });

function Page() {
  return (
    <ProjectWrapper className="relative flex min-h-screen w-screen flex-col items-center justify-center  bg-black text-white ">
      <div className="fixed -top-96 left-0  h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
      <NoiseEffect />
      <ProjectsHeader />
      <Navbar />
      <ProjectCard />
    </ProjectWrapper>
  );
}

export default Page;
