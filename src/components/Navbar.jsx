import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavbarPlanAndSaveSection from "./NavbarPlanAndSaveSection";
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

            <Link href={'/'}>
            <h2 className="text-[#C2F800] bg-[#C2F800]/10 py-1 text-center px-4 rounded-3xl cursor-pointer ">Workouts</h2>
            </Link>

            <Link href={'/my-plan/todays-plan'}>
            <h2 className="text-[#9CA3AF] cursor-pointer">My Plan</h2>
            </Link>
        </div>
        
        {/* plan and saved section  */}
        <NavbarPlanAndSaveSection/>
      </nav>
    </div>
  );
};

export default Navbar;
