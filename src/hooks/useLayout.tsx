import * as React from 'react';
import { LayoutContext } from 'provider/LayoutProvider';

const useLayoutContext = () => {
  return React.useContext(LayoutContext);
};

export default useLayoutContext;
