"use client";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { getMpInitialization } from "../mercadopago";
import { useState, useEffect, useMemo, useRef } from "react";
import StatusSection from "./StatusSection";
import React from "react";
import { useAppStore } from "@/app/context/zustand";

type PaymentSectionProps = {
  orderId: string;
  setResult: (val: any) => void;
  loadingParent: (val: boolean) => void;
  price: number;
  shipInfo: any;
};

const PaymentSection = ({
  orderId,
  shipInfo: payer,
  setResult,
  loadingParent,
  price,
}: PaymentSectionProps) => {
  const [paymentResponse, setPaymentResponse] = useState<any>(null);
  const { visitorToken } = useAppStore();

  const resultRef = useRef(setResult);
  const loadingRef = useRef(loadingParent);

  useEffect(() => {
    resultRef.current = setResult;
    loadingRef.current = loadingParent;
  }, [setResult, loadingParent]);

  useEffect(() => {
    const mpKey = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || "";
    initMercadoPago(mpKey);
  }, []);

  const initialization = useMemo(
    () =>
      getMpInitialization({
        orderId,
        visitorToken: visitorToken as string,
        amount: price,
        payer,
        loadingFunction: loadingRef.current,
        setPayment: (res) => {
          resultRef.current(res);
          setPaymentResponse(res);
        },
      }),
    [price, orderId]
  );

  return (
    <>
      {!paymentResponse ? (
        <Payment {...initialization} />
      ) : (
        <div className="flex flex-col h-full w-full gap-3">
          <StatusSection paymentId={paymentResponse.externalPaymentId} />
        </div>
      )}
    </>
  );
};

export default React.memo(
  PaymentSection,
  (prev, next) =>
    prev.price === next.price &&
    prev.setResult === next.setResult &&
    prev.loadingParent === next.loadingParent
);
