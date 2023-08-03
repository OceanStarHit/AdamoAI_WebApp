import React from 'react';
import SidebarList from 'components/Drawer/SidebarList';
import { LOWER_SIDEBAR, UPPER_SIDEBAR } from 'constants/sidebar';
import { IMAGE_URL } from 'constants/common';
import classNames from 'classnames';
import useLayoutContext from 'hooks/useLayout';

interface DrawerType {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerType> = ({ openDrawer, setOpenDrawer }) => {
  const { sidebarState, setSidebarState } = useLayoutContext();
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
      <div className='h-full overflow-y-auto bg-slate-950 pb-4'>
        <div className='flex justify-center'>
          <div className='mt-6 flex items-center justify-start space-x-2 px-3'>
            <img src={IMAGE_URL} height={100} width={100} alt={''} />
            <p className='text-lg font-semibold text-white font-sans'>ADAMO</p>
          </div>
        </div>
        <div className='divide-y-[0.5px]'>
          <div className='mb-2'>
            <SidebarList lists={UPPER_SIDEBAR} />
          </div>
          <div>
            <ul className='space-y-1 font-helvetica font-medium cursor-pointer mt-4'>
              {LOWER_SIDEBAR?.map((item) => {
                return (
                  <li key={item.label}>
                    <a
                      className={classNames(
                        'flex items-center rounded-lg p-2 text-white hover:black-gradient',
                        { 'black-gradient': sidebarState === item.label },
                      )}
                    >
                      <div
                        className='flex justify-between w-full'
                        onClick={() => setSidebarState(item.label)}
                      >
                        <div className='flex items-center space-x-2'>
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <div
                          className={`black-gradient ${item.color} rounded-md`}
                        >
                          <p className='px-2'>4</p>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='p-2'>
          <div className='black-gradient text-white rounded-md py-2 px-2'>
            <div className='flex space-x-2'>
              <div className='relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                <svg
                  className='absolute w-8 h-8 text-gray-400 -left-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <div className='flex flex-col'>
                <span className='text-white text-sm'>Kenzi Lawson</span>
                <span className='text-white text-xs'>
                  kenzilawson@gmail.com
                </span>
              </div>
              <div className='black-primary text-green-600 p-1 h-8 w-12 rounded-md text-center'>
                <p>Free</p>
              </div>
            </div>
            <div className='rounded-md p-2 border border-gray-300 mt-4'>
              <p className='text-center'>Upgrade to pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
