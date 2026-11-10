"use client";
import {
  AllCommunityModule,
  ColDef,
  colorSchemeLightCold,
  ICellRendererParams,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useRef, useState } from "react";
import { useProdAdminContext } from "./ChangesContext";
import Image from "next/image";
import CategoryDeletionModal from "./Grid/CategoryDeletionModal";
import { ICategoryRecord } from "tbh-shared-types";

type CategoryGridProps = {
  categories: ICategoryRecord[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  ModuleRegistry.registerModules([AllCommunityModule]);

  const [rowData, setRowData] = useState(
    categories.map((p) => ({
      ...p,
      hasChanged: false,
    }))
  );
  const initialRowData = useRef(structuredClone(categories));
  const { setChanges, changeType, changes, type } = useProdAdminContext();

  useEffect(() => {
    if (type !== "category") {
      changeType("category");
      setChanges({});
    }
  }, []);

  useEffect(() => {
    if (Object.keys(changes).length === 0) {
      setRowData((p) => p.map((c) => ({ ...c, hasChanged: false })));
    }
  }, [changes]);

  useEffect(() => {
    setRowData(
      categories.map((p) => ({
        ...p,
        hasChanged: false,
      }))
    );
  }, [categories]);

  const handleRowChange = (
    rowId: string,
    change: Partial<ICategoryRecord & { hasChanged: boolean }>
  ) => {
    setRowData((prevData) =>
      prevData.map((row) =>
        row.categoryId === rowId ? { ...row, ...change, hasChanged: true } : row
      )
    );
  };

  const redoChanges = (categoryId: string) => {
    const originalData = initialRowData.current.find(
      (p) => p.categoryId === categoryId
    );
    if (originalData) {
      setRowData((prevData) =>
        prevData.map((row) =>
          row.categoryId === categoryId
            ? { ...originalData, hasChanged: false }
            : row
        )
      );
      setChanges((prev) => {
        delete prev[categoryId];
        return { ...prev };
      });
    }
  };
  const theme = themeQuartz.withPart(colorSchemeLightCold);

  const [colDefs] = useState<ColDef[]>([
    {
      field: "categoryName",
      filter: true,
      headerName: "Nombre",
      headerClass: "font-poppins",
      width: 400,
      editable: true,
      cellClass: "font-poppins",
    },
    {
      field: "createdAt",
      headerName: "Creado",
      headerClass: "font-poppins",
      width: 200,
      editable: false,
      cellClass: "font-poppins",
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
      },
    },
    {
      field: "isEnabled",
      headerName: "Habilitado",
      editable: true,
      headerClass: "font-poppins",
      width: 150,
      cellClass: "font-poppins",
    },
    {
      field: "Changes",
      sortable: false,

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
                redoChanges(param.data.categoryId);
              }
            }}
            className={`${param.data.hasChanged ? "hover:cursor-pointer opacity-100" : "hover:cursor-not-allowed opacity-30"}`}
            width={25}
            height={25}
          />
          <CategoryDeletionModal
            categoryId={param.data.categoryId}
            setRowData={setRowData}
          />
        </div>
      ),
    },
  ]);
  return (
    <AgGridReact
      onCellValueChanged={(cell) => {
        setChanges((prev) => ({
          ...prev,
          [cell.data.categoryId]: {
            ...prev[cell.data.categoryId],
            [cell.colDef.field as keyof ICategoryRecord]: cell.newValue,
          },
        }));
        handleRowChange(cell.data.categoryId, { hasChanged: true });
      }}
      rowData={rowData}
      rowClass={"font-poppins"}
      columnDefs={colDefs}
      theme={theme}
    />
  );
}
