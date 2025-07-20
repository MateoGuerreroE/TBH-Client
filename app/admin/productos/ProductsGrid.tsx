import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { ProductInfo, SubCategoryInfo } from "@/types/Data.types";
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
import { useEffect, useRef, useState } from "react";
import { useProdAdminContext } from "./ChangesContext";
import Image from "next/image";
import ImagesModal from "./Grid/ImagesModal";
import { Chip } from "@heroui/react";
import TagsModal from "./Grid/TagsModal";
import ProductDeletionModal from "./Grid/ProductDeletionModal";

type ProductsGridProps = {
  products: ProductInfo[];
  subCategories: SubCategoryInfo[];
};

export default function ProductsGrid({
  products,
  subCategories,
}: ProductsGridProps) {
  ModuleRegistry.registerModules([AllCommunityModule]);
  const { setChanges, changes, changeType, type } = useProdAdminContext();
  const [rowData, setRowData] = useState(
    products.map((p) => ({
      ...p,
      hasChanged: false,
    }))
  );
  const initialRowData = useRef(structuredClone(products));

  useEffect(() => {
    if (Object.keys(changes).length === 0) {
      setRowData((p) => p.map((c) => ({ ...c, hasChanged: false })));
    }
  }, [changes]);

  useEffect(() => {
    if (type !== "product") {
      changeType("product");
      setChanges({});
    }
  }, []);

  useEffect(() => {
    setRowData(
      products.map((p) => ({
        ...p,
        hasChanged: false,
      }))
    );
  }, [products]);

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

  const handleTagCreation = (productId: string, tag: string) => {
    setRowData((prevData) =>
      prevData.map((row) =>
        row.productId === productId
          ? {
              ...row,
              productTags: [...(row.productTags || []), tag],
              hasChanged: true,
            }
          : row
      )
    );
    setChanges((prev) => {
      const updatedRow = rowData.find((row) => row.productId === productId);
      const currentTags = updatedRow
        ? [...(updatedRow.productTags || []), tag]
        : [tag];
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          productTags: currentTags,
        },
      };
    });
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
      filter: true,
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
      comparator: (valueA, valueB) => {
        return parseFloat(valueA) - parseFloat(valueB);
      },
      valueFormatter: (params) => `${formatPrice(params.value)}`,
    },
    {
      field: "productTags",
      headerClass: "font-poppins",
      width: 150,
      headerName: "Etiquetas",
      cellRenderer: (val: ICellRendererParams) => {
        return (
          <div className="flex flex-row gap-2 h-full items-center">
            {val.value.map((tag: string, index: number) => (
              <Chip
                color="secondary"
                className=""
                size="sm"
                key={index}
                onClose={() => {
                  handleRowChange(val.data.productId, {
                    productTags: val.data.productTags.filter(
                      (t: string) => t !== tag
                    ),
                    hasChanged: true,
                  });
                  setChanges((prev) => ({
                    ...prev,
                    [val.data.productId]: {
                      ...prev[val.data.productId],
                      productTags: val.data.productTags.filter(
                        (t: string) => t !== tag
                      ),
                    },
                  }));
                }}
              >
                {tag}
              </Chip>
            ))}
            <TagsModal
              productId={val.data.productId}
              tagSetter={handleTagCreation}
            />
          </div>
        );
      },
      editable: true,
    },
    {
      field: "isActive",
      headerName: "Activo",
      filter: true,
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
      sortable: false,

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
      sortable: false,

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
      sortable: false,
      cellRenderer: () => (
        <ButtonComponent label="Editar" visualOpts={{ size: "sm" }} />
      ),
      cellClass: "flex items-center justify-center",
      width: 120,
    },
    {
      field: "subCategory.subCategoryName",
      filter: true,
      headerClass: "font-poppins",
      headerName: "Categoría",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: subCategories.map((sub) => sub.subCategoryName),
      },
      onCellValueChanged: (cell) => {
        const targetSubCategory = subCategories.find(
          (sub) => sub.subCategoryName === cell.newValue
        );
        setChanges((prev) => ({
          ...prev,
          [cell.data.productId]: {
            ...prev[cell.data.productId],
            subCategoryId: targetSubCategory?.subCategoryId,
          },
        }));
        handleRowChange(cell.data.productId, {
          subCategory: targetSubCategory,
          hasChanged: true,
        });
      },
      editable: true,
      width: 120,
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
                redoChanges(param.data.productId);
              }
            }}
            className={`${param.data.hasChanged ? "hover:cursor-pointer opacity-100" : "hover:cursor-not-allowed opacity-30"}`}
            width={25}
            height={25}
          />
          <ProductDeletionModal
            productId={param.data.productId}
            setRowData={setRowData}
          />
        </div>
      ),
    },
  ]);
  const theme = themeQuartz.withPart(colorSchemeLightCold);
  return (
    <AgGridReact
      pagination={true}
      paginationPageSize={20}
      onCellValueChanged={(cell) => {
        if (cell.colDef.field !== "subCategory.subCategoryName") {
          setChanges((prev) => ({
            ...prev,
            [cell.data.productId]: {
              ...prev[cell.data.productId],
              [cell.colDef.field as keyof ProductInfo]: cell.newValue,
            },
          }));
          handleRowChange(cell.data.productId, { hasChanged: true });
        }
      }}
      rowData={rowData}
      rowClass={"font-poppins"}
      columnDefs={colDefs}
      theme={theme}
    />
  );
}
