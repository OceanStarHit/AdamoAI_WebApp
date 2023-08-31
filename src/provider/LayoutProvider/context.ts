import React from 'react';

export const LayoutContext = React.createContext<{
  sidebarState: string;
  settingState: string;
  setSettingState: React.Dispatch<React.SetStateAction<string>>;
  setSidebarState: React.Dispatch<React.SetStateAction<string>>;
  homeSearch: string;
  setHomeSearch: React.Dispatch<React.SetStateAction<string>>;
  assistantSearch: string;
  setAssistantSearch: React.Dispatch<React.SetStateAction<string>>;
}>({
  sidebarState: '',
  settingState: 'Settings',
  setSettingState: () => {},
  setSidebarState: () => {},
  homeSearch: '',
  setHomeSearch: () => {},
  assistantSearch: '',
  setAssistantSearch: () => {},
});
