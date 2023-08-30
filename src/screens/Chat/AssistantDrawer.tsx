import React from 'react';
import ChatHistory from './ChatHistory';
import { CombineRoomType } from 'types/assistant';
import { PreviousChatType } from 'types/chat';
import { LeftArrow } from 'assets/svgs';
import Button from 'components/Button';

interface DrawerType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
      <Button
        type='button'
        data-drawer-hide='drawer-navigation'
        aria-controls='drawer-navigation'
        className='absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400  hover:bg-gray-600 hover:text-white'
        onClick={() => setIsOpen(!isOpen)}
        icon={<LeftArrow />}
      />
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
