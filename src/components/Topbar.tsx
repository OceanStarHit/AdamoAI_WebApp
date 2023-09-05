import React, { ReactElement } from 'react';
import Button from './Button';
import { FilterIcon } from 'assets/svgs';

interface AssistantTopBarPropType {
  title?: string;
  icon?: ReactElement;
  btnShow?: boolean;
  btnEvent?: () => void;
}

const TopBar: React.FC<AssistantTopBarPropType> = ({
  title,
  icon,
  btnShow,
  btnEvent,
}) => {
  return (
    <div className='w-full rounded-t-3xl bg-white sticky top-0 left-0 z-50 right-0 flex flex-col sm:flex-row h-20 xl:h-34 border-b-2'>
      <div className='flex items-center align-middle px-6 h-full'>
        <div className='ml-6 mr-4'>{icon}</div>
        <div className='font-Helvetica text-3xl font-medium'>{title}</div>
      </div>
      {btnShow ? (
        <Button
          className=' flex items-center'
          icon={<FilterIcon />}
          onClick={btnEvent}
        />
      ) : null}
    </div>
  );
};
export default TopBar;
