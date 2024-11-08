import localFont from "next/font/local";

import React from "react";
import ProjectCardItemMobile from "./ProjectCardItemMobile";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});

function ProjectCardMobile() {
  return (
    <div className="md:hidden flex w-screen h-full justify-between items-center">
      {/* Parent div -total height */}
      <div className="relative h-[700vh] w-full  flex flex-col items-center justify-between">
        {/* Sticky Sections */}
        <ProjectCardItemMobile
          imageUrl="/projects/High_fashion_1.jpg"
          title="Fashion"
          subtitle="Fashion Photography"
          services={["Campaign", "Advertisement", "Editorial", "Catalogue"]}
          link="/projects/fashion"
          primaryClassName={primary.className}
          secondaryClassName={secondary.className}
          className="bg-[#4E4E4E] text-white"
        />
        <ProjectCardItemMobile
          imageUrl="/projects/11grams_1.jpg"
          title="11grams"
          subtitle="Product Photography"
          services={["Photography", "Videography"]}
          link="/projects/11grams"
          primaryClassName={primary.className}
          secondaryClassName={secondary.className}
          className="bg-[#254f30]"
        />{" "}
        <ProjectCardItemMobile
          imageUrl="/projects/Umber_1.jpg"
          title="Umber"
          subtitle="Furniture Photography"
          services={["Catalogue", "Editorial", "Product Videos"]}
          link="/projects/umber"
          primaryClassName={primary.className}
          secondaryClassName={secondary.className}
          className="bg-[#43322C]"
        />{" "}
        <ProjectCardItemMobile
          imageUrl="/projects/Calender_1.jpg"
          title="Forest Touch Calendar"
          subtitle="Artistry Amidst Adversity"
          services={["Campaign", "Music Production", "Costume Design"]}
          link="/projects/calendar"
          primaryClassName={primary.className}
          className="bg-gray-700 text"
          secondaryClassName={secondary.className}
        />{" "}
        <ProjectCardItemMobile
          title={"Forest Touch"}
          imageUrl="/projects/Forest_touch_1.jpg"
          subtitle="The essence of Nature’s finest"
          services={[
            "Branding",
            "Social Media Management",
            "Website Development",
            "Marketing Strategy",
          ]}
          link="/projects/forest-touch"
          primaryClassName={primary.className}
          secondaryClassName={secondary.className}
          className="bg-[#43322C]"
        />
        <ProjectCardItemMobile
          title={"Urban Ladder"}
          imageUrl="/projects/urban_ladder/2.jpg"
          subtitle="Design Meets Storytelling"
          services={["Product Photography", "Videography"]}
          link="/projects/urban-ladder"
          primaryClassName={primary.className}
          secondaryClassName={secondary.className}
          className="bg-[#91756b]"
        />
        <ProjectCardItemMobile
          title={"Art Legends"}
          imageUrl="/projects/art_legends/2.jpg"
          subtitle="Spaces Transformed into Art"
          services={[
            "Product Photography",
            "Catalogue",
            "Editorial",
            "Lifestyle",
          ]}
          link="/projects/art-legends"
          primaryClassName={primary.className}
          secondaryClassName={secondary.className}
          className="bg-[#a58b81]"
        />
      </div>
    </div>
  );
}

export default ProjectCardMobile;
