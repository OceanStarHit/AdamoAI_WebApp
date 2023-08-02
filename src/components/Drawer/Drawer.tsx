import React from 'react';
import SidebarList from 'components/Drawer/SidebarList';
import { LOWER_SIDEBAR, UPPER_SIDEBAR } from 'constants/sidebar';

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
      <div className='h-full overflow-y-auto bg-slate-950 pb-4'>
        <div className='flex'>
          <div className='mt-6 flex items-center justify-start space-x-2 px-3'>
            <img
              src='https://s3-alpha-sig.figma.com/img/6632/03be/91a92de67c0eedb1a2fc88c554cac425?Expires=1690761600&Signature=QVCIAQc0pkUa~1U4EPLZdacVUhljJb7tKa5thPGUUyLcp2VveWGi-RzJW9QbrLgC61KmeQFjGUas88t7Hgo6LF4cx1729ssmliuod1wsPCLU4mvb1LEwYD-Dgrezpc4Vxgi1dy2UV1B3ToUItaGQpQE9Jiy4yB1p8bIys5kG3CSkalMQXyQjBldfGbNy5AKRwB4QZLesZ1uy5WDLVr7uzL7SkCLANx5v8~bs8T97Uq338YvRL8xYAFgq4KtcGc8mEssAoqHPyLxoaozy0zHCQzEVAvGgjnV3lFVe2BXDh14YI3IOSDLol7ziS~SHqLw1uuKpdHzon-c2WR0kmLUMgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              height={100}
              width={100}
              alt={''}
            />
            <p className='text-lg font-semibold text-white font-sans'>ADAMO</p>
          </div>
        </div>
        <div className='divide-y-[0.5px]'>
          <SidebarList lists={UPPER_SIDEBAR} />
          <SidebarList lists={LOWER_SIDEBAR} />
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
