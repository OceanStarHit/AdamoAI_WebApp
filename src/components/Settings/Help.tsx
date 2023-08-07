import { contactDetails } from 'constants/settings';
import SettingsItem from './SettingsItem';

const Help = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-[595px] mx-5 mb-3 mt-5'>
        <p className='text-[24px] font-semibold'>We are here to help</p>
        <p className='text-gray-500'>
          Please get in touch with us, contact one of our contact lists
        </p>
        <div className='flex justify-center'>
          <div className='w-full max-w-[595px] bg-card px-[15px] mt-5 rounded-xl shadow-md'>
            {contactDetails?.map((item, index) => {
              const isLast = contactDetails.length - 1 === index;
              return (
                <SettingsItem
                  isLast={isLast}
                  item={item}
                  key={index}
                  onClick={() => {}}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
