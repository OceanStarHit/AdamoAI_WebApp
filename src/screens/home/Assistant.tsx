import { Heart } from 'assets/svgs';
import { ASSISTANTS, COLORS } from 'constants/tools';

const CardList = () => {
  const backgroundColor = () => {
    const random = Math.floor(Math.random() * COLORS.length);
    return COLORS[random];
  };
  return (
    <div className='overflow-x-auto'>
      <div className='flex px-4 py-2 space-x-2'>
        {ASSISTANTS.map((card) => {
          const randomBackground = backgroundColor();
          return (
            <div
              key={card.persona}
              style={{ backgroundColor: randomBackground }}
              className={`flex-shrink-0 w-44 h-48 shadow-lg rounded-xl`}
            >
              <div className='flex justify-between'>
                <div className='mt-3 ml-1'>
                  <Heart />
                </div>
                <div>
                  <img
                    src={card.avatar}
                    alt={card.persona}
                    className='rounded-xl'
                  />
                </div>
              </div>
              <div className='m-2 font-medium'>
                <p>{card.persona}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
