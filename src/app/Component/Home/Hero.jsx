import Image from "next/image";
import React from "react";
import MobileLanding from "../../../../public/icons/landingmobile.svg";
import DesktopLanding from "../../../../public/icons/landing.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={MobileLanding}
        alt="Mobilelanding-page"
        className="block md:hidden"
        priority
      />
      <Image
        src={DesktopLanding}
        alt="Desktoplanding-page"
        className="hidden md:block
        "
        priority
      />
      <div className="absolute inset-0 items-center justify-center text-white flex flex-col">
        <h1 className="text-[40px] lg:text-[80px] font-bold text-white text-center lg:w-[60%] mx-auto leading-[47px] lg:leading-[94px]">
          Unlock the <br /> Power of Feedback with Avowal
        </h1>
        <p className=" text-[12px] lg:text-[20px] text-center w-[95%] font-normal lg:w-[40%] text-white">
          Seamlessly Collect, Manage, and Showcaes Testimonials to Elevate Your
          Business
        </p>

        <button className="bg-white animate-beat !text-[12px] lg:!text-[16px] !text-black  hover:!text-white rounded-full py-2 px-2 md:mt-2">
          Sign Up For Free
        </button>
      </div>
    </div>
  );
};

export default Hero;
