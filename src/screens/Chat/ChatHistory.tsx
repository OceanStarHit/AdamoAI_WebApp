import React, { Dispatch, SetStateAction, useState } from 'react';
import ChatService from 'services/chat';
import { Loader } from 'assets/svgs';
import { CombineRoomType } from 'types/assistant';
import { PreviousChatType, SENDER_TYPE } from 'types/chat';
import AssistantSearch from './AssisstantSearch';

interface ChatHistoryType {
  allListAssistant: CombineRoomType[] | null;
  setAllListAssistants: React.Dispatch<
    React.SetStateAction<CombineRoomType[] | null>
  >;
  setPrevMessages: React.Dispatch<React.SetStateAction<PreviousChatType[]>>;
  setSelectedRoom: React.Dispatch<React.SetStateAction<CombineRoomType>>;
  uuid: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ChatHistory: React.FC<ChatHistoryType> = ({
  allListAssistant,
  setAllListAssistants,
  setPrevMessages,
  setSelectedRoom,
  uuid,
  setIsOpen,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [selectedAssist, setSelectedAssist] = useState('');

  const getAssistantHistory = async (uuid: string) => {
    const res = await ChatService.chatHistory(uuid);
    if (res?.length) {
      const categorizedMessages = res?.map((message: PreviousChatType) => {
        const isUser = allListAssistant?.some(
          (assistant) => assistant.assistant_uuid === message.sender_uuid,
        );
        return {
          ...message,
          senderType: isUser ? SENDER_TYPE.BOT : SENDER_TYPE.USER,
        };
      });
      console.log({ categorizedMessages });
      setPrevMessages(categorizedMessages);
    } else {
      setPrevMessages([]);
    }
  };
  const selectedAssistant = async (selectedRoom: CombineRoomType) => {
    setSelectedRoom(selectedRoom);
    await getAssistantHistory(selectedRoom?.uuid);
  };

  const getAllAssistants = async () => {
    setLoading(true);

    const res = await ChatService.listAssistants();
    if (res?.length) {
      setAllListAssistants(res);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getAllAssistants();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (uuid && allListAssistant) {
      getAssistantHistory(uuid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid, allListAssistant]);

  const setSelectedRoomAction = (item: CombineRoomType) => {
    selectedAssistant(item);
    setSelectedAssist(item.uuid);
    setIsOpen(false);
  };
  return (
    <>
      {!loading ? (
        <>
          <div className={`flex py-4 mx-6 items-center sm:justify-normal `}>
            <img
              src={require('assets/images/users.png')}
              className='w-10 h-10'
            />
            <span className=' text-2xl font-medium sm:ml-4'>Assistants</span>
          </div>
          <div className='w-full border-y border-slate-300 mb-2'>
            <AssistantSearch />
          </div>
          <div
            className={`px-4 flex-grow overflow-y-scroll  rounded-br-3xl custom-scrollbar overflow-x-hidden font-medium`}
          >
            {allListAssistant?.map((item) => {
              return (
                <div key={item._id}>
                  <div
                    className={`flex items-center p-1 cursor-pointer
                   ${
                     item.uuid === selectedAssist
                       ? 'bg-primary-gradient rounded-md '
                       : ''
                   }
                      `}
                    onClick={() => setSelectedRoomAction(item)}
                  >
                    <img
                      src={require('assets/images/YourTravelAdvisor.png')}
                      className='w-10 h-10 rounded-full'
                    />
                    <p className='font-sans text-base font-normal ml-3'>
                      {`${item.persona} `}
                    </p>
                  </div>
                  <div
                    className='bg-gray-200 ml-10 my-1 w-full'
                    style={{ height: '1px' }}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className='flex p-4 justify-center min-h-screen align-middle items-center'>
            <div className='flex justify-center h-8'>
              <Loader color='#db2777' />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatHistory;
