import { CartProduct } from "./Context.types";

export interface InternalPayment {
  payment_date: string;
  payment_amount: number;
  external_payment_id: string;
  idempotency_key: string;
  receipt: CartProduct[];
  status: string; //TODO This can be scoped
  external_response: JSON;
  payment_id: string;
}
