import TrendCard from "@/app/components/static/TrendCard";
import React from "react";
import { ITrendWithRelations } from "tbh-shared-types";

type TrendingProducts = {
  products: ITrendWithRelations[];
};

export default async function Trending({ products }: TrendingProducts) {
  const trendingData = products.slice(0, 6);
  const productsData = trendingData.map((trend) => trend.product!);

  return (
    <section className="h-[1200px] md:h-[900px] w-full bg-gradient-to-tr to-[#FFEAE2] from-[#68c2dd] flex flex-col gap-5 items-center">
      <h2 className="pt-5 md:pt-0 font-poppins text-3xl md:text-4xl lg:pt-5 font-bold text-center">
        Tendencias 🔥
      </h2>
      <div className="flex flex-row w-full h-[92%] md:h-[90%] p-5 px-7 md:p-6 lg:p-10 max-w-[1500px]">
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-3 md:gap-4 lg:gap-6 w-full">
          <div className="lg:col-span-2">
            <TrendCard product={productsData[0]} />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <TrendCard product={productsData[1]} />
          </div>
          <div className="lg:col-start-2 lg:row-start-2 md:col-span-2 lg:col-span-1">
            <TrendCard product={productsData[2]} />
          </div>
          <div className="lg:row-span-2 lg:col-start-3 lg:row-start-1 md:row-span-2">
            <TrendCard product={productsData[3]} />
          </div>
          <div className="lg:col-start-4 lg:row-start-1">
            <TrendCard product={productsData[4]} />
          </div>
          <div className="lg:col-start-4 lg:row-start-2">
            <TrendCard product={productsData[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
