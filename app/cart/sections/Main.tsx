"use client";
import { useAppStore, useNPStore } from "@/app/context/zustand";
import { formatPrice } from "@/utils";
import { addToast, Divider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CouponSection from "../components/CouponSection";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { postResource } from "@/server/fetch";
import { IOrderWithRelations } from "tbh-shared-types";

export default function Main() {
  const { userCart, incrementProduct, decrementProduct, clearCart } =
    useNPStore();

  const router = useRouter();
  const [loading, isLoading] = useState(false);
  const [discount, setDiscount] = useState<number>(0);
  const { user, visitorToken } = useAppStore();

  const totalPrice = userCart.reduce((prev, next) => {
    return prev + parseFloat(next.product.productPrice) * next.amount;
  }, 0);
  const taxes = totalPrice * 0.19; // TODO HAVE THIS ENV

  const handlePaymentRedirect = async () => {
    isLoading(true);
    try {
      const { data } = await postResource<IOrderWithRelations>(
        "order/create",
        {
          userId: user ? user.entityId : undefined,
          taxes,
          orderProductTotal: totalPrice,
          items: userCart.map((item) => ({
            productId: item.product.productId,
            amount: item.amount,
            priceAtPurchase: parseFloat(item.product.productPrice),
          })),
        },
        user ? user.token : visitorToken!
      );
      clearCart();
      router.push(`/checkout?order_id=${data.orderId}`);
    } catch {
      addToast({
        title: "Error al crear la orden",
        description: "Por favor, intenta nuevamente más tarde.",
        color: "danger",
      });
    } finally {
      isLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-full max-w-[1500px] items-center py-7 px-5 font-poppins gap-3 lg:gap-12 pb-20">
      <h2 className="font-bold text-2xl md:text-4xl pb-3">
        Tu carrito ({userCart.length} productos)
      </h2>
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:px-10">
        <div className="flex flex-col w-full lg:w-2/3 py-4 max-h-[450px] lg:max-h-[650px] overflow-y-auto pt-7 bg-sky-50 rounded-lg">
          {userCart.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 px-5">
              <div className="flex flex-row justify-between">
                <h5 className="font-semibold">
                  {item.product.productName.slice(0, 20)}...
                </h5>

                <p>
                  {formatPrice(
                    parseFloat(item.product.productPrice) * item.amount
                  )}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm italic max-w-[200px]">
                  {item.product.productName}
                </p>
                <div className="flex flex-row text-lg font-semibold items-center bg-slate-50 rounded-md">
                  <p
                    onClick={() => decrementProduct(item.product.productId)}
                    className="px-2 border-r-1 border-slate-400 hover:bg-slate-300 hover:cursor-pointer hover:scale-105"
                  >
                    -
                  </p>
                  <p className="px-3">{item.amount}</p>
                  <p
                    onClick={() => incrementProduct(item.product.productId)}
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
          <div className="flex flex-row items-center justify-between text-lg font-semibold text-slate-500">
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
            visualOpts={{
              isLoading: loading,
              size: "lg",
              className: "font-semibold",
            }}
            label="Ir al pago"
            action={handlePaymentRedirect}
          />
          <p>
            * Podrás ver el costo de envío en el siguiente paso junto con la
            información de pago.
          </p>
        </div>
      </div>
    </div>
  );
}
