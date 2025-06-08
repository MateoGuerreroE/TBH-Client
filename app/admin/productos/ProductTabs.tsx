"use client";
import { ProductInfo } from "@/types/Data.types";
import { Tab, Tabs } from "@heroui/react";
import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import { ProductAdminContext } from "./ChangesContext";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { cleanEmptyObjects } from "@/utils";

type TabProps = {
  productList: ProductInfo[];
};

export default function ProductTabs({ productList }: TabProps) {
  const [changeType, setChangeType] = useState<
    "product" | "category" | "subcategory"
  >("product");
  const [changes, setChanges] = useState<Record<string, Partial<ProductInfo>>>(
    {}
  );

  return (
    <ProductAdminContext.Provider
      value={{
        type: changeType,
        changeType: setChangeType,
        changes,
        setChanges,
      }}
    >
      <Tabs
        aria-label="ProductsSections"
        classNames={{ tabList: "bg-sky-100", tab: ["bg-sky-100", ""] }}
      >
        <Tab key="products" title="Productos" className="relative">
          <ButtonComponent
            label="Guardar todos los cambios"
            disabled={
              Object.keys(cleanEmptyObjects(changes)).length === 0 &&
              changeType === "product"
            }
            visualOpts={{ className: "absolute right-2 -top-9" }}
          />
          <div className="h-[800px] w-full">
            <ProductsGrid products={productList} />
          </div>
        </Tab>
        <Tab key="categories" title="Categorías"></Tab>
        <Tab key="subcategories" title="Subcategorías"></Tab>
      </Tabs>
    </ProductAdminContext.Provider>
  );
}
