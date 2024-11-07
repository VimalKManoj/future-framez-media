import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Marque from "@/components/Marquee/Marque";
import HeaderNav from "@/components/HeaderNav";

const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
const secondary_light = localFont({
  src: "./../../app/fonts/BlauerNue-Light.woff",
});

type ProjectPageProp = {
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
  btsImages: string[];
  mobileVideos?: string[];
};

function SingleProject({
  title,
  caption,
  about,
  services,
  description1,
  description2,
  bannerImageDesktop,
  // bannerImageMobile,
  aboutImage1,
  aboutImage2,
  marqueImage,
  btsImages,
}: // mobileVideos,
ProjectPageProp) {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center  bg-[#43322C] text-white ">
      <HeaderNav />
      {/* 

      <div className="w-full h-px bg-black mb-10"></div>
      <h1 className="self-start text-black pb-10">Caption</h1> */}
      <div className="relative w-full h-screen flex flex-col justify-start items-start px-10 md:px-20">
        <div className=" z-20 w-full mt-10 flex flex-col justify-center items-center md:block">
          <h1
            className={`text-5xl md:text-[10rem] 2xl:text-[13rem] text-stone-100 ${primary.className} mt-20 mb-10 md:mb-0`}
          >
            {title}
          </h1>
          <h1
            className={`text-white text-4xl pb-10  z-20 ${secondary.className} w-1/2`}
          >
            {caption}
          </h1>
        </div>

        <Image
          src={`${bannerImageDesktop}`}
          alt={"project-1"}
          width={1500}
          height={1500}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="w-full h-full flex flex-col md:flex-row justify-between md:items-start items-center px-6 md:px-20 pt-10">
        <div className="w-1/2 h-full flex flex-col md:justify-start  md:items-start md:pr-10">
          <div
            className={`w-full text-4xl ${secondary.className} text-center md:text-left`}
          >
            <h1>{about}</h1>
          </div>
          <div
            className={`w-full text-2xl  mt-20  font-thin ${secondary_light.className}`}
          >
            {services.map((service, index) => (
              <h1 key={index}>{service}</h1>
            ))}
            {/* <h1 className="">Photography </h1>
            <h1>Advertisement</h1>
            <h1>Videography</h1> */}
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

          {/* <Image
            src="/projects/Umber/2.png"
            width={1000}
            height={1000}
            className="w-full object-contain"
            alt=""
          />
          <Image
            src="/projects/Umber/2.png"
            width={1000}
            height={1000}
            className="w-full object-contain pt-10"
            alt=""
          /> */}
        </div>
      </div>
      <div className="w-full h-full py-10">
        <Marque images={marqueImage} />
      </div>
      <div className="w-full h-full p-10 px-20 flex justify-end items-start">
        {description1 && (
          <h1 className={`md:w-2/3  text-4xl ${secondary.className} text-`}>
            {description1}
          </h1>
        )}
      </div>
      <div className="w-5/6 h-full md:p-10 md:px-20 flex flex-col md:flex-row justify-around items-start">
        <div className="w-full md:w-[330px] h-[650px]  rounded-xl border border-white flex flex-col justify-between pb-2 p-4">
          <div className="h-[90%] w-full  rounded-t-xl  overflow-hidden">
            <Image
              src="/projects/Umber/2.png"
              width={1000}
              height={1000}
              className="w-full h-full object-cover "
              alt=""
            />
          </div>
          <div className="h-[10%] w-full flex justify-center items-center p-2">
            {" "}
            <div className="h-full  w-1/6 rounded-full border border-white"></div>
          </div>
        </div>
        <div className="md:w-[330px] h-[650px]  rounded-xl border border-white flex flex-col justify-between pb-2 p-4 relative top-10 ">
          <div className="h-[90%] w-full  rounded-t-xl  overflow-hidden">
            <Image
              src="/projects/Umber/2.png"
              width={1000}
              height={1000}
              className="w-full h-full object-cover "
              alt=""
            />
          </div>
          <div className="h-[10%] w-full flex justify-center items-center p-2">
            {" "}
            <div className="h-full  w-1/6 rounded-full border border-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full pt-20 px-20 flex justify-start items-start">
        {description2 && (
          <h1 className={`w-2/3  text-4xl ${secondary.className} text-`}>
            {description2}
          </h1>
        )}
      </div>
      <div className="w-full h-full py-20 ">
        <Marque
          // images={[
          //   { src: "/projects/Umber/1.jpg", alt: "" },
          //   { src: "/projects/Umber/2.png", alt: "" },
          //   { src: "/projects/Umber/2.png", alt: "" },
          //   { src: "/projects/Umber/2.png", alt: "" },
          //   { src: "/projects/Umber/2.png", alt: "" },
          //   { src: "/projects/Umber/2.png", alt: "" },
          // ]}
          images={btsImages}
        />
      </div>
    </div>
  );
}

export default SingleProject;
