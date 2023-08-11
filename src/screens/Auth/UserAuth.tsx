import React from 'react';
import AuthLayout from './Layout';
import Tabs from 'components/Tabs';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import MainContainer from 'components/MainContainer';

const UserAuth = () => {
  const tabs = [
    { label: 'Sign In', component: <Login /> },
    { label: 'Create Account', component: <Register /> },
  ];

  return (
    <AuthLayout>
      <MainContainer>
        <div className='flex flex-col px-3 w-full max-h-[calc(100vh-2rem)] overflow-y-auto'>
          <div className='flex items-center justify-center space-x-2 mt-20'>
            <img
              src={require('assets/images/Logo.png')}
              height={50}
              width={50}
              alt={''}
            />
            <p className='text-2xl font-semibold text-black font-helvetica'>
              ADAMO
            </p>
          </div>

          <div className='flex justify-center'>
            <Tabs
              options={tabs}
              selectedClassName='!bg-white'
              notSelectedClassName='!bg-gray-200'
              variant='login'
            />
          </div>
        </div>
      </MainContainer>
    </AuthLayout>
  );
};
export default UserAuth;
