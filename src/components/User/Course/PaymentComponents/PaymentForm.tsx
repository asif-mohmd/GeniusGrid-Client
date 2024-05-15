import React, { useEffect, useState } from 'react';
import { loadStripe, Stripe, StripeElements, PaymentIntentResult } from '@stripe/stripe-js';
import { userAxios } from '../../../../constraints/axiosInterceptors/userAxiosInterceptors';
import userEndpoints from '../../../../constraints/endpoints/userEndpoints';

const PaymentForm: React.FC = () => {
    const [stripe, setStripe] = useState<Stripe | null>(null);
    const [elements, setElements] = useState<StripeElements | null>(null);

    useEffect(() => {
        const fetchPaymentIntent = async () => {
            const courseData = {
            coursePrice : "1999"
           }
            const response = await userAxios.post(userEndpoints.checkout,courseData)
         console.log(response)
            const stripeInstance = await loadStripe("pk_test_51L06jrSBZHWEgXwypDrrO0AxMUyUaOCrMsapB1sLnEtIo3rGwMbWz7KP3phCvQz0PyaKwsvJR5puR2a17FANOfn900XouYmHR2");
            setStripe(stripeInstance);
            if (stripeInstance) {
                setElements(stripeInstance.elements({
                    clientSecret: response.data.clientSecret,
                    loader: 'auto',
                }));
            }
        };

        fetchPaymentIntent();
    }, []);

    const handleSubmit = async () => {
        const result: PaymentIntentResult | undefined = await stripe?.confirmPayment({
            elements: elements!,
            redirect: 'if_required',
            confirmParams: {
                return_url: 'http://localhost:5173',
            },
        });

        if (result?.error) {
            alert(result.error.message);
            return;
        }

        // Handle success
    };

    return (
        <div>
            <div id="payment"></div>
            <button id="submit" onClick={handleSubmit}>Submit Payment</button>
        </div>
    );
};

export default PaymentForm;
