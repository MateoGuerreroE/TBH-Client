import { ProductInfo } from "@/types/Data.types";
import React from "react";

type ProductLandingProps = {
  product: ProductInfo;
};

export default function ProductLanding({ product }: ProductLandingProps) {
  return <div>{product.productName}</div>;
}
