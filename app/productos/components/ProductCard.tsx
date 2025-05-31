"use client";
import { formatPrice } from "@/utils";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { useNPStore } from "@/app/context/zustand";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { ProductInfo } from "@/types/Data.types";

export type ProductProps = {
  productInfo: ProductInfo;
};

export default function ProductCard({ productInfo }: ProductProps) {
  const { addToCart } = useNPStore();

  return (
    <div className="py-2 px-2.5 hover:cursor-pointer hover:scale-[103%] transition-all duration-200 ease-in-out">
      <Card
        radius="sm"
        className="font-poppins w-[300px] h-full bg-[#FFFFF0]/30 backdrop-blur-md shadow-black/10 shadow-[0px_0px_14px_0px_rgba(0,_0,_0,_0.1)] my-2"
        shadow="none"
      >
        <CardHeader className="w-full h-20 flex justify-center items-center">
          <h6
            className={`font-semibold text-center ${productInfo.productName.length > 32 ? "text-xl" : "text-2xl"}`}
          >
            {productInfo.productName}
          </h6>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-5 p-0">
          <div className="h-[250px]">
            <Image
              src={productInfo.productImages[0]}
              alt="product_main"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-row py-5 justify-between">
          <p className="ml-1 font-bold text-lg text-slate-800">{`${formatPrice(productInfo.productPrice)}`}</p>
          <ButtonComponent
            label="Agregar al carrito"
            visualOpts={{ size: "sm" }}
            action={() =>
              addToCart({
                product: productInfo,
                amount: 1,
              })
            }
          />
        </CardFooter>
      </Card>
    </div>
  );
}
