"use client";
import Carousel from "@/app/components/shared/Carousel/Carousel";
import type { IProductRecord } from "tbh-shared-types";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

type Props = {
  productList: IProductRecord[];
  breakPoint?: number;
};

export default function ProductCarousel({
  productList,
  breakPoint = 820,
}: Props) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakPoint);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakPoint]);
  return (
    <Carousel
      options={{
        loop: false,
        adapt: true,
        dragFree: false,
        arrowButtons: !isMobile,
      }}
    >
      {productList.map((product, index) => (
        <ProductCard
          key={`${index}_${product.productName}`}
          product={product}
        />
      ))}
      <div className="h-full bg-transparent w-full mr-6 flex flex-col gap-2 items-center justify-center hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
        <div className="h-32 w-32 bg-[#017392] rounded-full">
          <Image
            src="/icons/fdots.svg"
            alt="see_more"
            width={50}
            height={50}
            className="w-full h-full px-5"
          />
        </div>
        <p className="text-xl">Ver más</p>
      </div>
    </Carousel>
  );
}
