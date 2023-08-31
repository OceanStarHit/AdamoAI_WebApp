import React from 'react';
import { AssistantSearchBoxType } from 'types/assistant';

const AssistantSearchBox: React.FC<AssistantSearchBoxType> = ({
  item,
  selectedAssist,
  setSelectedRoomAction,
}) => {
  return (
    <div key={item?._id}>
      <div
        className={`flex items-center p-1 cursor-pointer
   ${item?.uuid === selectedAssist ? 'bg-primary-gradient rounded-md ' : ''}
      `}
        onClick={item ? () => setSelectedRoomAction(item) : undefined}
      >
        <img src={item?.avatar} className='w-10 h-10 rounded-full' />
        <p className='font-sans text-base font-normal ml-3'>
          {`${item?.persona} `}
        </p>
      </div>
      <div
        className='bg-gray-200 ml-10 my-1 w-full'
        style={{ height: '1px' }}
      />
    </div>
  );
};

export default AssistantSearchBox;
