import React from 'react';
import { CombineRoomType } from 'types/assistant';

export const LayoutContext = React.createContext<{
  sidebarState: string;
  settingState: string;
  setSettingState: React.Dispatch<React.SetStateAction<string>>;
  setSidebarState: React.Dispatch<React.SetStateAction<string>>;
  homeSearch: string;
  setHomeSearch: React.Dispatch<React.SetStateAction<string>>;
  assistantSearch: string;
  setAssistantSearch: React.Dispatch<React.SetStateAction<string>>;
  assistantApiData: CombineRoomType[];
  setAssistantApiData: React.Dispatch<React.SetStateAction<CombineRoomType[]>>;
  selectedAssistantFromHome: CombineRoomType;
  setSelectedAssistantFromHome: React.Dispatch<
    React.SetStateAction<CombineRoomType>
  >;
}>({
  sidebarState: '',
  settingState: 'Settings',
  setSettingState: () => {},
  setSidebarState: () => {},
  homeSearch: '',
  setHomeSearch: () => {},
  assistantSearch: '',
  setAssistantSearch: () => {},
  assistantApiData: [],
  setAssistantApiData: () => {},
  selectedAssistantFromHome: {
    avatar: '',
    discription: '',
    name: '',
    persona: '',
    _id: '',
    assistant_uuid: '',
    user_uuid: '',
    uuid: '',
  },
  setSelectedAssistantFromHome: () => {},
});
