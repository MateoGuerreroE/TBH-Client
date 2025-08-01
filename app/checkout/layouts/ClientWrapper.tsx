"use client";
import PaymentSection from "./PaymentSection";
import ShipForm from "./ShipForm";
import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import LoadingComponent from "@/app/components/shared/LoadingComponent";
import { formatPrice } from "@/utils";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { OrderData } from "@/types/Payment.types";
import { useRouter } from "next/navigation";
import { IPaymentRecord } from "tbh-shared-types";

type ClientWrapperProps = {
  order: OrderData;
};

export default function ClientWrapper({ order }: ClientWrapperProps) {
  const [loading, isLoading] = useState<boolean>(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [paymentResponse, setPaymentResponse] = useState<IPaymentRecord | null>(
    null
  );
  const [shipInfo, setShipInfo] = useState(null);

  const router = useRouter();

  const handleStepChange = (newStep: 1 | 2) => {
    if (newStep === 2) {
      isLoading(true);
    }
    setStep(newStep);
  };

  useEffect(() => {
    if (order.paymentId) {
      router.push(`/payment?payment_id=${order.paymentId}`);
    }
  }, [order]);

  useEffect(() => {
    if (paymentResponse !== null) {
      setTimeout(
        () => router.push(`/payment?payment_id=${paymentResponse.paymentId}`),
        5000
      );
    }
  }, [paymentResponse]);

  return (
    <div className="w-full flex justify-center p-5 min-h-[1000px]">
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row gap-7 font-poppins">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <Card className="mx-5 max-h-[600px]">
            <CardHeader className="i">
              <h2 className="text-2xl font-semibold">Resumen</h2>
            </CardHeader>
            <Divider />

            <CardBody>
              <div className="relative h-full">
                {Object.keys(order).length > 0 ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      {order.items.map((item) => (
                        <div
                          key={item.productId}
                          className="text-sm lg:text-medium flex flex-row justify-between"
                        >
                          <p>{item.product.productName}</p>
                          <div className="flex flex-row gap-3">
                            <p>x{item.amount}</p>
                            <p>{formatPrice(item.product.productPrice)}</p>
                          </div>
                        </div>
                      ))}
                      <div className="flex flex-row justify-between font-poppins font-semibold py-3">
                        <h5>Precio de envío</h5>
                        <p>{formatPrice(0)}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <LoadingComponent />
                )}
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className=" w-full flex flex-row justify-between">
                <h5 className="text-2xl font-semibold">Total</h5>
                <p className="font-bold text-xl">
                  {formatPrice(order.orderProductTotal)}
                </p>
              </div>
            </CardFooter>
          </Card>

          <div className="relative">
            {step === 2 && (
              <div className="absolute z-10 w-full h-full bg-sky-100/80"></div>
            )}
            <ShipForm
              isLoading={false}
              parentAction={(val) => {
                setShipInfo(val);
                handleStepChange(2);
              }}
            />
          </div>
        </div>
        <div className="lg:w-1/2 mt-5">
          <div className="flex flex-col gap-3 pb-3">
            <h3 className="text-2xl font-bold">Pagar</h3>
            <p>
              Para proceder con el pago completa el formulario de datos de envío
            </p>
          </div>
          <div className="relative flex flex-col pb-12">
            {step === 1 ? (
              <div className="absolute z-10 w-full h-full bg-sky-100/80"></div>
            ) : (
              <>
                {loading && (
                  <div className="h-32 relative">
                    <LoadingComponent />
                  </div>
                )}
                <PaymentSection
                  loadingParent={isLoading}
                  shipInfo={shipInfo!}
                  orderId={order.orderId}
                  setResult={setPaymentResponse}
                  price={parseInt(order.orderProductTotal)}
                />
              </>
            )}
            {paymentResponse && paymentResponse.status === "approved" && (
              <p className="py-2">
                <b>Pago aproado</b> ✅ Serás redirigido a la página de
                confirmación en un momento...
              </p>
            )}
            <ButtonComponent
              action={() => setStep(1)}
              disabled={
                step === 1 ||
                loading ||
                (paymentResponse
                  ? paymentResponse.status === "approved"
                  : false)
              }
              label="Regresar a datos de envío"
              visualOpts={{ className: "mt-5" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
