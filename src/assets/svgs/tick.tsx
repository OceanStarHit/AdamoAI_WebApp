interface TickIconType {
  classNames: string;
}
const TickIcon: React.FC<TickIconType> = ({ classNames }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='white'
    stroke='white'
    strokeWidth='2'
    className={`w-6 h-6 ${classNames}`}
  >
    <path d='M9 16.17l-4.17-4.17-1.42 1.42 5.59 5.59 12-12-1.41-1.42z' />
  </svg>
);

export default TickIcon;
