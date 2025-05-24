import { PaymentStatusEnum } from "@/types/Payment.types";

export function getPaymentStatus(status: PaymentStatusEnum): {
  message: string;
  state: number;
} {
  switch (status) {
    case PaymentStatusEnum.APPROVED:
      return { message: "Pago aprobado", state: 1 };
    case PaymentStatusEnum.PENDING:
      return { message: "Pago pendiente", state: 5 };
    case PaymentStatusEnum.DENIED:
      return { message: "Pago rechazado", state: 0 };
  }
}
