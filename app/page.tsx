import StartSection from "@/app/home/sections/StartSection";
import Footer from "./components/shared/Footer";
import Trending from "./home/sections/Trending";
import CategoriesSection from "./home/sections/CategoriesSection";
import Ratings from "./home/sections/Ratings";

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
