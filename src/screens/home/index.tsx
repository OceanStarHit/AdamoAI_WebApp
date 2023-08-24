import Tabs from 'components/Tabs';
import Tools from 'screens/home/Tools';
import Heading from 'components/Heading';
import { IMAGE_GIF } from 'constants/common';
import CardList from 'screens/home/Assistant';
import { ANIMATED_TEXT } from 'constants/auth';
import WordEffect from 'components/WordEffect';
import HomeSearch from 'screens/home/HomeSearch';
import MainContainer from 'components/MainContainer';

const Home = () => {
  const tabs = [
    { label: 'All', component: <CardList />, tags: 23 },
    { label: 'Favorite', component: <CardList />, tags: 4 },
    { label: 'Assistants', component: <CardList />, tags: 10 },
    { label: 'Tools', component: <CardList />, tags: 3 },
  ];
  return (
    <MainContainer>
      <div
        className='w-full max-h-[calc(100vh-2rem)] overflow-y-auto custom-scrollbar
      rounded-3xl'
      >
        <div className='flex justify-center bg-transparent'>
          <img src={IMAGE_GIF} width={200} height={200} />
        </div>

        <div className='flex justify-center'>
          <div className='w-1/2'>
            <div className='flex space-x-2'>
              <Heading
                text={`Hi, I'm Adamo`}
                className='font-helvetica font-extrabold text-2xl'
              />
            </div>
            <div className='h-14'>
              <WordEffect text={ANIMATED_TEXT} delay={300} />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-11/12 md:w-2/3 lg:w-1/2'>
            <HomeSearch />
          </div>
        </div>
        <div className='mx-3'>
          <Tabs
            options={tabs}
            notSelectedClassName='!bg-gray-200'
            className='rounded-full'
            tabWidth='w-11/12 md:w-2/3 lg:w-1/2'
            variant='home'
            tabPanelClassName='w-full'
          />
        </div>
        <div className='flex justify-start mt-8 relative right-8 mx-3'>
          <Heading text='Tools' type='heading' className='ml-12 font-medium' />
        </div>
        <div className=''>
          <Tools />
        </div>
      </div>
    </MainContainer>
  );
};
export default Home;
