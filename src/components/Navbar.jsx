import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-full bg-[#0C0D10] border-b border-[#1C1F26]">
      <nav className="flex justify-between max-w-270 items-center mx-auto py-4">
        {/* logo section */}
        <div className="flex items-center justify-center  gap-2">
          <Image 
          src={logo} 
          width={35} 
          alt="navbar-logo" 
          />
          <h2 className="text-2xl font-bold">FITLOG</h2>
        </div>
        {/* Workouts and my plan section */}
        <div className="flex gap-7 text-base ">
            <h2 className="text-[#C2F800] bg-[#C2F800]/10 py-1 text-center px-4 rounded-3xl cursor-pointer ">Workouts</h2>
            <h2 className="text-[#9CA3AF] cursor-pointer">My Plan</h2>
        </div>
        {/* plan and saved section  */}
        <div className="flex gap-7 ">
            <h3 className="text-[#D1D5DB] cursor-pointer">Plan <span className="inline-flex w-6 h-6  items-center justify-center rounded-full bg-[#C2F800] text-black font-bold "> 0 </span>
            </h3>
            <h3 className="text-[#9CA3AF] cursor-pointer">Saved <span className="inline-flex w-6 h-6  items-center justify-center rounded-full bg-[#2D313B] text-[#D1D5DB] font-bold "> 0 </span>
            </h3>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
