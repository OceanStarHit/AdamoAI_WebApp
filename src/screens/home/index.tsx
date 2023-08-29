import Tabs from 'components/Tabs';
import Tools from 'screens/home/Tools';
import Heading from 'components/Heading';
import { IMAGE_GIF } from 'constants/common';
import CardList from 'screens/home/Assistant';
import { ANIMATED_TEXT } from 'constants/auth';
import WordEffect from 'components/WordEffect';
import HomeSearch from 'screens/home/HomeSearch';
import MainContainer from 'components/MainContainer';
import { WaveIcon } from 'assets/svgs';
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
        className='w-full max-h-[calc(100vh-2rem)] xl:min-h-[calc(100vh-2rem)] overflow-y-auto custom-scrollbar
      rounded-3xl'
      >
        <div className='flex justify-center bg-transparent'>
          <img src={IMAGE_GIF} width={200} height={200} />
        </div>

        <div className='flex justify-center'>
          <div className='w-2/3 md:w-1/3 pb-9'>
            <div className='flex space-x-2'>
              <Heading
                text={
                  <div className='flex h-full items-center'>
                    <span>Hi, I&apos;m Adamo </span>
                    <div className='w-5 h-5 sm:w-8 sm:h-8 '>
                      <WaveIcon />
                    </div>
                  </div>
                }
                className={`font-helvetica font-extrabold text-lg md:!text-3xl`}
              />
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
          />
        </div>
        <div className='flex justify-start mt-6 relative right-8 mx-3'>
          <Heading text='Tools' type='heading' className='ml-12 font-medium' />
        </div>
        <div>
          <Tools />
        </div>
      </div>
    </MainContainer>
  );
};
export default Home;
