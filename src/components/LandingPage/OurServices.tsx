import React from "react";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
const myFont = localFont({ src: "./../../app/fonts/Suisse_Intl_Regular.ttf" });

const sarabun = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const nanum = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function OurServices() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-around z-20 px-10">
      <div className="flex justify-around items-center w-full h-screen">
        <div className="flex flex-col items-start justify-around flex-1 xl:p-10 2xl:p-14  h-full border-x border-white/20 ">
          <h1 className={`${sarabun.className} text-8xl `}>
            What <br /> we do?
          </h1>
          <h1 className={`${myFont.className}  pr-6`}>
            Founded in 2019, Future Framez Media has quickly become a leader in
            the media industry, delivering end-to-end solutions for movie
            production, advertising, web series, documentaries, and more. Based
            in Bengaluru, we combine integrity, creativity, and expertise to
            produce high-quality content with cutting-edge technology. With a
            strong global network, we bring your vision to life with precision
            and professionalism.
          </h1>
          <h1 className={`${myFont.className} font-bold  pr-6`}>
            Let FFM Studio bring your ideas to life with our full-service,
            end-to-end creative solutions. Whatever your vision, we are here to
            make it a reality.
          </h1>
        </div>
        <ContentBlock
          number="1"
          title="Video Production"
          description="Whether it’s a commercial, music video, or documentary, we craft cinematic stories that leave a lasting impact."
          tagline="Capturing Your Vision, Frame by Frame!"
        />

        <ContentBlock
          number="2"
          title="Events & Weddings"
          description="From lavish weddings to corporate events, we create beautifully filmed memories that last a lifetime."
          tagline="Unforgettable Moments, Perfectly Captured"
        />
      </div>
      <div className="flex justify-around items-center w-full xl:h-[90vh] 2xl:h-screen">
        <ContentBlock
          number="3"
          title="Corporate Videos"
          description="Elevate your business with polished corporate films that engage, inform, and inspire."
          tagline="Professional Films for Professional Brands"
        />
        <ContentBlock
          number="4"
          title="Celebrity Management"
          description="From collaborations to endorsements, we manage and facilitate seamless celebrity partnerships for your brand."
          tagline="Connecting You with the Stars"
        />
        <ContentBlock
          number="5"
          title="Public Relations (PR)"
          description="Our PR strategies ensure your brand gets the recognition it deserves, across media outlets and platforms."
          tagline="Building Buzz, Amplifying Your Brand"
        />
      </div>
    </section>
  );
}

export default OurServices;

type ContentBlockProps = {
  number: string;
  title: string;
  description: string;
  tagline: string;
};

const ContentBlock = ({
  number,
  title,
  description,
  tagline,
}: ContentBlockProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 xl:p-10 2xl:p-14 h-full border-r border-white/20 overflow-hidden first:border-l">
      <h2
        className={`${nanum.className} xl:text-[25rem] 2xl:text-[30rem] absolute -top-32 -right-16 2xl:-right-20 z-0 opacity-30 number`}
      >
        {number}
      </h2>
      <div className="w-4/5">
        <h2 className="${myFont.className} font-semibold xl:text-2xl 2xl:text-3xl my-10">
          {title}
        </h2>
        <h2 className="${myFont.className} mb-10">{description}</h2>
      </div>
      <h2 className="${myFont.className} font-light text-3xl w-4/5">
        {tagline}
      </h2>
    </div>
  );
};
