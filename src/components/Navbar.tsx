import React from 'react';
import Heading from 'components/Heading';
import useLayoutContext from 'hooks/useLayout';
import { Avatar, BackArrow, DropdownIcon } from 'assets/svgs';

type Props = {
  onBackPress?: () => void;
  children: React.ReactNode;
};

const Navbar: React.FC<Props> = ({ children, onBackPress }) => {
  const { settingState, setSettingState } = useLayoutContext();
  return (
    <div>
      <div className='flex justify-between items-center border-b border-gray-300 pl-5'>
        <div className='flex items-center'>
          {onBackPress ? (
            <button className='hover:cursor-pointer' onClick={onBackPress}>
              <BackArrow />
            </button>
          ) : null}
          <div className='flex justify-start mb-8 space-x-2 items-center'>
            {settingState !== 'Settings' ? (
              <div
                className='relative top-4 cursor-pointer'
                onClick={() => {
                  setSettingState('Settings');
                }}
              >
                <BackArrow />
              </div>
            ) : null}
            <Heading
              text={settingState}
              type='heading'
              className='mb-0 relative top-4 left-4'
            />
          </div>
        </div>
        <div className='flex justify-end mr-8'>
          <div className='flex space-x-4 items-center'>
            <div className='relative w-10 h-10 overflow-hidden bg-gray-600 rounded-full'>
              <Avatar />
            </div>
            <div>
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
