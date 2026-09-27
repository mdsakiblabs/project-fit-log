import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import DetailsPageButtons from "@/components/DetailsPageButtons";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  if (!data || !data.muscleGroups || !data.instructions) {
    notFound();
  }
  return (
    <section className="w-full desktop:px-0 px-5">
      <div className="wraper max-w-270 mx-auto desktop:flex justify-between items-start gap-5">
        {/* left side image  */}
        <div>
          <Image
            src={data.image}
            width={500}
            height={500}
            alt="details-page-image"
            className="rounded-2xl desktop:rounded-0 tablet:w-full tablet:h-125 object-cover object-center"
          />
        </div>
        {/* right side texts  */}
        <div>
          <h1 className="font-bold text-2xl tablet:text-4xl desktop:text-5xl desktop:mt-0 mt-3">
            {data.name}
          </h1>
          <p className="text-[13px] text-[#9CA3AF] tablet:text-[16px] desktop:my-3 leading-4 desktop:leading-6 font-light">
            {data.description}
          </p>
          <div className="flex gap-4 mt-3 mb-5">
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

          {/* table  */}

          <div className="overflow-hidden rounded-xl border border-[#232834] bg-[#151922] shadow-sm">
            <table className="w-full ">
              <tbody className="divide-y divide-[#232834] ">
                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide  text-[#9CA3AF]">
                    EQUIPMENT
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-medium capitalize text-[#E5E7EB]">
                    {data.equipment}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    DIFFICULTY
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-medium capitalize text-[#E5E7EB]">
                    {data.difficulty}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    SETS
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-semibold text-[#E5E7EB]">
                    {data.sets}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    REPS
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-semibold text-[#E5E7EB]">
                    {data.reps}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    DURATION
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-semibold text-[#E5E7EB]">
                    {data.duration}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    CALORIES
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-semibold text-[#E5E7EB]">
                    {data.caloriesBurned}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    RATING
                  </td>
                  <td className="px-4 py-2.5 text-right text-sm font-semibold text-[#E5E7EB]">
                    {data.rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* instructions section  */}
          <div>
            <h2 className="mt-5 md:mb-3 tablet:text-2xl text-xl mb-3 tablet:font-medium font-semibold">
              INSTRUCTIONS
            </h2>
            <ol className="list-decimal pl-5 tablet:leading-9 text-[#9CA3AF] leading-5">
              {data.instructions.map((item, ind) => {
                return (
                  <li className="tablet:mb-0 mb-3" key={ind}>
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* buttons */}
          <DetailsPageButtons data={data} />
        </div>
      </div>
    </section>
  );
};

export default page;
