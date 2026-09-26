"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TodaysPlanAndSaveLinks = () => {
  const pathname = usePathname();

  const isTodayActive = pathname === "/my-plan/todays-plan";
  const isSavedActive = pathname === "/my-plan/saved";

  return (
    <div className="flex gap-5 bg-[#151921] py-2 px-5 rounded-2xl">
      <Link href={"/my-plan/todays-plan"}>
        <h2
          className={`text-xl font-semibold cursor-pointer py-1 px-3 rounded-3xl ${
            isTodayActive ? "text-[#C2F800] bg-[#C2F800]/10" : "text-[#9CA3AF]"
          }`}
        >
          Todays Plan
        </h2>
      </Link>

      <Link href={"/my-plan/saved"}>
        <h2
          className={`text-xl font-semibold cursor-pointer py-1 px-3 rounded-3xl ${
            isSavedActive ? "text-[#C2F800] bg-[#C2F800]/10" : "text-[#9CA3AF]"
          }`}
        >
          Saved
        </h2>
      </Link>
    </div>
  );
};

export default TodaysPlanAndSaveLinks;
