import classnames from 'classnames';
import Loader from 'assets/svgs/loader.svg';

interface ButtonType extends React.ComponentProps<'button'> {
  bold?: boolean;
  full?: boolean;
  btnText?: string;
  loading?: boolean;
  gradient?: boolean;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  preAppendIcon?: boolean;
  textSize?: 'sm' | 'base' | 'lg' | '2xl';
}

const Button: React.FC<ButtonType> = ({
  bold,
  icon,
  full,
  loading,
  btnText,
  gradient,
  preAppendIcon,
  className = '',
  textSize = 'base',
  children,
  ...rest
}) => (
  <button
    className={classnames(
      `h-12 rounded-full px-3 transition ease-in-out disabled:cursor-not-allowed disabled:opacity-50 text-${textSize} ${className}`,
      {
        'w-full': full,
        'font-semibold': bold,
        'primary-gradient text-white hover:opacity-90': gradient,
        'border-2 border-primary-blue hover:bg-gray-100': !gradient,
      },
    )}
    {...rest}
  >
    {loading ? (
      <div className='flex-center'>
        <Loader />
      </div>
    ) : (
      <>
        <div className='flex-center'>
          {icon && preAppendIcon ? icon : null}
          {btnText ? btnText : null}
          {icon && !preAppendIcon ? icon : null}
        </div>
        {children}
      </>
    )}
  </button>
);

export default Button;
