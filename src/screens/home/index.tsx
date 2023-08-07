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
    { label: 'For You', component: <CardList /> },
    { label: 'All Categories', component: <CardList /> },
    { label: 'Oldest', component: <CardList /> },
    { label: 'Newest', component: <CardList /> },
  ];
  return (
    <MainContainer>
      <div className='w-full max-h-[calc(100vh-2rem)] overflow-y-auto'>
        <div className='flex justify-center bg-transparent'>
          <img src={IMAGE_GIF} width={200} height={200} />
        </div>

        <div className='flex justify-center'>
          <div className='w-1/2'>
            <div className='flex space-x-2'>
              <Heading
                text={`Hi, I'm Adamo`}
                className='font-helvetica font-extrabold text-xl'
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
        <div className='mt-2'>
          <Tabs
            options={tabs}
            notSelectedClassName='!bg-gray-200'
            className='rounded-full'
            tabWidth='w-11/12 md:w-2/3 lg:w-1/2'
            variant='home'
            tabPanelClassName='w-3/4 lg:w-2/3'
          />
        </div>
        <div className='flex justify-start mt-8 relative right-8'>
          <Heading text='Tools' type='subtitle' className='ml-12' />
        </div>
        <div className='flex justify-center bg-transparent'>
          <Tools />
        </div>
      </div>
    </MainContainer>
  );
};
export default Home;
