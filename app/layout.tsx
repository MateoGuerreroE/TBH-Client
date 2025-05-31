import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavBar from "./components/static/NavBar";
import CartUI from "@/app/components/static/CartUI";
import ContactTrigger from "./components/static/ContactTrigger";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tu Hogar Boreal",
  description: "Ecommerce de articulos generales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${poppins.variable} text-[#292828]`}
      >
        <Providers>
          <NavBar />
          {children}
          <CartUI />
          <ContactTrigger />
        </Providers>
      </body>
    </html>
  );
}
