import React from "react";
import SingleProject from "@/components/SingleProjectPage/SingleProject";
import { Projects } from "@/libs/constants";

function Page({ params }: { params: { project: string } }) {
  const project = Projects.find((project) => project.slug === params.project);

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <SingleProject
      title={project.title}
      caption={project.caption}
      about={project.about}
      services={project.services}
      description1={project.description1}
      description2={project.description2}
      bannerImageDesktop={project.bannerImageDesktop}
      bannerImageMobile={project.bannerImageMobile}
      aboutImage1={project.aboutImage1}
      aboutImage2={project.aboutImage2}
      marqueImage={project.marqueeImage}
      btsImages={project.btsImages}
      // mobileVideos={project.mobileVideos} // Default to an empty array if not provided
    />
  );
}

export default Page;
