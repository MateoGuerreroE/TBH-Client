import { ReviewProps } from "@/app/components/Review";
import { CartProduct } from "@/types/Context.types";
import { HomeSectionInfo, ProductInfo } from "@/types/Data.types";

export const sampleHomeData: HomeSectionInfo[] = [
  {
    isProduct: true,
    title: "Apple AirPods\nMax | Sky Blue",
    productImage:
      "https://applecenter.co.ke/wp-content/uploads/2021/05/airpods-max-select-skyblue-202011.png",
    buttons: [
      { text: "Comprar ahora", type: "primary" },
      { text: "Ver productos similares", type: "secondary" },
    ],
  },
  {
    isProduct: true,
    title: "Apple AirPods\nMax | Sky Blue",
    productImage:
      "https://applecenter.co.ke/wp-content/uploads/2021/05/airpods-max-select-skyblue-202011.png",
    buttons: [
      { text: "Comprar ahora", type: "primary" },
      { text: "Ver productos similares", type: "secondary" },
    ],
  },
  {
    isProduct: true,
    title: "Apple AirPods\nMax | Sky Blue",
    productImage:
      "https://applecenter.co.ke/wp-content/uploads/2021/05/airpods-max-select-skyblue-202011.png",
    buttons: [
      { text: "Comprar ahora", type: "primary" },
      { text: "Ver productos similares", type: "secondary" },
    ],
  },
  {
    isProduct: true,
    title: "Apple AirPods\nMax | Sky Blue",
    productImage:
      "https://applecenter.co.ke/wp-content/uploads/2021/05/airpods-max-select-skyblue-202011.png",
    buttons: [
      { text: "Comprar ahora", type: "primary" },
      { text: "Ver productos similares", type: "secondary" },
    ],
  },
];

export const sampleProductData: ProductInfo[] = [
  {
    productName: "Kit Esencial de prueba",
    description:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    price: 38500,
    image:
      "https://www.pngitem.com/pimgs/m/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
  },
  {
    productName: "Bolso rojo de pasión",
    description:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    price: 193500,
    image:
      "https://cdn.fstoppers.com/styles/full/s3/media/2015/12/07/white_background_bag_after.jpg",
  },
  {
    productName: "Loción antibacterial",
    description:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    price: 45000,
    image:
      "https://static.pietrastudio.com/public/file_uploads/e724b86799813931e2a835ea38839bf5.jpeg",
  },
  {
    productName: "Tennis coloridos",
    description:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    price: 389000,
    image:
      "https://backend.orbitvu.com/sites/default/files/image/product-mask.jpeg",
  },
  {
    productName: "Audifonos Beats",
    description:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    price: 78900,
    image:
      "https://cdn-bjpdk.nitrocdn.com/dyjDRTumiVVFLKEpXMADzKdEUUbypNrL/assets/images/optimized/rev-b19053f/www.visualeducation.com/wp-content/uploads/2020/05/Beats_headphones-2-1558px.jpg",
  },
  {
    productName: "Kit de café anti dormidas",
    description:
      "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum",
    price: 50000,
    image:
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/04/Perfect-white-backgrounds-for-products.jpg?ssl=1",
  },
];

export const testUserCart: CartProduct[] = [
  {
    productId: "1",
    productName: "Lavadora de platos multiuso con 5 funciones",
    productPrice: 17800,
    amount: 1,
    productCup: "Taza 1",
  },
  {
    productId: "2",
    productName: "Kit esencial de limpieza para el hogar",
    productPrice: 55200,
    amount: 2,
    productCup: "Taza 2",
  },
  {
    productId: "3",
    amount: 1,
    productName: "Set de 3 tazas de cerámica color azúl con diseño",
    productPrice: 23400,
    productCup: "Taza 3",
  },
  {
    productId: "4",
    productName: "Vajilla de acero inoxidable de 5 piezas con mango",
    productPrice: 98000,
    amount: 1,
    productCup: "Taza 4",
  },
  {
    productId: "5",
    productName: "Juego de cubiertos de acero inoxidable de 24 piezas",
    productPrice: 120000,
    amount: 1,
    productCup: "Taza 5",
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
