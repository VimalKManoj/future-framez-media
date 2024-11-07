"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import React, { useRef } from "react";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
import localFont from "next/font/local";
import AboutUs from "./AboutUs";

function AboutBanner() {
  const AboutBannerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: AboutBannerRef.current,
              start: "top 10%", // Starts at 40% of viewport height
              end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
            },
          });

          timeline
            .to(".cross", {
              rotate: 360,
              duration: 5, // Adjust for speed
              repeat: -1,
              ease: "none",
            })
            .fromTo(
              ".about-banner-title",
              {
                yPercent: 100,
              },
              { yPercent: 0, duration: 1, ease: "power1.inOut" },
              "<"
            )
            .fromTo(
              ".about-banner-description",
              {
                yPercent: 100,
              },
              { yPercent: 0, duration: 1, ease: "power1.inOut" },
              "<"
            );

          gsap.set(".cross-2", { scale: 1.5 });
          gsap.to(".cross-2", {
            rotate: 360 * 2,
            duration: 5, // Adjust for speed
            repeat: -1,
            ease: "none",
          });
          gsap
            .timeline({
              scrollTrigger: {
                trigger: AboutBannerRef.current,
                start: "top -10%", // Starts at 40% of viewport height
                end: "bottom 10%", // Ends at 100vh from the start of videoContainerRef
                scrub: true,
              },
            })
            .to(".cross", {
              opacity: 1,
              scale: 3,
              y: 800, // Adjust for speed
            })
            .to(
              ".about-bg",
              {
                top: 0,
              },
              "<"
            )
            .to(
              ".about-image-1",
              {
                rotate: -8,
                x: 100,
              },
              "<"
            )

            .to(
              ".about-image-3",
              {
                rotate: 8,
                x: -100,
              },
              "<"
            );

          gsap
            .timeline({
              scrollTrigger: {
                trigger: AboutBannerRef.current,
                start: "top -90%", // Starts at 40% of viewport height
                end: "bottom 10%", // Ends at 100vh from the start of videoContainerRef
                scrub: true,
              },
            })
            .to(".cross-2", {
              scale: 1,
              y: 1300, // Adjust for speed
            });
        }, AboutBannerRef);

        return () => ctx.revert();
      }
    },
    { scope: AboutBannerRef }
  );
  return (
    <div
      className="relative w-full min-h-screen flex flex-col gap-6 justify-between items-center overflow-hidden pt-16 px-10 bg-black"
      ref={AboutBannerRef}
    >
      <div
        className="hidden md:block w-16 2xl:w-20 h-16 2xl:h-20 bg-white blend cross relative top-32 right-28 scale-125"
        style={{
          clipPath:
            " polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
        }}
      ></div>
      <div className="w-full flex flex-col md:flex-row justify-start items-center relative md:-top-20 mt-10 md:mt-0">
        <div className="md:w-3/5">
          <div className="overflow-hidden">
            <h1
              className={`text-4xl md:text-6xl 2xl:text-7xl text-white 2xl:mt-20 ${primary.className} about-banner-title mix-blend-difference`}
            >
              Creativity
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={` text-4xl md:text-6xl 2xl:text-7xl text-white ${primary.className} about-banner-title mix-blend-difference`}
            >
              Unleashed
            </h1>
          </div>
        </div>
        <div className="overflow-hidden  md:w-2/4 md:mr-20 z-20">
          <h1
            className={`${secondary.className} text-xl text-white/70  text-center md:text-start mix-blend-difference about-banner-description mt-10 2xl:mt-20`}
          >
            Our journey began with a simple yet powerful idea: to create a space
            where creativity thrives and brands flourish. With a diverse team of
            talented designers, writers, marketers, and developers, we have
            cultivated an environment that encourages out-of-the-box thinking
            and collaborative problem-solving.
          </h1>
        </div>
      </div>
      <div className="relative md:-top-10 flex flex-col md:flex-row justify-around items-center w-full md:h-[90vh] gap-10 z-30 about-bg">
        <div
          className=" h-[80%] p-4 md:w-1/4 overflow-hidden border border-white/20 border-dashed  about-image-1"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="/about/2.jpg"
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full w-full  object-cover "
          />
        </div>
        <div
          className="h-full  w-full p-4 md:w-2/4 overflow-hidden border border-white/20 border-dashed  about-image-2 z-20 bg-black"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="/about/1.jpg"
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full w-full  object-cover"
          />
        </div>
        <div
          className="hidden  md:block h-[80%] p-4 w-1/4 overflow-hidden border border-white/20 border-dashed about-image-3"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="/about/3.jpg"
            width={1000}
            height={1000}
            alt="bg"
            className=" h-full w-full  object-cover"
          />
        </div>
      </div>
      <div className="relative w-full h-full mb-10 md:mb-0 md:h-screen 2xl:h-[80vh] bg-black overflow-hidden flex justify-center ">
        <div
          className="hidden md:block w-20 h-20 bg-white mix-blend-difference cross-2 relative -top-72 right-32 z-30 "
          style={{
            clipPath:
              " polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
          }}
        ></div>
        <AboutUs />
      </div>
    </div>
  );
}

export default AboutBanner;
