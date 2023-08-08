import { PaymentElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutForm = () => {
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {
      variables: {
        colorPrimary: '#e54389',
        colorIcon: '#f4a14c',
      },
    },
  };
  return (
    // @ts-ignore
    <Elements stripe={stripePromise} options={options}>
      <form onSubmit={() => {}}>
        <PaymentElement />
        <button type='submit' disabled={false}>
          Pay
        </button>
      </form>
    </Elements>
  );
};

export default CheckoutForm;
