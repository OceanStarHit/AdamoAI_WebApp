import { TOOLS } from 'constants/tools';

const Tools = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden px-5 mb-5'>
      <div className=' space-x-2 columns-1 sm:columns-2 md:columns-4'>
        {TOOLS.map((card) => {
          return (
            <div
              key={card.persona}
              className={`flex-shrink-0 w-full h-60 md:h-auto shadow-md rounded-xl ${card.gradientColor}`}
            >
              <img
                src={card.avatar}
                alt={card.persona}
                className='rounded-t-xl w-full p-2 '
              />

              <div className='m-2 font-medium'>
                <div className='flex space-x-2 items-center'>
                  <span>{card.icon}</span>
                  <p className='text-xs md:text-sm font-semibold md:font-medium'>
                    {card.persona}
                  </p>
                </div>
                <p className='text-gray-500 text-xs'>{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Tools;
