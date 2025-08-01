import { ReviewProps } from "@/app/components/static/Review";
import { CartProduct } from "@/types/Context.types";
import { HomeSectionInfo } from "@/types/Data.types";

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
      productPrice: "134800",
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

export const testUserCart: CartProduct[] = [];

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
