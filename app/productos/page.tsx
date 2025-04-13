import ProductCard from "@/components/Product/ProductCard";
import React from "react";

export default function Productos() {
  return (
    <main className="pt-14 h-screen bg-[#f1e2dd]">
      <ProductCard
        name="Testing"
        price={17500}
        images={[
          "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
          "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
          "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
          "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
        ]}
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </main>
  );
}
