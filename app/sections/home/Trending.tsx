import TrendCard from "@/app/components/TrendCard";
import { sampleProductData } from "@/test/sampleData";
import React from "react";

export default async function Trending() {
  const sampleData = sampleProductData;
  return (
    <section className="h-[1200px] md:h-[900px] w-full bg-gradient-to-tr to-[#FFEAE2] from-[#68c2dd] flex flex-col gap-5 items-center">
      <h2 className="pt-5 md:pt-0 font-poppins text-3xl md:text-4xl lg:pt-5 font-bold text-center">
        Tendencias 🔥
      </h2>
      <div className="flex flex-row w-full h-[92%] md:h-[90%] p-5 px-7 md:p-6 lg:p-10 max-w-[1500px]">
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-3 md:gap-4 lg:gap-6 w-full">
          <div className="lg:col-span-2">
            <TrendCard product={sampleData[0]} />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <TrendCard product={sampleData[1]} />
          </div>
          <div className="lg:col-start-2 lg:row-start-2 md:col-span-2 lg:col-span-1">
            <TrendCard product={sampleData[2]} />
          </div>
          <div className="lg:row-span-2 lg:col-start-3 lg:row-start-1 md:row-span-2">
            <TrendCard product={sampleData[3]} />
          </div>
          <div className="lg:col-start-4 lg:row-start-1">
            <TrendCard product={sampleData[4]} />
          </div>
          <div className="lg:col-start-4 lg:row-start-2">
            <TrendCard product={sampleData[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
