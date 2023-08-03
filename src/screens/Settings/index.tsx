import Layout from 'components/Sidebar';
import MainContainer from 'components/MainContainer';
import Navbar from 'components/Navbar';
import { helpAndSupportItems } from 'constants/settings';
import { CarrotRight } from 'assets/svgs';

const Settings = () => {
  return (
    //@ts-ignore
    <Layout>
      <MainContainer>
        <div className='min-h-[calc(100vh-2rem)] overflow-y-auto'>
          <Navbar />
          <div className='flex justify-center'>
            <div className='w-full max-w-[595px] bg-card px-[24px] mt-5 rounded-xl shadow-md mx-5'>
              {helpAndSupportItems?.map((item, index) => {
                const isLast = helpAndSupportItems.length - 1 === index;
                return (
                  <div
                    key={index}
                    className={`py-[24px] px-3 ${
                      !isLast ? 'border-b' : ''
                    } flex items-center justify-between`}
                  >
                    <div className='flex items-center'>
                      <item.icon />
                      <p className='ml-5 text-lg'>{item.title}</p>
                    </div>
                    <CarrotRight />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default Settings;
