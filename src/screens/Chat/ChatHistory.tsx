import React from 'react';
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
}
const ChatHistory: React.FC<ChatHistoryType> = ({
  allListAssistant,
  setAllListAssistants,
  setPrevMessages,
  setSelectedRoom,
  uuid,
}) => {
  const [loading, setLoading] = React.useState(false);

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
  return (
    <>
      {!loading ? (
        <>
          <div className='w-full border-b-2'></div>
          <div className='w-full'>
            <AssistantSearch />
          </div>
          <div className='w-full border-b-2'></div>
          <div className='p-4 space-y-2 flex-grow overflow-y-scroll overflow-x-hidden font-medium'>
            {allListAssistant?.map((item) => {
              return (
                <div key={item._id}>
                  <div
                    className='flex items-center cursor-pointer'
                    onClick={() => selectedAssistant(item)}
                  >
                    <img
                      src={require('assets/images/YourTravelAdvisor.png')}
                      className='w-10 h-10 rounded-full'
                    />
                    <p className='font-sans text-base font-normal ml-3'>
                      {`${item.persona} `}
                    </p>
                  </div>
                  <div className='bg-gray-200 w-full ml-10 h-0.5'></div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className='border-t flex p-4 justify-center'>
            <div className='flex justify-center mt-40'>
              <Loader color='#db2777' />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatHistory;
