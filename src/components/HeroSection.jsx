import React from "react";
import banner from '@/assets/banner.png'
import Image from "next/image";
import HeroSectionBannerImage from "./HeroSectionBannerImage";
const HeroSection = () => {
  return (
    <section className="w-full px-5  desktop:px-0">
      <div className="wrapper max-w-270 mx-auto flex flex-col sm2:flex-row justify-between items-center bg-[#15171D] p-5 sm2:p-3 md:p-14 rounded-2xl border border-[#222630]">

  {/* left side texts and button section */}
  <div className="flex flex-col sm2:gap-6 md:gap-10 w-full sm2:w-[55%]">

    <div className="texts flex flex-col gap-4 sm2:gap-5">

      <h2 className="text-[#C2F800] font-normal text-[12px] sm2:text-sm md:text-xl">
        WORKOUT LIBRARY
      </h2>

      <h1 className="text-[18px] leading-5 sm2:text-3xl sm2:leading-8 md:text-5xl md:leading-12 font-bold">
        TRAIN WITH INTENT. LOG EVERY SET.
      </h1>

      {/* banner image for mobile/tablet */}
      <div className="block my-3 sm2:hidden">
        <HeroSectionBannerImage />
      </div>

      <p className="text-[#9CA3AF] font-normal text-[13px] sm2:text-sm md:text-base w-full md:w-[70%]">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
        into today's plan, and watch the week's work add up.
      </p>

    </div>

    <div className="flex justify-center sm2:justify-start">
      <button className="bg-[#C2F800] text-black text-[12px] px-3 py-2 sm2:text-sm md:text-base md:py-2 md:px-4 md:font-medium rounded cursor-pointer mt-5 sm2:mt-3 md:mt-0">
        BROWSE WORKOUTS
      </button>
    </div>

  </div>

  {/* banner image for desktop */}
  <div className="hidden sm2:block">
    <Image
      src={banner}
      width={400}
      alt="banner-image"
      className="md:w-100"
    />
  </div>

</div>
    </section>
  );
};

export default HeroSection;
