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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quidem obcaecati provident aspernatur ratione. Possimus ab explicabo
        similique recusandae dignissimos, quas laborum, incidunt commodi tenetur
        eius maiores neque exercitationem accusantium? lorem ipsum dolor sit
        amet consectetur adipisicing elit. Asperiores quidem obcaecati provident
        aspernatur ratione.
        <br />
        <br />
        dignissimos, quas laborum, incidunt commodi tenetur eius maiores neque
        exercitationem accusantium? lorem ipsum dolor sit amet consectetur
        adipisicing elit. Asperiores quidem obcaecati provident aspernatur
        ratione. Possimus ab explicabo similique recusandae dignissimos, quas
        laborum, incidunt commodi tenetur eius maiores neque exercitationem
      </div>
    </div>
  );
}

export default AboutUs;
