import React from "react";
import Image from "next/image";
import coin1 from "../public/img/coin1.png";
import coin2 from "../public/img/coin2.png";
import coin3 from "../public/img/coin3.png";
import coin4 from "../public/img/coin4.png";
import coin5 from "../public/img/coin5.png";
import CustomButton from "./reuse/button";

const Join: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-5 items-center justify-center md:h-screen p-6" data-aos="fade-up">
      <h1 className="text-center text-3xl md:text-5xl mb-8 md:mb-0 font-bold">
        Join our Telegram channel
      </h1>
      <p className="text-center text-lg">
        Stay updated with the latest news, discussions, <br /> and community events.
      </p>
      <Image
        src={coin1}
        alt="coin"
        width={100}
        height={100}
        className="z-1 absolute top-1/4 left-1/4"
      />
      <Image
        src={coin2}
        alt="coin"
        width={100}
        height={100}
        className="z-1 hidden md:flex absolute top-1/4 right-1/4 w-[200px]"
      />
      <Image
        src={coin3}
        alt="coin"
        width={100}
        height={100}
        className="z-1 hidden md:flex absolute top-2/4 right-20 w-[200px]"
      />
      <Image
        src={coin4}
        alt="coin"
        width={100}
        height={100}
        className="z-1 hidden md:flex absolute top-2/4 left-20 w-[200px]"
      />
      <Image
        src={coin5}
        alt="coin"
        width={100}
        height={100}
        className="z-1 absolute top-3/4 left-1/4 w-[200px]"
      />
    </div>
  );
};

export default Join;
