import React from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';
import { SENDER_TYPE } from 'types/chat';
import ChatInput from 'components/ChatInput';
import Messages from 'screens/Chat/Messages';
import { CHAT_HISTORY } from 'constants/chat';
import ChatHistory from 'screens/Chat/ChatHistory';
import { useReactMediaRecorder } from 'react-media-recorder';

import {
  Bookmark,
  Avatar,
  Setting,
  Star,
  StopRecording,
  Send,
  MicroPhone,
  Image,
  DropdownIcon,
  Camera,
  BackArrow,
} from 'assets/svgs/index';

import {
  fetchSpeechToText,
  fetchTextToText,
  getRoom,
  handleCreateRoom,
} from 'services/chat/utils';

const Chat = () => {
  const [messages, setMessages] = React.useState<
    { text: string; sender: SENDER_TYPE }[]
  >([]);
  const [createRoom, setCreateRoom] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>('');
  const timeOutRef = React.useRef<NodeJS.Timeout>();
  const [currentAssistant] = React.useState('Chat');

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl = '',
  } = useReactMediaRecorder({ audio: true });

  const sendMessage = async () => {
    setMessages([...messages, { text: value, sender: SENDER_TYPE.USER }]);
    setValue('');
  };

  const handleFetchSpeechToText = async (mediaBlobUrl: string) => {
    const response = await fetchSpeechToText(mediaBlobUrl);
    setValue(response);
  };

  const handleGetRoom = async () => {
    setMessages(await getRoom('3fa85f64-5717-4562-b3fc-2c963f66afa6'));
  };

  React.useEffect(() => {
    if (mediaBlobUrl) {
      handleFetchSpeechToText(mediaBlobUrl);
    }
  }, [mediaBlobUrl]);

  React.useEffect(() => {
    handleGetRoom();
  }, [currentAssistant]);

  const TextToText = React.useCallback(async () => {
    if (value.length !== 0) {
      const response = await fetchTextToText(value);
      setValue(response);
    }
  }, [value]);

  const handleRoomCreation = () => {
    handleCreateRoom(createRoom);
  };

  const onChangeChatMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    setValue(e.target.value);
    timeOutRef.current = setTimeout(TextToText, 3000);
  };

  return (
    <div className='bg-white rounded-3xl w-full flex'>
      <div className='w-2/3 flex-col justify-between flex max-h-[calc(100vh-2rem)]'>
        <div className='p-3.5 w-full items-center'>
          <div className='flex justify-start'>
            <span className='text-black text-xl font-semibold relative top-5 font-sans items-center flex'>
              {currentAssistant !== 'Chat' ? (
                <span className='cursor-pointer'>
                  <BackArrow />
                </span>
              ) : null}
              {currentAssistant}
            </span>
          </div>
          <div className='flex justify-end space-x-2'>
            <Star />
            <Bookmark />
            <Setting />
          </div>
        </div>
        <Messages
          {...{
            messages,
            setMessages,
          }}
        />
        <div className='p-4 flex space-x-2 items-center'>
          <ChatInput
            type='text'
            placeholder='Message'
            value={value}
            onChange={(e) => onChangeChatMessage(e)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />

          {value.length === 0 && (
            <div className='flex space-x-2'>
              {(status === 'idle' || status === 'stopped') && (
                <span className='cursor-pointer' onClick={startRecording}>
                  <MicroPhone />
                </span>
              )}
              {status === 'recording' && (
                <span className='cursor-pointer' onClick={stopRecording}>
                  <StopRecording />
                </span>
              )}
              <span className='cursor-pointer'>
                <Image />
              </span>
              <span className='cursor-pointer'>
                <Camera />
              </span>
            </div>
          )}

          {value.length !== 0 && (
            <Button
              className='text-white px-4 rounded-full h-14 w-14'
              onClick={() => sendMessage()}
              icon={<Send small />}
              gradient
            />
          )}
        </div>
      </div>
      <div className='w-1/3 border-l border-slate-300 max-h-[calc(100vh-2rem)] flex-col justify-between flex'>
        <div className='flex justify-end items-center space-x-6 h-20 mx-4'>
          <div className='relative w-10 h-10 overflow-hidden bg-gray-600 rounded-full'>
            <Avatar />
          </div>
          <DropdownIcon />
        </div>
        <div className='flex-col justify-between flex bg-gray-100 rounded-br-3xl max-h-[calc(100%-5rem)]'>
          <ChatHistory chat_history={CHAT_HISTORY} />
          <div className='p-4'>
            <Button
              btnText='New Chat'
              gradient
              className='rounded-md w-full font-semibold'
              onClick={() => setIsOpen(true)}
            />
            <Modal
              isOpen={isOpen}
              title='Create Room'
              description='Please Add Room UUID Here'
              btnText='Create Room'
              setIsOpen={setIsOpen}
              onClose={handleRoomCreation}
            >
              <div>
                <ChatInput
                  type='text'
                  placeholder='Please Input the room uuid'
                  onChange={(e) => setCreateRoom(e.target.value)}
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
