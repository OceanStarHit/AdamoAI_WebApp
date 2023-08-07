import InputError from 'components/InputError';

interface InputType extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  labelClassName?: string;
}

const Input: React.FC<InputType> = ({
  label,
  icon,
  type,
  placeholder,
  className,
  error,
  labelClassName,
  ...rest
}) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor='input-group-1'
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName}`}
      >
        {label}
      </label>
      <div className='relative mb-6'>
        {icon ? (
          <div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
            {icon}
          </div>
        ) : null}
        <input
          type={type}
          id='input-group-1'
          className={`bg-gray-100 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 ${className}`}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {error ? (
        <div className='relative bottom-5'>
          <InputError error={error} />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
