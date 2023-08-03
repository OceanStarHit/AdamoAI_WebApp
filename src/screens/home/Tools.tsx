import { TOOLS } from 'constants/tools';

const Tools = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden'>
      <div className='flex space-x-2 mb-2'>
        {TOOLS.map((card) => {
          return (
            <div
              key={card.persona}
              className={`flex-shrink-0 w-44 md:w-60 h-60 md:h-auto shadow-lg border border-slate-100 rounded-xl`}
            >
              <img
                src={card.avatar}
                alt={card.persona}
                className='rounded-t-xl'
              />

              <div className='m-2 font-medium'>
                <div className='flex space-x-2'>
                  <span>{card.icon}</span>
                  <p>{card.persona}</p>
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
