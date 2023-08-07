const Doctor = ({ width = '24', height = '24' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='24' height='24' rx='8' fill='white' fillOpacity='0.12' />
      <rect width='24' height='24' rx='8' fill='#00B5FF' fillOpacity='0.75' />
      <rect
        width='24'
        height='24'
        rx='8'
        fill='url(#paint0_radial_2441_8673)'
        fillOpacity='0.4'
      />
      <rect
        width='24'
        height='24'
        rx='8'
        fill='url(#paint1_radial_2441_8673)'
      />
      <rect width='24' height='24' rx='8' fill='#CDCDCD' fillOpacity='0.24' />
      <defs>
        <radialGradient
          id='paint0_radial_2441_8673'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(11.2121 24) rotate(-90.0482) scale(36 11.9259)'
        >
          <stop stopColor='white' />
          <stop offset='0.760417' stopColor='white' stopOpacity='0.2' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_2441_8673'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(12 24) rotate(-90) scale(31.7143 12.4075)'
        >
          <stop stopColor='#00B5FF' stopOpacity='0.15' />
          <stop offset='0.74033' stopColor='#00B5FF' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};
export default Doctor;
