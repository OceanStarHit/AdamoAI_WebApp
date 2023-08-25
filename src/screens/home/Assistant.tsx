import Slider from 'react-slick';
import { Heart } from 'assets/svgs';
import { ASSISTANTS } from 'constants/tools';
import { useNavigate } from 'react-router-dom';

interface ICardList {
  onClick?: () => void;
  style?: object;
  className?: string;
}

const CardList = () => {
  const navigate = useNavigate();
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
          height: '45px',
          width: '45px',
          borderRadius: '22.5px',
          background: `linear-gradient(
          90deg,
          #ae519d 0%,
          #e54389 51.04%,
          #f4a14c 97.92%
        )`,
          right: -42,
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
          height: '45px',
          width: '45px',
          borderRadius: '22.5px',
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
    // dots: true,
    infinite: true,
    slidesToShow: 5,
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
          // dots: true,
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
    customPaging: () => (
      <div
        style={{
          height: '20px',
          width: '20px',
          borderRadius: '50%',
          marginTop: '10px',
          background: `linear-gradient(
            90deg,
            #ae519d 0%,
            #e54389 51.04%,
            #f4a14c 97.92%
          )`,
        }}
      />
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {ASSISTANTS.map((card) => {
          return (
            <div
              key={card.persona}
              className={`!w-[90%] relative !left-[5%]  h-44 rounded-xl ${card.gradientColor} cursor-pointer`}
              onClick={() =>
                navigate('/chat', {
                  state: {
                    uuid: card.uuid,
                  },
                })
              }
            >
              <img src={card.avatar} className='w-full p-2 h-32' />
              <div className='flex justify-between'>
                <div className='m-2 font-semibold text-sm'>
                  <p>{card.persona}</p>
                </div>
                <div className='mt-3 mx-3'>
                  <Heart />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardList;
