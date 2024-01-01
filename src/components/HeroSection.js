import React from "react";
import HeroSectionImage from "../../public/assets/heroSection.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="py-24 px-[144px] ">
        <div className="grid grid-cols-12 items-center  ">
          <div className=" col-span-8 mr-[104px]">
            <h1 className="font-semibold text-[64px]     text-[#4D4D4D]">
              Lessons and insights <br />{" "}
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-[#717171] text-md mt-4 mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="px-8 py-[14px] bg-[#4CAF4F] rounded text-md text-white">
              Register
            </button>
          </div>
          <div className="col-span-4">
            <Image
              src={HeroSectionImage}
              alt={"Hero Image"}
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
