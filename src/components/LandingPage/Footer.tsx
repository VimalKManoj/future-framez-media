"use client";
import React, { useRef } from "react";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nanum = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

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
      className="relative flex flex-col justify-between items-center h-[70vh] w-full text-9xl p-20 overflow-hidden bg-white text-black"
      ref={footerRef}
    >
      <div
        className={`${bebas.className} flex justify-around items-start h-full w-full `}
      >
        <div className="h-4/6 w-px bg-black/20 footer-line"></div>
        <h1 className={`text-2xl `}> WE DEFINE THE FUTURE</h1>
        <div className="h-2/6 w-px bg-black/20 footer-line"></div>
        <div className="flex flex-col text-2xl   px-20">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <div className="h-2/6 w-px bg-black/20 footer-line"></div>
        <div className="flex flex-col text-2xl  px-20">
          <h1>Instagram</h1>
          <h1>Facebook</h1>
          <h1>Twitter</h1>
          <h1>Linkedin</h1>
        </div>
        <div className="h-2/6 w-px bg-black/20 footer-line"></div>
        <div className="flex flex-col text-2xl">
          <h1>Contact us at</h1>
          <h1>futureframez@gmail.com</h1>
        </div>
        <div className="h-4/6 w-px bg-black/20 footer-line"></div>
      </div>
      <div className="flex justify-center gap-20 text-sm  items-center ">
        <h1>Privacy Policy</h1>
        <h1>Terms of Service</h1>
        <h1>Copyright © 2019 Future Framez Media</h1>
      </div>

      <div className="absolute -bottom-20 [perspective:300px] flex justify-center items-center h-full w-full">
        <h1
          className={`${nanum.className} md:text-[25rem] text-black/50 2xl:text-[45rem] [transform:rotateX(45deg)] drop-shadow-2xl font-bold`}
        >
          FFM
        </h1>
      </div>
    </div>
  );
}

export default Footer;
