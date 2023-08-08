import ToggleBtn from 'components/ToggleBtn';
import { subscriptionPlans } from 'constants/settings';
import { subscriptionPlansNames } from 'constants/settings';

type Props = {
  plan: subscriptionPlansNames;
};

const Checkout: React.FC<Props> = ({ plan }) => {
  const selectedPlan = subscriptionPlans[plan];
  return (
    <div className='flex w-full mb-5 mt-5'>
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
            <selectedPlan.icon />
            <div className='ml-3'>
              <p className='capitalize font-semibold text-black'>
                Adamo {selectedPlan.type.toLocaleLowerCase()}
              </p>
              <p className='text-sm'>{selectedPlan.details}</p>
            </div>
            <p className='text-lg text-black font-semibold whitespace-nowrap'>
              $ {selectedPlan.price}
            </p>
          </div>
          <div className='px-5 bg-gray-light rounded-b-md p-3 flex items-center font-semibold justify-between'>
            <div className='flex items-center'>
              <ToggleBtn />
              <p className='ml-4 mr-1 p-2 rounded-sm bg-[#00ff4011] text-black'>
                Save $10
              </p>
              <p>with annual billing</p>
            </div>
            <p className='r-0'>$50/year</p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <p>Billing details</p>
      </div>
    </div>
  );
};

export default Checkout;
