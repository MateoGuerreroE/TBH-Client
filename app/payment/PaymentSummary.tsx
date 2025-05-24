"use client";

type PaymentSummaryProps = {
  payment: any;
};

export default function PaymentSummary({ payment }: PaymentSummaryProps) {
  return <div>{JSON.stringify(payment)}</div>;
}
