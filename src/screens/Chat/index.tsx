import React from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ChatInput from 'components/ChatInput';
import Messages from 'screens/Chat/Messages';
import ChatServices from 'services/chat/index';
import ChatHistory from 'screens/Chat/ChatHistory';
import { PreviousChatType, SENDER_TYPE } from 'types/chat';
import { useReactMediaRecorder } from 'react-media-recorder';
import {
  StopRecording,
  Send,
  MicroPhone,
  Image,
  Camera,
  BackArrow,
  // DropdownIcon,
} from 'assets/svgs/index';
import ReactAudioPlayer from 'react-audio-player';

import { fetchSpeechToText, handleCreateRoom } from 'services/chat/utils';
import { CombineRoomType } from 'types/assistant';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const [createRoom, setCreateRoom] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>('');
  // const [currentAssistant] = React.useState('Chat');
  const [audioBlob, setAudioBlob] = React.useState<string>('');
  const { state } = useLocation();
  console.log({ state });
  const [allListAssistant, setAllListAssistants] = React.useState<
    CombineRoomType[] | null
  >([]);
  const [aiResponding, setAIResponding] = React.useState(false);
  const [prevMessages, setPrevMessages] = React.useState<PreviousChatType[]>(
    [],
  );
  const [selectedRoom, setSelectedRoom] = React.useState<CombineRoomType>({
    avatar: '',
    discription: '',
    name: '',
    persona: '',
    _id: '',
    assistant_uuid: '',
    user_uuid: '',
    uuid: '',
  });
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl = '',
  } = useReactMediaRecorder({ audio: true });

  const sendMessage = async () => {
    setValue('');
    setAIResponding(true);
    setPrevMessages([
      ...prevMessages,
      {
        sender_uuid: '',
        text: value,
        senderType: SENDER_TYPE.USER,
        uuid: '',
        time_stamp: '',
      },
    ]);
    const _prevMessage = [
      ...prevMessages,
      {
        sender_uuid: '',
        text: value,
        senderType: SENDER_TYPE.USER,
        uuid: '',
        time_stamp: '',
      },
    ];
    const sendObj = {
      msg_txt: value,
      room: {
        assistant_uuid: selectedRoom?.assistant_uuid,
        user_uuid: selectedRoom?.user_uuid,
        uuid: selectedRoom?.uuid,
      },
    };
    const response = await ChatServices.on_text_as_text_and_speech(sendObj);
    setAudioBlob(`data:audio/mp3;base64,${response?.assistant_audio_base64}`);

    setPrevMessages([
      ..._prevMessage,
      { ...response?.assistant_msg, senderType: SENDER_TYPE.BOT },
    ]);
    setAIResponding(false);
  };

  const handleFetchSpeechToText = async (mediaBlobUrl: string) => {
    console.log(mediaBlobUrl);
    const response = await fetchSpeechToText(mediaBlobUrl);
    setValue(response);
  };

  React.useEffect(() => {
    if (mediaBlobUrl) {
      handleFetchSpeechToText(mediaBlobUrl);
    }
  }, [mediaBlobUrl]);

  const handleRoomCreation = () => {
    handleCreateRoom(createRoom);
  };

  return (
    <div className='bg-white rounded-3xl w-full flex min-h-[calc(100vh-2rem)]'>
      <div className='w-2/3 flex-col justify-between flex max-h-[calc(100vh-2rem)]'>
        <div className='p-3 w-full items-center'>
          {selectedRoom._id !== '' ? (
            <div className='p-3 w-full items-center'>
              <div className=' flex items-center'>
                <div
                  className='mx-6 cursor-pointer'
                  // onClick={setToInitial}
                >
                  <BackArrow />
                  <span>{selectedRoom.persona}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <Messages
          messages={prevMessages}
          setMessages={setPrevMessages}
          aiResponding={aiResponding}
        />
        <div className='p-4 flex space-x-2 items-center'>
          <ChatInput
            type='text'
            placeholder='Message'
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
        <div className='flex my-4 mx-6 items-center justify-between sm:justify-normal'>
          <img src={require('assets/images/users.png')} className='w-10 h-10' />
          <p className=' text-2xl font-medium ml-4'>Assistants</p>
        </div>
        <div
          className={classNames(
            'flex-col justify-between flex bg-gray-100 rounded-br-3xl ',
            {
              'min-h-[calc(100%-5rem)]':
                allListAssistant && allListAssistant?.length < 5,
              'max-h-[calc(100%-5rem)]':
                allListAssistant && allListAssistant?.length > 5,
            },
          )}
        >
          <ChatHistory
            allListAssistant={allListAssistant}
            setAllListAssistants={setAllListAssistants}
            setPrevMessages={setPrevMessages}
            setSelectedRoom={setSelectedRoom}
            uuid={state?.uuid}
          />

          <div className='p-4'>
            {/* <Button
              btnText='New Chat'
              gradient
              className='rounded-md w-full font-semibold'
              onClick={() => setIsOpen(true)}
            /> */}
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
      <ReactAudioPlayer src={audioBlob} autoPlay />
    </div>
  );
};

export default Chat;
