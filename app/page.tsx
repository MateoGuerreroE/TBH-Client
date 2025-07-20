import StartSection from "@/app/home/sections/StartSection";
import Footer from "./components/shared/Footer";
import Trending from "./home/sections/Trending";
import CategoriesSection from "./home/sections/CategoriesSection";
import Ratings from "./home/sections/Ratings";
import { getResource } from "@/server/fetch";
import { TrendProduct } from "@/types/Product.types";

export default async function Home() {
  const { data: trending } = await getResource<TrendProduct[]>("trends", true, {
    cache: "force-cache",
    next: { revalidate: 120 },
  });

  const carouselProducts = trending.filter((t) => t.isVisibleOnCarousel);
  const gridProducts = trending.filter((t) => t.isVisibleOnGrid);

  return (
    <main className="overflow-x-hidden">
      <StartSection />
      <Trending />
      <CategoriesSection />
      <Ratings />
      <Footer />
    </main>
  );
}
