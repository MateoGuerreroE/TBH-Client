import ButtonComponent from "@/app/components/shared/ButtonComponent";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import { ICategoriesWithProducts } from "tbh-shared-types";
import { formatCapsString } from "@/utils";

type CategoryPreviewProps = {
  set: ICategoriesWithProducts;
};

export default function CategoryPreview({ set }: CategoryPreviewProps) {
  return (
    <div className="flex flex-col md:pl-5 md:pt-5 gap-1">
      <div className="flex gap-8">
        <h3 className="font-poppins text-3xl font-bold mb-3">
          {formatCapsString(set.categoryName)}
        </h3>
        <ButtonComponent
          label="Ver más"
          visualOpts={{
            color: "secondary",
            className: "font-semibold text-lg",
            size: "md",
          }}
        />
      </div>
      <ProductCarousel productList={set.products} />
    </div>
  );
}
