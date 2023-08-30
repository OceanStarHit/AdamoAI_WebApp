import React from 'react';
import SidebarContainer from 'components/Drawer/SidebarContainer';
import { LeftArrow } from 'assets/svgs';
import Logo from '../../assets/images/Logo.png';

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
        <LeftArrow />
      </button>
      <div className='min-h-screen'>
        <div className='flex justify-center items-center'>
          <div className='mt-6 flex items-center justify-start space-x-2 px-3'>
            <img src={Logo} height={50} width={50} alt='Logo' />
            <p className='text-lg font-semibold text-white font-sans'>ADAMO</p>
          </div>
        </div>
        <SidebarContainer setOpenDrawer={setOpenDrawer} />
      </div>
    </div>
  );
};

export default Drawer;
