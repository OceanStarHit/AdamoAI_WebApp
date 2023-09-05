import React from 'react';
import Heading from 'components/Heading';
import { Avatar, BackArrow, DropdownIcon } from 'assets/svgs';

type Props = {
  onBackPress?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  avatarShown?: boolean;
  title: string;
};

const Navbar: React.FC<Props> = ({
  children,
  onBackPress,
  icon,
  avatarShown = true,
  title,
}) => {
  // const { settingState, setSettingState } = useLayoutContext();
  return (
    <div>
      <div className='flex justify-between items-center border-b border-gray-300 pl-5'>
        <div className='flex justify-evenly items-start'>
          {onBackPress ? (
            <button className='hover:cursor-pointer' onClick={onBackPress}>
              <BackArrow />
            </button>
          ) : null}
          <div className='flex justify-start my-2 items-center gap-4'>
            <div className=''>{icon && icon}</div>
            {/* {settingState !== 'settings' ? (
              <div
                className='relative top-4 cursor-pointer'
                onClick={() => {
                  setSettingState('settings');
                }}
              >
                <BackArrow />
              </div>
            ) : null} */}
            <div className=''>
              <Heading text={title} type='heading' className='mb-0 relative' />
            </div>
          </div>
        </div>
        {avatarShown && (
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
        )}
      </div>
      {children}
    </div>
  );
};

export default Navbar;
