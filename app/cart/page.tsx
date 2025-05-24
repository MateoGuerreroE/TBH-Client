"use client";
import React, { useState } from "react";
import { useNPStore } from "../context/zustand";
import { Divider } from "@heroui/react";
import { formatPrice } from "@/utils";
import ButtonComponent from "@/baseComponents/ButtonComponent";
import Footer from "../sections/shared/Footer";
import { v4 as uuidv4 } from "uuid";
import CouponSection from "./components/CouponSection";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { userCart, incrementProduct, decrementProduct, clearCart } =
    useNPStore();
  const router = useRouter();
  const [loading, isLoading] = useState(false);
  const [discount, setDiscount] = useState<number>(0);

  const totalPrice = userCart.reduce((prev, next) => {
    return prev + next.productPrice * next.amount;
  }, 0);
  const taxes = totalPrice * 0.19; // TODO HAVE THIS ENV

  const handlePaymentRedirect = async () => {
    const idempotency_key = uuidv4();
    isLoading(true);
    const result = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/payment/create",
      {
        method: "POST",
        body: JSON.stringify({
          payment_amount: totalPrice + taxes,
          receipt: userCart,
          user_id: uuidv4(),
          idempotency_key,
        }),
      }
    );
    if (result.ok) {
      isLoading(false);
      clearCart();
      // Routes with internal metadata
      sessionStorage.setItem("internalNav", "true");
      router.push(`/checkout?payment_id=${idempotency_key}`);
    } else {
      isLoading(false);
      throw new Error("Error al crear la transacción"); // TODO This should be a toast
    }
  };

  return (
    <>
      <main className="bg-sky-100 pt-14 flex justify-center h-full pb-20">
        <div className="flex flex-col w-full h-full max-w-[1500px] items-center py-7 px-5 font-poppins gap-3 lg:gap-12">
          <h2 className="font-bold text-2xl md:text-4xl pb-3">
            Tu carrito ({userCart.length} productos)
          </h2>
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:px-10">
            <div className="flex flex-col w-full lg:w-2/3 py-4 max-h-[450px] lg:max-h-[650px] overflow-y-auto pt-7 bg-sky-50 rounded-lg">
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
                      <p
                        onClick={() => decrementProduct(product.productId)}
                        className="px-2 border-r-1 border-slate-400 hover:bg-slate-300 hover:cursor-pointer hover:scale-105"
                      >
                        -
                      </p>
                      <p className="px-3">{product.amount}</p>
                      <p
                        onClick={() => incrementProduct(product.productId)}
                        className="px-2 border-l-1 border-slate-400 hover:bg-slate-300 hover:cursor-pointer hover:scale-105"
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <Divider className="my-2" />
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full lg:w-1/3 px-3 gap-2 mb-10">
              <h3 className="font-bold text-xl lg:text-2xl">
                Resumen de tu compra
              </h3>
              <Divider />
              <div className="flex flex-row items-center justify-between text-xl font-semibold">
                <p>Subtotal</p>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <div className="flex flex-row items-center justify-between text-xl font-semibold text-slate-700">
                <p>Impuestos</p>
                <p>{formatPrice(taxes)}</p>
              </div>
              <div className="flex flex-row items-center justify-between text-lg font-semibold text-green-400">
                <p>Descuentos</p>
                <p>- {formatPrice(totalPrice * discount)}</p>
              </div>
              <CouponSection setDiscount={setDiscount} />
              <Divider />
              <div className="flex flex-row items-center justify-between text-xl font-semibold py-2">
                <p>Total</p>
                <p className="font-bold text-2xl">
                  {formatPrice(totalPrice + taxes - totalPrice * discount)}
                </p>
              </div>
              <ButtonComponent
                visualOpts={{ isLoading: loading }}
                label="Pagar"
                action={handlePaymentRedirect}
              />
              <p>
                * Podrás ver el costo de envío en el siguiente paso junto con la
                información de pago.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
