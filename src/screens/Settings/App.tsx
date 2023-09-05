import React from 'react';
import useLayoutContext from 'hooks/useLayout';
import { APP_DETAILS } from 'constants/settings';
import SettingsItem from 'components/Settings/SettingsItem';

const App = () => {
  const { setSettingState } = useLayoutContext();

  React.useEffect(() => {
    setSettingState('Settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='w-full h-1/2 overflow-y-auto mb-5'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full max-w-[595px] bg-card px-[15px] md:px-[24px] mt-5 rounded-xl shadow-md mx-5 h-32'>
          <div className='py-[15px] md:py-[16px] px-1 md:px-3 flex items-center justify-between hover:cursor-pointer'>
            <div className='flex items-center'>
              <p className='ml-3 md:ml-5 text-sm md:text-lg font-normal '>
                Haptic Feedback
              </p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer' />
              <div className="w-[60px] h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-adamo-green" />
            </label>
          </div>
          <div className='border-t border-slate-300'>
            <p className='text-slate-400 text-sm mt-1'>
              Haptic feedback will be automatically disabled if your device is
              low battery.
            </p>
          </div>
        </div>
        <div className='w-full max-w-[595px] mx-5 mb-3 mt-5'>
          <div className='flex justify-center'>
            <div className='w-full max-w-[595px] bg-card px-[15px] mt-5 rounded-xl shadow-md'>
              {APP_DETAILS?.map((item, index) => {
                const isLast = APP_DETAILS.length - 1 === index;
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
    </div>
  );
};

export default App;
