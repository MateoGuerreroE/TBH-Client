import CategoryCard from "@/components/CategoryCard";

export default async function CategoriesSection() {
  return (
    <section className="w-full bg-slate-600 flex flex-col items-center p-6 pt-8 pb-10 gap-8">
      <h2 className="font-poppins text-3xl text-white md:text-4xl font-bold text-center">
        Categorías
      </h2>
      <div className="grid grid-cols-2 w-full max-h-[800px] max-w-[1300px] gap-3 md:gap-5">
        <CategoryCard name="Tecnología" img="/icons/tech.png" />
        <CategoryCard name="Entretenimiento" img="/icons/entertainment.png" />
        <CategoryCard name="Automotriz" img="/icons/wheel.png" />
        <CategoryCard name="Hogar" img="/icons/home.png" />
        <CategoryCard name="Cuidado Personal" img="/icons/health.png" />
        <CategoryCard name="Accesorios & otros" img="/icons/misc.png" />
      </div>
    </section>
  );
}
