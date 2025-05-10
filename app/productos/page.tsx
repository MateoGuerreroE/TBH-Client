import Carousel from "@/components/Carousel/Carousel";
import ProductCard from "@/components/Product/ProductCard";
import DesktopMenu from "@/components/Shop/DesktopMenu";
import MobileMenu from "@/components/Shop/MobileMenu";
import PaginationComponent from "@/components/Shop/Pagination";
import { Divider } from "@heroui/react";
import Footer from "../sections/shared/Footer";

export default function Productos() {
  return (
    <main className="pt-14  flex flex-col bg-sky-100 gap-5 font-poppins items-center">
      <section className="flex flex-col lg:flex-row max-w-[1500px] p-3 md:p-5 w-full">
        <div className="lg:flex flex-row w-1/4 hidden">
          <div className="flex flex-col p-5 font-poppins">
            <DesktopMenu />
          </div>
          <Divider orientation="vertical" className="mx-3 h-full" />
        </div>
        <div className="flex lg:hidden flex-col">
          <div className="flex flex-row items-center justify-evenly w-full font-poppins">
            <MobileMenu />
          </div>
          <Divider className="my-3" />
        </div>
        <div className="flex flex-col h-full w-full lg:w-3/4 px-5 lg:p-5">
          <div className="bg-black hidden lg:flex h-32 w-full text-center justify-center text-white items-center">
            Products banner
          </div>
          <PaginationComponent totalPages={1} currentPage={1} />
          <div className="flex flex-col md:pl-5 md:pt-5">
            <h3 className="font-poppins text-2xl font-bold mb-3">Tecnología</h3>
            <Carousel
              options={{
                loop: false,
                adapt: true,
                dragFree: false,
                slidesPerView: 3,
              }}
            >
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={85000}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
