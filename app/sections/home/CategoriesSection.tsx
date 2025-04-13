import WrappedCategories from "@/app/staticLayouts/wrapped/WrappedCategories";

export type CategoriesInfo = {
  name: string;
  img: string;
  color?: string;
  redirection?: string;
};

const categoryList: CategoriesInfo[] = [
  { name: "Tecnología", img: "/icons/tech-bg.png", color: "#9967CE" },
  { name: "Entretenimiento", img: "/icons/ent-bg.png", color: "#ED7745" },
  { name: "Automotriz", img: "/icons/wheel-bg.png", color: "#F5A1C3" },
  { name: "Hogar", img: "/icons/home-bg.png", color: "#2B885C" },
  { name: "Cuidado Personal", img: "/icons/health-bg.png", color: "#FFD84F" },
  { name: "Accesorios & otros", img: "/icons/misc-bg.png", color: "#B8CEFF" },
];

export default async function CategoriesSection() {
  return (
    <section className="w-full bg-gradient-to-tl from-[#FFEAE2] to-[#68c2dd] flex flex-col items-center gap-5">
      <h2 className="font-poppins text-3xl   md:text-4xl pt-6 font-bold text-center">
        Categorías
      </h2>
      <WrappedCategories categories={categoryList} />
    </section>
  );
}
