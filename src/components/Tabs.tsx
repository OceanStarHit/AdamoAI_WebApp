import classNames from 'classnames';
import { Tab } from '@headlessui/react';

type optionsType = {
  label: string;
  component: JSX.Element;
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
            {options.map((tab) => (
              <Tab
                key={tab.label}
                className={({ selected }) =>
                  classNames(
                    `w-full py-3 text-xs sm:text-sm ${className}`,
                    'focus:outline-none',
                    {
                      [`shadow-lg ${
                        selectedClassName === 'primary-gradient'
                          ? 'text-white'
                          : 'text-black'
                      } font-semibold ${selectedClassName}`]: selected,
                      [`font-medium ${
                        selectedClassName === 'primary-gradient'
                          ? 'text-gray-700'
                          : 'text-black'
                      } hover:bg-gray-200/40 ${notSelectedClassName}`]:
                        !selected,
                    },
                  )
                }
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className='flex justify-center'>
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
