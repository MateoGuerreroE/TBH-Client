import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function Main() {
  return (
    <section className="h-[800px] w-full bg-gradient-to-tl from-[#FFEAE2] to-[#9AD8EB] -translate-y-14 flex justify-center">
      <div className="flex flex-row w-full h-full max-w-[1500px]">
        <div className="h-full w-1/2 flex flex-col justify-center items-center gap-10">
          <div className="title font-poppins text-6xl font-medium">
            <h3>Apple AirPods</h3>
            <h3>Max | Sky Blue</h3>
          </div>
          <div className="flex flex-row gap-5">
            <Button text="Comprar ahora" />
            <Button text="Ver productos similares" isUnfocused />
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <Image
            src="/migrate_cloud/airpods.png"
            alt="airpods"
            height={600}
            width={600}
          />
        </div>
      </div>
    </section>
  );
}
