import Footer from "../components/shared/Footer";
import LoadingComponent from "../components/shared/LoadingComponent";

export default function loading() {
  return (
    <div className="flex flex-col">
      <div className="min-h-[1000px] h-full bg-sky-100 flex items-center justify-center w-full">
        <LoadingComponent />
        <h5 className="font-semibold text-3xl mt-20">Cargando...</h5>
      </div>
      <Footer />
    </div>
  );
}
