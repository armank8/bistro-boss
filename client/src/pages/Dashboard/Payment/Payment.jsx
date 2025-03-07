import SectionHeader from "../../../components/SectionHeader/SectionHeader"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

// TODO : Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionHeader heading="Payment" subHeading="Please pay to eat" className="pt-4"></SectionHeader>
            <div>
                <h2 className="text-4xl text-center">Payment</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    )
}

export default Payment