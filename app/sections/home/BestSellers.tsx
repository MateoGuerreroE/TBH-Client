"use client";
import ProductCard from "@/components/ProductCard";
import React from "react";

export default function BestSellers() {
  return (
    <section className="-translate-y-14 h-[850px] w-full bg-gradient-to-tr to-[#FFEAE2] from-[#9AD8EB] flex flex-col gap-5 items-center">
      <h2 className="font-poppins text-4xl font-bold text-center">
        Tendencias 🔥
      </h2>
      <div className="flex flex-row w-full h-[90%] p-10 max-w-[1500px]">
        <div className="grid grid-cols-4 grid-rows-2 gap-7 w-full">
          <div className="col-span-2">
            <ProductCard
              image="/migrate_cloud/sample2.jpg"
              productName="Producto 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit libero officia accusamus et atque"
              price={34500}
              discount={10}
            />
          </div>
          <div className="col-start-1 row-start-2">
            <ProductCard
              image="/migrate_cloud/sample1.jpg"
              productName="Producto 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit libero officia accusamus et atque"
              price={75000}
            />
          </div>
          <div className="col-start-2 row-start-">
            <ProductCard
              image="/migrate_cloud/sample3.jpg"
              productName="Producto 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit libero officia accusamus et atque"
              price={180000}
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-1">
            <ProductCard
              image="/migrate_cloud/sample4.jpg"
              productName="Producto 4"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit libero officia accusamus et atque"
              price={975000}
            />
          </div>
          <div className="col-start-4 row-start-1">
            <ProductCard
              image="/migrate_cloud/sample5.jpeg"
              productName="Producto 5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit libero officia accusamus et atque"
              price={79800}
              discount={55}
            />
          </div>
          <div className="col-start-4 row-start-2">
            <ProductCard
              image="/migrate_cloud/sample6.jpg"
              productName="Producto 6"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit libero officia accusamus et atque"
              price={115000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
