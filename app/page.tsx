import StartSection from "@/app/sections/home/StartSection";
import Footer from "./sections/shared/Footer";
import Trending from "./sections/home/Trending";

export default function Home() {
  return (
    <main className="max-w-screen">
      <StartSection />
      <Trending />
      <Footer />
    </main>
  );
}
