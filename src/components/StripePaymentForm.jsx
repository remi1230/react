import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';

const stripePromise = loadStripe('pk_test_51PVFKgFIKwAXFKFkLw042PAD3owEteum3TVWJZ18rDI82Kn5RBwEpTBvv59Jy2W1Copfmq4IykmNmvSCtyJMzFHt00cFI4RZrV');

const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 20px 0px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--contactFieldBg);
  color: var(--contactFieldTxt);
`;

const FormField = styled.div`
  background-color: var(--contactFieldBg);
  color: var(--contactFieldTxt);
`;

const CardElementWrapper = styled.div`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
`;

const options = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Received Stripe PaymentMethod:', paymentMethod);
      // Handle successful payment method creation here
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormField>
          <CardElementWrapper>
            <CardElement options={options} />
          </CardElementWrapper>
        </FormField>
      </form>
    </FormWrapper>
  );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <StripePaymentForm />
  </Elements>
);

export default App;
