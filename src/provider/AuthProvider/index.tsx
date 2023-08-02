import React from 'react';
import { ResponseType } from 'types';
import { toast } from 'react-toastify';
import { IAuthType } from 'types/auth';
import AuthService from 'services/auth';
import { TransformResponse } from 'utils/serializeResponse';
import { AuthContext } from 'provider/AuthProvider/context';
import { removeStorage, useLocalStorageState } from 'hooks/useLocalstorage';

type PROPS = {
  children: null | boolean | React.ReactNode | React.ReactPortal;
};

const AuthProvider: React.FC<PROPS> = ({ children }) => {
  const [storageUser, setStorageUser] = useLocalStorageState(null, '@user');
  const [user, setUser] = React.useState<IAuthType | null>(storageUser);

  const login = async (data: IAuthType) => {
    const res = AuthService.login(data);
    const serialResponse: ResponseType = await TransformResponse(res);
    if (serialResponse.error) {
      toast.error(serialResponse.message);
    } else {
      setStorageUser(res);
      toast('Login Successfully!');
    }
  };

  const googleLogin = async () => {
    AuthService.getGoogleLoginUrl();
  };

  const facebookLogin = async () => {
    AuthService.getFacebookLoginUrl();
  };

  const register = async (data: IAuthType) => {
    const res = AuthService.register(data);
    const serialResponse: ResponseType = await TransformResponse(res);
    if (serialResponse.error) {
      toast.error(serialResponse.message);
    } else {
      setStorageUser(res);
      toast('User Created Successfully!');
    }
  };

  const loggedOut = () => {
    removeStorage('@user');
    setUser(null);
  };

  const contextValue = {
    user,
    setUser,
    login,
    googleLogin,
    register,
    loggedOut,
    facebookLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
