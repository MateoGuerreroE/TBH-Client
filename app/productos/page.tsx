"use client";
import { Divider } from "@heroui/react";
import Footer from "../components/shared/Footer";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import PaginationComponent from "@/app/components/shared/Pagination";
import ProductCarousel from "./components/ProductCarousel";
import { sampleProductData } from "@/test/sampleData";
import ButtonComponent from "../components/shared/ButtonComponent";

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
        <div className="flex flex-col h-full w-full lg:w-3/4 ml px-5 lg:p-5">
          <div className="bg-black hidden lg:flex h-32 w-full text-center justify-center text-white items-center">
            Products banner
          </div>
          <PaginationComponent totalPages={1} currentPage={1} />
          <div className="flex flex-col gap-5 ml-2">
            <div className="flex flex-col md:pl-5 md:pt-5 gap-1">
              <div className="flex gap-8">
                <h3 className="font-poppins text-3xl font-bold mb-3">
                  Tecnología
                </h3>
                <ButtonComponent
                  label="Ver más"
                  visualOpts={{
                    color: "secondary",
                    className: "font-semibold text-lg",
                    size: "md",
                  }}
                />
              </div>
              <ProductCarousel productList={sampleProductData} />
            </div>
            <div className="flex flex-col md:pl-5 md:pt-5 gap-1">
              <div className="flex gap-8">
                <h3 className="font-poppins text-3xl font-bold mb-3">Hogar</h3>
                <ButtonComponent
                  label="Ver más"
                  visualOpts={{
                    color: "secondary",
                    className: "font-semibold text-lg",
                    size: "md",
                  }}
                />
              </div>
              <ProductCarousel productList={sampleProductData} />
            </div>
            <div className="flex flex-col md:pl-5 md:pt-5 gap-1">
              <div className="flex gap-8">
                <h3 className="font-poppins text-3xl font-bold mb-3">
                  Automotriz
                </h3>
                <ButtonComponent
                  label="Ver más"
                  visualOpts={{
                    color: "secondary",
                    className: "font-semibold text-lg",
                    size: "md",
                  }}
                />
              </div>
              <ProductCarousel productList={sampleProductData} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
