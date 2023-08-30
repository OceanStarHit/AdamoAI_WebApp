import React from 'react';
import Button from 'components/Button';
import { HOME_ASSISTANT } from 'constants/home';
import { ArrowForward, Link, Search } from 'assets/svgs';
import Input from 'components/Input';
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

  const goToChat = (item: string) => {
    navigate('/chat', {
      state: {
        itemName: item,
      },
    });
    setHomeSearch('');
  };

  return (
    <div className='relative'>
      <div className='absolute z-50 bottom-5 left-3 xl:bottom-8 xl:left-5'>
        <Search />
      </div>
      <Input
        type='search'
        value={homeSearch}
        id='search'
        className='block w-full p-4 pl-10 pr-20 sm:pl-14 xl:text-xl xl:py-5 sm:pr-20 text-sm text-black focus:outline-none !rounded-full bg-slate-200'
        placeholder='Type Category or Industry'
        onChange={(e) => setHomeSearch(e.target.value)}
      />
      <div>
        <Button
          icon={<ArrowForward />}
          gradient
          className='w-12 xl:w-14 xl:h-14 absolute right-0.5 bottom-2 xl:bottom-3.5 xl:right-1'
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
                    <p onClick={() => setHomeSearch(item)}>{item}</p>
                  </div>
                  <div
                    className='mr-4 relative bottom-1'
                    onClick={() => goToChat(item)}
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
