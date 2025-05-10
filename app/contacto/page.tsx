import Footer from "../sections/shared/Footer";
import ContactMain from "../sections/contact/Main";

export default function Page() {
  return (
    <main className="flex flex-col font-poppins items-center min-h-[calc(100vh-3.5rem)] justify-between w-full bg-sky-100">
      <ContactMain />
      <Footer />
    </main>
  );
}
