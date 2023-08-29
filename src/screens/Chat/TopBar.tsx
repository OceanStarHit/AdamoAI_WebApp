import { BackArrow, FilterIcon } from 'assets/svgs';
import Button from 'components/Button';
import React, { FC } from 'react';
import { CombineRoomType } from 'types/assistant';

interface stateType {
  uuid: string;
  cardName: string;
  itemName?: string;
}

type PropType = {
  selectedRoom: CombineRoomType;
  setToInitialFunction: () => void;
  states?: stateType;
};

const TopBar: FC<PropType> = ({
  selectedRoom,
  setToInitialFunction,
  states,
}) => {
  return (
    <div className='p-4 w-full items-center border-b-2'>
      <div className=' flex items-center justify-between'>
        <div className='flex items-center'>
          <div
            className='mx-1 sm:mx-6 cursor-pointer'
            onClick={setToInitialFunction}
          >
            <BackArrow />
          </div>
          <img
            src={require('assets/images/Small.png')}
            className='mr-1 sm:mr-4 w-7 sm:w-10 h-7 sm:h-10'
          />

          {selectedRoom.persona !== '' ? (
            <span className='text-lg sm:text-2xl font-medium font-helvetica'>
              {selectedRoom.persona}
            </span>
          ) : states?.cardName ? (
            <span className='text-2xl font-medium'>{states?.cardName}</span>
          ) : states?.itemName ? (
            <span className='text-2xl font-medium'>{states?.itemName}</span>
          ) : null}
        </div>
        <Button icon={<FilterIcon />} />
      </div>
    </div>
  );
};

export default TopBar;
