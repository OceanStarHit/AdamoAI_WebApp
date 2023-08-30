import React from 'react';
import Button from 'components/Button';
import { HOME_ASSISTANT } from 'constants/home';
import { ArrowForward, Link, MicroPhone, Search } from 'assets/svgs';
import Input from 'components/Input';

const HomeSearch = () => {
  const [search, setSearch] = React.useState('');

  const filteredItems = React.useMemo(
    () =>
      HOME_ASSISTANT.filter((item) => {
        return item.toLowerCase().includes(search.toLowerCase());
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search],
  );

  return (
    <div className='relative'>
      <div className='absolute z-50 bottom-5 left-3'>
        <Search />
      </div>
      <Input
        type='search'
        id='search'
        className='block w-full p-4 pl-10 pr-20 sm:pl-14 sm:pr-20 text-sm text-black focus:outline-none !rounded-full bg-slate-200'
        placeholder='Type Category or Industry'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <span className='absolute right-14 sm:right-16 bottom-5 cursor-pointer'>
          <MicroPhone />
        </span>
        <Button
          icon={<ArrowForward />}
          gradient
          className='w-12 h-12 absolute right-0.5 bottom-2.5'
        />
      </div>
      {search && (
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
                    <p className='text-gray-400'>{item}</p>
                  </div>
                  <div className='mr-4 relative bottom-1'>
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
