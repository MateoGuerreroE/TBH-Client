import Footer from "../sections/shared/Footer";
import PaymentSummary from "./PaymentSummary";

export default async function Payment({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { payment_id } = await searchParams;
  let payment = {};
  const request = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/payment?payment_id=" + payment_id
  );

  const { data } = await request.json();
  payment = data;

  return (
    <main className="bg-sky-100 pt-14">
      {/* <ClientWrapper payment={payment} /> */}
      <PaymentSummary payment={payment} />
      <Footer />
    </main>
  );
}
