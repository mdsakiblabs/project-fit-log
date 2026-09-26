import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavbarPlanAndSaveSection from "./NavbarPlanAndSaveSection";
import NavLinks from "./NavLinks";

import MobileNav from "./mobileUI/MobileNav";

const Navbar = () => {
  return (
    <div className="w-full bg-[#0C0D10] border-b border-[#1C1F26] mb-15">
      <nav className="flex justify-between max-w-270 items-center mx-auto py-4 px-4 md:px-0">
        {/* logo section */}
        <div className="flex items-center justify-center  gap-2">
          <Image src={logo} width={35} alt="navbar-logo" 
          className="w-5 md:w-8.5 "
          />
          <h2 className=" text-[18px] md:text-2xl font-bold">FITLOG</h2>
        </div>
        {/* Workouts and my plan section */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="hidden  md:block">
          <NavbarPlanAndSaveSection />
        </div>
        <MobileNav />
      </nav>
    </div>
  );
};

export default Navbar;
