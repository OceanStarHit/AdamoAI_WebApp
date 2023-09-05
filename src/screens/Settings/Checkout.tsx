import Button from 'components/Button';
import Navbar from 'components/Navbar';
import Heading from 'components/Heading';
import { Calendar, Email, Star } from 'assets/svgs';
import MainContainer from 'components/MainContainer';

const Checkout = () => {
  return (
    <MainContainer>
      <div className='w-full min-h-[calc(100vh-2rem)] overflow-y-auto'>
        <Navbar title='Payment'>
          <div className='flex flex-col lg:flex-row w-full space-x-0 lg:space-x-2 font-helvetica overflow-y-auto max-h-[calc(100vh-8rem)] md:max-h-[calc(100vh-2rem)]'>
            <div className='w-full lg:w-1/2 mx-0 lg:mx-4'>
              <div className='flex space-x-2 mt-12 ml-4'>
                <img src={require('assets/images/Logo.png')} />
                <p className='font-bold text-black text-lg'>ADAMO</p>
              </div>
              <p className='text-slate-500 font-semibold ml-4'>
                Subscribe to Adamo Basic
              </p>
              <div className='flex ml-4'>
                <p className='text-4xl font-bold text-black font-helvetica'>
                  $5
                </p>
                <p className='self-end font-helvetica'>/mo</p>
              </div>
              <div className='border border-slate-300 rounded-lg divide-y flex flex-col divide-slate-300 mt-4 w-11/12 lg:w-full mx-4 lg:mx-0'>
                <div className='flex justify-between p-4'>
                  <div className='w-14 h-14 p-1 rounded-full bg-[#FFB340] bg-opacity-50 flex items-center justify-center'>
                    <Star className='#FFB340' />
                  </div>
                  <div className='space-y-3'>
                    <p className='text-black font-semibold text-lg'>
                      Adamo Basic
                    </p>
                    <p className='text-slate-400 text-sm'>
                      Enjoy unlimited message and expert with the Basic plan.
                    </p>
                  </div>
                  <div>
                    <p className='text-black font-semibold'>$5</p>
                  </div>
                </div>
                <div className='flex justify-between p-3 input-gradient items-center'>
                  <div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        value=''
                        className='sr-only peer'
                      />
                      <div className="w-[60px] h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-adamo-green" />
                    </label>
                  </div>
                  <div className='space-x-3 flex items-center'>
                    <p className='text-black font-semibold text-lg bg-green-100 p-0.5 rounded-lg'>
                      save $10
                    </p>
                    <p className='text-slate-600 text-sm font-semibold'>
                      with annual billing
                    </p>
                  </div>
                  <div>
                    <p className='text-slate-500 font-semibold'>$50/year</p>
                  </div>
                </div>
              </div>
              <div className='divide-y divide-slate-300 ml-12'>
                <div className='flex justify-between font-helvetica mt-3'>
                  <Heading text='Subtotal' type='subheading' />
                  <Heading
                    text='$5'
                    type='subheading'
                    className='mr-6 lg:mr-0'
                  />
                </div>
                <div className='font-helvetica mt-3'>
                  <Button
                    btnText='Add Promotion Code'
                    className='bg-gray-200 text-lg text-gray-400 rounded-lg flex justify-center items-center font-semibold h-10 mt-4'
                  />
                </div>
                <div className='flex justify-between font-helvetica mt-5'>
                  <Heading text='Total Due' type='subheading' />
                  <Heading
                    text='$5'
                    type='subheading'
                    className='mr-6 lg:mr-0'
                  />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 mx-0 lg:mx-4'>
              <div className='rounded-lg m-2'>
                <div className='border border-slate-300 rounded-lg divide-y flex flex-col divide-slate-300'>
                  <div className='px-4 py-8'>
                    <p className='text-black font-semibold'>Billing email</p>
                    <div className='flex space-x-4'>
                      <Email />
                      <p className='text-slate-500 font-medium'>
                        Email address
                      </p>
                    </div>
                  </div>
                  <div className='px-4 py-8'>
                    <p className='text-black font-semibold'>Card Details</p>
                    <div className='flex w-full justify-between'>
                      <div className='flex space-x-4'>
                        <Calendar />
                        <p className='text-slate-500 font-medium'>
                          Card Number
                        </p>
                      </div>
                      <div className='w-32 flex space-x-2'>
                        <input placeholder='MM/YY' className='w-16' />
                        <input placeholder='CVC' className='w-12' />
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-8'>
                    <p className='text-black font-semibold'>Name on Card</p>
                    <div>
                      <div className='flex space-x-4 items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='14'
                          height='18'
                          viewBox='0 0 14 18'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8ZM7 18C10.866 18 14 16.2091 14 14C14 11.7909 10.866 10 7 10C3.13401 10 0 11.7909 0 14C0 16.2091 3.13401 18 7 18Z'
                            fill='#3C3C43'
                            fillOpacity='0.6'
                          />
                        </svg>
                        <p className='text-slate-500 font-medium'>Your Name</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </MainContainer>
  );
};

export default Checkout;
