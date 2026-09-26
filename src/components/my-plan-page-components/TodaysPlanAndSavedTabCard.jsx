import Image from "next/image";
import React from "react";
import ratingPng from "../../../public/Star 1.png";
import heartPng from "../../../public/Heart.png";
import Link from "next/link";
const TodaysPlanAndSavedTabCard = ({ data }) => {
  return (
    <section className="w-full bg-[#13161D] border border-[#272B35] py-3 px-5 rounded-2xl mb-4">
      <div className="wraper flex justify-between items-center">
        {/* left side  */}
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src={data.image}
              width={144}
              height={80}
              alt="card-image"
              className="h-20 w-36 object-cover object-center rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl leading-7 font-bold">{data.name}</h2>
            <h3 className="text-[#8A92A0] font-semibold text-[14px] mb-1">
              {data.equipment}
            </h3>
            <div className="flex gap-9 items-center w-full">
              <h4>
                <i className="ri-time-line"></i> {data.duration}
              </h4>
              <h4 className="flex justify-center items-center gap-1">
                <span>
                  <Image
                    src={heartPng}
                    width={12}
                    alt="heart-png"
                    className="brightness-0 invert"
                  />
                </span>
                {data.caloriesBurned}
              </h4>
              <h4 className="flex justify-center items-center gap-1">
                <span>
                  <Image
                    src={ratingPng}
                    width={12}
                    className="brightness-0 invert"
                    alt="rating-png"
                  />
                </span>
                {data.rating}
              </h4>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="flex gap-5 items-center">
          <Link href={`/excersice/${data.id}`}>
          <button className="py-2 px-4 rounded-full border border-[#374151] cursor-pointer">View Details</button>
          </Link>
          <button className="py-2 px-4 rounded-full  bg-[#CCFF00] text-[#14171E] font-semibold cursor-pointer">
           <i className="ri-check-fill"></i> Mark as Done
            
            </button>
          <i className="ri-close-large-line cursor-pointer hover:bg-[#374151] px-2 py-1 rounded-full"></i>
        </div>
      </div>
    </section>
  );
};

export default TodaysPlanAndSavedTabCard;
