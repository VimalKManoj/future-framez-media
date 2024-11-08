"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// import Image from "next/image";
// import TransitionLink from "@/libs/TransitionLink";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
const secondary_light = localFont({
  src: "./../../app/fonts/BlauerNue-Light.woff",
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
    <>
      <div
        className="relative flex flex-col justify-around md:justify-around 2xl:justify-between items-center min-h-screen w-full  md:p-28 md:pb-10 overflow-hidden bg-black text-white "
        ref={footerRef}
        id="contact"
      >
        <div className="overflow-hidden pb-1 z-10 contact-caption mt-10 ">
          <h1
            className={`${primary.className} text-3xl md:text-6xl 2xl:text-7xl pb-4 md:pb-0 text-center md:text-left w-full  mt-20 md:mt-0`}
          >
            Let’s Create Something Great Together!
          </h1>
        </div>

        <div className="flex w-full flex-col md:flex-row  justify-between items-start  z-10 md:mt-16 md:mb-20 p-4 md:p-0">
          <div
            className={`${secondary_light.className} w-full text-2xl md:text-3xl 2xl:text-4xl md:w-1/3 text-white/70 text-center md:text-left`}
          >
            <h1
              className={`${secondary_light.className} text-2xl mb-6 text-white/40`}
            >
              Get in touch
            </h1>
            <h1 className="mb-4">info@futureframez.com</h1>
            <h1>+91 8123 578 889</h1>
            <h1 className="mb-4">+91 8075 941 342</h1>
          </div>
          <h1
            className={`md:w-2/3 ${secondary.className} w-full md:text-3xl  mt-10 md:mt-0 text-center md:text-left md:ml-28 `}
          >
            Whether you’re looking to start a new project, explore
            collaboration, or just have a question, we’d love to hear from you.
            Our team is here to help bring your vision to life with creative
            solutions tailored just for you.
          </h1>
        </div>
        <div className="w-full border-t md:border-y border-white/70 py-4 h-full flex flex-col md:flex-row justify-between items-center z-10 self-end">
          <div className={`${secondary.className} text-white/70 mb-6 text-center md:text-left`}>
            <h1 className=" text-2xl mb-2 text-white">Follow Us</h1>
            <h1>Instagram</h1>
            <h1>Facebook</h1>
            <h1>Linkedin</h1>
            <h1>Behance</h1>
          </div>
          <div className={`${secondary.className} text-white/70 mb-6 text-center md:text-left`}>
            <h1 className=" text-2xl mb-2 text-white">Sitemap</h1>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Works</h1>
            <h1>Contact</h1>
          </div>
          <h1 className={`${secondary.className} text-white/70 `}>
            Future Framez Media <br /> Keremane Sy No 6/8, Shivanahalli Village,{" "}
            <br /> Ragihalli Post, Jigani Hobli, Anekal Taluk, <br />
            Bengaluru, Karnataka 560083
          </h1>
        </div>
        <div
          className={`${secondary.className} mt-4 flex flex-col md:flex-row justify-between md:gap-20 text-sm  items-center w-full text-white/40`}
        >
          {" "}
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
          <h1>Copyright © 2019 Future Framez Media</h1>
        </div>
        {/*  */}
        <div className="absolute -top-40 -right-96 w-1/2 h-[110%] bg-[#735B0A] rounded-full z-0 backdrop-blur-3xl blur-3xl opacity-40"></div>
      </div>
    </>
  );
}

export default Footer;

{
  /* <h1
          className={`absolute bottom-0 md:-bottom-32 2xl:-bottom-14 text-9xl md:text-[15rem] text-white/20 ${primary.className} md:text-nowrap z-10`}
        >
          Get in touch
        </h1> */
}

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
