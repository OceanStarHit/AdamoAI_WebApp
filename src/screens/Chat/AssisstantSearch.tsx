import React from 'react';
import { Search } from 'assets/svgs';
import Input from 'components/Input';
import useLayoutContext from 'hooks/useLayout';

const AssistantSearch = () => {
  const { assistantSearch, setAssistantSearch } = useLayoutContext();

  return (
    <div className='relative w-full'>
      <div className='absolute top-6 left-8'>
        <Search />
      </div>
      <div className='py-2 px-6'>
        <Input
          type='search'
          value={assistantSearch}
          id='search'
          className='block w-full p-2 pl-10 pr-8 focus:outline-none text-sm text-black !rounded-full bg-transparent border-[0.1rem] border-slate-200'
          placeholder='Search Assistants'
          onChange={(e) => setAssistantSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
export default AssistantSearch;
