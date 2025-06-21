import { ProductInfo } from "@/types/Data.types";
import { createContext, useContext } from "react";

type ProductAdministrationContext = {
  type: "product" | "category" | "subcategory";
  changeType: (type: "product" | "category" | "subcategory") => void;
  changes: Record<string, Partial<ProductInfo>>;
  setChanges: React.Dispatch<
    React.SetStateAction<Record<string, Partial<ProductInfo>>>
  >;
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
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
