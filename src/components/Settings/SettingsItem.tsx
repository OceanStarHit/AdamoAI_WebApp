import { CarrotRight } from 'assets/svgs';
import { SettingsItem as SettingsItemType } from 'constants/settings';
import React from 'react';

type Props = {
  item: SettingsItemType;
  isLast: boolean;
  onClick?: () => void;
};

const SettingsItem: React.FC<Props> = ({ item, isLast }) => {
  return (
    <div
      className={`py-[24px] px-3 ${
        !isLast ? 'border-b' : ''
      } flex items-center justify-between hover:cursor-pointer`}
    >
      <div className='flex items-center'>
        <item.icon />
        <p className='ml-5 text-lg'>{item.title}</p>
      </div>
      <CarrotRight />
    </div>
  );
};

export default SettingsItem;
