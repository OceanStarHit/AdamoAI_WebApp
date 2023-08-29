import { UPPER_SIDEBAR } from 'constants/sidebar';
import { LOWER_SIDEBAR } from 'constants/sidebar';
import SidebarList from 'components/Drawer/SidebarList';
type propType = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContainer: React.FC<propType> = ({ setOpenDrawer }) => {
  const list = UPPER_SIDEBAR.concat(LOWER_SIDEBAR);
  return (
    <>
      <div
        className={`max-h-[calc(100vh-2rem)] sm:max-h-[calc(65vh-2rem)] 
        overflow-y-auto custom-scrollbar
       `}
      >
        <SidebarList lists={list} setOpenDrawer={setOpenDrawer} />
      </div>
      <div className='px-2 md:absolute bottom-4 right-0'>
        <div className='black-gradient text-white rounded-md p-4'>
          <div className='flex space-x-2'>
            <div className='relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full'>
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
              <span className='text-white text-xs'>kenzilawson@gmail.com</span>
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
    </>
  );
};

export default SidebarContainer;
