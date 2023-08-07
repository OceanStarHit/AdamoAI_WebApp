import React from 'react';
import { LayoutContext } from 'provider/LayoutProvider/context';

type PROPS = {
  children: null | boolean | undefined | React.ReactNode | React.ReactPortal;
};

const LayoutProvider: React.FC<PROPS> = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState('');

  const contextValue = { sidebarState, setSidebarState };
  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
export { LayoutContext };
