import { Avatar, DropdownIcon } from 'assets/svgs';
import Heading from './Heading';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-b border-gray-300'>
      <div className='flex justify-start mb-8'>
        <Heading
          text='Settings'
          type='heading'
          className='mb-0 relative top-4 left-4'
        />
      </div>
      <div className='flex justify-end mr-8'>
        <div className='flex space-x-4 items-center'>
          <div className='relative w-10 h-10 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600'>
            <Avatar />
          </div>
          <div>
            <DropdownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
