"use client";
import Footer from "../components/shared/Footer";
import SearchBar from "../components/shared/SearchBar";
import { useAppStore } from "../context/zustand";
import CategoryPreview from "./components/CategoryPreview";

export default function Productos() {
  const { initialPayload } = useAppStore();
  return (
    <main className="pt-14 flex flex-col bg-sky-100 gap-5 font-poppins items-center overflow-hidden">
      <section className="flex flex-col lg:flex-row max-w-[1500px] p-3 md:p-5 w-full">
        <div className="flex flex-col h-full w-full ml px-5 lg:p-5">
          <div className="bg-black hidden lg:flex h-32 w-full text-center justify-center text-white items-center">
            Products banner
          </div>
          <div className="py-8 font-poppins">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-2xl font-bold py-3">Buscar producto</h3>
              <p className="font-semibold underline hover:cursor-pointer">
                Ver todos
              </p>
            </div>
            <SearchBar width="full" size="lg" />
          </div>
          <div className="flex flex-col gap-5 ml-2">
            {initialPayload?.data?.map((payload) => (
              <CategoryPreview key={payload.categoryName} set={payload} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
