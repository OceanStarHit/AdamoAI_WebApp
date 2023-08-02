import React from 'react';
import classNames from 'classnames';
import { IMAGE_URL } from 'constants/common';
import Drawer from 'components/Drawer/Drawer';
import { AllAssistants } from 'types/assistant';
import { DropdownIcon, MenuIcon } from 'assets/svgs';
import SidebarList from 'components/Drawer/SidebarList';
import AssistantServices from 'services/assistants/index';
import { LOWER_SIDEBAR, UPPER_SIDEBAR } from 'constants/sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  currentChat?: string;
  setCurrentChat: React.Dispatch<React.SetStateAction<string>>;
}
const Layout: React.FC<LayoutProps> = ({ children, setCurrentChat }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [lowerSidebar, setLowerSidebar] = React.useState<AllAssistants[]>([]);
  const [dropdown, setDropdown] = React.useState(true);
  React.useEffect(() => {
    async function fetchListAssistant() {
      try {
        const listAssistant = await AssistantServices.listAssistants();
        setLowerSidebar(listAssistant ?? LOWER_SIDEBAR);
      } catch (error) {
        console.log(error);
        setLowerSidebar(LOWER_SIDEBAR);
      }
    }
    fetchListAssistant();
  }, []);

  return (
    <div className='bg-slate-950 min-h-screen font-serif'>
      <div
        className='absolute top-12 bg-primary-gradient md:lg h-10 w-10 rounded-r-md flex justify-center items-center cursor-pointer'
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </div>
      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 w-64 -translate-x-full border-r border-gray-700 bg-slate-950 transition-transform lg:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full overflow-y-auto bg-slate-950 pb-4'>
          <div className='flex'>
            <div className='mt-6 flex items-center justify-start space-x-2 px-3'>
              <img src={IMAGE_URL} height={50} width={50} alt='Logo' />
              <p className='text-lg font-semibold text-white font-sans'>
                ADAMO
              </p>
            </div>
          </div>
          <div className='divide-y-[0.5px]'>
            <div className='mb-1'>
              <SidebarList lists={UPPER_SIDEBAR} />
            </div>
            <div className='px-3'>
              <div
                className='flex items-center mt-1 cursor-pointer mb-2'
                onClick={() => setDropdown(!dropdown)}
              >
                <div className='flex justify-start'>
                  <p className='text-white text-lg relative left-8 font-medium'>
                    Chat List
                  </p>
                </div>
                <div className='relative left-1/2'>
                  <DropdownIcon />
                </div>
              </div>
              {dropdown && (
                <ul className='space-y-1 font-helvetica font-medium cursor-pointer'>
                  {lowerSidebar?.map((item) => {
                    return (
                      <li key={item.label}>
                        <a
                          className={classNames(
                            'flex items-center rounded-lg p-2 text-white hover:black-gradient',
                          )}
                        >
                          <div
                            className='flex items-center space-x-2'
                            onClick={() => setCurrentChat(item.label)}
                          >
                            <span>{item.icon}</span>
                            <span className='ml-3 flex-1 whitespace-nowrap'>
                              {item.label}
                            </span>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
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
      </aside>
      {openDrawer ? (
        <Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      ) : null}
      <div
        className={`p-4 lg:ml-64 max-h-screen ${
          openDrawer ? 'hidden' : 'block'
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
