import InputError from 'components/InputError';

interface InputType extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  iconLast?: React.ReactNode;
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
  iconLast,
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
        className={`block mb-2 text-sm font-medium text-gray-900 ${labelClassName}`}
      >
        {label}
      </label>
      <div className='relative mb-2'>
        {icon ? (
          <div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
            {icon}
          </div>
        ) : null}
        {iconLast ? (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3.5'>
            {iconLast}
          </div>
        ) : null}
        <input
          autoComplete='off'
          type={type}
          id='input-group-1'
          className={`bg-gray-100 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 ${className} placeholder:text-base`}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {error ? (
        <div className='relative bottom-2'>
          <InputError error={error} />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
