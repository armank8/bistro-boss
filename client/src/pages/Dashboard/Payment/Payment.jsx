import SectionHeader from "../../../components/SectionHeader/SectionHeader"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO : Add publishable key
const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
            <SectionHeader heading="Payment" subHeading="Please pay to eat" className="pt-4"></SectionHeader>
            <div>
                <h2 className="text-4xl text-center">Payment</h2>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    )
}

export default Payment