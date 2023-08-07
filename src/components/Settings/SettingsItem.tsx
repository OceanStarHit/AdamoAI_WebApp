import { CarrotRight } from 'assets/svgs';
import { SettingsItem as SettingsItemType } from 'constants/settings';
import React from 'react';

type Props = {
  item: SettingsItemType;
  isLast: boolean;
  onClick: () => void;
};

const SettingsItem: React.FC<Props> = ({ item, isLast, onClick }) => {
  return (
    <div
      className={`py-[15px] md:py-[24px] px-1 md:px-3 ${
        !isLast ? 'border-b' : ''
      } flex items-center justify-between hover:cursor-pointer`}
      onClick={onClick}
    >
      <div className='flex items-center'>
        <item.icon />
        <p className='ml-3 md:ml-5 text-sm md:text-lg'>{item.title}</p>
      </div>
      <div className='flex space-x-4 items-center'>
        <p className='text-slate-400 font-light'>{item.subtitle}</p>
        <CarrotRight />
      </div>
    </div>
  );
};

export default SettingsItem;
