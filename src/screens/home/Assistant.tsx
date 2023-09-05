import React from 'react';
import Slider from 'react-slick';
import { Heart } from 'assets/svgs';
import { useNavigate } from 'react-router-dom';
import { CombineRoomType } from 'types/assistant';
import useLayoutContext from 'hooks/useLayout';
import useHomeContext from 'hooks/useHome';

interface ICardList {
  onClick?: () => void;
  style?: object;
  className?: string;
}

const CardList = () => {
  const navigate = useNavigate();
  const { assistants, getAssistants } = useHomeContext();
  const [filterData, setFilterData] = React.useState<CombineRoomType[]>([]);
  const [isloading, setIsloading] = React.useState<boolean>(true);
  const { homeSearch, setHomeSearch } = useLayoutContext();
  const { setSelectedAssistantFromHome } = useLayoutContext();

  const getAllAssistants = async () => {
    try {
      if (!assistants.length) {
        await getAssistants();
      }
      setIsloading(false);
    } catch (error) {
      console.log('Fetch Error', error);
    }
  };

  React.useEffect(() => {
    getAllAssistants();
  }, []);

  const SampleNextArrow = (props: ICardList) => {
    const { className, onClick } = props;

    return (
      <div
        className={className}
        style={{
          paddingTop: 3,
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

  const SamplePrevArrow: React.FC<{
    className?: string;
    onClick?: () => void;
  }> = ({ className, onClick }) => {
    return (
      <div
        className={className}
        style={{
          paddingTop: 3,
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
    infinite: filterData.length > 3,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  React.useEffect(() => {
    if (assistants.length && homeSearch) {
      const fiteredData = assistants.filter((item) => {
        return item?.persona?.toLowerCase().includes(homeSearch.toLowerCase());
      });
      setFilterData(fiteredData);
      setHomeSearch(homeSearch);
    } else {
      setFilterData(assistants);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeSearch]);

  const goToChat = (item: CombineRoomType) => {
    setSelectedAssistantFromHome(item);
    navigate('/chat');
  };

  return (
    <div>
      {assistants.length && !homeSearch ? (
        <Slider {...settings}>
          {assistants?.map((card, index) => {
            const gradientColor = index % 6 != 0 ? index % 6 : 1;
            return (
              <div
                key={card.persona}
                className={`!w-[90%]  relative !left-[5%]  rounded-xl ${
                  card.gradientColor || 'card-gradient' + gradientColor
                } cursor-pointer`}
                onClick={() => goToChat(card)}
              >
                <img
                  src={card?.avatar?.replace(new RegExp(' ', 'g'), '_')}
                  className='w-full p-2 rounded-xl'
                />
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
      ) : homeSearch ? (
        <Slider {...settings}>
          {filterData?.map((card, index) => {
            const gradientColor = index % 10 != 0 ? index % 10 : 4;
            return (
              <div
                key={card.persona}
                className={`!w-[90%] relative !left-[5%]  h-48 xl:h-60 rounded-xl ${
                  card.gradientColor || 'card-gradient' + gradientColor
                } cursor-pointer`}
                onClick={() => goToChat(card)}
              >
                <img
                  src={card?.avatar?.replace(new RegExp(' ', 'g'), '_')}
                  className='w-full p-2 h-32 xl:h-44 rounded-xl'
                />
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
      ) : (
        <div className='h-48 flex justify-center text-slate-'>
          {isloading ? 'Loading...' : `${homeSearch} not found.`}
        </div>
      )}
    </div>
  );
};

export default CardList;
