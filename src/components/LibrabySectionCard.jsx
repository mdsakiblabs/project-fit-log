import Image from "next/image";
import React from "react";
import ratingPng from "../../public/Star 1.png";
import heartPng from "../../public/Heart.png";
import Link from "next/link";

const LibrabySectionCard = ({ data }) => {
  return (
    <>
    <Link href={`/excersice/${data.id}`}>
    <div className="bg-[#15171D] rounded-2xl overflow-hidden cursor-pointer">
      <div>
        <Image
          src={data.image}
          height={50}
          width={500}
          alt="library-card-image"
          className="w-full h-50 object-cover  "
        />
      </div>

      <div className="texts px-5">
        <div className="flex gap-4 mt-7 mb-4">
          {data.muscleGroups.map((item, ind) => {
            return (
              <h2
                key={ind}
                className="bg-[#C2F800] font-medium text-black px-3  rounded-2xl  flex justify-center items-center text-center"
              >
                {item}
              </h2>
            );
          })}
        </div>

        <h1 className="font-bold text-[20px] leading-8">{data.name}</h1>
        <h3 className="text-[#9CA3AF] text-[14px] font-light">
          {data.equipment}
        </h3>
        <div
          className="devider h-px
        bg-[#20242E] my-4"
        ></div>
        <div className="flex gap-7 font-light text-[#9CA3AF] text-[14px] mb-7">
          <h2 className=" flex gap-2 justify-center items-center">
            <i class="ri-time-line"></i>
            {data.duration} min
          </h2>
          <h2 className="flex justify-center items-center gap-2">
            <span>
              <Image
                src={heartPng}
                width={12}
                alt="heart-png"
                className="brightness-0 invert"
              />
            </span>
            {data.caloriesBurned} kcal
          </h2>
          <h2 className="flex justify-center items-center gap-2">
            <span>
              <Image
                src={ratingPng}
                width={12}
                className="brightness-0 invert"
                alt="rating-png"
              />
            </span>
            {data.rating}
          </h2>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

export default LibrabySectionCard;
