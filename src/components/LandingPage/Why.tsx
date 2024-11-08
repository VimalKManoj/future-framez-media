"use client";
import React, { useRef, useState } from "react";
import localFont from "next/font/local";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});

function Why() {
  const [visibleSection, setVisibleSection] = useState<number>(0);

  const handleVisible = (section: number) => {
    setVisibleSection(section);
  };
  const whyUsRef = useRef<HTMLDivElement | null>(null);
  return (
    <section
      className="w-screen h-screen  flex justify-center  flex-col items-center z-30 p-6 md:p-10 xl:my-10 2xl:my-20"
      ref={whyUsRef}
    >
      <div className="overflow-hidden flex justify-center items-start w-full mb-6 md:mt-32">
        <h1
          className={`${primary.className} text-4xl md:text-6xl 2xl:text-7xl why-us `}
        >
          Why Us?
        </h1>
      </div>
      <div className={`${secondary.className} md:w-4/6 p-4 text-xl md:text-4xl  text-container`}>
        <h1 className="text-xl md:text-4xl text-center ">
          We are{" "}
          <span
            className={` border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
              visibleSection >= 1 ? "bg-white text-black" : ""
            }`}
            onClick={() => handleVisible(1)}
          >
            Storytellers.
          </span>
        </h1>

        <h1
          style={{ lineHeight: "1.5" }}
          className={`text-xl md:text-4xl text-center mt-4 ${
            visibleSection >= 1
              ? "blur-none"
              : "blur-sm select-none transition-all duration-500"
          }`}
        >
          We shape your
          <span
            className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
              visibleSection >= 2 ? "bg-white text-black" : ""
            }`}
            onClick={visibleSection >= 1 ? () => handleVisible(2) : undefined}
          >
            brand’s
          </span>
          <span
            className={`text-xl md:text-4xl text-justify mt-2 leading-relaxed ${
              visibleSection >= 2
                ? "blur-none"
                : "blur-sm select-none transition-all duration-500"
            }`}
          >
            essence into a compelling
            <span
              className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
                visibleSection >= 3 ? "bg-white text-black" : ""
              }`}
              onClick={visibleSection >= 2 ? () => handleVisible(3) : undefined}
            >
              visual story
            </span>{" "}
            that resonates with your
            <span
              className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
                visibleSection >= 4 ? "bg-white text-black" : ""
              }`}
              onClick={visibleSection >= 3 ? () => handleVisible(4) : undefined}
            >
              audience,
            </span>{" "}
          </span>
          <span
            className={` text-xl md:text-4xl text-justify mt-2 leading-relaxed ${
              visibleSection >= 4
                ? "blur-none"
                : "blur-sm select-none transition-all duration-500"
            }`}
          >
            creating meaningful and authentic experiences.
            <span
              className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
                visibleSection >= 5 ? "bg-white text-black" : ""
              }`}
              onClick={visibleSection >= 4 ? () => handleVisible(5) : undefined}
            >
              Design
            </span>{" "}
            — with purpose.
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Why;
