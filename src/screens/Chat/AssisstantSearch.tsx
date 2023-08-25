import React from 'react';
import { MicroPhone, Search } from 'assets/svgs';
const AssistantSearch = () => {
  return (
    <div className='relative w-full py-4 px-6'>
      <div className='absolute top-7 left-8'>
        <Search />
      </div>
      <input
        type='search'
        id='search'
        className='block w-full p-3 pl-14 text-sm text-black rounded-full bg-transparent border-[0.1rem] border-slate-200'
        placeholder='Type Category or Industry'
      />
      <div>
        <span className='absolute top-7 right-8 cursor-pointer'>
          <MicroPhone />
        </span>
      </div>
    </div>
  );
};
export default AssistantSearch;
