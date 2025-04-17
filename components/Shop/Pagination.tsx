"use client";
import { Pagination } from "@heroui/react";
import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export default function PaginationComponent({
  totalPages,
  currentPage,
}: PaginationProps) {
  return (
    <div className="h-12 flex justify-end items-center px-2 gap-7 font-poppins">
      <p>Página</p>
      <Pagination
        isDisabled={true}
        variant="light"
        key={1}
        initialPage={currentPage}
        total={totalPages}
      ></Pagination>
    </div>
  );
}
