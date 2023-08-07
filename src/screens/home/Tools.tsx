import { TOOLS } from 'constants/tools';

const Tools = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden mx-2'>
      <div className='flex space-x-2 mb-2'>
        {TOOLS.map((card) => {
          return (
            <div
              key={card.persona}
              className={`flex-shrink-0 w-44 md:w-60 h-60 md:h-auto shadow-lg rounded-xl ${card.gradientColor}`}
            >
              <img
                src={card.avatar}
                alt={card.persona}
                className='rounded-t-xl'
              />

              <div className='m-2 font-medium'>
                <div className='flex space-x-2 items-center'>
                  <span>{card.icon}</span>
                  <p className='text-xs md:text-base font-semibold md:font-normal'>
                    {card.persona}
                  </p>
                </div>
                <p className='text-gray-500 text-xs md:text-sm'>
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
