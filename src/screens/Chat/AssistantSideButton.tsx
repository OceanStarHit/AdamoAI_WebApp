import { DrawerClose } from 'assets/svgs';
import React, { Dispatch, FC, SetStateAction } from 'react';

type ButtonProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AssistantSideButton: FC<ButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='absolute block sm:hidden bg-primary-gradient right-0 top-12 w-10 h-10 rounded-l-md '
    >
      <div className='flex justify-center h-full items-center'>
        <DrawerClose />
      </div>
    </div>
  );
};

export default AssistantSideButton;
