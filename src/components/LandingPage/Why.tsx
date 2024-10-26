"use client";
import React, { useRef, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../../app/fonts/Suisse_Intl_Regular.ttf" });

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function Why() {
  const [visibleSection, setVisibleSection] = useState<number>(0);

  const handleVisible = (section: number) => {
    setVisibleSection(section);
  };
  const whyUsRef = useRef<HTMLDivElement | null>(null);
  return (
    <section
      className="w-screen h-screen  flex justify-center  flex-col items-center z-30 p-10 xl:my-10 2xl:my-20"
      ref={whyUsRef}
    >
      <div className="overflow-hidden flex justify-center items-start w-full xl:mt-20 2xl:mt-32">
        <h1 className={`${bebas.className} text-7xl 2xl:text-7xl why-us `}>
          Why Us?
        </h1>
      </div>
      <div className={`${myFont.className} w-3/6 p-4 pt-10 text-container`}>
        <h1 className="text-lg text-justify ">
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
          className={`text-lg text-justify mt-4 ${
            visibleSection >= 1
              ? "blur-none"
              : "blur-sm select-none transition-all duration-500"
          }`}
        >
          We partner with brands to help them define or reinvent their{" "}
          <span
            className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
              visibleSection >= 2 ? "bg-white text-black" : ""
            }`}
            onClick={visibleSection >= 1 ? () => handleVisible(2) : undefined}
          >
            Identity,
          </span>
          <span
            className={`text-lg text-justify mt-2 leading-relaxed ${
              visibleSection >= 2
                ? "blur-none"
                : "blur-sm select-none transition-all duration-500"
            }`}
          >
            propelling them toward their highest ambitions. By weaving a brand’s{" "}
            <span
              className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
                visibleSection >= 3 ? "bg-white text-black" : ""
              }`}
              onClick={visibleSection >= 2 ? () => handleVisible(3) : undefined}
            >
              Character
            </span>{" "}
            into every visual element, we create a narrative that’s uniquely
            yours—a powerful story that resonates. This story leaves a lasting{" "}
            <span
              className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
                visibleSection >= 4 ? "bg-white text-black" : ""
              }`}
              onClick={visibleSection >= 3 ? () => handleVisible(4) : undefined}
            >
              Impression,
            </span>{" "}
          </span>
          <span
            className={`text-lg text-justify mt-2 leading-relaxed ${
              visibleSection >= 4
                ? "blur-none"
                : "blur-sm select-none transition-all duration-500"
            }`}
          >
            forming{" "}
            <span
              className={`mx-2 border rounded-md cursor-pointer hover:bg-white hover:text-black transition-all px-1 ${
                visibleSection >= 5 ? "bg-white text-black" : ""
              }`}
              onClick={visibleSection >= 4 ? () => handleVisible(5) : undefined}
            >
              Authentic
            </span>{" "}
            connections with real impact.
          </span>
        </h1>
      </div>

      <div className={` w-3/6 p-4 pt-4 text-container `}>
        <h1
          className={`text-lg text-justify  ${
            visibleSection >= 5
              ? "blur-none"
              : "blur-sm select-none transition-all"
          } none`}
        >
          we partner with brands to help them define or reinvent their
          <span
            className={` mx-2 border px-2 rounded-md cursor-pointer  hover:bg-white hover:text-black ${
              visibleSection >= 6 ? "bg-white text-black transition-all" : ""
            }`}
            onClick={visibleSection >= 5 ? () => handleVisible(6) : undefined}
          >
            Identity,
          </span>
          <span
            className={`text-lg text-justify mt-2  ${
              visibleSection >= 6
                ? "blur-none"
                : "blur-sm select-none transition-all"
            } none`}
          >
            propelling them toward their highest ambitions. By weaving a brand’s{" "}
            <span
              className={` mx-2  border px-2 rounded-md cursor-pointer  hover:bg-white hover:text-black ${
                visibleSection >= 7 ? "bg-white text-black transition-all" : ""
              }`}
              onClick={visibleSection >= 6 ? () => handleVisible(7) : undefined}
            >
              Character
            </span>{" "}
            <span
              className={`text-lg text-justify mt-2  ${
                visibleSection >= 7
                  ? "blur-none"
                  : "blur-sm select-none transition-all"
              } none`}
            >
              into every visual element, we create a narrative that’s uniquely
              yours—a powerful story that resonates.This story leaves a lasting{" "}
              <span
                className={` mx-2  border px-2 rounded-md cursor-pointer  hover:bg-white hover:text-black ${
                  visibleSection >= 8
                    ? "bg-white text-black transition-all"
                    : ""
                }`}
                onClick={
                  visibleSection >= 7 ? () => handleVisible(8) : undefined
                }
              >
                Impression,
              </span>{" "}
            </span>{" "}
            <span
              className={`text-lg text-justify mt-2  ${
                visibleSection >= 8
                  ? "blur-none"
                  : "blur-sm select-none transition-all"
              } none`}
            >
              forming{" "}
              <span
                className={` mx-2 border px-2 rounded-md cursor-pointer  hover:bg-white hover:text-black ${
                  visibleSection >= 9
                    ? "bg-white text-black transition-all"
                    : ""
                }`}
                onClick={
                  visibleSection >= 8 ? () => handleVisible(9) : undefined
                }
              >
                Authentic
              </span>{" "}
            </span>
            <span
              className={`text-lg text-justify mt-2  ${
                visibleSection >= 9
                  ? "blur-none"
                  : "blur-sm select-none transition-all"
              } none`}
            >
              connections with real impact.
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Why;
