import React from 'react';
import Tabs from 'components/Tabs';
import { TickIcon } from 'assets/svgs';
import {
  SubscriptionPlansType,
  subscriptionPlans,
  subscriptionPlansNames,
} from 'constants/settings';
import useLayoutContext from 'hooks/useLayout';

const Plan = ({
  plan,
  isCurrent,
}: {
  plan: SubscriptionPlansType;
  isCurrent: boolean;
}) => {
  return (
    <div
      className={`${
        plan.type === subscriptionPlansNames.LITE
          ? 'bg-subscription-lite'
          : 'bg-subscription-basic'
      } p-3 rounded-lg flex flex-col justify-between w-full`}
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
        <div className='mt-3'>
          {plan.discount ? (
            <p className='text-adamo-green'>
              Save {plan.discount}% (Limited Time Offer)
            </p>
          ) : null}
          <p className='text-md'>{plan.noOfMessages}</p>
        </div>
        <div className='mt-3'>
          {plan.features.map((feature, index) => (
            <div className='flex space-x-2 mb-3' key={index}>
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
  const tabs = [
    { label: 'Monthly', component: <></> },
    { label: 'Yearly', component: <></> },
  ];
  const { setSettingState } = useLayoutContext();

  React.useEffect(() => {
    setSettingState('Settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center text-gray-500'>
      <div className='relative bottom-2'>
        <Tabs
          options={tabs}
          selectedClassName='!bg-white'
          notSelectedClassName='!bg-input-gradient'
          variant='login'
        />
      </div>
      <p className='text-center font-helvetica text-base text-adamo-green relative bottom-1 font-semibold'>
        Save $10 with annual billing
      </p>
      <div className='flex flex-col md:flex-row gap-x-3 gap-2 justify-center w-full lg:w-11/12'>
        <Plan plan={subscriptionPlans.LITE} isCurrent />
        <Plan plan={subscriptionPlans.BASIC} isCurrent={false} />
      </div>
    </div>
  );
};

export default Subscription;
