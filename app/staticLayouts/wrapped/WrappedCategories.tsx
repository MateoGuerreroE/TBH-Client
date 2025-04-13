"use client";
import { CategoriesInfo } from "@/app/sections/home/CategoriesSection";
import CategoryCard from "@/components/CategoryCard";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

type WrappedCategoriesProps = {
  categories: CategoriesInfo[];
};

export default function WrappedCategories({
  categories,
}: WrappedCategoriesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const classifyIndex = (idx: number): "l" | "r" | "c" => {
    if (idx === 0 || idx === 3) {
      return "l";
    } else if (idx === 1 || idx === 4) {
      return "c";
    } else {
      return "r";
    }
  };

  const delayController = (idx: number): number => {
    switch (classifyIndex(idx)) {
      case "l":
        return 0;
      case "c":
        return 0.2;
      case "r":
        return 0;
    }
  };

  const setInitialState = (idx: number): Record<string, number> => {
    switch (classifyIndex(idx)) {
      case "l":
        return { opacity: 0, x: -40 };
      case "c":
        return { opacity: 0, x: 0 };
      case "r":
        return { opacity: 0, x: 40 };
    }
  };
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 w-full max-h-[800px] max-w-[1500px] p-5 md:p-7 lg:p-10 gap-3 md:gap-4 lg:gap-6"
      ref={ref}
    >
      {categories.map((category, idx) => (
        <motion.div
          key={`category_${category.name}`}
          initial={setInitialState(idx)}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: delayController(idx),
          }}
        >
          <CategoryCard
            name={category.name}
            img={category.img}
            color={category.color}
          />
        </motion.div>
      ))}
    </div>
  );
}
