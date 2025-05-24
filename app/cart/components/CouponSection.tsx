"use client";

import ButtonComponent from "@/baseComponents/ButtonComponent";
import { Input } from "@heroui/react";
import { useState } from "react";

export type CouponSectionProps = {
  setDiscount: (discount: number) => void;
};

export default function CouponSection({ setDiscount }: CouponSectionProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkCoupon = async () => {
    setLoading(true);
    try {
      const result = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/payment/coupon?coupon_code=${value}`
      );
      if (result.status === 200) {
        const { data } = await result.json();
        setDiscount(data);
        setMessage(value);
      } else {
        setMessage("ERROR: Cupón invalido");
        setDiscount(0);
      }
    } catch (e) {
      console.error(e);
      setMessage("ERROR: Cupón invalido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-0.5 border-slate-200 rounded-lg flex flex-col gap-1 py-3">
      <div className="flex flex-row gap-5">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          classNames={{
            label: "font-semibold text-medium",
            input: "text-md",
            inputWrapper: ["bg-slate-50", "data-[hover=true]:bg-slate-100"],
          }}
          label="Cupón:"
          labelPlacement="outside-left"
        />
        <ButtonComponent
          action={checkCoupon}
          label="Aplicar"
          disabled={!value.length}
          visualOpts={{ isLoading: loading }}
        />
      </div>
      {message.length ? (
        message.startsWith("ERROR") ? (
          <p className="text-red-600">{message.slice(6)}</p>
        ) : (
          <p>
            ✅ Cupon <b>{message}</b> aplicado
          </p>
        )
      ) : (
        <></>
      )}
    </div>
  );
}
