"use client";
import { formatPrice } from "@/utils";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { useNPStore } from "@/app/context/zustand";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import type { IProductRecord } from "tbh-shared-types";
import { useRouter } from "next/navigation";

export type ProductProps = {
  product: IProductRecord;
};

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useNPStore();
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/producto/${product.productId}`)}
      className="py-2 px-2.5 hover:cursor-pointer hover:scale-[103%] transition-all duration-200 ease-in-out"
    >
      <Card
        radius="sm"
        className="font-poppins w-[300px] lg:w-[400px] h-full bg-[#FFFFF0]/30 backdrop-blur-md shadow-black/10 shadow-[0px_0px_14px_0px_rgba(0,_0,_0,_0.1)] my-2"
        shadow="none"
      >
        <CardHeader className="w-full h-24 flex justify-center items-center">
          <h6
            className={`font-semibold text-center ${product.productName.length > 32 ? "text-lg/6" : "text-xl"} `}
          >
            {product.productName}
          </h6>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-5 p-0">
          <div className="h-[300px]">
            <Image
              src={
                product.productImages[0]?.url ??
                "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }
              alt="product_main"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-row py-5 justify-between">
          <p className="ml-1 font-bold text-xl text-slate-800">{`${formatPrice(product.productPrice)}`}</p>
          <ButtonComponent
            label="Agregar al carrito"
            visualOpts={{ size: "md" }}
            action={() =>
              addToCart({
                product: product,
                amount: 1,
              })
            }
          />
        </CardFooter>
      </Card>
    </div>
  );
}
