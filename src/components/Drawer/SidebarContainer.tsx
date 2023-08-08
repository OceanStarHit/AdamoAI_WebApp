import { SidebarDropdown } from 'assets/svgs';
import { UPPER_SIDEBAR } from 'constants/sidebar';
import SidebarList from 'components/Drawer/SidebarList';
import classNames from 'classnames';
import useLayoutContext from 'hooks/useLayout';
import { AllAssistants } from 'types/assistant';

interface SidebarContainerType {
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  dropdown: boolean;
  lowerSidebar: AllAssistants[];
}
const SidebarContainer: React.FC<SidebarContainerType> = ({
  setDropdown,
  dropdown,
  lowerSidebar,
}) => {
  const { sidebarState, setSidebarState } = useLayoutContext();

  return (
    <>
      <div className='h-1/2'>
        <SidebarList lists={UPPER_SIDEBAR} />
      </div>
      <div className='border-t border-gray-300 mt-2' />
      <div className='h-1/2'>
        <div className='px-3'>
          <div
            className='flex items-center mt-2 cursor-pointer mb-2'
            onClick={() => setDropdown(!dropdown)}
          >
            <div className='flex justify-start'>
              <p className='text-white text-lg relative left-4 font-serif font-medium'>
                Chat List
              </p>
            </div>
            <div className='relative left-32'>
              <SidebarDropdown />
            </div>
          </div>
          {dropdown && (
            <ul className='font-helvetica font-medium cursor-pointer'>
              {lowerSidebar?.map((item) => {
                return (
                  <li key={item.label}>
                    <a
                      className={classNames(
                        'flex items-center rounded-lg p-2 text-white hover:black-gradient',
                        {
                          'black-gradient': sidebarState === item.label,
                        },
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
          )}
        </div>
        <div className='p-2'>
          <div className='black-gradient text-white rounded-md p-2'>
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
    </>
  );
};

export default SidebarContainer;
