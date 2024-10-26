import React from "react";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";

const sarabun = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function LandingProjectSection() {
  return (
    <section
      className={`${sarabun.className} relative h-screen w-full  flex flex-col justify-center items-center  z-0`}
    >
      <h1 className="text-9xl relative right-44 ">Bringing Ideas to </h1>
      <h1 className="text-9xl relative left-44 my-10"> Life Through</h1>
      <h1 className="text-9xl relative right-36">Creative Projects</h1>
    </section>
  );
}

export default LandingProjectSection;
