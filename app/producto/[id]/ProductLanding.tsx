import type { IProductWithRelations } from "tbh-shared-types";
import React from "react";

type ProductLandingProps = {
  product: IProductWithRelations;
};

export default function ProductLanding({ product }: ProductLandingProps) {
  return <div>{product.productName}</div>;
}
