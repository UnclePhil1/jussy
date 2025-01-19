import Image from "next/image";
import jussy from "../public/img/jussy.png";
import CustomButton from "./reuse/button";
import coin2 from "../public/img/coin2.png";
import coin3 from "../public/img/coin3.png";
import coin4 from "../public/img/coin4.png";

const Vision = () => {
  const handleBook = () => {
    window.open("https://calendly.com/jussysol/30min", "_blank");
  };

  return (
    <div
      className=" relative w-full flex flex-col md:flex-row items-center justify-center gap-20 p-6 h-full md:h-screen"
      data-aos="fade-up"
    >
      <div className="w-full md:w-1/2 space-y-6 z-50">
        <h1 className="text-3xl font-bold uppercase">
          A Visionary in the Space
        </h1>
        <p className="text-lg">
          An advocate for decentralized finance and airdrop research,
          contributing to the growth and innovation of the blockchain ecosystem.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-10 justify-start">
          <div className="mx-r-4">
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="text-md">
              To provide valuable insights and resources that help users
              navigate and benefit from the world of DeFi and airdrops.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="text-md">
              A Trusted source of information and support for the blockchain
              community, driving the adoption and success of decentralized
              finance.
            </p>
          </div>
        </div>
        <CustomButton text="Book a Call" onClick={handleBook} />
      </div>
      <div className="z-50">
        <Image
          src={jussy}
          alt="Jussy Sol"
          className="object-cover rounded-full w-full h-full md:w-80 md:h-80 z-50"
        />
      </div>
      <Image
        src={coin2}
        alt="coin"
        width={100}
        height={100}
        className="z-1 hidden md:flex absolute top-10 right-1/4 w-[200px]"
      />
      <Image
        src={coin3}
        alt="coin"
        width={100}
        height={100}
        className="z-1 hidden md:flex absolute top-2/4 right-50 w-[200px]"
      />
      <Image
        src={coin4}
        alt="coin"
        width={100}
        height={100}
        className="z-1 absolute top-2/4 left-20 w-[200px]"
      />
    </div>
  );
};

export default Vision;
