import React from 'react';
import ChatService from 'services/chat';
import { CombineRoomType } from 'types/assistant';
import { PreviousChatType, SENDER_TYPE } from 'types/chat';

interface ChatHistoryType {
  allListAssistant: CombineRoomType[] | null;
  setAllListAssistants: React.Dispatch<
    React.SetStateAction<CombineRoomType[] | null>
  >;
  setPrevMessages: React.Dispatch<React.SetStateAction<PreviousChatType[]>>;
  setSelectedRoom: React.Dispatch<React.SetStateAction<CombineRoomType>>;
}
const ChatHistory: React.FC<ChatHistoryType> = ({
  allListAssistant,
  setAllListAssistants,
  setPrevMessages,
  setSelectedRoom,
}) => {
  const [loading, setLoading] = React.useState(false);
  const getAssistantHistory = async (selectedRoom: CombineRoomType) => {
    setSelectedRoom(selectedRoom);
    const res = await ChatService.chatHistory(selectedRoom?.uuid);
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
      setPrevMessages(categorizedMessages);
    }
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

  return (
    <>
      {!loading ? (
        <>
          <div className='border-t border-gray-300 flex justify-between p-4'>
            <div>
              <p>Chat History</p>
            </div>
            {/* <div className='cursor-pointer' onClick={() => setIsOpen(true)}>
      <DeleteIcon />
      <Modal
        isOpen={isOpen}
        title='Delete Chat'
        description='Are You To Delete Chats'
        btnText='Delete'
        setIsOpen={setIsOpen}
        onClose={handleDelete}
      />
    </div> */}
          </div>
          <div className='p-4 space-y-2 flex-grow overflow-y-scroll overflow-x-hidden font-medium'>
            {allListAssistant?.map((item) => {
              return (
                <div
                  className='rounded-md border border-slate-200 p-1 h-36 md:h-24 bg-gray-100 font-sans cursor-pointer'
                  key={item._id}
                  onClick={() => getAssistantHistory(item)}
                >
                  <div className='flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-2 justify-start md:justify-between'>
                    <span className='flex items-center space-x-2'>
                      {/* <Checkbox
                  index={index}
                  checkboxStatus={allListAssistant}
                  handleCheckboxChange={handleCheckboxChange}
                /> */}

                      <label className='text-sm md:text-base truncate w-20 md:w-auto relative top-1.5 md:top-1'>
                        {`${item.persona} ${item.name}`}
                      </label>
                    </span>
                    {/* <span>
                  <TimeDifferenceComponent timestamp={item.time_stamp} />
                </span> */}
                  </div>
                  <div className='text-xs md:text-sm text-gray-400 flex justify-center md:justify-start mt-2'>
                    {item.discription ??
                      'Best couple color gradient for FF5C00'}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className='border-t border-gray-300 flex justify-between p-4 relative bottom-[491px]' />
        </>
      )}
    </>
  );
};

export default ChatHistory;
