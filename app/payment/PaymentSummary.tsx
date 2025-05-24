"use client";

import { InternalPayment } from "@/types/Payment.types";
import { getPaymentStatus } from "@/utils/payment";
import { Divider } from "@heroui/react";

type PaymentSummaryProps = {
  payment: InternalPayment;
};

export default function PaymentSummary({ payment }: PaymentSummaryProps) {
  const { message: paymentMessage, state: paymentState } = getPaymentStatus(
    payment.status
  );

  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-[1500px] flex flex-col items-center justify-center font-poppins">
        <h2 className="text-4xl">{paymentMessage}</h2>
        <Divider className="my-3" />
      </div>
    </div>
  );
}
