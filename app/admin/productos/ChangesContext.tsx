"use client";
import type {
  ICategoryRecord,
  IProductRecord,
  ISubcategoryRecord,
} from "tbh-shared-types";
import { createContext, useContext } from "react";

type ProductAdministrationContext = {
  type: "product" | "category" | "subcategory";
  changeType: (type: "product" | "category" | "subcategory") => void;
  changes: Record<
    string,
    Partial<IProductRecord | ICategoryRecord | ISubcategoryRecord>
  >;
  setChanges: React.Dispatch<
    React.SetStateAction<
      Record<
        string,
        Partial<IProductRecord | ICategoryRecord | ISubcategoryRecord>
      >
    >
  >;
  setProducts: React.Dispatch<React.SetStateAction<IProductRecord[]>>;
  setCategories: React.Dispatch<React.SetStateAction<ICategoryRecord[]>>;
  setSubCategories: React.Dispatch<React.SetStateAction<ISubcategoryRecord[]>>;
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
