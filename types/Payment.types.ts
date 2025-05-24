import { CartProduct } from "./Context.types";

export interface InternalPayment {
  payment_date: string;
  payment_amount: number;
  external_payment_id: string;
  idempotency_key: string;
  receipt: CartProduct[];
  status: PaymentStatusEnum; //TODO This can be scoped
  external_response: PaymentData;
  payment_id: string;
}

export enum PaymentStatusEnum {
  APPROVED = "approved",
  PENDING = "pending",
  DENIED = "denied",
}

interface PaymentData {
  id: number;
  card: {
    id: number | null;
    tags: string[];
    country: string;
    cardholder: {
      name: string;
      identification: {
        type: string;
        number: string;
      };
    };
    date_created: string;
    expiration_year: number;
    expiration_month: number;
    first_six_digits: string;
    last_four_digits: string;
    date_last_updated: string;
  };
  tags: unknown;
  order: Record<string, unknown>;
  payer: {
    id: string;
    type: string | null;
    email: string;
    phone: {
      number: string | null;
      area_code: string | null;
      extension: string | null;
    };
    last_name: string | null;
    first_name: string | null;
    entity_type: string | null;
    identification: {
      type: string;
      number: string;
    };
  };
  taxes: {
    type: string;
    value: number;
  }[];
  status: string;
  tax_info: {
    base: number;
    amount: number;
    cap_id: number;
    detail: unknown;
    aliquot: number;
  };
  issuer_id: string;
  net_amount: number;
  currency_id: string;
  description: string | null;
  fee_details: {
    type: string;
    amount: number;
    fee_payer: string;
  }[];
  date_created: string;
  installments: number;
  taxes_amount: number;
  date_approved: string;
  status_detail: string;
  payment_method: {
    id: string;
    data: {
      routing_data: {
        merchant_account_id: string;
      };
    };
    type: string;
    issuer_id: string;
  };
  charges_details: {
    id: string;
    name: string;
    type: string;
    amounts: {
      original: number;
      refunded: number;
    };
    accounts: {
      to: string;
      from: string;
    };
    metadata: {
      reason: string;
      source: string;
    };
    client_id: number;
    [key: string]: unknown;
  }[];
  date_last_updated: string;
  transaction_amount: number;
}
