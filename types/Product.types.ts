import { ProductInfo } from "./Data.types";

export interface TrendProduct {
  trendId: string;
  productId: string;
  isVisibleOnGrid: boolean;
  isVisibleOnCarousel: boolean;
  trendDiscount: string | null;
  addedAt: Date;
  updatedAt: Date;
  createdBy: string;
  product: ProductInfo;
}
