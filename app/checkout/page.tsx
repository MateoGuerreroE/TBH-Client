import { OrderData } from "@/types/Payment.types";
import Footer from "../components/shared/Footer";
import ClientWrapper from "./layouts/ClientWrapper";
import { getResource } from "@/server/fetch";

export default async function Checkout({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { order_id } = await searchParams;
  const { data } = await getResource<OrderData>(`order/${order_id}`);

  return (
    <main className="bg-sky-100 pt-14">
      <ClientWrapper order={data} />
      <Footer />
    </main>
  );
}
