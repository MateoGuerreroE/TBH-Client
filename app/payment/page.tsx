import { IPaymentRecord } from "tbh-shared-types";
import Footer from "../components/shared/Footer";
import PaymentSummary from "./PaymentSummary";
import { cookies } from "next/headers";

export default async function Payment({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const cookiesStore = await cookies();
  const visitorToken = cookiesStore.get("publicToken")?.value;

  const { payment_id } = await searchParams;
  const request = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/payment/${payment_id}`,
    { headers: { Authorization: `Bearer ${visitorToken}` } }
  );

  console.log(visitorToken);

  const info = await request.json();

  console.log(info);

  const payment = info.data as IPaymentRecord;

  return (
    <main className="bg-sky-100 pt-14">
      <PaymentSummary payment={payment} />
      <Footer />
    </main>
  );
}
