import React from 'react';
import ChatService from 'services/chat';
import { Loader } from 'assets/svgs';
import { CombineRoomType } from 'types/assistant';
import { PreviousChatType, SENDER_TYPE } from 'types/chat';
import AssistantSearch from './AssisstantSearch';
import Users from 'assets/images/users.png';
import useLayoutContext from 'hooks/useLayout';
import AssistantSearchBox from 'components/AssistantSearchBox';

interface ChatHistoryType {
  allListAssistant: CombineRoomType[] | null;
  setAllListAssistants: React.Dispatch<
    React.SetStateAction<CombineRoomType[] | null>
  >;
  setPrevMessages: React.Dispatch<React.SetStateAction<PreviousChatType[]>>;
  setSelectedRoom: React.Dispatch<React.SetStateAction<CombineRoomType>>;
  uuid: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [searchError, setSearchError] = React.useState('');
  const [selectedAssist, setSelectedAssist] = React.useState('');
  const [filteredAssistant, setFilteredAssistant] = React.useState<
    CombineRoomType[]
  >([]);
  const { assistantSearch } = useLayoutContext();
  const { selectedAssistantFromHome } = useLayoutContext();
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
  }, []);
  React.useEffect(() => {
    if (selectedAssistantFromHome) {
      setSelectedRoom(selectedAssistantFromHome);
    }
  }, []);

  React.useEffect(() => {
    if (assistantSearch !== '') {
      const filteredItems = allListAssistant?.filter((item) =>
        item.persona.toLowerCase().includes(assistantSearch.toLowerCase()),
      );
      if (filteredItems?.length) {
        setFilteredAssistant(filteredItems);
        setSearchError('');
      } else {
        setSearchError('Not Found');
        setFilteredAssistant([]);
      }
    }
  }, [assistantSearch]);

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
      <>
        <div className={`flex py-4 mx-6 items-center sm:justify-normal `}>
          <img src={Users} className='w-10 h-10' />
          <span className=' text-2xl font-medium sm:ml-4'>Assistants</span>
        </div>
        <div className='w-full border-y border-slate-300 mb-2'>
          <AssistantSearch />
        </div>
        <div
          className={`px-4 flex-grow overflow-y-scroll  rounded-br-3xl custom-scrollbar overflow-x-hidden font-medium`}
        >
          {searchError && assistantSearch ? (
            <span className='text-red-400 flex justify-center '>
              {searchError}
            </span>
          ) : null}
          {!loading ? (
            <>
              {allListAssistant?.length && !assistantSearch ? (
                <>
                  {allListAssistant?.map((item, index) => (
                    <AssistantSearchBox
                      item={item}
                      key={index}
                      selectedAssist={selectedAssist}
                      setSelectedRoomAction={setSelectedRoomAction}
                    />
                  ))}
                </>
              ) : assistantSearch ? (
                filteredAssistant?.map((item, index) => (
                  <AssistantSearchBox
                    item={item}
                    key={index}
                    selectedAssist={selectedAssist}
                    setSelectedRoomAction={setSelectedRoomAction}
                  />
                ))
              ) : null}
            </>
          ) : (
            <div className='flex p-4 justify-center max-h-screen align-middle items-center'>
              <div className='flex justify-center h-8'>
                <Loader color='#db2777' />
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default ChatHistory;
