import { BackArrow } from 'assets/svgs';
import React, { FC } from 'react';
import { CombineRoomType } from 'types/assistant';

interface stateType {
  uuid: string;
  cardName: string;
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
      <div className=' flex items-center'>
        <div className='mx-6 cursor-pointer' onClick={setToInitialFunction}>
          <BackArrow />
        </div>
        <img
          src={require('assets/images/Small.png')}
          className='mr-4 w-10 h-10'
        />

        {selectedRoom.persona !== '' ? (
          <span className='text-2xl font-medium font-helvetica'>
            {selectedRoom.persona}
          </span>
        ) : (
          <span className='text-2xl font-medium'>{states?.cardName}</span>
        )}
      </div>
    </div>
  );
};

export default TopBar;
