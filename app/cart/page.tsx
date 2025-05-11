"use client";
import React from "react";
import { useNPStore } from "../context/zustand";
import { Divider } from "@heroui/react";
import { formatPrice } from "@/utils";
import ButtonComponent from "@/components/base/ButtonComponent";

export default function Cart() {
  const { userCart } = useNPStore();
  const totalPrice = userCart.reduce((prev, next) => {
    return prev + next.productPrice * next.amount;
  }, 0);
  const taxes = totalPrice * 0.19; // TODO HAVE THIS ENV

  return (
    <main className="bg-sky-100 pt-14 flex justify-center h-full min-h-[calc(100vh-80px)] md:h-[calc(100vh-120px)]">
      <div className="flex flex-col w-full h-full max-w-[1500px] items-center py-7 px-5 font-poppins gap-3">
        <h2 className="font-bold text-2xl md:text-4xl pb-3">
          Tu carrito ({userCart.length} productos)
        </h2>
        <div className="flex flex-col w-full py-4 max-h-[450px] overflow-y-auto pt-7 bg-sky-50">
          {userCart.map((product, idx) => (
            <div key={idx} className="flex flex-col gap-2 px-5">
              <div className="flex flex-row justify-between">
                <h5 className="font-semibold">
                  {product.productName.slice(0, 20)}...
                </h5>

                <p>{formatPrice(product.productPrice * product.amount)}</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm italic max-w-[200px]">
                  {product.productName}
                </p>
                <div className="flex flex-row text-lg font-semibold items-center bg-slate-50 rounded-md">
                  <p className="px-2 border-r-1 border-slate-400">-</p>
                  <p className="px-3">{product.amount}</p>
                  <p className="px-2 border-l-1 border-slate-400">+</p>
                </div>
              </div>
              <Divider className="my-2" />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full px-3 gap-2 mb-10">
          <div className="flex flex-row items-center justify-between text-xl font-semibold">
            <p>Subtotal</p>
            <p>{formatPrice(totalPrice)}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-xl font-semibold text-slate-700">
            <p>Impuestos</p>
            <p>{formatPrice(taxes)}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-lg font-semibold">
            <p>Descuentos</p>
            <p>- {formatPrice(taxes)}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-xl font-semibold py-2">
            <p>Total</p>
            <p className="font-bold text-2xl">{formatPrice(totalPrice)}</p>
          </div>
          <ButtonComponent label="Pagar" />
        </div>
      </div>
    </main>
  );
}
