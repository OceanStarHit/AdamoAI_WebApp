import { TickIcon } from 'assets/svgs';
import {
  SubscriptionPlansType,
  subscriptionPlans,
  subscriptionPlansNames,
} from 'constants/settings';

const Plan = ({
  plan,
  isCurrent,
}: {
  plan: SubscriptionPlansType;
  isCurrent: boolean;
}) => {
  return (
    <div
      className={`flex-1 ${
        plan.type === subscriptionPlansNames.LITE
          ? 'bg-subscription-lite'
          : 'bg-subscription-basic'
      } w-full max-w-[450px] p-5 rounded-lg flex flex-col justify-between`}
    >
      <div>
        <div className='flex gap-5 items-center'>
          <div>{<plan.icon />}</div>
          <div>
            <p className='font-semibold'>{plan.type}</p>
            <div className='flex'>
              <p>$</p>
              <p className='font-bold text-[50px] leading-[1] text-black'>
                {plan.price}
              </p>
              <p className='self-end'>/ mo</p>
            </div>
          </div>
        </div>
        <div className='mt-3 md:mt-5'>
          {plan.discount ? (
            <p className='text-adamo-green'>
              Save {plan.discount}% (Limited Time Offer)
            </p>
          ) : null}
          <p className='text-md'>{plan.noOfMessages}</p>
        </div>
        <div className='mt-5'>
          {plan.features.map((feature, index) => (
            <div className='flex gap-3 mb-4' key={index}>
              <TickIcon classNames='' color='#30DB5B' />
              <p className='text-black'>{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={isCurrent}
        className={`text-bold ${
          isCurrent ? 'bg-[#23232312]' : 'bg-[#D4467F15]'
        } p-2 w-full rounded-lg font-bold`}
      >
        <p className={`${!isCurrent ? 'text-[#A056A2]' : ''}`}>
          {isCurrent ? 'Current plan' : 'Subscribe'}
        </p>
      </button>
    </div>
  );
};

const Subscription = () => {
  return (
    <div className='w-full flex justify-center items-center text-gray-500'>
      <div className='flex w-full flex-col md:flex-row gap-3 justify-center'>
        <Plan plan={subscriptionPlans.LITE} isCurrent />
        <Plan plan={subscriptionPlans.BASIC} isCurrent={false} />
        {/* <div className='flex-1 bg-red-300 w-full max-w-[450px] p-5'>PLAN 2</div> */}
      </div>
    </div>
  );
};

export default Subscription;
