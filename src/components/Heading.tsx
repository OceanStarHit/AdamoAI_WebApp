import classnames from 'classnames';
import { ReactElement } from 'react';

interface HeadingType {
  text: ReactElement | string;
  type?: 'title' | 'subtitle' | 'heading' | 'subheading' | 'base';
  className?: string;
}

const Heading: React.FC<HeadingType> = ({
  text,
  type = 'title',
  className = '',
}) => (
  <div
    className={classnames(`font-semibold ${className}`, {
      'text-4xl': type === 'title',
      'text-3xl': type === 'subtitle',
      'text-2xl': type === 'heading',
      'text-lg': type === 'subheading',
      'text-base': type === 'base',
      'mb-3': !className.includes('mb-'), // custom margin bottom doesn't always overrides
    })}
  >
    {text}
  </div>
);

export default Heading;
