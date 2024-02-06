import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";

export default function PaymentForm() {
  const cartTotal = useSelector(selectCartTotal);
  const customer = useSelector(selectCurrentUser);
  const stripe = useStripe();
  let elements = useElements();

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);
    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = res;

    if (client_secret.length === 0) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customer ? customer.displayName : "Guest",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(JSON.stringify(paymentResult.error));
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("SUCCESS");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment</h2>
      <FormContainer onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                backgroundColor: "white",
                fontSize: "1.25rem",
              },
            },
          }}
        />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.payment}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
