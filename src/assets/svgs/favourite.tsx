const Favourite = ({ width = '24', height = '24' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='24'
        height='24'
        rx='8'
        fill='url(#paint0_linear_2441_8652)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2441_8652'
          x1='-5.65714'
          y1='12'
          x2='30'
          y2='12'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#AE519D' />
          <stop offset='0.510417' stopColor='#E54389' />
          <stop offset='0.979167' stopColor='#F4A14C' />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Favourite;
