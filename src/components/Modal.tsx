import { Fragment } from 'react';
import Button from 'components/Button';
import { Dialog, Transition } from '@headlessui/react';

interface ModalType {
  isOpen: boolean;
  title: string;
  description: string;
  btnText: string;
  children?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}
const Modal: React.FC<ModalType> = ({
  isOpen,
  title,
  description,
  btnText,
  children,
  setIsOpen,
  onClose,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-xl font-bold text-black flex justify-center'
                >
                  {title}
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-base text-gray-500 flex justify-center'>
                    {description}
                  </p>
                </div>
                {children ? <div className='mt-4'>{children}</div> : null}
                <div className='mt-4 flex justify-center space-x-2'>
                  <Button
                    btnText={btnText}
                    onClick={onClose}
                    gradient
                    className='rounded-lg w-auto'
                  />
                  <Button
                    btnText='Cancel'
                    onClick={() => setIsOpen(false)}
                    gradient
                    className='rounded-lg w-24'
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
