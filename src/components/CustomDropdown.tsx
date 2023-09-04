import React, { useState, Fragment } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { FilterIcon } from 'assets/svgs';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeakerAllowed, setIsSpeakerAllowed] = useState(false);
  const [isMicAllowed, setIsMicAllowed] = useState(false);
  const [isAudioDirectly, setIsAudioDirectly] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className='border rounded px-4 py-2 bg-white'
          onClick={toggleDropdown}
        >
          <FilterIcon />
        </Menu.Button>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div>
            <Menu.Item>
              {() => (
                <div className='absolute bg-black py-10 px-6 rounded-lg border shadow-md right-0'>
                  <div className='flex flex-col gap-8'>
                    <label className='w-full flex cursor-pointer items-center justify-evenly gap-4'>
                      <p
                        className='text-white/75 text-sm'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Allow Speaker
                      </p>
                      <div className='relative'>
                        <input
                          type='checkbox'
                          checked={isSpeakerAllowed}
                          onChange={() =>
                            setIsSpeakerAllowed(!isSpeakerAllowed)
                          }
                          className='sr-only'
                        />
                        <div
                          className={`box block h-6 w-14 rounded-full ${
                            isSpeakerAllowed ? 'bg-blue-500' : 'bg-gray-500'
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                            isSpeakerAllowed ? 'translate-x-full' : ''
                          }`}
                        ></div>
                      </div>
                    </label>
                    <label className='w-full flex cursor-pointer items-center justify-evenly gap-4'>
                      <p
                        className='text-white/75 text-sm'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Allow Mic
                      </p>
                      <div className='relative ml-[30px]'>
                        <input
                          type='checkbox'
                          checked={isMicAllowed}
                          onChange={() => setIsMicAllowed(!isMicAllowed)}
                          className='sr-only'
                        />
                        <div
                          className={`box block h-6 w-14 rounded-full ${
                            isMicAllowed ? 'bg-blue-500' : 'bg-gray-500'
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                            isMicAllowed ? 'translate-x-full' : ''
                          }`}
                        ></div>
                      </div>
                    </label>

                    <label className='w-full flex cursor-pointer items-center justify-evenly gap-4'>
                      <p
                        className='text-white/75 text-sm'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Audio Directly
                      </p>
                      <div className='relative'>
                        <input
                          type='checkbox'
                          checked={isAudioDirectly}
                          onChange={() => setIsAudioDirectly(!isAudioDirectly)}
                          className='sr-only'
                        />
                        <div
                          className={`box block h-6 w-14 rounded-full ${
                            isAudioDirectly ? 'bg-blue-500' : 'bg-gray-500'
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                            isAudioDirectly ? 'translate-x-full' : ''
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CustomDropdown;
