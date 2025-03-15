import { Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { formatPrice } from "@/utils/format";

type Props = {
  image: string;
  productName: string;
  description: string;
  price: number;
  discount?: number;
  // TODO Add here redirect URL
};

export default function ProductCard({
  image,
  productName,
  description,
  price,
  discount,
}: Props) {
  return (
    <Card
      isFooterBlurred={true}
      className="border-none w-full h-full relative hover:cursor-pointer hover:scale-105 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      radius="lg"
    >
      <Image
        src={image}
        alt="sample"
        className="object-cover w-full h-full"
        width={1000}
        height={1000}
      />
      {discount && (
        <div
          className={`absolute rounded-bl-lg shadow-inner right-0 bg-${discount < 20 ? "green" : discount < 50 ? "orange" : "red"}-600 font-poppins font-bold text-xl p-2`}
        >
          {"- " + discount + "%"}
        </div>
      )}
      <CardFooter className="absolute bg-white/10 self-end bottom-0 w-full gap-6 flex flex-col items-start translate-y-[75%] hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="flex flex-row justify-between w-full items-center">
          <h4 className="font-poppins font-semibold text-2xl text-left">
            {productName}
          </h4>
          <p className="font-geist font-semibold text-md">
            {formatPrice(price)}
          </p>
        </div>

        <p className="font-poppins">{description}</p>
        <Button text="Comprar" />
      </CardFooter>
    </Card>
  );
}
