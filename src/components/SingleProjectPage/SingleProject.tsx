import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Marque from "@/components/Marquee/Marque";
import HeaderNav from "@/components/HeaderNav";
import { cn } from "@/libs/util";
import MobileNavBar from "../MobileHeader";

const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
const secondary_light = localFont({
  src: "./../../app/fonts/BlauerNue-Light.woff",
});

type ProjectPageProp = {
  className?: string;
  title: string;
  caption: string;
  about: string;
  services: string[];
  description1?: string;
  description2?: string;
  bannerImageDesktop: string;
  bannerImageMobile: string;
  aboutImage1: string;
  aboutImage2: string;
  marqueImage: string[];
  btsImages?: string[];
  mobileVideos?: string[];
  desktopVideos?: string[];
};

function SingleProject({
  title,
  caption,
  about,
  className,
  services,
  description1,
  description2,
  bannerImageDesktop,
  bannerImageMobile,
  aboutImage1,
  aboutImage2,
  marqueImage,
  btsImages,
  mobileVideos,
  desktopVideos,
}: ProjectPageProp) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-screen flex-col items-center justify-center text-white ",
        className,
        title === "Fashion" ? "bg-[#4E4E4E]" : "",
        title === "Forest Touch Calendar" ? "bg-[#fff9e8] text-gray-900" : "",
        title === "Umber" ? "bg-[#43322C]" : "",
        title === "Forest Touch" ? "bg-[#43322C]" : "",
        title === "Urban Ladder" ? "bg-[]" : "",
        title === "Art Legends" ? "bg-[#DAACA2]" : "",
        title === "11grams" ? "bg-[#254f30]" : ""
      )}
    >
      <HeaderNav />
      <MobileNavBar />
      <div className="relative w-full h-screen flex flex-col justify-start items-start px-10 md:px-20">
        <div className=" z-20 w-full mt-10 flex flex-col justify-start md:justify-center items-center md:block">
          <h1
            className={cn(
              `text-5xl text-center  md:text-left md:text-[10rem] 2xl:text-[13rem] text-stone-100 ${primary.className} mt-20 mb-10 md:mb-0`,
              title === "11grams" ? "text-[#254f30]" : ""
            )}
          >
            {title}
          </h1>
          <h1
            className={cn(
              `text-white text-center md:text-left text-2xl pb-10  z-20 ${secondary.className} md:w-1/2 pt-6`,
              title === "11grams" ? "text-[#254f30]/90" : ""
            )}
          >
            {caption}
          </h1>
        </div>

        <Image
          src={`${bannerImageDesktop}`}
          alt={"project-1"}
          width={1500}
          height={1500}
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
          priority={true}
          loading="eager"
        />
        <Image
          src={`${bannerImageMobile}`}
          alt={"project-1"}
          width={1500}
          height={1500}
          className="md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="w-full h-full flex flex-col md:flex-row justify-between md:items-start items-center px-6 md:px-20 pt-10">
        <div className="md:w-1/2 h-full flex flex-col md:justify-start  md:items-start md:pr-10">
          <div
            className={`w-full text-xl md:text-4xl ${secondary.className} text-center md:text-left`}
          >
            <h1>{about}</h1>
          </div>
          <div
            className={`w-full text-2xl  mt-20  font-thin text-center md:text-left ${secondary_light.className}`}
          >
            {services.map((service, index) => (
              <h1 key={index}>{service}</h1>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 h-full flex flex-col justify-start items-start">
          <>
            {" "}
            <Image
              src={`${aboutImage1}`}
              width={1000}
              height={1000}
              className="w-full object-contain"
              alt=""
              key={aboutImage1}
            />
            <Image
              src={`${aboutImage2}`}
              width={1000}
              height={1000}
              className="w-full object-contain pt-10"
              alt=""
              key={aboutImage2}
            />
          </>
        </div>
      </div>
      {desktopVideos &&
        desktopVideos.slice(2, 4).map((video, index) => (
          <div
            className="w-5/6 md:h-full  rounded-xl flex flex-col justify-between pb-10 md:p-4 relative top-10 "
            key={index + 2}
          >
            <div
              // Use a unique key
              className="w-full md:w-full  md:h-[720px] rounded-xl border border-white flex flex-col justify-between pb-2 md:p-4 p-2"
            >
              <div className="h-[90%] w-full rounded-t-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  controls={false}
                  muted
                  loop
                  preload="auto"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center p-2">
                <div className="h-full w-1/6 rounded-full border border-white"></div>
              </div>
            </div>
          </div>
        ))}
      <div className="w-full h-full py-10">
        <Marque images={marqueImage} />
      </div>
      <div className="w-full h-full p-10 px-20 flex justify-end items-start">
        {description1 && (
          <h1
            className={`md:w-2/3  md:text-4xl ${secondary.className} text-xl`}
          >
            {description1}
          </h1>
        )}
      </div>
      <div className="w-5/6 h-full md:p-10 md:px-20 flex flex-col md:flex-row justify-around items-start">
        {mobileVideos && (
          <>
            <div className="w-full md:w-[330px] h-[650px]  rounded-xl border border-white flex flex-col justify-between pb-2 p-4">
              <div className="h-[90%] w-full  rounded-t-xl  overflow-hidden">
                <video
                  className={`w-full h-full object-cover `}
                  autoPlay
                  playsInline
                  controls={false}
                  muted
                  loop
                  preload="auto"
                >
                  <source src={`${mobileVideos[0]}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center p-2">
                {" "}
                <div className="h-full  w-1/6 rounded-full border border-white"></div>
              </div>
            </div>
            <div className="md:w-[330px] h-[650px]  rounded-xl border border-white flex flex-col justify-between pb-2 p-4 relative top-10 ">
              <div className="h-[90%] w-full  rounded-t-xl  overflow-hidden">
                <video
                  className={`w-full h-full object-cover `}
                  autoPlay
                  playsInline
                  controls={false}
                  muted
                  loop
                  preload="auto"
                >
                  <source src={`${mobileVideos[1]}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center p-2">
                {" "}
                <div className="h-full  w-1/6 rounded-full border border-white"></div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-5/6 h-full md:p-10 md:px-20 flex flex-col md:flex-row justify-around items-start gap-10">
        {desktopVideos &&
          desktopVideos.slice(0, 2).map((video, index) => (
            <div
              key={index}
              className="w-full md:w-full h-[720px] rounded-xl border border-white flex flex-col justify-between pb-2 p-4"
            >
              <div className="h-[90%] w-full rounded-t-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  controls={false}
                  muted
                  loop
                  preload="auto"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center p-2">
                <div className="h-full w-1/6 rounded-full border border-white"></div>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full h-full pt-10 px-20 flex justify-start items-start">
        {description2 && (
          <h1
            className={`md:w-2/3   md:text-4xl ${secondary.className} text-xl`}
          >
            {description2}
          </h1>
        )}
      </div>
      <div className="w-full h-full py-20 ">
        {btsImages && <Marque images={btsImages} className="grayscale" />}
      </div>
    </div>
  );
}

export default SingleProject;
