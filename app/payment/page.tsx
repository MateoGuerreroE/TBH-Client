import { InternalPayment } from "@/types/Payment.types";
import Footer from "../components/shared/Footer";
import PaymentSummary from "./PaymentSummary";

export default async function Payment({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { payment_id } = await searchParams;
  const request = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/payment/${payment_id}`
  );

  const { data } = await request.json();
  const payment = data as InternalPayment;

  return (
    <main className="bg-sky-100 pt-14">
      <PaymentSummary payment={payment} />
      <Footer />
    </main>
  );
}
