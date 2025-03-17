import Contact from "./layout/Contact";
import StickyNav from "./layout/StickyNav";
import BestSellers from "./sections/home/BestSellers";
import Main from "./sections/home/Main";
import Footer from "./sections/shared/Footer";

export default function Home() {
  return (
    <main className="h-full">
      <StickyNav />
      <Main />
      <BestSellers />
      <Footer />
      <Contact />
    </main>
  );
}
