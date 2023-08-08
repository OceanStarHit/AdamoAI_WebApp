import { Avatar, DropdownIcon } from 'assets/svgs';
import Card from 'components/Card';
import Heading from 'components/Heading';
import MainContainer from 'components/MainContainer';
import { TOOLS } from 'constants/tools';
import React from 'react';

const ToolScreen = () => {
  return (
    <MainContainer>
      <div className='min-h-[calc(100vh-2rem)]'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start mb-8'>
            <Heading
              text='Tools'
              type='heading'
              className='mb-0 relative top-4 left-4'
            />
          </div>
          <div className='flex justify-end mr-8'>
            <div className='flex space-x-4 items-center'>
              <div className='relative w-10 h-10 overflow-hidden bg-gray-600 rounded-full'>
                <Avatar />
              </div>
              <div>
                <DropdownIcon />
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-300 flex justify-center'>
          <div className='mt-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 m-2'>
            {TOOLS.map((item) => {
              return (
                <Card
                  key={item.name}
                  className={`rounded-2xl ${
                    item.persona === 'Adamo For Business' ? 'opacity-50' : ''
                  } ${item.gradientColor} border-none`}
                >
                  <div>
                    <div className='w-full relative'>
                      <img src={item.avatar} className='w-full' />
                      {item.persona === 'Adamo For Business' && (
                        <div className='opacity-50 w-32 rounded-full bg-black h-6 absolute right-2 top-2'>
                          <p className='text-white text-center font-semibold'>
                            Coming Soon
                          </p>
                        </div>
                      )}
                    </div>
                    <div className='m-2 font-medium'>
                      <div className='flex space-x-2'>
                        <span>{item.icon}</span>
                        <p>{item.persona}</p>
                      </div>
                      <p className='text-gray-500 text-xs md:text-sm'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ToolScreen;
