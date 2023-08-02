import React from 'react';
import { TickIcon } from 'assets/svgs';

interface CheckboxType {
  index: number;
  checkboxStatus: {
    label: string;
    time_stamp: string;
    description: string;
    checked: boolean;
  }[];
  handleCheckboxChange: (index: number) => void;
}
const Checkbox: React.FC<CheckboxType> = ({
  index,
  checkboxStatus,
  handleCheckboxChange,
}) => {
  const [isChecked, setIsChecked] = React.useState(
    checkboxStatus[index].checked,
  );

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    handleCheckboxChange(index);
  };

  return (
    <label className='mt-2 cursor-pointer relative top-1'>
      <input
        type='checkbox'
        className={!isChecked ? 'w-5 h-5 cursor-pointer' : 'hidden'}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      {isChecked && (
        <span className='relative inline-block cursor-pointer rounded bg-primary-gradient'>
          <TickIcon classNames='h-5 w-5 p-0.5' />
        </span>
      )}
    </label>
  );
};

export default Checkbox;
