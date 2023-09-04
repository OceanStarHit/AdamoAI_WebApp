import React, { useState, Fragment } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { FilterIcon } from 'assets/svgs';
import { Switch } from '@headlessui/react';

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
                <div className='absolute bg-black p-6 rounded-lg right-0'>
                  <div className='flex flex-col gap-4'>
                    <label className='w-full flex cursor-pointer items-center justify-evenly gap-4'>
                      <p
                        className='text-white/75 text-base'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Allow Speaker
                      </p>
                      <div className='relative'>
                        <Switch
                          checked={isSpeakerAllowed}
                          onChange={setIsSpeakerAllowed}
                          className={`${
                            isSpeakerAllowed ? 'bg-blue-500' : 'bg-gray-500'
                          }
          relative inline-flex h-[31px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className='sr-only'>Use setting</span>
                          <span
                            aria-hidden='true'
                            className={`${
                              isSpeakerAllowed
                                ? 'translate-x-6'
                                : 'translate-x-0'
                            }
            pointer-events-none inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </label>
                    <label className='w-full flex cursor-pointer items-center justify-evenly gap-4'>
                      <p
                        className='text-white/75 text-base'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Allow Mic
                      </p>
                      <div className='relative ml-[30px]'>
                        <Switch
                          checked={isMicAllowed}
                          onChange={setIsMicAllowed}
                          className={`${
                            isMicAllowed ? 'bg-blue-500' : 'bg-gray-500'
                          }
          relative inline-flex h-[31px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className='sr-only'>Use setting</span>
                          <span
                            aria-hidden='true'
                            className={`${
                              isMicAllowed ? 'translate-x-6' : 'translate-x-0'
                            }
            pointer-events-none inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </label>

                    <label className='w-full flex cursor-pointer items-center justify-evenly gap-4'>
                      <p
                        className='text-white/75 text-base'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Audio Directly
                      </p>
                      <div className='relative'>
                        <Switch
                          checked={isAudioDirectly}
                          onChange={setIsAudioDirectly}
                          className={`${
                            isAudioDirectly ? 'bg-blue-500' : 'bg-gray-500'
                          }
          relative inline-flex h-[31px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className='sr-only'>Use setting</span>
                          <span
                            aria-hidden='true'
                            className={`${
                              isAudioDirectly
                                ? 'translate-x-6'
                                : 'translate-x-0'
                            }
            pointer-events-none inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
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
