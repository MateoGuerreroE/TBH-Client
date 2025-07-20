import { ReviewProps } from "@/app/components/static/Review";
import { CartProduct } from "@/types/Context.types";
import { HomeSectionInfo } from "@/types/Data.types";
import type { IProductRecord as ProductInfo } from "tbh-shared-types";

export const sampleHomeData: HomeSectionInfo[] = [
  {
    title: "Apple AirPods Max | Sky Blue", // TODO THIS SHOULD BE ONLY FOR PROMOS
    isProduct: true,
    product: {
      productId: "a82e72c0-dc23-4986-88b6-dcac17c799c0",
      productName: "Apple AirPods Max | Sky Blue",
      productImages: [
        {
          isPrimary: true,
          type: "base",
          url: "https://applecenter.co.ke/wp-content/uploads/2021/05/airpods-max-select-skyblue-202011.png",
        },
      ],
      productDescription: {
        content: "",
        short:
          "Disfruta de un sonido envolvente con los nuevos AirPods Max en color azul cielo.",
      },
      productPrice: 134800,
      productVideos: [],
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      subCategoryId: "",
      discount: "0",
      productTags: [],
      stock: 0,
      externalId: "",
      createdBy: "",
      updatedBy: "",
      discountCampaignId: null,
    },
    buttons: [
      { text: "Agregar al carrito", type: "primary" },
      { text: "Ver productos similares", type: "secondary" },
    ],
  },
];

export const sampleProductData: ProductInfo[] = [
  {
    productName: "Kit Esencial de prueba",
    productDescription: {
      content: "lorem ipsum dolor sit amet",
      short:
        "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    },
    productPrice: 38500,
    productImages: [
      {
        isPrimary: true,
        type: "base",
        url: "https://www.pngitem.com/pimgs/m/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
      },
    ],
    productId: "378a64c9-0d0c-44df-be20-0c7c36f0b846",
    productVideos: [],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    subCategoryId: "841dfd64-dc42-4d05-a785-633bcc35aa42",
    discount: "0",
    discountCampaignId: null,
    productTags: [],
    stock: 0,
    externalId: "",
    createdBy: "",
    updatedBy: "",
  },
  {
    productName: "Bolso rojo de pasión",
    productDescription:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    productPrice: 193500,
    productImages: [
      "https://cdn.fstoppers.com/styles/full/s3/media/2015/12/07/white_background_bag_after.jpg",
    ],
    productId: "74c4761f-20b7-48ee-816e-7f4ec78ee906",
    productCup: "123",
    productEan: null,
    productVideos: [],
    isEnabled: true,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    subCategoryId: "841dfd64-dc42-4d05-a785-633bcc35aa42",
    discount: 0,
  },
  {
    productName: "Loción antibacterial",
    productDescription:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    productPrice: 45000,
    productImages: [
      "https://static.pietrastudio.com/public/file_uploads/e724b86799813931e2a835ea38839bf5.jpeg",
    ],
    productId: "b29cc2e4-d529-440e-8f30-56114a66b93d",
    productCup: "123",
    productEan: null,
    productVideos: [],
    isEnabled: true,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    subCategoryId: "841dfd64-dc42-4d05-a785-633bcc35aa42",
    discount: 0,
  },
  {
    productName: "Tennis coloridos",
    productDescription:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    productPrice: 389000,
    productImages: [
      "https://backend.orbitvu.com/sites/default/files/image/product-mask.jpeg",
    ],
    productId: "b9b75dec-1ac4-46ed-97e0-dc7939cefdd6",
    productCup: "123",
    productEan: null,
    productVideos: [],
    isEnabled: true,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    subCategoryId: "841dfd64-dc42-4d05-a785-633bcc35aa42",
    discount: 0,
  },
  {
    productName: "Audifonos Beats",
    productDescription:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    productPrice: 78900,
    productImages: [
      "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/cloud-pink/pink-01-solo4.jpg",
    ],
    productId: "8191d509-c998-4e48-8bfc-c69b72e18602",
    productCup: "123",
    productEan: null,
    productVideos: [],
    isEnabled: true,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    subCategoryId: "841dfd64-dc42-4d05-a785-633bcc35aa42",
    discount: 0,
  },
  {
    productName: "Kit de café anti dormidas",
    productDescription:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    productPrice: 50000,
    productImages: [
      "https://blog.glassnow.com/wp-content/uploads/Choosing-the-Right-Sample-Packaging10-1.png",
    ],
    productId: "32400a8c-7ad0-4678-a136-9214a6fcdf64",
    productCup: "123",
    productEan: null,
    productVideos: [],
    isEnabled: true,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    subCategoryId: "841dfd64-dc42-4d05-a785-633bcc35aa42",
    discount: 0,
  },
];

export const testUserCart: CartProduct[] = [
  {
    amount: 1,
    product: sampleProductData[0],
  },
  {
    amount: 1,
    product: sampleProductData[1],
  },
  {
    amount: 3,
    product: sampleProductData[2],
  },
];

export const testReviews: ReviewProps[] = [
  {
    authorName: "Michael Scott",
    rating: 5,
    date: "24 Mar. 2025",
    location: "Scranton, PA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, alias! At saepe fuga minus culpa aspernatur, eaque voluptatibus autem eveniet.",
  },
  {
    authorName: "Jim Halpert",
    rating: 5,
    date: "24 Mar. 2025",
    location: "Scranton, PA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, alias! At saepe fuga minus culpa aspernatur, eaque voluptatibus autem eveniet.",
  },
  {
    authorName: "Stanley Hudson",
    rating: 5,
    date: "24 Mar. 2025",
    location: "Scranton, PA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, alias! At saepe fuga minus culpa aspernatur, eaque voluptatibus autem eveniet.",
  },
  {
    authorName: "Dwight Schrute",
    rating: 4,
    date: "24 Mar. 2025",
    location: "Scranton, PA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, alias! At saepe fuga minus culpa aspernatur, eaque voluptatibus autem eveniet.",
  },
  {
    authorName: "Pam Beesly",
    rating: 4,
    date: "24 Mar. 2025",
    location: "Scranton, PA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, alias! At saepe fuga minus culpa aspernatur, eaque voluptatibus autem eveniet.",
  },
];
