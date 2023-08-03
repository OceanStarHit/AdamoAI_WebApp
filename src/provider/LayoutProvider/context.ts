import React from 'react';

export const LayoutContext = React.createContext<{
  sidebarState: string;
  setSidebarState: React.Dispatch<React.SetStateAction<string>>;
}>({
  sidebarState: '',
  setSidebarState: () => {},
});
