"use client";

import React, { useState } from "react";
import NavLinks from "../NavLinks";
import NavbarPlanAndSaveSection from "../NavbarPlanAndSaveSection";
const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 
<div className="md:hidden relative">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-3xl text-white cursor-pointer"
  >
    {menuOpen ? "×" : "☰"}
  </button>

  {menuOpen && (
  <div className="absolute right-0 top-12 w-64 bg-[#0C0D10] border border-[#1C1F26] rounded-xl p-5 text-[12px]">
    <NavLinks />
    <div className="w-full flex justify-center items-center gap-2 ml-2 mt-2">
    <NavbarPlanAndSaveSection />
    </div>
  </div>
)}
</div>


  );
};

export default MobileNav;
