import StartSection from "@/app/home/sections/StartSection";
import Footer from "./components/shared/Footer";
import Trending from "./home/sections/Trending";
import CategoriesSection from "./home/sections/CategoriesSection";
import Ratings from "./home/sections/Ratings";
import { getResource } from "@/server/fetch";
import { cookies } from "next/headers";
import { ITrendWithRelations } from "tbh-shared-types";

export default async function Home() {
  const cookieStore = await cookies();
  const visitorToken = cookieStore.get("publicToken")?.value;

  const { data: trending } = await getResource<ITrendWithRelations[]>(
    "trends",
    false,
    {
      authorization: visitorToken,
      cacheOptions: {
        cache: "force-cache",
        next: { revalidate: 120 },
      },
    }
  );

  const carouselItems = trending.filter((t) => t.isVisibleOnCarousel);
  const gridProducts = trending.filter((t) => t.isVisibleOnGrid);

  return (
    <main className="overflow-x-hidden">
      <StartSection />
      <Trending products={gridProducts} />
      <CategoriesSection />
      <Ratings />
      <Footer />
    </main>
  );
}
