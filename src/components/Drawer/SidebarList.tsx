import classNames from 'classnames';
import useLayoutContext from 'hooks/useLayout';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarListType {
  lists: { label: string; icon: JSX.Element; route?: string }[];
}
const SidebarList: React.FC<SidebarListType> = ({ lists }) => {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const { setSidebarState } = useLayoutContext();

  return (
    <div className='px-4 '>
      <ul className='my-4 space-y-2 font-helvetica font-medium cursor-pointer'>
        {lists?.map((item, index) => {
          return (
            <li
              key={item.label}
              onClick={() => {
                setSidebarState(item.label);
                item?.route ? navigate(item.route) : null;
              }}
            >
              {index === 6 && <div className='border-t border-gray-900' />}
              <a
                className={classNames(
                  'flex items-center font-normal text-xl rounded-full p-2 text-white hover:black-gradient',
                  { 'black-gradient': currentRoute.pathname === item.route },
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
