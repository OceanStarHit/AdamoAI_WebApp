import React from 'react';
import ChatInput from 'components/ChatInput';
import ADAMO_GIF from 'assets/images/AdamoCircle.gif';
import { PreviousChatType, SENDER_TYPE } from 'types/chat';
import TimeDifferenceComponent from 'components/TimeDifference';
import { Edit } from 'assets/svgs';

interface MessagesType {
  messages: PreviousChatType[];
  setMessages: (message: PreviousChatType[]) => void;
  aiResponding: boolean;
  isMessage?: boolean;
}

const Messages: React.FC<MessagesType> = ({
  messages,
  aiResponding,
  isMessage = false,
}) => {
  const lastMsg = React.useRef(null);
  const [editMessage, setEditMessage] = React.useState({
    message: '',
    index: -1,
  });

  const handleSendMessage = () => {
    messages[editMessage.index].text = editMessage.message;
    setEditMessage({ message: '', index: -1 });
  };

  React.useEffect(() => {
    //@ts-ignore
    lastMsg?.current?.scrollIntoView({ behavior: 'instant' });
  }, [messages.length]);

  return (
    <div className='flex flex-col custom-scrollbar flex-grow overflow-y-scroll max-h-[calc(100%-5rem)] p-4'>
      {messages?.length !== 0 ? (
        messages.map((message, index) => (
          <div
            ref={index === messages?.length - 1 ? lastMsg : undefined}
            key={index}
            className={`${
              message.senderType === SENDER_TYPE.USER
                ? 'justify-end'
                : 'justify-start mb-4'
            } flex`}
          >
            <div className='block'>
              <div
                className={`${
                  message.senderType === SENDER_TYPE.USER
                    ? 'bg-blue-500 text-white'
                    : 'bg-orange-300 text-gray-500'
                } py-2 px-4 rounded-lg`}
              >
                {editMessage.index === index &&
                message.senderType === SENDER_TYPE.USER ? (
                  <ChatInput
                    type='text'
                    defaultValue={editMessage.message}
                    className='bg-blue-500 text-white rounded !focus:outline-none w-[500px]'
                    placeholder='Enter text...'
                    onChange={(e) =>
                      setEditMessage({
                        index: index,
                        message: e.target.value,
                      })
                    }
                    onKeyUp={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                ) : (
                  message.text
                )}
              </div>
              {message.senderType === SENDER_TYPE.USER ? (
                <>
                  <div className='flex justify-end -mt-2 mr-2'>
                    <svg
                      className='w-10 h-10 text-white bg-gray-600 rounded-full'
                      fill='currentColor'
                      viewBox='0 -2 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <div className='flex justify-start items-center mr-16 space-x-2'>
                    <span>
                      <p className='text-gray-500 text-xs font-semibold relative bottom-7 right-0'>
                        {message?.time_stamp ? (
                          <TimeDifferenceComponent
                            timestamp={message.time_stamp}
                          />
                        ) : (
                          'Just Now'
                        )}
                      </p>
                    </span>
                    <span className='flex space-x-2 rounded-md bg-gray-200 w-16 h-7 items-center justify-center relative bottom-7 cursor-pointer'>
                      <Edit />
                      <p className='text-gray-600 text-xs'>Edit</p>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex justify-start -mt-2'>
                    <img
                      src={ADAMO_GIF}
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  </div>
                  <div className='flex justify-end mr-2 space-x-2 items-center'>
                    <span>
                      <p className='text-gray-500 text-xs font-semibold relative bottom-7 right-0'>
                        <TimeDifferenceComponent
                          timestamp={message.time_stamp}
                        />
                      </p>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center h-full flex-col bg-transparent'>
          <img src={ADAMO_GIF} width={200} height={200} />
          <h1 className='sm:mx-24 font-Helvetica text-2xl sm:text-4xl font-medium text-center'>
            {isMessage
              ? 'ASK ME ANYTHING...'
              : ' Please select an assistant to start talking'}
          </h1>
        </div>
      )}

      {aiResponding && messages.length > 0 ? (
        <p className='absolute bottom-24 text-gray-500 text-xs'>
          AI Responding, Please wait
        </p>
      ) : null}
    </div>
  );
};

export default Messages;
