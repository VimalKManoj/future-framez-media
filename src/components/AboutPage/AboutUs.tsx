import React from "react";

const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});
import localFont from "next/font/local";

function AboutUs() {
  return (
    <div className="md:absolute top-0 text-white w-full h-full flex flex-col md:flex-row justify-between items-start md:px-20 mt-20">
      <div
        className={`${primary.className} text-4xl md:text-6xl 2xl:text-7xl text-center md:text-left w-full md:w-2/5 mix-blend-difference mb-4 md:mb-0`}
      >
        About Us
      </div>
      <div
        className={`md:w-2/5 text-white/70  ${secondary.className} text-xl text-center md:text-left`}
      >
        At FFM Studio, we believe in the power of authentic storytelling. We’re
        a creative team passionate about transforming ideas into impactful
        visual experiences that connect with audiences on a deeper level. Every
        brand has a unique character, and it’s our mission to bring that
        character to life through thoughtful design and purposeful storytelling.
        <br />
        <br />
        Our approach is simple yet powerful: we don’t just create content—we
        craft narratives. From concept to final execution, we blend strategy,
        creativity, and attention to detail, ensuring that every project
        reflects the brand’s true essence. Our team’s expertise spans design,
        video production, brand strategy, and digital experiences, giving us the
        versatility to elevate any vision.
      </div>
    </div>
  );
}

export default AboutUs;
