import React from 'react';
import Button from 'components/Button';
import { HOME_ASSISTANT } from 'constants/home';
import { ArrowForward, Link, Search } from 'assets/svgs';
import useLayoutContext from 'hooks/useLayout';
import { useNavigate } from 'react-router';

const HomeSearch = () => {
  const { homeSearch, setHomeSearch } = useLayoutContext();
  const navigate = useNavigate();

  const filteredItems = React.useMemo(
    () =>
      HOME_ASSISTANT.filter((item) => {
        return item.toLowerCase().includes(homeSearch.toLowerCase());
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [homeSearch],
  );

  return (
    <div className='relative'>
      <div className='absolute top-3 sm:top-3.5 left-1 sm:left-3 xl:left-5 xl:top-5'>
        <Search />
      </div>
      <input
        type='search'
        id='search'
        value={homeSearch}
        className='block w-full p-4 xl:p-5 pl-8 xl:pl-14 pr-20 sm:pl-14 text-xs xl:text-base sm:text-sm text-black focus:outline-none rounded-full bg-slate-200'
        placeholder='Type Category or Industry'
        onChange={(e) => setHomeSearch(e.target.value)}
      />
      <div>
        <Button
          icon={<ArrowForward />}
          gradient
          className='w-12 absolute right-0.5 bottom-0.5 xl:right-2 xl:bottom-2'
        />
      </div>
      {homeSearch && (
        <div className='absolute z-20 bg-white w-full rounded-md shadow-lg mt-4 '>
          <p className='text-gray-500 mx-4 my-1'>Search History</p>
          <div className='divide-y'>
            {filteredItems?.map((item) => {
              return (
                <div
                  className='flex w-full justify-between space-y-6 items-center cursor-pointer hover:bg-gray-100'
                  key={item}
                >
                  <div className='flex justify-start space-x-2 ml-4'>
                    <Search />
                    <p onClick={() => setHomeSearch(item as string)}>{item}</p>
                  </div>
                  <div
                    className='mr-4 relative bottom-1'
                    onClick={() =>
                      navigate('/chat', {
                        state: {
                          itemName: item,
                        },
                      })
                    }
                  >
                    <Link />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default HomeSearch;
