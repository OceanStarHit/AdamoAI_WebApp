import ToggleBtn from 'components/ToggleBtn';
import { subscriptionPlans } from 'constants/settings';
import { subscriptionPlansNames } from 'constants/settings';
import CheckoutForm from './CheckoutForm';

type Props = {
  plan: subscriptionPlansNames;
};

const Checkout: React.FC<Props> = ({ plan }) => {
  const selectedPlan = subscriptionPlans[plan];
  return (
    <div className='flex w-full mb-5 mt-5 flex-col md:flex-row'>
      <div className='flex-1'>
        <div className='flex items-center'>
          <img
            src={require('assets/images/Logo.png')}
            height={50}
            width={50}
            alt={''}
          />
          <p className='ml-2 text-lg font-bold text-black'>ADAMO</p>
        </div>
        <p className='mt-3'>Subscribe to Adamo {selectedPlan.type}</p>
        <div className='flex mt-3'>
          <p>$</p>
          <p className='font-bold text-[50px] leading-[1] text-black'>
            {selectedPlan.price}
          </p>
          <p className='self-end'>/ mo</p>
        </div>
        {/* Plan Card */}
        <div className='border rounded-lg mt-8 max-w-[700px]'>
          <div className='p-5 flex gap-3 justify-between'>
            <div className='flex'>
              <selectedPlan.icon />
              <div className='ml-3'>
                <p className='capitalize font-semibold text-black'>
                  Adamo {selectedPlan.type.toLocaleLowerCase()}
                </p>
                <p className='text-sm'>{selectedPlan.details}</p>
              </div>
            </div>
            <p className='text-lg text-black font-semibold whitespace-nowrap'>
              $ {selectedPlan.price}
            </p>
          </div>
          <div className='px-5 bg-gray-light rounded-b-md p-3 flex items-between font-semibold justify-between flex-col md:flex-row'>
            <div className='flex'>
              <ToggleBtn />
              <p className='ml-2'>
                <span className='p-2 rounded-sm bg-[#00ff4011] text-black whitespace-nowrap'>
                  Save $10
                </span>
                with annual billing
              </p>
            </div>
            <p className='r-0 md:self-auto self-end'>$50/year</p>
          </div>
        </div>
        <div className='text-black font-semibold md:pl-6 md:mt-5 max-w-[700px]'>
          <div className='flex justify-between py-5 border-b-2 border-gray-200'>
            <p>Subtotal</p>
            <p>${selectedPlan.price}</p>
          </div>
          <div className='flex justify-between py-5 border-b-2 border-gray-200'>
            <input
              placeholder='Add Promotion Code'
              className='bg-gray-light w-[190px] p-2 px-4 rounded text-black'
            />
          </div>
          <div className='flex justify-between py-5'>
            <p>Total Due</p>
            <p>${selectedPlan.price}</p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
