import React, { ReactElement } from 'react';
// import Button from './Button';
// import { FilterIcon } from 'assets/svgs';

interface AssistantTopBarPropType {
  title?: string;
  icon?: ReactElement;
  //   btnEvent?: () => void;
}

const TopBar: React.FC<AssistantTopBarPropType> = ({
  title,
  icon,
  //   btnEvent,
}) => {
  return (
    <div className='flex flex-col sm:flex-row h-20 xl:h-34 border-b-2'>
      <div className=' flex items-center align-middle px-6 h-full'>
        <div className='ml-6 mr-4'>{icon}</div>
        <div className='font-Helvetica text-3xl font-medium'>{title}</div>
      </div>
      {/* <Button
          className=' flex items-center'
          icon={<FilterIcon />}
          onClick={btnEvent}
        /> */}
    </div>
  );
};
export default TopBar;
