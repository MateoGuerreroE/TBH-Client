"use client";
import { formatPrice } from "@/utils";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Carousel from "../../../baseComponents/Carousel/Carousel";

export type ProductProps = {
  name: string;
  shortDescription: string;
  images: string[];
  price: number;
};

export default function ProductCard({ name, images, price }: ProductProps) {
  return (
    <div className="py-2 px-2.5 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
      <Card
        radius="sm"
        className="font-poppins max-w-[320px] lg:max-w-max h-full bg-white/30 backdrop-blur-md shadow-black/10 shadow-[0px_0px_14px_0px_rgba(0,_0,_0,_0.1)]
 my-2"
        shadow="none"
      >
        <CardHeader className=" w-full flex justify-center items-center">
          <h6 className="font-semibold text-2xl text-center">{name}</h6>
        </CardHeader>
        <CardBody className="flex flex-col p-7 gap-5">
          <div className="">
            <Carousel
              options={{
                autoPlay: false,
                watchDrag: false,
                dotButton: images.length > 1,
              }}
            >
              {images.map((image, index) => (
                <div key={`${index}_${image}`} className="h-44">
                  <Image
                    src={image}
                    alt={`${name}_mainImage`}
                    width={400}
                    className="h-full w-full"
                    height={400}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </CardBody>
        <CardFooter className="flex flex-row justify-between">
          <p className="ml-1 font-bold text-lg text-slate-800">{`${formatPrice(price)}`}</p>
          <Button
            radius="full"
            size="sm"
            className="bg-[#68c2dd] text-slate-800 text-sm font-semibold"
          >
            Agregar al carrito
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
