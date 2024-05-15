import  { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { userAxios } from "../../../../constraints/axiosInterceptors/userAxiosInterceptors";
import userEndpoints from "../../../../constraints/endpoints/userEndpoints";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51L06jrSBZHWEgXwypDrrO0AxMUyUaOCrMsapB1sLnEtIo3rGwMbWz7KP3phCvQz0PyaKwsvJR5puR2a17FANOfn900XouYmHR2");

export default function StripeForm() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
   async function fetchData(){
        const response = await userAxios.post(userEndpoints.checkout)
        console.log(response)
        setClientSecret(response.data)
    }
   fetchData()

  }, []);

  interface Appearance {
    theme: 'stripe' | 'flat' | 'night';
  }
  
  const appearance: Appearance = {
    theme: 'stripe',
  };
  
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}