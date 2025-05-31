import React from "react";
import Footer from "../components/shared/Footer";
import AboutMain from "./sections/Main";

export default function Page() {
  return (
    <main className="flex flex-col font-poppins items-center min-h-[calc(100vh-3.5rem)] justify-between w-full bg-sky-100">
      <AboutMain />
      <Footer />
    </main>
  );
}
