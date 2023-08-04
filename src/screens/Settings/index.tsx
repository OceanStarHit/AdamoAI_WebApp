import Layout from 'components/Sidebar';
import MainContainer from 'components/MainContainer';
import Navbar from 'components/Navbar';
import { ScreenName, helpAndSupportItems } from 'constants/settings';
import SettingsItem from 'components/Settings/SettingsItem';
import React from 'react';
import FAQs from 'components/Settings/FAQs';
import Help from 'components/Settings/Help';
import TermsOfService from 'components/Settings/TermsOfService';

const Settings = () => {
  const [selectedScreen, setSelectedScreen] = React.useState<ScreenName>(
    ScreenName.SETTINGS,
  );

  const getContent = () => {
    if (selectedScreen === ScreenName.SETTINGS)
      return (
        <div>
          <Navbar title='Settings' />
          <div className='flex justify-center'>
            <div className='w-full max-w-[595px] bg-card px-[15px] md:px-[24px] mt-5 rounded-xl shadow-md mx-5'>
              {helpAndSupportItems?.map((item, index) => {
                const isLast = helpAndSupportItems.length - 1 === index;
                return (
                  <SettingsItem
                    isLast={isLast}
                    item={item}
                    key={index}
                    onClick={() => setSelectedScreen(item.title as ScreenName)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );

    if (selectedScreen === ScreenName.FAQS)
      return (
        <div>
          <Navbar
            title={ScreenName.FAQS}
            onBackPress={() => setSelectedScreen(ScreenName.SETTINGS)}
          />
          <FAQs />
        </div>
      );

    if (selectedScreen === ScreenName.GET_HELP)
      return (
        <div>
          <Navbar
            title={ScreenName.GET_HELP}
            onBackPress={() => setSelectedScreen(ScreenName.SETTINGS)}
          />
          <Help />
        </div>
      );

    if (selectedScreen === ScreenName.PRIVACY_POLICY)
      return (
        <div>
          <Navbar
            title={ScreenName.PRIVACY_POLICY}
            onBackPress={() => setSelectedScreen(ScreenName.SETTINGS)}
          />
        </div>
      );

    if (selectedScreen === ScreenName.TERMS_OF_SERVICE)
      return (
        <div>
          <Navbar
            title={ScreenName.TERMS_OF_SERVICE}
            onBackPress={() => setSelectedScreen(ScreenName.SETTINGS)}
          />
          <TermsOfService />
        </div>
      );
  };

  return (
    //@ts-ignore
    <Layout>
      <MainContainer>
        <div className='min-h-[calc(100vh-2rem)] overflow-y-auto'>
          {getContent()}
        </div>
      </MainContainer>
    </Layout>
  );
};

export default Settings;
