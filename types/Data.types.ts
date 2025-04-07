type ButtonDefinition = {
  text: string;
  type: "primary" | "secondary";
};

interface ProductSectionInfo {
  title: string;
  isProduct: true;
  description?: string;
  productImage: string;
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

export interface ProductInfo {
  productName: string;
  description: string;
  shortDescription?: string;
  price: number;
  image: string;
  discount?: number;
}

export interface ServerResponse<T> {
  data: T;
}
