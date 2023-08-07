import React from 'react';
import Modal from 'components/Modal';
import { DeleteIcon } from 'assets/svgs';
import Checkbox from 'components/CheckBox';
import TimeDifferenceComponent from 'components/TimeDifference';

interface ChatHistoryType {
  chat_history: {
    label: string;
    time_stamp: string;
    description: string;
  }[];
}
const ChatHistory: React.FC<ChatHistoryType> = ({ chat_history }) => {
  const [checkboxStatus, setCheckboxStatus] = React.useState(
    chat_history?.map((item) => ({
      label: item.label,
      time_stamp: item.time_stamp,
      description: item.description,
      checked: false,
    })),
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const handleCheckboxChange = (index: number) => {
    setCheckboxStatus((prevStatus) =>
      prevStatus.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleDelete = () => {
    const _chatBox = checkboxStatus.filter((item) => {
      return item.checked !== true;
    });
    setCheckboxStatus(_chatBox);

    setIsOpen(false);
  };

  return (
    <>
      <div className='border-t border-gray-300 flex justify-between p-4'>
        <div>
          <p>Chat History</p>
        </div>
        <div className='cursor-pointer' onClick={() => setIsOpen(true)}>
          <DeleteIcon />
          <Modal
            isOpen={isOpen}
            title='Delete Chat'
            description='Are You To Delete Chats'
            btnText='Delete'
            setIsOpen={setIsOpen}
            onClose={handleDelete}
          />
        </div>
      </div>
      <div className='p-4 space-y-2 flex-grow overflow-y-scroll overflow-x-hidden font-medium'>
        {checkboxStatus.map((item, index) => {
          return (
            <div
              className='rounded-md border border-slate-200 p-1 h-36 md:h-24 bg-gray-100 font-sans'
              key={item.label}
            >
              <div className='flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-2 justify-start md:justify-between'>
                <span className='flex items-center space-x-2'>
                  <Checkbox
                    index={index}
                    checkboxStatus={checkboxStatus}
                    handleCheckboxChange={handleCheckboxChange}
                  />

                  <label className='text-sm md:text-base truncate w-20 md:w-auto relative top-1.5 md:top-1'>
                    {item.label}
                  </label>
                </span>
                <span>
                  <TimeDifferenceComponent timestamp={item.time_stamp} />
                </span>
              </div>
              <div className='text-xs md:text-sm text-gray-400 flex justify-center md:justify-start'>
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatHistory;
