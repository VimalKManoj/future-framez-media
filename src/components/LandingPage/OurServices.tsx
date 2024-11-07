import React from "react";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
const primary = localFont({ src: "./../../app/fonts/Legacy_Sans.woff" });
const secondary = localFont({
  src: "./../../app/fonts/BlauerNue-Regular.woff",
});

const nanum = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function OurServices() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-around z-20 px-6 md:px-10 bg-white text-black md:text-inherit md:bg-transparent">
      <div className="flex flex-col md:flex-row justify-around items-center w-full md:h-screen">
        <div className="flex flex-col items-start justify-around flex-1 p-6 xl:p-10 2xl:p-14  h-full border-x md:border-white/20  border-black/20 ">
          <h1
            className={`${primary.className} text-3xl md:text-6xl 2xl:text-7xl pb-4 md:pb-0 text-center md:text-left w-full`}
          >
            What <br className="hidden md:block" /> we do?
          </h1>
          <h1
            className={`${secondary.className} text-center md:text-left md:pr-6 md:text-white/70 mb-4 md:mb-0`}
          >
            Founded in 2019, Future Framez Media has quickly become a leader in
            the media industry, delivering end-to-end solutions for movie
            production, advertising, web series, documentaries, and more. Based
            in Bengaluru, we combine integrity, creativity, and expertise to
            produce high-quality content with cutting-edge technology. With a
            strong global network, we bring your vision to life with precision
            and professionalism.
          </h1>
          <h1
            className={`${secondary.className} font-bold text-center md:text-left md:pr-6`}
          >
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
      <div className="flex flex-col md:flex-row justify-around items-center w-full h-full xl:h-[90vh] 2xl:h-screen">
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
    <div className="relative flex flex-col items-center justify-center flex-1 p-10 py-20 md:py-0 md:p-6  xl:p-10 2xl:p-14 h-[50vh] md:h-full border-x md:border-r md:border-white/20 border-black/20  overflow-hidden  md:first:border-l">
      <h2
        className={`${nanum.className} text-[18rem] md:text-[25rem] xl:text-[25rem] 2xl:text-[30rem] absolute -top-32 -right-10 md:-right-16 2xl:-right-20 z-0 opacity-30 number`}
      >
        {number}
      </h2>
      <div className="md:w-4/5">
        <h2
          className={`${secondary.className} font-semibold text-2xl 2xl:text-3xl my-10`}
        >
          {title}
        </h2>
        <h2 className={`${secondary.className} mb-10`}>{description}</h2>
      </div>
      <h2 className={`${secondary.className} font-light text-2xl md:w-4/5`}>
        {tagline}
      </h2>
    </div>
  );
};
