import classNames from 'classnames';
import useAuthContext from 'hooks/useAuth';
import useLayoutContext from 'hooks/useLayout';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarListType {
  lists: { label: string; icon: JSX.Element; route?: string }[];
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
const SidebarList: React.FC<SidebarListType> = ({ lists, setOpenDrawer }) => {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const { setSidebarState } = useLayoutContext();
  const { loggedOut } = useAuthContext();

  return (
    <div>
      <ul className='my-4 space-y-2 font-helvetica font-medium cursor-pointer'>
        {lists?.map((item, index) => {
          return (
            <>
              {index === 6 && <div className='border-t border-gray-700' />}
              <li
                className='px-6 '
                key={item.label}
                onClick={() => {
                  if (item.label !== 'Logout') {
                    setSidebarState(item.label);
                    setOpenDrawer(false);
                    item?.route ? navigate(item.route) : null;
                  } else {
                    loggedOut();
                  }
                }}
              >
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
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarList;
