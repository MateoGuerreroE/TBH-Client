type ButtonDefinition = {
  text: string;
  type: "primary" | "secondary";
};

interface ProductSectionInfo {
  title: string;
  isProduct: true;
  product: ProductInfo;
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
  productId: string;
  productCup: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productEan: string | null;
  productImages: string[];
  productVideos: string[];
  isEnabled: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  subCategoryId: string;
  discount: number;
  subCategory: any; //! TODO TYPE THIS
}

export interface ServerResponse<T> {
  data: T;
}
