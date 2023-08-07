import React from 'react';
import Help from 'components/Settings/Help';
import FAQs from 'components/Settings/FAQs';
import useLayoutContext from 'hooks/useLayout';
import SettingsItem from 'components/Settings/SettingsItem';
import PrivacyPolicy from 'components/Settings/PrivacyPolicy';
import TermsOfService from 'components/Settings/TermsOfService';
import { ScreenName, helpAndSupportItems } from 'constants/settings';

const Support = () => {
  const [selectedScreen, setSelectedScreen] = React.useState<ScreenName>(
    ScreenName.SETTINGS,
  );
  const { settingState, setSettingState } = useLayoutContext();

  const getContent = () => {
    if (
      selectedScreen === ScreenName.SETTINGS ||
      settingState === ScreenName.SETTINGS
    )
      return (
        <div>
          <div className='flex justify-center'>
            <div className='w-full max-w-[595px] bg-card px-[15px] md:px-[24px] mt-5 rounded-xl shadow-md mx-5'>
              {helpAndSupportItems?.map((item, index) => {
                const isLast = helpAndSupportItems.length - 1 === index;
                return (
                  <SettingsItem
                    isLast={isLast}
                    item={item}
                    key={index}
                    onClick={() => {
                      setSelectedScreen(item.title as ScreenName);
                      setSettingState(item.title);
                    }}
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
          <FAQs />
        </div>
      );

    if (selectedScreen === ScreenName.GET_HELP)
      return (
        <div>
          <Help />
        </div>
      );

    if (selectedScreen === ScreenName.PRIVACY_POLICY)
      return (
        <div>
          <PrivacyPolicy />
        </div>
      );

    if (selectedScreen === ScreenName.TERMS_OF_SERVICE)
      return (
        <div>
          <TermsOfService />
        </div>
      );
  };

  return <div className='w-full h-[520px] overflow-y-auto'>{getContent()}</div>;
};

export default Support;
