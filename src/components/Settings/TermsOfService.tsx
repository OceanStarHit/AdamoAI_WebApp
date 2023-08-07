import { termsOfServices } from 'constants/settings';

const TermsOfService = () => {
  const { date, disclaimer, details, endDiscliamer } = termsOfServices;
  return (
    <div className='p-3 md:p-[30px] text-gray-500'>
      <div className='mb-5'>
        <p className='font-semibold text-lg text-black'>Updated</p>
        <p className=' text-md'>{date}</p>
      </div>
      <p className='mb-5'>{disclaimer}</p>
      <div>
        {details.map((item, index) => (
          <div key={index} className='flex gap-2 md:gap-3'>
            <p>{index + 1}.</p>
            <p className='mb-3'>{item}</p>
          </div>
        ))}
      </div>
      <p className='mt-5'>{endDiscliamer}</p>
    </div>
  );
};

export default TermsOfService;
