import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="z-20 flex justify-center items-center w-full h-screen text-white">
      <Image
        src="/Logo_White.png"
        width={200}
        height={200}
        className="w-20 md:w-32"
        alt="FFM Logo"
      />
    </div>
  );
}

export default Loader;
