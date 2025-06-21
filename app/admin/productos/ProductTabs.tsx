"use client";
import { ProductInfo, SubCategoryInfo } from "@/types/Data.types";
import { addToast, Tab, Tabs } from "@heroui/react";
import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import { ProductAdminContext } from "./ChangesContext";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { cleanEmptyObjects } from "@/utils";
import { postResource } from "@/server/fetch";
import LoadingComponent from "@/app/components/shared/LoadingComponent";
import { useRouter } from "next/navigation";
import ProductCreationModal from "./Grid/ProductCreationModal";

type TabProps = {
  productList: ProductInfo[];
  subCategories: SubCategoryInfo[];
};

export default function ProductTabs({ productList, subCategories }: TabProps) {
  const [loading, isLoading] = useState(false);
  const [changeType, setChangeType] = useState<
    "product" | "category" | "subcategory"
  >("product");
  const [changes, setChanges] = useState<Record<string, Partial<ProductInfo>>>(
    {}
  );
  const [products, setProducts] = useState<ProductInfo[]>(productList);
  const router = useRouter();

  const handleProductChangesSave = async () => {
    isLoading(true);
    try {
      const changesToSave = Object.entries(changes).map(
        ([productId, changes]) => ({
          productId,
          ...changes,
        })
      );

      await postResource("product/updateBatch", {
        productsToUpdate: changesToSave,
        updatedBy: "e7bc3690-48ee-424f-9ce3-2572372bdb66",
      });

      addToast({
        title: "Cambios guardaddos",
        description: `Has realizado ${changesToSave.length} cambios`,
        color: "success",
      });
      setProducts((prev) => {
        const updatedProducts = [...prev];
        changesToSave.forEach((change) => {
          const index = updatedProducts.findIndex(
            (p) => p.productId === change.productId
          );
          if (index !== -1) {
            updatedProducts[index] = {
              ...updatedProducts[index],
              ...change,
            };
          }
        });
        setChanges({});
        return updatedProducts;
      });
    } catch (error) {
      console.error("Error saving changes:", error);
      addToast({
        title: "Error al guardar cambios",
        description: "No se pudieron guardar los cambios. Inténtalo de nuevo.",
        color: "danger",
      });
    } finally {
      router.push("/admin/productos");
      isLoading(false);
    }
  };

  return (
    <ProductAdminContext.Provider
      value={{
        type: changeType,
        changeType: setChangeType,
        changes,
        setChanges,
        setProducts: setProducts,
      }}
    >
      <Tabs
        aria-label="ProductsSections"
        classNames={{ tabList: "bg-sky-100", tab: ["bg-sky-100", ""] }}
      >
        <Tab key="products" title="Productos" className="relative">
          {loading && <LoadingComponent />}
          <ButtonComponent
            label="Guardar cambios"
            disabled={
              Object.keys(cleanEmptyObjects(changes)).length === 0 &&
              changeType === "product"
            }
            visualOpts={{ className: "absolute right-2 -top-9" }}
            action={handleProductChangesSave}
          />
          <div className="absolute right-44 -top-9">
            <ProductCreationModal
              subCategories={subCategories}
              setProducts={setProducts}
            />
          </div>
          <div className="h-[800px] w-full">
            <ProductsGrid products={products} subCategories={subCategories} />
          </div>
        </Tab>
        <Tab key="categories" title="Categorías"></Tab>
        <Tab key="subcategories" title="Subcategorías"></Tab>
      </Tabs>
    </ProductAdminContext.Provider>
  );
}
