import React from 'react';
import Tabs from 'components/Tabs';
import { Crown, TickIcon } from 'assets/svgs';
import {
  SubscriptionPlansType,
  subscriptionPlans,
  subscriptionPlansNames,
} from 'constants/settings';
import useLayoutContext from 'hooks/useLayout';
import MainContainer from 'components/MainContainer';
import Navbar from 'components/Navbar';

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
      } rounded-lg h-96 flex flex-col justify-between w-full mx-2 `}
    >
      <div>
        <div className='flex gap-5 items-center ml-5 mt-2'>
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
        <div className='mt-3 ml-5 lg:mt-0'>
          {plan.discount ? (
            <p className='text-adamo-green'>
              Save {plan.discount}% (Limited Time Offer)
            </p>
          ) : null}
          <p className='text-md'>{plan.noOfMessages}</p>
        </div>
        <div className='mt-3'>
          {plan.features.map((feature, index) => (
            <div
              className='flex space-x-2 mx-4 mb-1 text-base lg:text-sm'
              key={index}
            >
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
        } p-2 w-full rounded-lg font-bold cursor-pointer `}
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
    <div>
      <MainContainer>
        <Navbar icon={<Crown />} avatarShown={false} title='Subscription'>
          <div className='max-h-[calc(100vh-5.5rem)] min-h-[calc(100vh-5.5rem)] overflow-y-auto custom-scrollb  ar'>
            <div className='w-full flex flex-col justify-center items-center text-gray-500'>
              <div className='relative bottom-2'>
                <Tabs
                  options={tabs}
                  selectedClassName='!bg-white'
                  notSelectedClassName='!bg-input-gradient'
                  variant='login'
                  showTabs={false}
                  wrapperClassName='rounded-lg w-6 p-0.5 mt-5'
                  tabClassName='rounded-lg py-2 xl:py-3 sm:px-24 sm:py-2'
                />
              </div>
              <p className='text-center font-helvetica text-base text-adamo-green relative bottom-3 m-2 font-semibold'>
                Save $10 with annual billing
              </p>
              <div className='flex flex-col gap-4 md:w-[700px] w-screen mr-4 p-4 pt-0 lg:min-h-fit lg:mb-2 md:flex-row lg:flex-row md:gap-x-4 lg:gap-x-6 justify-center lg:w-11/12'>
                <Plan plan={subscriptionPlans.LITE} isCurrent />
                <Plan plan={subscriptionPlans.BASIC} isCurrent={false} />
              </div>
            </div>
          </div>
        </Navbar>
      </MainContainer>
    </div>
  );
};

export default Subscription;
