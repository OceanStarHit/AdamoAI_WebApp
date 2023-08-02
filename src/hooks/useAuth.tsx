import React from 'react';
import { AuthContext } from 'provider/AuthProvider';

const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export default useAuthContext;
