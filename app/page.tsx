import StickyNav from "./layout/StickyNav";
import BestSellers from "./sections/home/BestSellers";
import Main from "./sections/home/Main";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <StickyNav />
      <Main />
      <BestSellers />
    </main>
  );
}
