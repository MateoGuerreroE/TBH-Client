"use client";
import { CategoryInfo, ProductInfo, SubCategoryInfo } from "@/types/Data.types";
import { addToast, Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import { ProductAdminContext } from "./ChangesContext";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { cleanEmptyObjects } from "@/utils";
import { postResource } from "@/server/fetch";
import LoadingComponent from "@/app/components/shared/LoadingComponent";
import { useRouter } from "next/navigation";
import ProductCreationModal from "./Grid/ProductCreationModal";
import CategoryGrid from "./CategoryGrid";
import CategoryCreationModal from "./Grid/CategoryCreationModal";
import SubCategoryGrid from "./SubCategoryGrid";
import SubCategoryCreationModal from "./Grid/SubCategoryCreationModal";

type TabProps = {
  productList: ProductInfo[];
  categories: CategoryInfo[];
  subCategories: SubCategoryInfo[];
};

export default function ProductTabs({
  productList,
  subCategories,
  categories,
}: TabProps) {
  const [loading, isLoading] = useState(false);
  const [changeType, setChangeType] = useState<
    "product" | "category" | "subcategory"
  >("product");
  const [changes, setChanges] = useState<
    Record<string, Partial<ProductInfo | CategoryInfo>>
  >({});
  const [products, setProducts] = useState<ProductInfo[]>(productList);
  const [categoriesList, setCategories] = useState<CategoryInfo[]>(categories);
  const [subCategoriesList, setSubCategories] =
    useState<SubCategoryInfo[]>(subCategories);
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

  const handleCategorySaveChanges = async () => {
    isLoading(true);
    try {
      const changesToSave = Object.entries(changes).map(
        ([categoryId, changes]) => ({
          categoryId,
          ...changes,
        })
      );

      await postResource("category/updateBatch", {
        categoriesToUpdate: changesToSave,
        updatedBy: "e7bc3690-48ee-424f-9ce3-2572372bdb66",
      });

      addToast({
        title: "Cambios guardaddos",
        description: `Has realizado ${changesToSave.length} cambios`,
        color: "success",
      });

      setCategories((prev) => {
        const updatedCategories = [...prev];
        (changesToSave as CategoryInfo[]).forEach((change) => {
          const index = updatedCategories.findIndex(
            (p) => p.categoryId === change.categoryId
          );
          if (index !== -1) {
            updatedCategories[index] = {
              ...updatedCategories[index],
              ...change,
            };
          }
        });
        setChanges({});
        return updatedCategories;
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
        setSubCategories: setSubCategories,
        setCategories: setCategories,
        changeType: setChangeType,
        changes,
        setChanges,
        setProducts: setProducts,
      }}
    >
      <ButtonComponent
        label="Regresar"
        action={() => router.push("/admin")}
        visualOpts={{
          color: "secondary",
          className: "absolute right-7 top-5",
        }}
      />
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
        <Tab key="categories" title="Categorías" className="relative">
          {loading && <LoadingComponent />}
          <ButtonComponent
            label="Guardar cambios"
            disabled={
              Object.keys(cleanEmptyObjects(changes)).length === 0 &&
              changeType === "category"
            }
            visualOpts={{ className: "absolute right-2 -top-9" }}
            action={handleCategorySaveChanges}
          />
          <div className="absolute right-44 -top-9">
            <CategoryCreationModal setCategories={setCategories} />
          </div>
          <div className="h-[800px] w-full">
            <CategoryGrid categories={categoriesList} />
          </div>
        </Tab>
        <Tab key="subcategories" title="Subcategorías" className="relative">
          {loading && <LoadingComponent />}
          <ButtonComponent
            label="Guardar cambios"
            disabled={
              Object.keys(cleanEmptyObjects(changes)).length === 0 &&
              changeType === "subcategory"
            }
            visualOpts={{ className: "absolute right-2 -top-9" }}
            // action={handleCategorySaveChanges}
          />
          <div className="absolute right-44 -top-9">
            <SubCategoryCreationModal
              setSubCategories={setSubCategories}
              categories={categoriesList}
            />
          </div>
          <div className="h-[800px] w-full">
            <SubCategoryGrid
              subCategories={subCategoriesList}
              categories={categoriesList}
            />
          </div>
        </Tab>
      </Tabs>
    </ProductAdminContext.Provider>
  );
}
