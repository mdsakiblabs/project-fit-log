import Image from "next/image";
import React,  { useContext } from "react";
import ExerciseContext from "@/context/ExerciseContext";
import DetailsPageButtons from "@/components/DetailsPageButtons";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return (
    <section className="w-full my-10">
      <div className="wraper max-w-270 mx-auto flex justify-between items-start gap-20">
        {/* left side image  */}
        <div>
          <Image 
          src={data.image} 
          width={500} 
          height={500} 
          alt="details-page-image"
          
          />
        </div>
        {/* right side texts  */}
        <div>
          <h1 className="font-bold text-5xl ">{data.name}</h1>
          <p className="text-[16px] my-3 leading-6 font-light">{data.description}</p>
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
            <table className="w-full">
              <tbody className="divide-y divide-[#232834] ">
                <tr>
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#9CA3AF]">
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
            <h2 className="mt-5 mb-3 text-2xl font-medium">INSTRUCTIONS</h2>
            <ol className="list-decimal pl-5 leading-9">
              {data.instructions.map((item, ind) => {
                return <li key={ind}>{item}</li>;
              })}
            </ol>
          </div>

            {/* buttons */}
          <DetailsPageButtons data={data}/>
        </div>
      </div>
    </section>
  );
};

export default page;
