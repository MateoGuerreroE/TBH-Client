import { IProductRecord } from "tbh-shared-types";

type ButtonDefinition = {
  text: string;
  type: "primary" | "secondary";
};

interface ProductSectionInfo {
  title: string;
  isProduct: true;
  product: IProductRecord;
  buttons: ButtonDefinition[];
}

interface PromoSectionInfo {
  title: string;
  isProduct: false;
  description: string;
  promoImage: string;
  buttons: ButtonDefinition[];
}

export type HomeSectionInfo = ProductSectionInfo | PromoSectionInfo;

export type ImageType = "base" | "sizing";

export interface ProductImage {
  url: string;
  isPrimary: boolean;
  altText?: string;
  type: ImageType;
}

export interface ServerResponse<T> {
  data: T;
}
