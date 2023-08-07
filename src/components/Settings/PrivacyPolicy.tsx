import { PrivacyPolicy as PrivacyPolicyDetails } from 'constants/settings';

const PrivacyPolicy = () => {
  const { date, disclaimer, details } = PrivacyPolicyDetails;
  return (
    <div className='p-3 md:p-[30px] text-gray-500'>
      <div className='mb-5'>
        <p className='font-semibold text-lg text-black'>Updated</p>
        <p className=' text-md'>{date}</p>
      </div>
      <p className='mb-5'>{disclaimer}</p>
      <div>
        {details.map((item, index) => {
          return (
            <div key={index}>
              <div className='flex gap-2 md:gap-3'>
                <p>{index + 1}.</p>
                <div className='mb-3'>
                  <p>{item?.title}</p>
                  {item?.points?.length > 1 ? (
                    item?.points?.map((point, index) => (
                      <p key={index}>{point}</p>
                    ))
                  ) : (
                    <p>{item?.points[0]}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
