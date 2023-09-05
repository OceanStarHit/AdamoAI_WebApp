import classNames from 'classnames';
import { Tab } from '@headlessui/react';
// import Heading from './Heading';
import { TabsType } from 'types/assistant';

const Tabs: React.FC<TabsType> = ({
  options,
  wrapperClassName = 'rounded-lg p-1 mt-4',
  tabClassName = 'rounded-lg py-3 xl:py-4',
  selectedClassName = 'primary-gradient',
  notSelectedClassName = '',
  tabWidth = 'w-[300px] sm:w-full md:w-[550px]',
  variant,
  tabPanelClassName = 'w-full',
  showTabs = true,
  onChangeTab = () => {},
}) => {
  return (
    <Tab.Group
      onChange={(index) => {
        onChangeTab(index);
      }}
    >
      <div
        className={`flex flex-col h-full ${
          variant === 'login' ? tabWidth : ''
        }`}
      >
        <div className='flex justify-center'>
          <Tab.List
            className={`flex space-x-1 bg-gray-200 ${wrapperClassName} ${tabWidth}`}
          >
            {options.map((tab, index) => (
              <Tab
                key={`${tab.label} ${index}`}
                className={({ selected }) =>
                  classNames(
                    `w-full text-xs items-center sm:text-sm flex justify-center ${tabClassName}`,
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
                {showTabs ? (
                  <span
                    className={`w-3 sm:w-5 h-3 sm:h-5 xl:w-8 xl:h-8 rounded-full bg-gray-400 
                flex items-center ml-1 md:ml-2 justify-center text-white text-[.5rem] sm:text-[.6rem] xl:text-xs font-bold`}
                  >
                    {tab.tags}
                  </span>
                ) : null}
              </Tab>
            ))}
          </Tab.List>
        </div>
        {/* <div className='flex justify-start mt-2 relative right-8'>
          {showTabs ? (
            <Heading
              text='Assistants'
              type='heading'
              className='ml-12 font-medium font-helvetica'
            />
          ) : null}
        </div> */}
        {options?.length ? (
          <div className='flex justify-center mx-3'>
            <Tab.Panels className={`mt-2 ${tabPanelClassName}`}>
              {options?.map((item) => (
                <Tab.Panel key={item.label}>
                  <div>{item.component}</div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        ) : null}
      </div>
    </Tab.Group>
  );
};

export default Tabs;
