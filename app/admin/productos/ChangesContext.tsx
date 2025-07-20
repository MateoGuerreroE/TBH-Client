"use client";
import { CategoryInfo, ProductInfo, SubCategoryInfo } from "@/types/Data.types";
import { createContext, useContext } from "react";

type ProductAdministrationContext = {
  type: "product" | "category" | "subcategory";
  changeType: (type: "product" | "category" | "subcategory") => void;
  changes: Record<
    string,
    Partial<ProductInfo | CategoryInfo | SubCategoryInfo>
  >;
  setChanges: React.Dispatch<
    React.SetStateAction<
      Record<string, Partial<ProductInfo | CategoryInfo | SubCategoryInfo>>
    >
  >;
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryInfo[]>>;
  setSubCategories: React.Dispatch<React.SetStateAction<SubCategoryInfo[]>>;
};

export const ProductAdminContext = createContext<
  ProductAdministrationContext | undefined
>(undefined);

export const useProdAdminContext = () => {
  const ctx = useContext(ProductAdminContext);
  if (!ctx)
    throw new Error(
      "useProdAdminContext must be used within ProductAdminContext.Provider"
    );
  return ctx;
};
