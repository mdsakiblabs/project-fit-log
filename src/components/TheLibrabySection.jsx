import React from "react";
import LibrabySectionCard from "./LibrabySectionCard";

const TheLibrabySection = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const cardData = await res.json();

  return (
    <section className="w-full mt-15">
      <div className="wraper max-w-270 mx-auto">
        <div className="texts">
          <h1 className="text-3xl font-bold leading-10 font-stretch-50% font-sans">THE LIBRARY</h1>
          <h2 className="text-[#9CA3AF] font-light font-sans">Twelve lifts covering every major muscle group.</h2>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-7">
          {cardData.map((data, ind) => {
            return <LibrabySectionCard key={ind} 
            data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TheLibrabySection;
