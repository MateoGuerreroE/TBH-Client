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

export type ImageType = "base" | "sizing";
export type VideoType = "main" | "demo" | "setup" | "use";

export interface ProductImage {
  url: string;
  isPrimary: boolean;
  altText?: string;
  type: ImageType;
}
export type ProductVideo = {
  url: string;
  videoType: VideoType;
};

export type ProductDescription = {
  short: string;
  content: string;
};
export interface ProductInfo {
  productId: string;
  productName: string;
  productPrice: number;
  productDescription: ProductDescription | null;
  productTags: string[];
  stock: number;
  externalId: string;
  productImages: ProductImage[];
  productVideos: ProductVideo[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: string;
  updatedBy: string;
  discountCampaignId: string | null;
  subCategoryId: string;
  discount: number;
  subCategory: SubCategoryInfo;
}

export interface SubCategoryInfo {
  subCategoryId: string;
  subCategoryName: string;
  createdAt: Date;
  deletedAt: Date | null;
  isEnabled: boolean;

  createdBy: string;
  updatedBy: string;

  categoryId: string;
}

export interface CategoryInfo {
  categoryId: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: string;
  updatedBy: string;
  isEnabled: boolean;
}

export interface ServerResponse<T> {
  data: T;
}
