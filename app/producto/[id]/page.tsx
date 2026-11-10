import Footer from "@/app/components/shared/Footer";
import { getResource } from "@/server/fetch";
import type { IProductWithRelations } from "tbh-shared-types";
import React from "react";
import ProductLanding from "./ProductLanding";
import { getPersistenceValue } from "@/utils/revalidation";
import { cookies } from "next/headers";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const cookieStore = await cookies();
  const visitorToken = cookieStore.get("publicToken")?.value;
  const { data } = await getResource<IProductWithRelations>(
    `product/${id}`,
    true,
    {
      authorization: visitorToken,
      cacheOptions: {
        cache: "force-cache",
        next: { revalidate: getPersistenceValue() },
      },
    }
  );

  return (
    <main className="bg-sky-100 min-h-[1000px] pt-14 flex flex-col items-center justify-center">
      <div className="min-h-[1000px] max-h-[1500px]">
        <ProductLanding product={data} />
      </div>
      <Footer />
    </main>
  );
}
