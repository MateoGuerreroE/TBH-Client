import { getResource } from "@/server/fetch";
import { getPersistenceValue } from "@/utils/revalidation";
import { cookies } from "next/headers";
import React from "react";
import { IProductWithRelations } from "tbh-shared-types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const { category, keyword } = resolvedParams;
  const cookiesStore = await cookies();
  const visitorToken = cookiesStore.get("publicToken")?.value;

  const { data } = await getResource<IProductWithRelations[]>(
    `product/filter${category ? `?category=${category}` : ""}${
      keyword ? `&keyword=${keyword}` : ""
    }`,
    false,
    {
      authorization: visitorToken,
      cacheOptions: {
        cache: "no-store",
        next: { revalidate: getPersistenceValue() },
      },
    }
  );

  console.log(data.length);

  return (
    <main className="pt-14 flex flex-col bg-sky-100 font-poppins items-center overflow-hidden">
      Category: {category}, KeyWord: {keyword}
    </main>
  );
}
