import React from 'react';
import { MicroPhone, Search } from 'assets/svgs';
const AssistantSearch = () => {
  return (
    <div className='relative w-full'>
      <div className='absolute top-7 left-8'>
        <Search />
      </div>
      <div className='py-4 px-6'>
        <input
          type='search'
          id='search'
          className='block w-full p-3 pl-10 pr-8 focus:outline-none text-sm text-black rounded-full bg-transparent border-[0.1rem] border-slate-200'
          placeholder='Search Assistants'
        />
        <div>
          <span className='absolute top-7 right-8 cursor-pointer'>
            <MicroPhone />
          </span>
        </div>
      </div>
    </div>
  );
};
export default AssistantSearch;
