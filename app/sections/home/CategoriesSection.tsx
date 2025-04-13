import CategoryCard from "@/components/CategoryCard";

export default async function CategoriesSection() {
  return (
    <section className="w-full bg-gradient-to-tl from-[#FFEAE2] to-[#68c2dd] flex flex-col items-center gap-5">
      <h2 className="font-poppins text-3xl   md:text-4xl pt-6 font-bold text-center">
        Categorías
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full max-h-[800px] max-w-[1500px] p-5 md:p-7 lg:p-10 gap-3 md:gap-5">
        <CategoryCard color="#ED7745" name="Tecnología" img="/icons/tech.png" />
        <CategoryCard
          color="#2B885C"
          name="Entretenimiento"
          img="/icons/entertainment.png"
        />
        <CategoryCard
          color="#F7A232"
          name="Automotriz"
          img="/icons/wheel.png"
        />
        <CategoryCard color="#F5A1C3" name="Hogar" img="/icons/home.png" />
        <CategoryCard
          color="#FFD84F"
          name="Cuidado Personal"
          img="/icons/health.png"
        />
        <CategoryCard
          color="#A2BDF4"
          name="Accesorios & otros"
          img="/icons/misc.png"
        />
      </div>
    </section>
  );
}
