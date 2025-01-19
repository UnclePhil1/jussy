import React from "react";
import Image from "next/image";
import part1 from "../public/img/part1.png";
import part2 from "../public/img/part2.png";
import part3 from "../public/img/part3.png";
import bg from "../public/img/partner.png";

const Partners: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-10 items-center justify-center md:h-80 p-6" data-aos="fade-up">
      <h1 className="text-center text-3xl md:text-5xl mb-8 md:mb-0">Our Partners</h1>
      <div className="flex flex-col justify-center items-center md:flex-row m-0 p-0 self-center gap-10">
        <Image src={part1} alt="partner1" width={200} height={200} className="self-center m-0 p-0" />
        <Image src={part2} alt="partner2" width={200} height={200} className="self-center m-0 p-0" />
        <Image src={part3} alt="partner3" width={200} height={200} className="self-center m-0 p-0" />
      </div>
        <Image src={bg} alt="partner3" width={200} height={200} className="absolute left-0 w-2/4" />
    </div>
  );
};

export default Partners;
