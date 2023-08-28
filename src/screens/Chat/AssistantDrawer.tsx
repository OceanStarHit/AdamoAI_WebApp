import React, { Dispatch, SetStateAction } from 'react';
import ChatHistory from './ChatHistory';
import { CombineRoomType } from 'types/assistant';
import { PreviousChatType } from 'types/chat';

interface DrawerType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  allListAssistant: CombineRoomType[] | null;
  setAllListAssistants: React.Dispatch<
    React.SetStateAction<CombineRoomType[] | null>
  >;
  setPrevMessages: React.Dispatch<React.SetStateAction<PreviousChatType[]>>;
  setSelectedRoom: React.Dispatch<React.SetStateAction<CombineRoomType>>;
  uuid: string;
}

const AssistantDrawer: React.FC<DrawerType> = ({
  isOpen,
  setIsOpen,
  allListAssistant,
  setAllListAssistants,
  setPrevMessages,
  setSelectedRoom,
  uuid,
}) => {
  return (
    <div
      className={`absolute top-0 w-full z-50 left-0 right-0 bg-slate-50 min-h-screen ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <button
        type='button'
        data-drawer-hide='drawer-navigation'
        aria-controls='drawer-navigation'
        className='absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400  hover:bg-gray-600 hover:text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          aria-hidden='true'
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <div className='min-h-screen'>
        <ChatHistory
          allListAssistant={allListAssistant}
          setAllListAssistants={setAllListAssistants}
          setPrevMessages={setPrevMessages}
          setSelectedRoom={setSelectedRoom}
          uuid={uuid}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default AssistantDrawer;
