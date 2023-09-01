import InputError from 'components/InputError';
import React from 'react';

interface InputType
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  labelClassName?: string;
  numRows: number;
}

const InputTextArea: React.FC<InputType> = ({
  label,
  placeholder,
  className,
  error,
  labelClassName,
  numRows,
  ...rest
}) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label
          htmlFor={rest.id || 'input-group-1'}
          className={`block mb-2 text-sm font-medium text-gray-900 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div
        className={`${
          numRows > 1 ? 'rounded-md' : 'rounded-full'
        } bg-gray-100 p-2 border-2 `}
      >
        <textarea
          className={`bg-gray-100 p-1 sm:p-2
           text-gray-900 text-sm focus:outline-none block w-full ${
             className || ''
           }   ${
             numRows > 1 ? 'rounded-md' : 'rounded-full'
           } placeholder:text-base custom-scrollbar`}
          placeholder={placeholder}
          {...rest}
          style={{
            resize: 'none',
          }}
          rows={numRows ? numRows : 1}
        />
      </div>
      {error && (
        <div className='relative bottom-2'>
          <InputError error={error} />
        </div>
      )}
    </div>
  );
};

export default InputTextArea;
