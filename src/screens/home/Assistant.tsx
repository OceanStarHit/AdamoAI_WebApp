import Slider from 'react-slick';
import { Heart } from 'assets/svgs';
import { ASSISTANTS } from 'constants/tools';

interface ICardList {
  onClick?: () => void;
  style?: object;
  className?: string;
}

const CardList = () => {
  const SampleNextArrow = (props: ICardList) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          height: '40px',
          width: '40px',
          borderRadius: '20px',
          background: `linear-gradient(
          90deg,
          #ae519d 0%,
          #e54389 51.04%,
          #f4a14c 97.92%
        )`,
          right: -40,
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props: ICardList) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          zIndex: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          height: '40px',
          width: '40px',
          borderRadius: '20px',
          background: `linear-gradient(
          90deg,
          #ae519d 0%,
          #e54389 51.04%,
          #f4a14c 97.92%
        )`,
          left: -40,
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {ASSISTANTS.map((card) => {
          return (
            <div
              key={card.persona}
              className={`!w-[90%] relative !left-[5%]  h-48 rounded-xl ${card.gradientColor}`}
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
      </Slider>
    </div>
  );
};

export default CardList;
