import React from 'react';
import { LayoutContext } from 'provider/LayoutProvider/context';
import { CombineRoomType } from 'types/assistant';

type PROPS = {
  children: null | boolean | undefined | React.ReactNode | React.ReactPortal;
};

const LayoutProvider: React.FC<PROPS> = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState('');
  const [settingState, setSettingState] = React.useState('Settings');
  const [homeSearch, setHomeSearch] = React.useState('');
  const [assistantSearch, setAssistantSearch] = React.useState('');
  const [selectedAssistantFromHome, setSelectedAssistantFromHome] =
    React.useState<CombineRoomType>({
      avatar: '',
      discription: '',
      name: '',
      persona: '',
      _id: '',
      assistant_uuid: '',
      user_uuid: '',
      uuid: '',
    });
  const [assistantApiData, setAssistantApiData] = React.useState<
    CombineRoomType[]
  >([]);
  const contextValue = {
    sidebarState,
    settingState,
    setSidebarState,
    setSettingState,
    homeSearch,
    setHomeSearch,
    assistantSearch,
    setAssistantSearch,
    assistantApiData,
    setAssistantApiData,
    selectedAssistantFromHome,
    setSelectedAssistantFromHome,
  };
  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
export { LayoutContext };
