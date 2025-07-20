import { CategoryInfo, SubCategoryInfo } from "@/types/Data.types";
import {
  AllCommunityModule,
  ColDef,
  colorSchemeLightCold,
  ICellRendererParams,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { useEffect, useRef, useState } from "react";
import { useProdAdminContext } from "./ChangesContext";
import Image from "next/image";
import SubCategoryDeletionModal from "./Grid/SubCategoryDeletionModal";
import { AgGridReact } from "ag-grid-react";

type SubCategoryGridProps = {
  subCategories: SubCategoryInfo[];
  categories: CategoryInfo[];
};

export default function SubCategoryGrid({
  subCategories,
  categories,
}: SubCategoryGridProps) {
  ModuleRegistry.registerModules([AllCommunityModule]);

  const [rowData, setRowData] = useState(
    subCategories.map((p) => ({
      ...p,
      hasChanged: false,
    }))
  );
  const initialRowData = useRef(structuredClone(subCategories));
  const { setChanges, changeType, changes, type } = useProdAdminContext();

  useEffect(() => {
    if (type !== "subcategory") {
      changeType("subcategory");
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
      subCategories.map((p) => ({
        ...p,
        hasChanged: false,
      }))
    );
  }, [subCategories]);

  const handleRowChange = (
    rowId: string,
    change: Partial<SubCategoryInfo & { hasChanged: boolean }>
  ) => {
    setRowData((prevData) =>
      prevData.map((row) =>
        row.subCategoryId === rowId
          ? { ...row, ...change, hasChanged: true }
          : row
      )
    );
  };

  const redoChanges = (subcategoryId: string) => {
    const originalData = initialRowData.current.find(
      (p) => p.subCategoryId === subcategoryId
    );
    if (originalData) {
      setRowData((prevData) =>
        prevData.map((row) =>
          row.subCategoryId === subcategoryId
            ? { ...originalData, hasChanged: false }
            : row
        )
      );
      setChanges((prev) => {
        delete prev[subcategoryId];
        return { ...prev };
      });
    }
  };

  const theme = themeQuartz.withPart(colorSchemeLightCold);

  const [colDefs] = useState<ColDef[]>([
    {
      field: "subCategoryName",
      filter: true,
      headerName: "Nombre",
      headerClass: "font-poppins",
      width: 400,
      editable: true,
      cellClass: "font-poppins",
    },
    {
      field: "categoryName",
      headerName: "Categoria",
      headerClass: "font-poppins",
      width: 300,
      editable: false,
      cellClass: "font-poppins",
      valueGetter: (params) => {
        return (
          categories.find((c) => c.categoryId === params.data.categoryId)
            ?.categoryName || "No asignada"
        );
      },
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
                redoChanges(param.data.subCategoryId);
              }
            }}
            className={`${param.data.hasChanged ? "hover:cursor-pointer opacity-100" : "hover:cursor-not-allowed opacity-30"}`}
            width={25}
            height={25}
          />
          <SubCategoryDeletionModal
            subCategoryId={param.data.subCategoryId}
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
          [cell.data.subCategoryId]: {
            ...prev[cell.data.subCategoryId],
            [cell.colDef.field as keyof SubCategoryInfo]: cell.newValue,
          },
        }));
        handleRowChange(cell.data.subCategoryId, { hasChanged: true });
      }}
      rowData={rowData}
      rowClass={"font-poppins"}
      columnDefs={colDefs}
      theme={theme}
    />
  );
}
