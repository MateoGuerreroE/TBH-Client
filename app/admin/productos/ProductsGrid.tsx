"use client";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { ProductInfo } from "@/types/Data.types";
import { formatPrice } from "@/utils";
import {
  AllCommunityModule,
  ColDef,
  colorSchemeLightCold,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState } from "react";
import { useProdAdminContext } from "./ChangesContext";
import Image from "next/image";
import ImagesModal from "./Grid/ImagesModal";

type ProductsGridProps = {
  products: ProductInfo[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  ModuleRegistry.registerModules([AllCommunityModule]);
  const initialRowData = useRef(
    products.map((p) => ({
      ...p,
      subCategoryName: p.subCategory?.subCategoryName || "",
    }))
  );
  const { setChanges } = useProdAdminContext();

  const [rowData, setRowData] = useState(
    products.map((p) => ({
      ...p,
      subCategoryName: p.subCategory?.subCategoryName || "",
      hasChanged: false,
    }))
  );

  const handleRowChange = (
    rowId: string,
    change: Partial<ProductInfo & { hasChanged: boolean }>
  ) => {
    setRowData((prevData) =>
      prevData.map((row) =>
        row.productId === rowId ? { ...row, ...change, hasChanged: true } : row
      )
    );
  };

  const redoChanges = (productId: string) => {
    const originalData = initialRowData.current.find(
      (p) => p.productId === productId
    );
    if (originalData) {
      setRowData((prevData) =>
        prevData.map((row) =>
          row.productId === productId
            ? { ...originalData, hasChanged: false }
            : row
        )
      );
      setChanges((prev) => {
        delete prev[productId];
        return { ...prev };
      });
    }
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<ColDef[]>([
    {
      field: "productName",
      headerName: "Nombre",
      headerClass: "font-poppins",
      width: 200,
      editable: true,
      cellClass: "font-poppins",
    },
    {
      field: "productPrice",
      headerClass: "font-poppins",
      headerName: "Precio",
      editable: true,
      width: 100,
      valueFormatter: (params) => `${formatPrice(params.value)}`,
    },
    {
      field: "productTags",
      headerClass: "font-poppins",
      width: 150,
      headerName: "Etiquetas",
      valueFormatter: (params) => params.value.join(", "),
      valueParser: (params) =>
        params.newValue.split(",").map((tag: string) => tag.trim()),
      editable: true,
    },
    {
      field: "isActive",
      headerName: "Activo",
      width: 80,
      editable: true,
      headerClass: "font-poppins",
    },
    {
      field: "discount",
      headerName: "% Des.",
      width: 100,
      editable: true,
      headerClass: "font-poppins",
    },
    {
      field: "productImages",
      headerClass: "font-poppins",
      headerName: "Imagenes",
      cellRenderer: (param: ICellRendererParams) => (
        <ImagesModal
          images={param.data.productImages}
          productId={param.data.productId}
        />
      ),
      cellClass: "flex items-center justify-center",
      width: 110,
    },
    {
      field: "productVideos",
      headerClass: "font-poppins",
      headerName: "Videos",
      cellRenderer: () => (
        <ButtonComponent label="Editar" visualOpts={{ size: "sm" }} />
      ),
      cellClass: "flex items-center justify-center",
      width: 100,
    },
    {
      field: "productDescription",
      headerClass: "font-poppins",
      headerName: "Descripción",
      cellRenderer: () => (
        <ButtonComponent label="Editar" visualOpts={{ size: "sm" }} />
      ),
      cellClass: "flex items-center justify-center",
      width: 120,
    },
    {
      field: "subCategoryName",
      headerClass: "font-poppins",
      headerName: "Categoría",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Electronics", "Clothing", "Books", "Home Appliances"],
      },
      editable: true,
      width: 120,
    },
    {
      field: "Changes",
      headerClass: "font-poppins",
      headerName: "Cambios",
      width: 100,
      cellClass: "flex items-center justify-center",
      cellRenderer: (param: ICellRendererParams) => (
        <div className="flex flex-row gap-2">
          <Image
            src="/icons/rollback.svg"
            alt="rollback"
            onClick={() => {
              if (param.data.hasChanged) {
                redoChanges(param.data.productId);
              }
            }}
            className={`${param.data.hasChanged ? "hover:cursor-pointer opacity-100" : "hover:cursor-not-allowed opacity-30"}`}
            width={25}
            height={25}
          />
          <Image
            src="/icons/trash.svg"
            className="hover:cursor-pointer"
            alt="delete"
            width={25}
            height={25}
          />
        </div>
      ),
    },
  ]);
  const theme = themeQuartz.withPart(colorSchemeLightCold);
  return (
    <AgGridReact
      onCellValueChanged={(cell) => {
        setChanges((prev) => ({
          ...prev,
          [cell.data.productId]: {
            ...prev[cell.data.productId],
            [cell.colDef.field as keyof ProductInfo]: cell.newValue,
          },
        }));
        handleRowChange(cell.data.productId, { hasChanged: true });
      }}
      rowData={rowData}
      rowClass={"font-poppins"}
      columnDefs={colDefs}
      theme={theme}
    />
  );
}
