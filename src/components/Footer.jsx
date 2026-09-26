import React from "react";
import logo from '../assets/logo.png'
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full py-7 bg-[#0C0D10] border-t border-[#1C1F26] mt-20">
      <div className="wraper max-w-270 mx-auto flex justify-between items-center">
        {/* logo  */}
        <div>
          <div className="flex items-center justify-center  gap-2">
            <Image src={logo} width={35} alt="navbar-logo" />
            <h2 className="text-2xl font-bold">FITLOG</h2>
          </div>
        </div>
        <div>
            <p className="text-[#6B7280] text-[14px]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
