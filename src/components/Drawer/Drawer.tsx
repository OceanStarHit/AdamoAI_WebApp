import React from 'react';
import SidebarContainer from './SidebarContainer';

interface DrawerType {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerType> = ({ openDrawer, setOpenDrawer }) => {
  return (
    <div>
      <button
        type='button'
        data-drawer-hide='drawer-navigation'
        aria-controls='drawer-navigation'
        className='absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400  hover:bg-gray-600 hover:text-white'
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <svg
          aria-hidden='true'
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <div className='min-h-screen'>
        <div className='flex justify-center items-center'>
          <div className='mt-6 flex items-center justify-start space-x-2 px-3'>
            <img
              src={require('assets/images/Logo.png')}
              height={50}
              width={50}
              alt='Logo'
            />
            <p className='text-lg font-semibold text-white font-sans'>ADAMO</p>
          </div>
        </div>
        <SidebarContainer />
      </div>
    </div>
  );
};

export default Drawer;
