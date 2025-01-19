import React from "react";
import { Navbar } from "./navbar";
import Image from "next/image";
import greenshade from "../public/img/greenshade.png";
import purpleshade from "../public/img/purpleshade.png";
import coin1 from "../public/img/coin1.png";
import coin2 from "../public/img/coin2.png";
import coin3 from "../public/img/coin3.png";
import coin4 from "../public/img/coin4.png";
import coin5 from "../public/img/coin5.png";
import CustomButton from "./reuse/button";
import GradientBorderText from "./solana";

const Header: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <header className="relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-white z-[100%] gap-6 p-6" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold text-center hidden md:block">
          Change Maker in <br /> DeFi, Airdrop, and Solana
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-center md:hidden">
          Change Maker in DeFi, Airdrop, and Solana
        </h1>
        <p className="text-center text-lg">
          Empowering the blockchain community with cutting-edge research and
          collaborations
        </p>
        <div className="mt-8">
          <CustomButton text="Book a call" onClick={handleClick} />
        </div>
        <div className="mt-8">
           <GradientBorderText />
        </div>
      </div>
      {/* <Image
        src={greenshade}
        alt="green Shade"
        width={500}
        height={500}
        className="absolute top-0 left-0 -z-1 animate-lightDim"
        objectFit="cover"
      />
      <Image
        src={purpleshade}
        alt="green Shade"
        width={500}
        height={500}
        className="absolute top-0 right-0 -z-1 animate-lightDim"
        objectFit="cover"
      /> */}
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
    </header>
  );
};

export default Header;
