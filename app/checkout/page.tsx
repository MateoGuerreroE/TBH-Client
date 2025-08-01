import { OrderData } from "@/types/Payment.types";
import Footer from "../components/shared/Footer";
import ClientWrapper from "./layouts/ClientWrapper";
import { getResource } from "@/server/fetch";
import { cookies } from "next/headers";

export default async function Checkout({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const cookieStore = await cookies();
  const visitorToken = cookieStore.get("publicToken")?.value;

  const { order_id } = await searchParams;
  const { data } = await getResource<OrderData>(`order/${order_id}`, false, {
    cacheOptions: {
      cache: "no-store",
    },
    authorization: visitorToken,
  });

  return (
    <main className="bg-sky-100 pt-14">
      <ClientWrapper order={data} />
      <Footer />
    </main>
  );
}
