
import Image from "next/image";
import React from "react";
import ratingPng from "../../../public/Star 1.png";
import heartPng from "../../../public/Heart.png";
import Link from "next/link";
import RemoveBtnOfTodayPlanAndSavedPageCard from "./RemoveBtnOfTodayPlanAndSavedPageCard";

const TodaysPlanAndSavedTabCard = ({ data }) => {
  return (
    <section className="w-full bg-[#13161D] border border-[#272B35] py-2 px-2 sm:py-3 sm:px-4 md:px-5 rounded-2xl mb-4">
      <div className="wrapper flex justify-between items-center gap-2">

        {/* left side */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">

          {/* image */}
          <div className="shrink-0">
            <Image
              src={data.image}
              width={144}
              height={80}
              alt="card-image"
              className="
                w-10 h-10
                sm:w-14 sm:h-14
                md:w-24 md:h-20
                object-cover object-center
                rounded-full md:rounded-xl
              "
            />
          </div>

          {/* text */}
          <div className="min-w-0 flex-1">

            <h2
              className="
                text-[10px]
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                leading-4
                sm:leading-5
                md:leading-7
                font-bold
                truncate
              "
            >
              {data.name}
            </h2>

            <h3
              className="
                text-[#8A92A0]
                font-semibold
                text-[9px]
                sm:text-xs
                md:text-sm
                lg:text-base
                mb-1
                truncate
              "
            >
              {data.equipment}
            </h3>

            {/* stats */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-5 w-full">

              {/* duration */}
              <h4
                className="
                  text-[8px]
                  sm:text-[10px]
                  md:text-sm
                  lg:text-base
                  flex items-center justify-center
                  gap-1
                  whitespace-nowrap
                "
              >
                <i className="ri-time-line"></i>
                {data.duration}
              </h4>

              {/* calories */}
              <h4
                className="
                  flex justify-center items-center
                  gap-1
                  text-[8px]
                  sm:text-[10px]
                  md:text-sm
                  lg:text-base
                  whitespace-nowrap
                "
              >
                <Image
                  src={heartPng}
                  width={12}
                  height={12}
                  alt="heart-png"
                  className="brightness-0 invert w-2.5 h-2.5 sm:w-3 sm:h-3"
                />
                {data.caloriesBurned}
              </h4>

              {/* rating */}
              <h4
                className="
                  flex justify-center items-center
                  gap-1
                  text-[8px]
                  sm:text-[10px]
                  md:text-sm
                  lg:text-base
                  whitespace-nowrap
                "
              >
                <Image
                  src={ratingPng}
                  width={12}
                  height={12}
                  alt="rating-png"
                  className="brightness-0 invert w-2.5 h-2.5 sm:w-3 sm:h-3"
                />
                {data.rating}
              </h4>

            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">

          {/* view details */}
          <Link href={`/excersice/${data.id}`}>
            <button
              className="
                text-[7px]
                sm:text-[10px]
                md:text-sm
                lg:text-base
                px-1.5 py-1
                sm:px-2 sm:py-1.5
                md:px-3 md:py-2
                lg:px-4
                rounded-lg
                md:rounded-full
                border border-[#374151]
                whitespace-nowrap
                cursor-pointer
              "
            >
              View Details
            </button>
          </Link>

          {/* mark as done */}
          <button
            className="
              flex items-center gap-0.5
              text-[7px]
              sm:text-[10px]
              md:text-sm
              lg:text-base
              px-1.5 py-1
              sm:px-2 sm:py-1.5
              md:px-3 md:py-2
              lg:px-4
              rounded-lg
              md:rounded-full
              bg-[#CCFF00]
              text-[#14171E]
              font-semibold
              whitespace-nowrap
              cursor-pointer
            "
          >
            <i className="ri-check-fill text-[8px] sm:text-[10px] md:text-sm"></i>
            Mark as Done
          </button>

          {/* remove button */}
          <RemoveBtnOfTodayPlanAndSavedPageCard data={data} />

        </div>
      </div>
    </section>
  );
};

export default TodaysPlanAndSavedTabCard;

