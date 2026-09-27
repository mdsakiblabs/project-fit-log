import React from "react";
import LibrabySectionCard from "./LibrabySectionCard";

const TheLibrabySection = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  
  const cardData = await res.json();
  
  return (
    <section className="w-full mt-10 md:mt-15 desktop:px-0 px-5">
      <div className="wraper max-w-270 mx-auto">
        <div className="texts">
          <h1 className="text-3xl font-bold leading-10 font-stretch-50% font-sans">
            THE LIBRARY
          </h1>
          <h2 className="text-[#9CA3AF] font-light font-sans">
            Twelve lifts covering every major muscle group.
          </h2>
        </div>

        <div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-3  gap-6 mt-7">
          {cardData.map((data, ind) => {
            return <LibrabySectionCard key={ind} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TheLibrabySection;
