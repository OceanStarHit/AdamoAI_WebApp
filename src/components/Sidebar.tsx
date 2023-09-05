import React from 'react';
import Drawer from 'components/Drawer/Drawer';
import { useNavigate } from 'react-router-dom';
import { DrawerClose, MenuIcon } from 'assets/svgs';
import { LOWER__CLOSE_SIDEBAR, UPPER_CLOSE_SIDEBAR } from 'constants/sidebar';
import SidebarContainer from 'components/Drawer/SidebarContainer';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  // const [dropdown, setDropdown] = React.useState(true);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [sidebarMove, setSidebarMove] = React.useState(true);

  return (
    <div
      className={`max-[639px]:${
        openDrawer ? 'bg-black' : 'bg-white'
      } bg-slate-950 min-h-screen font-serif`}
    >
      {!openDrawer && (
        <div
          className='absolute top-24 z-10 left-5 bg-primary-gradient md:lg h-10 w-10 rounded-r-md flex justify-center items-center cursor-pointer'
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </div>
      )}
      <aside
        id='logo-sidebar'
        className={`fixed top-0 left-0 z-40 ${
          sidebarMove ? 'w-72' : 'w-24'
        } -translate-x-full bg-slate-950 h-full transition-transform lg:translate-x-0`}
        aria-label='Sidebar'
      >
        <div>
          {sidebarMove ? (
            <>
              <div className='flex justify-between items-center'>
                <div className='my-9 flex items-center justify-start space-x-2 px-6'>
                  <img
                    src={require('../assets/images/Logo.png')}
                    height={50}
                    width={50}
                    alt='Logo'
                  />
                  <p className='text-lg font-semibold text-white font-sans'>
                    ADAMO
                  </p>
                </div>
                <div
                  className='flex justify-end mr-4 cursor-pointer'
                  onClick={() => setSidebarMove(!sidebarMove)}
                >
                  <DrawerClose />
                </div>
              </div>
              <SidebarContainer setOpenDrawer={setOpenDrawer} />
            </>
          ) : (
            <div>
              <div className='w-full items-center flex mt-2'>
                <div className='flex justify-start'>
                  <img
                    src={require('../assets/images/Logo.png')}
                    height={50}
                    width={50}
                    alt='Logo'
                  />
                </div>
                <div
                  className='flex justify-end ml-4 cursor-pointer'
                  onClick={() => setSidebarMove(!sidebarMove)}
                >
                  <DrawerClose />
                </div>
              </div>
              {UPPER_CLOSE_SIDEBAR.map((item) => {
                return (
                  <div
                    className='flex flex-col mt-2 items-center hover:black-gradient w-16 h-10 ml-4 rounded-full cursor-pointer'
                    key={item.label}
                    onClick={() => navigate(item.route)}
                  >
                    <span className='relative top-1'>{item.icon}</span>
                  </div>
                );
              })}
              <div className='border-t border-gray-300 mt-2' />
              {LOWER__CLOSE_SIDEBAR.map((item) => {
                return (
                  <div
                    className='flex flex-col mt-4 items-center hover:black-gradient w-16 h-10 ml-4 rounded-lg cursor-pointer'
                    key={item.label}
                  >
                    <span className='relative top-1'>{item.icon}</span>
                  </div>
                );
              })}
              <div className='p-2'>
                <div className='black-gradient rounded-md p-2'>
                  <div className='text-white mb-1'>
                    <div className='flex justify-center items-center'>
                      <div className='relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full'>
                        <svg
                          className='absolute w-8 h-8 text-gray-400 top-1'
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
                    </div>
                  </div>
                  <div className='rounded-md border border-gray-300 p-2 w-12 h-8 justify-center items-center flex relative left-1.5'>
                    <p className='text-center text-white'>Pro</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
      {openDrawer ? (
        <Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      ) : null}
      <div
        className={`p-4  max-[639px]:p-2 ${
          sidebarMove ? 'lg:ml-72' : 'lg:ml-32'
        } max-h-screen h-screen ${
          openDrawer ? 'hidden' : 'block'
        } max-[639px]:bg-white`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
