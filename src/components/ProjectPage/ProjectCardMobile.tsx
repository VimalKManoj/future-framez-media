import Image from "next/image";
import React from "react";

function ProjectCardMobile() {
  return (
    <div className="md:hidden flex w-screen h-full justify-between items-center">
      {/* Parent div -total height */}
      <div className="relative h-[500vh] w-full  flex flex-col items-center justify-between">
        {/* Sticky Sections */}
        <div className="sticky top-0 w-full h-screen flex justify-between items-center flex-col bg-green-200 p-4">
          <div className="w-full h-1/2">
            <Image
              src="/projects/11grams_1.jpg"
              alt="project card"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-1/2 flex flex-col justify-around items-center">
            <h1 className="text-2xl font-bold">11grams</h1>
            <p className="text-sm text-center"></p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              SEE THE PROJECT
            </button>
          </div>
          <div></div>
        </div>
        <div className="sticky  top-0  w-full h-screen flex justify-around items-center flex-col bg-red-200 ">
          Bai
        </div>
        <div className="sticky  top-0   w-full h-screen flex justify-around items-center flex-col bg-blue-200  ">
          Kooi
        </div>
        <div className="sticky top-0  w-full h-screen flex justify-around items-center flex-col bg-yellow-200 "></div>
        <div className="sticky top-0  w-full h-screen flex justify-around items-center flex-col bg-yellow-200 "></div>
      </div>
    </div>
  );
}

export default ProjectCardMobile;
