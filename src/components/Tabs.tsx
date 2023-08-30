import classNames from 'classnames';
import { Tab } from '@headlessui/react';
import Heading from './Heading';
import React from 'react';

type optionsType = {
  label: string;
  component: JSX.Element;
  tags?: number;
};

interface TabsType {
  options: optionsType[];
  className?: string;
  selectedClassName?: string;
  notSelectedClassName?: string;
  tabWidth?: string;
  variant: string;
  tabPanelClassName?: string;
}

const Tabs: React.FC<TabsType> = ({
  options,
  className = 'rounded-lg',
  selectedClassName = 'primary-gradient',
  notSelectedClassName = '',
  tabWidth = 'w-[300px] sm:w-full md:w-[550px]',
  variant,
  tabPanelClassName = 'w-full',
}) => {
  return (
    <Tab.Group>
      <div className={`flex flex-col ${variant === 'login' ? tabWidth : ''}`}>
        <div className='flex justify-center'>
          <Tab.List
            className={`flex space-x-1 bg-gray-200 p-1 mt-6 ${className} ${tabWidth}`}
          >
            {options.map((tab, index) => (
              <Tab
                key={`${tab.label} ${index}`}
                className={({ selected }) =>
                  classNames(
                    `w-full py-3 xl:py-4 text-xs items-center sm:text-sm xl:text-lg flex justify-center ${className}`,
                    'focus:outline-none',
                    {
                      [`shadow-lg ${
                        selectedClassName === 'primary-gradient'
                          ? 'text-white'
                          : 'text-black'
                      } font-semibold ${selectedClassName}`]: selected,
                      [`font-medium ${
                        selectedClassName === 'primary-gradient'
                          ? 'text-gray-600'
                          : 'text-black'
                      } hover:bg-gray-200/40 ${notSelectedClassName}`]:
                        !selected,
                    },
                  )
                }
              >
                <span>{tab.label}</span>
                <span
                  className={` w-3 sm:w-5 h-3 sm:h-5 xl:w-8 xl:h-8 rounded-full bg-gray-400 
                flex items-center ml-1 md:ml-2 justify-center text-white text-[.5rem] sm:text-[.6rem] xl:text-xs font-bold`}
                >
                  {tab.tags}
                </span>
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className='flex justify-start mt-8 relative right-8'>
          <Heading
            text='Assistants'
            type='heading'
            className='ml-12 font-medium font-helvetica'
          />
        </div>
        <div className='flex justify-center mx-3'>
          <Tab.Panels className={`mt-2 ${tabPanelClassName}`}>
            {options?.map((item) => (
              <Tab.Panel key={item.label}>
                <div>{item.component}</div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  );
};

export default Tabs;
