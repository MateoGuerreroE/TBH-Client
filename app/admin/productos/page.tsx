import { getResource } from "@/server/fetch";
import ProductTabs from "./ProductTabs";
import { ProductInfo } from "@/types/Data.types";

export default async function AdminProduct() {
  const { data: productList } = await getResource<ProductInfo[]>("product", {});
  const { data: categoryList } = await getResource("category", {});

  return (
    <div className="max-w-[1500px] h-auto w-full bg-sky-50 rounded-xl p-5 shadow-md">
      <div className="my-5 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Administración de productos</h1>
        <p>
          Administra productos, su valor, precio o descripción. Podrás dirigirte
          a otras secciones en esta misma página para editar categorías y
          subcategorías, así mismo podrás reasignar productos a otras
          subcategorías.
        </p>
        <p>
          Una subcategoría esta asociada a una categoría general, y un producto
          solo se relaciona a una subcategoría, por lo que cada producto tendrá
          una categoría y subcategoría.
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <ProductTabs productList={productList} />
      </div>
    </div>
  );
}
