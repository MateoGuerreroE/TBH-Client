import Footer from "@/app/components/shared/Footer";
import { getResource } from "@/server/fetch";
import { ProductInfo } from "@/types/Data.types";
import React from "react";
import ProductLanding from "./ProductLanding";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const { data } = await getResource<ProductInfo>(`product/${id}`);

  console.log(data);
  return (
    <main className="bg-sky-100 min-h-[1000px] pt-14 flex flex-col items-center justify-center">
      <div className="min-h-[1000px] max-h-[1500px]">
        <ProductLanding product={data} />
      </div>
      <Footer />
    </main>
  );
}
