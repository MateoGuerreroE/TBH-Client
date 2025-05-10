import StartSection from "@/app/sections/home/StartSection";
import Footer from "./sections/shared/Footer";
import Trending from "./sections/home/Trending";
import CategoriesSection from "./sections/home/CategoriesSection";
import Ratings from "./sections/home/Ratings";

export default function Home() {
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
