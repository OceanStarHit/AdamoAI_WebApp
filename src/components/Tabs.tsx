import classNames from 'classnames';
import { Tab } from '@headlessui/react';
import Heading from './Heading';
import { TabsType } from 'types/assistant';

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
      <div
        className={`flex flex-col h-full ${
          variant === 'login' ? tabWidth : ''
        }`}
      >
        <div className='flex justify-center'>
          <Tab.List
            className={`flex space-x-1 bg-gray-200 p-1 mt-4 ${className} ${tabWidth}`}
          >
            {options.map((tab, index) => (
              <Tab
                key={`${tab.label} ${index}`}
                className={({ selected }) =>
                  classNames(
                    `w-full py-3 xl:py-4 text-xs items-center sm:text-sm flex justify-center ${className}`,
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
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className='flex justify-start mt-2 relative right-8'>
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
