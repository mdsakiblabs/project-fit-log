import React from "react";
import banner from '@/assets/banner.png'
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="wraper max-w-270 mx-auto flex justify-between items-center bg-[#15171D] p-14 rounded-2xl border border-[#222630]">
        {/* left side texts and button section */}
        <div className="flex flex-col gap-10">
          <div className="texts flex flex-col gap-5">
            <h2 className="text-[#C2F800] font-normal">WORKOUT LIBRARY</h2>
            <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG EVERY SET.</h1>
            <p className="text-[#9CA3AF] font-normal w-[70%] ">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>
          </div>
          <div className="button">
            <button className="bg-[#C2F800] text-black py-2 px-4 font-medium rounded cursor-pointer">BROWSE WORKOUTS</button>
          </div>
        </div>
        {/* banner image  */}
        <div>
            <Image src={banner} width={400} alt="banner-image"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
