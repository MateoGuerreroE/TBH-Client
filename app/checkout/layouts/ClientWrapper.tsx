"use client";

import { useState } from "react";
import PaymentSection from "./PaymentSection";
import ShipForm from "./ShipForm";
import { Divider } from "@heroui/react";
import LoadingComponent from "@/app/components/LoadingComponent";
import { formatPrice } from "@/utils";
import ButtonComponent from "@/baseComponents/ButtonComponent";

type ClientWrapperProps = {
  payment: Record<string, any>;
};

export default function ClientWrapper({ payment }: ClientWrapperProps) {
  const [loading, isLoading] = useState(true);
  const [step, setStep] = useState<1 | 2>(1);
  const [paymentResponse, setPaymentResponse] = useState<any>(null);

  return (
    <div className="w-full flex justify-center p-5 min-h-[1000px]">
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row gap-7 font-poppins">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2 p-5 ">
            <h2 className="text-2xl font-semibold">Resumen</h2>
            <Divider className="my-2" />
            <div className="relative min-h-[100px]">
              {Object.keys(payment).length > 0 ? (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    {payment.receipt.map((item) => (
                      <div
                        key={item.productId}
                        className="text-sm flex flex-row justify-between"
                      >
                        <p>{item.productName}</p>
                        <p>x{item.amount}</p>
                      </div>
                    ))}
                    <Divider className="my-1" />
                    <div className="flex flex-row justify-between font-poppins font-semibold">
                      <h5>Precio de envío</h5>
                      <p>{formatPrice(0)}</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h5 className="text-2xl font-semibold">Total</h5>
                    <p className="font-bold text-xl">
                      {formatPrice(payment.payment_amount)}
                    </p>
                  </div>
                </div>
              ) : (
                <LoadingComponent />
              )}
            </div>
          </div>
          <div className="relative">
            {step === 2 && (
              <div className="absolute z-10 w-full h-full bg-sky-100/80"></div>
            )}
            <ShipForm isLoading={loading} parentAction={() => setStep(2)} />
          </div>
        </div>
        <div className="lg:w-1/2 mt-12">
          <div className="flex flex-col gap-3 pb-3">
            <h3 className="text-2xl font-bold">Pagar</h3>
            <p>
              Para proceder con el pago completa el formulario de datos de envío
            </p>
          </div>
          <div className="relative flex flex-col pb-12">
            {step === 1 && (
              <div className="absolute z-10 w-full h-full bg-sky-100/80"></div>
            )}
            <PaymentSection
              payment_id={payment.payment_id}
              setResult={setPaymentResponse}
              loadingParent={isLoading}
              price={payment.payment_amount}
            />
            {paymentResponse && paymentResponse.status === "approved" && (
              <p className="py-2">
                <b>Pago aproado</b> ✅ Serás redirigido a la página de
                confirmación en un momento...
              </p>
            )}
            <ButtonComponent
              action={() => setStep(1)}
              disabled={
                step === 1 ||
                loading ||
                (paymentResponse && paymentResponse.status === "approved")
              }
              label="Regresar a datos de envío"
              visualOpts={{ className: "mt-5" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
