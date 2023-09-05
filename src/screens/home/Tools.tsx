import { TOOLS } from 'constants/tools';

const Tools = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden px-5 pb-5 '>
      <div className='sm:space-x-2 space-y-3 columns-1 sm:columns-2 md:columns-4'>
        {TOOLS.map((card) => {
          return (
            <div
              key={card.persona}
              className={`flex-shrink-0 pb-1 w-full h-auto min-h-[200px] flex flex-col justify-between shadow-md rounded-xl ${card.gradientColor}`}
            >
              <img
                src={card.avatar}
                alt={card.persona}
                className='rounded-t-xl w-full p-2 '
              />

              <div className='m-2 font-medium'>
                <div className='flex space-x-2 items-center'>
                  <span>{card.icon}</span>
                  <p className='text-xs  font-semibold xl:text-lg md:font-medium'>
                    {card.persona}
                  </p>
                </div>
                <p className='text-gray-500 text-xs 2xl:text-xs text-clip line-clamp-2'>
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Tools;
