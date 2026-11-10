import { PaymentStatusEnum } from "@/types/Payment.types";

type PaymentStatus = {
  message: string;
  status: "Aprobado" | "Pendiente" | "Rechazado";
  chip: string;
};

export function getPaymentStatus(status: string): PaymentStatus {
  switch (status) {
    case PaymentStatusEnum.APPROVED:
      return {
        message: "Pago aprobado ✅",
        status: "Aprobado",
        chip: `Una copia del comprobante ha sido enviada a: `,
      };
    case PaymentStatusEnum.PROCESSING:
      return {
        message: "Pago pendiente ⚠️",
        status: "Pendiente",
        chip: `Una vez recibida una respuesta del pago, enviaremos un correo a: `,
      };
    case PaymentStatusEnum.REJECTED:
      return {
        message: "Pago rechazado ❌",
        status: "Rechazado",
        chip: "El proveedor de pagos ha rechazado el pago. Intentalo nuevamente ",
      };
    case PaymentStatusEnum.PENDING:
      return {
        message: "Pago sin procesar⚠️",
        status: "Pendiente",
        chip: `En breve serás redirigido a la pasarela de pagos para completar tu compra`,
      };
    default:
      return {
        message: "Error en el pago ❌",
        status: "Rechazado",
        chip: "Error al procesar el pago. Intentalo nuevamente ",
      };
  }
}
