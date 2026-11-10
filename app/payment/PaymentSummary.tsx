"use client";

import { PaymentStatusEnum } from "@/types/Payment.types";
import { formatPrice } from "@/utils";
import { getPaymentStatus } from "@/utils/payment";
import { Card, CardBody, Divider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IPaymentWithRelations } from "tbh-shared-types";

type PaymentSummaryProps = {
  payment: IPaymentWithRelations;
};

export default function PaymentSummary({ payment }: PaymentSummaryProps) {
  const {
    message: paymentMessage,
    status: paymentStatus,
    chip,
  } = getPaymentStatus(payment.status);

  const router = useRouter();

  useEffect(() => {
    if (payment.status === PaymentStatusEnum.PENDING) {
      router.push(`/checkout?payment_id=${payment.paymentId}`);
    }
  }, []);

  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-[1500px] min-h-[550px] flex flex-col pt-12 items-center font-poppins">
        <h2 className="text-4xl font-bold">{paymentMessage}</h2>
        <Divider className="my-5" />
        <div className="mb-5 font-poppins text-medium md:text-lg bg-sky-200 py-2 px-4 rounded-full text-center">
          {chip}
          <b>{payment.order?.user?.emailAddress}</b>
        </div>
        <Card className="w-full max-w-[650px] p-5 mt-2 mb-10 bg-sky-50">
          <CardBody>
            <div className="flex flex-col gap-3 w-full pt-5">
              <div className="flex flex-row w-full justify-between">
                <label className="text-lg font-bold">ID de pago:</label>
                <p className="text-sm md:text-medium text-right">
                  {payment.paymentId}
                </p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <label className="text-lg font-bold">ID Transacción:</label>
                <p>{payment.externalPaymentId}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <label className="text-medium md:text-lg font-bold">
                  Valor:
                </label>
                <p>{formatPrice(payment.order?.orderProductTotal)}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <label className="text-lg font-bold">Impuestos:</label>
                <p>{formatPrice(payment.order?.taxes)}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <label className="text-medium md:text-lg font-bold">
                  Total:
                </label>
                <p>{formatPrice(payment.paymentAmount)}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <label className="text-lg font-bold">
                  Fecha de transacción:
                </label>
                <p className="text-right">
                  {new Date(payment.paymentDate).toLocaleDateString("es-ES", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <label className="text-lg font-bold">Estado:</label>
                <p>{paymentStatus}</p>
              </div>
            </div>
            <Divider className="my-10 w-full" />
            <div className="flex flex-col w-full max-w-[600px]">
              <h2 className="font-bold text-2xl self-center">
                Productos en la orden
              </h2>
              <div className="flex flex-col gap-3 py-7">
                {payment.order?.items?.map((item) => (
                  <div
                    key={item.product?.productId}
                    className="flex flex-row justify-between w-full"
                  >
                    <p className="w-1/2">{item.product?.productName}</p>
                    <div className="flex flex-row gap-2 items-center w-1/3 justify-between">
                      <p>{item.amount} x</p>
                      <p>{formatPrice(item.product?.productPrice)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
