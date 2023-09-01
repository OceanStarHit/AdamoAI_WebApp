import React from 'react';
import { HomeContext } from 'provider/HomeProvider';

const useHomeContext = () => {
  return React.useContext(HomeContext);
};

export default useHomeContext;
