import React from "react";
import banner from '@/assets/banner.png'
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-0">
      <div className="wraper max-w-270 mx-auto flex justify-between items-center bg-[#15171D] p-5 md:p-14 rounded-2xl border border-[#222630]">
        {/* left side texts and button section */}
        <div className="flex flex-col  md:gap-10">
          <div className="texts flex flex-col gap-5">
            <h2 className="text-[#C2F800] font-normal text-[12px] md:text-xl">WORKOUT LIBRARY</h2>
            <h1 className="text-[18px] md:leading-12 leading-5 md:text-5xl font-bold">TRAIN WITH INTENT. LOG EVERY SET.</h1>
            <p className="text-[#9CA3AF] font-normal text-[13px] md:text-base w-full md:w-[70%] ">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>
          </div>
          <div className="button">
            <button className="bg-[#C2F800] text-black text-[12px] px-3 py-2 md:text-base md:py-2 md:mt-0 mt-4 md:px-4 md:font-medium rounded cursor-pointer">BROWSE WORKOUTS</button>
          </div>
        </div>
        {/* banner image  */}
        <div>
            <Image src={banner} width={400} alt="banner-image"
            className="md:w-100 w-150 "
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
