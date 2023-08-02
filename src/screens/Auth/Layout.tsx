import React from 'react';
import WordEffect from 'components/WordEffect';
import { ANIMATED_TEXT } from 'constants/auth';

interface LayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='gradient min-h-screen font-serif'>
      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 w-96 -translate-x-full transition-transform lg:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='mt-6 flex items-center justify-start space-x-2 px-3'>
          <img
            src={require('assets/images/Logo.png')}
            height={50}
            width={50}
            alt={''}
          />
          <p className='text-lg font-semibold text-white font-sans'>ADAMO</p>
        </div>

        <div className='px-4 w-72 space-y-4'>
          <p className='text-white text-2xl font-bold mt-4'>
            Your Ultimate Personal Life Assistant
          </p>
          <p className='text-white text-lg'>
            <WordEffect
              text={ANIMATED_TEXT}
              delay={400}
              className='text-white'
            />
          </p>
        </div>

        <img
          src={require('assets/images/sideLogo.png')}
          className='w-[1200px] absolute top-0'
        />
      </aside>

      <div className='p-4 lg:ml-80 max-h-screen'>{children}</div>
    </div>
  );
};
export default AuthLayout;
