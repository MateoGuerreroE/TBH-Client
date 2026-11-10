"use client";
import type { IProductWithRelations } from "tbh-shared-types";
import React from "react";

type ProductLandingProps = {
  product: IProductWithRelations;
};

export default function ProductLanding({ product }: ProductLandingProps) {
  window.scrollTo(0, 0);
  return <div>{product.productName}</div>;
}
