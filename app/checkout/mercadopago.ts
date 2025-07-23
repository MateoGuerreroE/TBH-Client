import { TPaymentType } from "@mercadopago/sdk-react/esm/bricks/payment/type";

export interface IMPInitialization {
  orderId: string;
  amount: number;
  visitorToken: string;
  payer: any;
  loadingFunction: (val: boolean) => void;
  setPayment: (val: string) => void;
}

export const getMpInitialization = ({
  orderId,
  amount,
  payer,
  visitorToken,
  loadingFunction,
  setPayment,
}: IMPInitialization): TPaymentType => {
  return {
    initialization: {
      amount,
    },
    customization: {
      paymentMethods: {
        bankTransfer: "all",
        creditCard: "all",
        debitCard: "all",
      },
    },
    onSubmit: ({ formData }) => {
      return new Promise<void>((resolve, reject) => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/payment/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${visitorToken}`,
          },
          body: JSON.stringify({
            payment: formData,
            orderId,
            shipping: payer,
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            setPayment(response.data);
            resolve();
          })
          .catch(() => reject());
      });
    },
    onReady: async () => {
      loadingFunction(false);
    },
    onError: async (error) => {
      alert(error);
    },
  };
};

export const mpCustomization = {
  paymentMethods: {
    bankTransfer: "all",
    creditCard: "all",
    debitCard: "all",
  },
};

export const onSubmit = async () => {
  alert("Submitted");
};

export const onReady = async () => {
  alert("Ready!");
};

export const onError = async () => {
  alert("Error");
};
