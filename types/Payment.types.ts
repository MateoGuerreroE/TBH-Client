import { IProductRecord } from "tbh-shared-types";

export interface OrderData {
  addressId: string | null;
  orderId: string;
  items: OrderItemData[];
  userId: string | null;
  paymentId: string | null;
  orderDate: Date;
  orderProductTotal: string;
  taxes: string;
  user: InternalUser | null;
}

export interface OrderItemData {
  amount: string;
  orderId: string;
  orderItemId: string;
  priceAtPurchase: string;
  product: IProductRecord;
  productId: string;
}

export enum PaymentStatusEnum {
  APPROVED = "approved",
  PROCESSING = "in_process",
  REJECTED = "rejected",
  PENDING = "pending",
}

export interface InternalUser {
  userId: string;
  firstName: string;
  lastName: string;
  address: string | null;
  city: string | null;
  phone: string | null;
  avatarUrl: string | null;
  isEmailVerified: boolean;
  isEnabled: boolean;
  emailAddress: string;
  firebaseId: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  lastLoginAt: Date | null;
  deletedBy: string;
}
