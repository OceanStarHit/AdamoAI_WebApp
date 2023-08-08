import React from 'react';

const ToggleBtn = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className='items-center justify-center'>
      <label className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            type='checkbox'
            id='toggleB'
            className='sr-only'
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div
            className={`block w-14 h-8 rounded-full ${
              isChecked ? 'bg-gray-400' : 'bg-gray-300'
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              isChecked ? 'transform translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleBtn;
