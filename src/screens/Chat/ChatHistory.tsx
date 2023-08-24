import React from 'react';
import ChatService from 'services/chat';
import { DeleteIcon, Loader } from 'assets/svgs';
import { CombineRoomType } from 'types/assistant';
import { PreviousChatType, SENDER_TYPE } from 'types/chat';
import Checkbox from 'components/CheckBox';

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
          <div className='border-t border-gray-300 flex justify-between p-4'>
            <div>
              <p>Chat History</p>
            </div>
            <div className='cursor-pointer'>
              <DeleteIcon />

              {/* 
              This code will work when delete chat api will be available
              <Modal
                isOpen={isOpen}
                title='Delete Chat'
                description='Are You To Delete Chats'
                btnText='Delete'
                setIsOpen={setIsOpen}
                onClose={handleDelete}
              /> */}
            </div>
          </div>
          <div className='p-4 space-y-2 flex-grow overflow-y-scroll overflow-x-hidden font-medium'>
            {allListAssistant?.map((item) => {
              return (
                <div
                  className='rounded-md border border-slate-200 p-1 h-36 md:h-24 bg-gray-100 font-sans cursor-pointer w-full flex space-x-2'
                  key={item._id}
                >
                  <div className='w-1/12 relative top-1'>
                    <Checkbox />
                  </div>
                  <div
                    className='w-11/12 flex flex-col'
                    onClick={() => selectedAssistant(item)}
                  >
                    <label className='text-sm md:text-base truncate w-20 md:w-auto relative top-1.5 md:top-1 cursor-pointer'>
                      {`${item.persona} ${item.name}`}
                    </label>
                    <div className='text-xs md:text-sm text-gray-400 flex justify-center md:justify-start mt-2'>
                      {item.discription ??
                        'Best couple color gradient for FF5C00'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className='border-t border-gray-300 flex p-4 justify-center'>
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
