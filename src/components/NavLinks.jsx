"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  const isWorkoutActive = pathname === "/";
  const isMyPlanActive = pathname.startsWith("/my-plan");

  return (
    <div className="flex gap-7 text-base ">
      <Link href={"/"}>
        <h2
          className={`py-1 text-center px-4 rounded-3xl cursor-pointer ${
            isWorkoutActive
              ? "text-[#C2F800] bg-[#C2F800]/10"
              : "text-[#9CA3AF]"
          }`}
        >
          Workouts
        </h2>
      </Link>

      <Link href={"/my-plan/todays-plan"}>
        <h2
          className={`py-1 text-center px-4 rounded-3xl cursor-pointer ${
            isMyPlanActive ? "text-[#C2F800] bg-[#C2F800]/10" : "text-[#9CA3AF]"
          }`}
        >
          My Plan
        </h2>
      </Link>
    </div>
  );
};

export default NavLinks;
