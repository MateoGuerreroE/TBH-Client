"use client";
import { StatusScreen } from "@mercadopago/sdk-react";

type StatusSectionProps = {
  paymentId: string;
};

export default function StatusSection({ paymentId }: StatusSectionProps) {
  return <StatusScreen initialization={{ paymentId }} />;
}
