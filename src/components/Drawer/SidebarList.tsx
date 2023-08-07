import classNames from 'classnames';
import useLayoutContext from 'hooks/useLayout';
import { useNavigate } from 'react-router-dom';

interface SidebarListType {
  lists: { label: string; icon: JSX.Element; route?: string }[];
}

const SidebarList: React.FC<SidebarListType> = ({ lists }) => {
  const navigate = useNavigate();
  const { sidebarState, setSidebarState } = useLayoutContext();

  return (
    <div className='px-3'>
      <ul className='mt-4 space-y-2 font-helvetica font-medium cursor-pointer'>
        {lists?.map((item) => {
          return (
            <li
              key={item.label}
              onClick={() => {
                setSidebarState(item.label);
                item?.route ? navigate(item.route) : null;
              }}
            >
              <a
                className={classNames(
                  'flex items-center rounded-full p-2 text-white hover:black-gradient',
                  { 'black-gradient': sidebarState === item.label },
                )}
              >
                <div className='flex space-x-4'>
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
