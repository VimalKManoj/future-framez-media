import NoiseEffect from "@/components/Noise";
import ProjectsHeader from "@/components/ProjectPage/ProjectsHeader";
import React from "react";
import ProjectCard from "@/components/ProjectPage/ProjectCard";
import ProjectWrapper from "@/components/ProjectPage/ProjectWrapper";
import HeaderNav from "@/components/HeaderNav";
import ProjectCardMobile from "@/components/ProjectPage/ProjectCardMobile";
import MobileNavBar from "@/components/MobileHeader";

function Page() {
  return (
    <ProjectWrapper className="relative flex min-h-screen w-screen flex-col items-center justify-center  bg-white text-white ">
      <div className="fixed -top-96 left-0  h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
      <NoiseEffect />
      <HeaderNav />
      <MobileNavBar />
      <ProjectsHeader />
      <ProjectCardMobile />
      <ProjectCard />
    </ProjectWrapper>
  );
}

export default Page;

// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import NoiseEffect from "@/components/Noise";
// import ProjectsHeader from "@/components/ProjectPage/ProjectsHeader";
// import ProjectWrapper from "@/components/ProjectPage/ProjectWrapper";
// import HeaderNav from "@/components/HeaderNav";

// // Dynamically import ProjectCard and ProjectCardMobile without server-side rendering
// const ProjectCard = dynamic(() => import("@/components/ProjectPage/ProjectCard"), { ssr: false });
// const ProjectCardMobile = dynamic(() => import("@/components/ProjectPage/ProjectCardMobile"), { ssr: false });

// function Page() {
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Set isDesktop based on the window width on initial mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsDesktop(window.innerWidth >= 1024); // 1024px as breakpoint for desktop
//     }
//   }, []);

//   return (
//     <ProjectWrapper className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-white text-white">
//       <div className="fixed -top-96 left-0 h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
//       <NoiseEffect />
//       <HeaderNav />
//       <ProjectsHeader />
//       {/* Render either the desktop or mobile component based on isDesktop */}
//       {isDesktop ? <ProjectCard /> : <ProjectCardMobile />}
//     </ProjectWrapper>
//   );
// }

// export default Page;
