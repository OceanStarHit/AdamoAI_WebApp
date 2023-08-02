import classNames from 'classnames';

interface SidebarListType {
  lists: { label: string; icon: JSX.Element }[];
}

const SidebarList: React.FC<SidebarListType> = ({ lists }) => {
  return (
    <div className='px-3'>
      <ul className='mt-6 space-y-2 font-helvetica font-medium'>
        {lists?.map((item) => {
          return (
            <li key={item.label}>
              <a
                className={classNames(
                  'flex items-center rounded-lg p-2 text-white hover:black-gradient',
                )}
              >
                <div className='flex space-x-2'>
                  <span>{item.icon}</span>
                  <span className='ml-3 flex-1 whitespace-nowrap'>
                    {item.label}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarList;
