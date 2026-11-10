"use client";

import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { useAppStore } from "@/app/context/zustand";
import { getResource } from "@/server/fetch";
import { Input } from "@heroui/react";
import { useState } from "react";
import { ICouponRecord } from "tbh-shared-types";

export type CouponSectionProps = {
  setDiscount: (discount: number) => void;
};

export default function CouponSection({ setDiscount }: CouponSectionProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { visitorToken } = useAppStore();

  const checkCoupon = async () => {
    setLoading(true);
    try {
      const { data } = await getResource<ICouponRecord>(
        `coupon/validate?couponCode=${value}`,
        false,
        {
          cacheOptions: {
            cache: "no-store",
          },
          authorization: visitorToken!,
        }
      );

      setDiscount(parseFloat(data.discountAmount));
      setMessage(value + ` (-${parseFloat(data.discountAmount) * 100}%)`);
    } catch {
      setDiscount(0);
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
