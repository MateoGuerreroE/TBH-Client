import { TPaymentType } from "@mercadopago/sdk-react/esm/bricks/payment/type";

export const getMpInitialization = (amount: number): TPaymentType => {
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
    onSubmit: async ({ paymentType, selectedPaymentMethod }) => {
      console.log(paymentType);
      console.log(selectedPaymentMethod);
      alert("Submitted");
    },
    onReady: async () => {
      alert("Ready");
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
