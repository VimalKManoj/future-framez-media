import React from "react";

import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function AboutUs() {
  return (
    <div className="absolute top-0 text-white w-full h-full flex justify-around items-start px-20 mt-20">
      <div className={`${bebas.className} text-3xl w-2/5`}>About Us</div>
      <div className="w-2/5 text-white/70">
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
