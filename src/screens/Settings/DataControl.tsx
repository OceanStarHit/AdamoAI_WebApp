import React from 'react';
import useLayoutContext from 'hooks/useLayout';

const DataCOntrol = () => {
  const { setSettingState } = useLayoutContext();

  React.useEffect(() => {
    setSettingState('Settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full h-[520px] overflow-y-auto'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full max-w-[595px] bg-card px-[15px] md:px-[24px] mt-5 rounded-xl shadow-md mx-5 h-56 md:h-40'>
          <div className='py-[15px] md:py-[16px] px-1 md:px-3 flex items-center justify-between hover:cursor-pointer'>
            <div className='flex items-center'>
              <p className='ml-3 md:ml-5 text-sm md:text-lg font-light'>
                Chat History
              </p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer' />
              <div className="w-[60px] h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-adamo-green" />
            </label>
          </div>
          <div className='border-t border-slate-300'>
            <p className='text-slate-400 text-sm mt-1'>
              Save new chats on this device to your history and allow them to be
              used to improve our models. Unsaved chat will be deleted from our
              systems within 30 days. This setting does not sync across device.
              Learn more
            </p>
          </div>
        </div>
        <div className='w-full max-w-[595px] bg-card px-[15px] md:px-[24px] mt-5 rounded-xl shadow-md mx-5 h-44 md:h-48'>
          <div className='py-[15px] md:py-[16px] px-1 md:px-3 flex items-center justify-between hover:cursor-pointer'>
            <div className='flex items-center'>
              <p className='ml-3 md:ml-5 text-sm md:text-lg font-light'>
                Export Data
              </p>
            </div>
          </div>
          <div className='border-t border-slate-300'>
            <div className='py-[15px] md:py-[16px] px-1 md:px-3 flex items-center justify-between hover:cursor-pointer'>
              <div className='flex items-center'>
                <p className='ml-3 md:ml-5 text-sm md:text-lg font-light text-red-400'>
                  Delete account
                </p>
              </div>
            </div>
          </div>
          <div className='border-t border-slate-300'>
            <div className='py-[15px] md:py-[16px] px-1 md:px-3 flex items-center justify-between hover:cursor-pointer'>
              <div className='flex items-center'>
                <p className='ml-3 md:ml-5 text-sm md:text-lg font-light text-red-400'>
                  Clear Chat History
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataCOntrol;
