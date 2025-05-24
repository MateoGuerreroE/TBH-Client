import { TPaymentType } from "@mercadopago/sdk-react/esm/bricks/payment/type";

export const getMpInitialization = (
  payment_id: string,
  amount: number,
  loadingFunction: (val: boolean) => void,
  setPayment: (val: string) => void
): TPaymentType => {
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
          },
          body: JSON.stringify({
            payment: formData,
            idempotency_key: payment_id,
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
