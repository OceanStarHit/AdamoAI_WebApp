import Tabs from 'components/Tabs';
import Tools from 'screens/home/Tools';
import Heading from 'components/Heading';
import CardList from 'screens/home/Assistant';
import { ANIMATED_TEXT } from 'constants/auth';
import WordEffect from 'components/WordEffect';
import HomeSearch from 'screens/home/HomeSearch';
import MainContainer from 'components/MainContainer';
import ADAMO_GIF from 'assets/images/AdamoCircle.gif';
import { WaveIcon } from 'assets/svgs';
import useLayoutContext from 'hooks/useLayout';
import React from 'react';
import { CombineRoomType } from 'types/assistant';
import ChatService from 'services/chat';

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const tabs = [
    { label: 'All', component: <CardList />, tags: 24 },
    { label: 'Favorite', component: <CardList />, tags: 0 },
    { label: 'Assistants', component: <CardList />, tags: 20 },
    { label: 'Tools', component: <CardList />, tags: 4 },
  ];
  const { setAssistantApiData } = useLayoutContext();
  const setData = async () => {
    try {
      const data: CombineRoomType[] =
        (await ChatService.listAssistants()) || [];
      setAssistantApiData(data);
    } catch (error) {
      console.log('Fetch Error', error);
    }
  };
  React.useEffect(() => {
    setData();
  }, []);

  const onChangeTab = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <MainContainer>
      <div
        className='w-full max-h-[calc(100vh-2rem)] xl:min-h-[calc(100vh-2rem)] overflow-y-auto custom-scrollbar
      rounded-3xl'
      >
        <div className='flex justify-center bg-transparent'>
          <img src={ADAMO_GIF} width={200} height={200} />
        </div>

        <div className='flex justify-center'>
          <div className='w-2/3 md:w-1/3 pb-9'>
            <div className='flex space-x-2'>
              <Heading
                text={`Hi, I'm Adamo`}
                className='font-helvetica font-extrabold text-2xl'
              />
              <div className='w-5 h-5 sm:w-8 sm:h-8'>
                <WaveIcon />
              </div>
            </div>
            <div className='h-14'>
              <WordEffect text={ANIMATED_TEXT} delay={300} />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-11/12 md:w-2/3 xl:w-3/5'>
            <HomeSearch />
          </div>
        </div>
        <div className='h-full'>
          <Tabs
            options={tabs}
            notSelectedClassName='!bg-gray-200'
            className='rounded-full'
            tabWidth='w-11/12 md:w-2/3 xl:w-3/5'
            variant='home'
            tabPanelClassName='w-3/4 md:w-11/12 '
            onChangeTab={onChangeTab}
          />
        </div>
        {activeIndex !== 2 ? (
          <>
            <div className='flex justify-start mt-6 relative right-8 mx-3'>
              <Heading
                text='Tools'
                type='heading'
                className='ml-12 font-medium'
              />
            </div>
            <div>
              <Tools />
            </div>
          </>
        ) : null}
      </div>
    </MainContainer>
  );
};
export default Home;
