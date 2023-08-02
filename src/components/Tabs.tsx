import classNames from 'classnames';
import { Tab } from '@headlessui/react';

type optionsType = {
  label: string;
  component: JSX.Element;
};

interface TabsType {
  options: optionsType[];
  selectedClassName?: string;
  notSelectedClassName?: string;
}

const Tabs: React.FC<TabsType> = ({
  options,
  selectedClassName = 'primary-gradient',
  notSelectedClassName = '',
}) => {
  return (
    <Tab.Group>
      <div className='flex flex-col w-[300px] sm:w-full md:w-[550px]'>
        <div>
          <Tab.List className='flex space-x-1 rounded-lg bg-gray-200 p-1 mt-6'>
            {options.map((tab) => (
              <Tab
                key={tab.label}
                className={({ selected }) =>
                  classNames(
                    `w-full rounded-lg py-3 text-sm leading-5 sm:text-sm`,
                    'focus:outline-none',
                    {
                      [`shadow-lg text-black font-semibold ${selectedClassName}`]:
                        selected,
                      [`font-medium text-black hover:bg-gray-200/40 ${notSelectedClassName}`]:
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
        <div>
          <Tab.Panels className='mt-2'>
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
