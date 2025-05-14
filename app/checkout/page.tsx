"use client";
import React from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { getMpInitialization } from "./mercadopago";

export default function Checkout() {
  const mpKey = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || "";
  initMercadoPago(mpKey);
  return (
    <main className="bg-sky-100 min-h-screen pt-14">
      <Payment {...getMpInitialization(157800)} />
    </main>
  );
}
