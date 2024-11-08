import TransitionLink from "@/libs/TransitionLink";
import localFont from "next/font/local";
import Image from "next/image";
// const primary = localFont({ src: "./../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../app/fonts/BlauerNue-Regular.woff",
});
import React from "react";

import FFMLogo from "../../public/Logo_White.png";

const links = [
  { href: "/about", text: "ABOUT" },
  { href: "/projects", text: "WORKS" },
  { href: "#contact", text: "CONTACT" },
];

function HeaderNav() {
  return (
    <div
      className={`${secondary.className} fixed top-0 w-full hidden md:flex items-center px-6 md:px-28 py-6 z-50 `}
    >
      {/* Left-aligned FFM */}
      <div className="flex-1 flex justify-start items-center mix-blend-difference">
        <TransitionLink href="/" className="h-full">
          <Image
            src={FFMLogo}
            alt="ffm logo"
            width={200}
            height={200}
            className="h-14 w-full object-contain mix-blend-difference"
          />
        </TransitionLink>
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex w-1/3 bg-black/20 backdrop-blur-lg rounded-full h-14 justify-around items-center px-8 border border-white/10">
        {links.map((link) => (
          <TransitionLink href={link.href} key={link.text}>
            <h1 className="text-white text-sm">{link.text}</h1>
          </TransitionLink>
        ))}
      </div>

      {/* Empty space for balancing */}

      <div className="flex-1"></div>
    </div>
  );
}

export default HeaderNav;
