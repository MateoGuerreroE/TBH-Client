import Footer from "@/app/components/shared/Footer";
import React from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return (
    <main className="bg-sky-100 min-h-[1000px] pt-14 flex flex-col items-center justify-center">
      <div className="min-h-[1000px] max-h-[1500px]">{id}</div>
      <Footer />
    </main>
  );
}
