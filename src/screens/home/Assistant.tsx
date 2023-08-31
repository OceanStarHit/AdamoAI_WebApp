import Slider from 'react-slick';
import { Heart } from 'assets/svgs';
import { useNavigate } from 'react-router-dom';
import ChatService from 'services/chat';
import React from 'react';
import img1 from '../../assets/avatars/assistants/nutritionist.jpg';
import img2 from '../../assets/avatars/assistants/travel_advisor.jpg';
import img3 from '../../assets/avatars/assistants/cryptocurrency_specialist.jpg';
import img4 from '../../assets/avatars/assistants/doctor.jpg';
import img5 from '../../assets/avatars/assistants/veterinarian.jpg';
import img6 from '../../assets/avatars/assistants/pharmacist.jpg';
import img7 from '../../assets/avatars/assistants/school_tutor.jpg';
import img8 from '../../assets/avatars/assistants/language_teacher.jpg';
import img9 from '../../assets/avatars/assistants/fitness_coach.jpg';
import img10 from '../../assets/avatars/assistants/quiz_master.jpg';
import img11 from '../../assets/avatars/assistants/therapist.jpg';
import img12 from '../../assets/avatars/assistants/historian.jpg';
import img13 from '../../assets/avatars/assistants/sommelier.jpg';
import img14 from '../../assets/avatars/assistants/marketing_manager.jpg';
import img15 from '../../assets/avatars/assistants/comedian.jpg';
import img16 from '../../assets/avatars/assistants/chef.jpg';
import img17 from '../../assets/avatars/assistants/lawyer.jpg';
import img18 from '../../assets/avatars/assistants/business_adviser.jpg';
interface ICard {
  persona: string;
  uuid: string;
  avatar: string;
}

const CardList = () => {
  const navigate = useNavigate();
  const [resData, setResData] = React.useState<ICard[]>([]);

  const imageUrls = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];
  console.log(imageUrls[0]);
  const getAllAssistants = async () => {
    try {
      const data = (await ChatService.listAssistants())?.map((item) => ({
        ...item,
        avatar: '../..' + item.avatar,
      })) as ICard[];
      setResData(data);
      console.log(data);
    } catch (error) {
      console.log('Fetch Error', error);
    }
  };

  React.useEffect(() => {
    getAllAssistants();
  }, []);

  const SampleNextArrow: React.FC<{
    className?: string;
    onClick?: () => void;
  }> = ({ className, onClick }) => {
    return (
      <div
        className={className}
        style={{
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
        {resData.map((card, index) => (
          <div
            key={card.persona}
            className={`!w-[90%] relative !left-[5%]  h-44 rounded-xl cursor-pointer`}
            onClick={() =>
              navigate('/chat', {
                state: {
                  uuid: card.uuid,
                  cardName: card.persona,
                },
              })
            }
          >
            <img
              src={imageUrls[index]}
              className='w-full p-2 h-32'
              alt={card.persona}
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
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
