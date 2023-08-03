import Layout from 'components/Sidebar';
import MainContainer from 'components/MainContainer';
import Navbar from 'components/Navbar';
import { helpAndSupportItems } from 'constants/settings';
import SettingsItem from 'components/Settings/SettingsItem';

const Settings = () => {
  return (
    //@ts-ignore
    <Layout>
      <MainContainer>
        <div className='min-h-[calc(100vh-2rem)] overflow-y-auto'>
          <Navbar title='Settings' onBackPress={() => {}} />
          <div className='flex justify-center'>
            <div className='w-full max-w-[595px] bg-card px-[24px] mt-5 rounded-xl shadow-md mx-5'>
              {helpAndSupportItems?.map((item, index) => {
                const isLast = helpAndSupportItems.length - 1 === index;
                return <SettingsItem isLast={isLast} item={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default Settings;
