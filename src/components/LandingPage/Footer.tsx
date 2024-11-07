"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import TransitionLink from "@/libs/TransitionLink";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
const secondary_bold = localFont({
  src: "./../../app/fonts/BlauerNue-Bold.woff",
});

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "-80% top", // Starts at 40% of viewport height
            end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
          },
        });

        gsap.set(".footer-line", { scaleY: 0, transformOrigin: "top" });
        timeline.to(
          ".footer-line",

          {
            scaleY: 1,
            duration: 1,
            ease: "power1.inOut",
          }
        );
      }, footerRef);

      return () => ctx.revert();
    },
    { scope: footerRef }
  );
  return (
    <div
      className="relative flex flex-col justify-between items-center h-[70vh] w-full  p-10 overflow-hidden bg-white text-black"
      ref={footerRef}
    >
      <div className="flex w-full h-full justify-between items-center">
        <div className="flex  justify-center items-center w-1/3 h-full">
          <div className="flex flex-col">
            <div className="flex gap-6 mb-6">
              <div className="h-32 w-32 rounded-full border border-black/70 flex justify-center items-center">
                Instagram
              </div>

              <div className="h-32 w-32 rounded-full border border-black/70 flex justify-center items-center ">
                Facebook
              </div>
            </div>
            <div className="flex gap-6">
              <div className="h-32 w-32 rounded-full border border-black/70 flex justify-center items-center">
                Instagram
              </div>

              <div className="h-32 w-32 rounded-full border border-black/70 flex justify-center items-center ">
                Facebook
              </div>
            </div>
            <button className=" border my-8 w-full rounded-full border-black/70 h-20">
              Contact Us
            </button>
          </div>
        </div>

        <div className=" w-1/3 flex justify-center items-center h-full">
          <div className="h-full flex flex-col justify-center items-center">
            <Image
              src="/FFMlogo.png"
              alt="logo"
              width={200}
              height={200}
              className=" xl:w-40 2xl:w-60 object-cover"
            />
            <h1 className={`text-2xl pt-6 ${secondary.className}`}>
              Future Framez Media
            </h1>
          </div>
        </div>
        <div className=" w-1/3 flex justify-center h-full items-center">
          {" "}
          <div
            className={`${secondary.className} flex flex-col text-xl 2xl:text-2xl   px-20 text-black/70  w-1/3`}
          >
            <h1 className={`${secondary_bold.className} pb-4 text-black`}>
              Sitemap
            </h1>
            <TransitionLink href="/">Home</TransitionLink>
            <TransitionLink href="/about">About</TransitionLink>
            <TransitionLink href="/services">Services</TransitionLink>
            <TransitionLink href="/projects">Projects</TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

{
  /* 
<div
        className={`${primary.className} flex justify-between items-start h-full w-full `}
      >
        <div
          className={`${secondary.className} flex flex-col text-xl 2xl:text-2xl   px-20 text-black/70 w-1/3`}
        >
          {/* <h1 className={`${secondary_bold.className} pb-4 text-black`}>
            Socials
          </h1> */
}
//   <div className="flex">
//     {" "}
//     <div className="h-32 w-32 rounded-full border flex justify-center items-center m-10">
//       Instagram
//     </div>
//     <div className="h-32 w-32 rounded-full border flex justify-center items-center  m-10">
//       Facebook
//     </div>
//   </div>
//   <div className="flex">
//     {" "}
//     <h1 className="h-32 w-32 rounded-full border flex justify-center items-center  m-10">
//       Instagram
//     </h1>
//     <h1 className="h-32 w-32 rounded-full border flex justify-center items-center  m-10">
//       Facebook
//     </h1>
//   </div>
// </div>
// <div className="h-full flex flex-col justify-start items-center  w-1/3">
//   <Image
//     src="/FFMlogo.png"
//     alt="logo"
//     width={200}
//     height={200}
//     className=" xl:w-40 2xl:w-60 object-cover"
//   />
//   <h1 className={`text-2xl pt-4 ${secondary.className}`}>
//     Future Framez Media
//   </h1>
// </div>

// <div className="h-4/6 w-px bg-black/20 footer-line"></div>

// <div className="h-4/6 w-px bg-black/20 footer-line"></div>

// <div className="h-4/6 w-px bg-black/20 footer-line"></div>
// <div
//   className={`${secondary.className} flex flex-col  text-xl 2xl:text-2xl  w-1/4 `}
// ></div>
{
  /* <div className="h-4/6 w-px bg-black/20 footer-line"></div> */
}
// </div>
// <div
//   className={`${secondary.className} flex justify-center gap-20 text-sm  items-center `}
// >
//   <h1>Privacy Policy</h1>
//   <h1>Terms of Service</h1>
//   <h1>Copyright © 2019 Future Framez Media</h1>
// </div>
// </div> */}
