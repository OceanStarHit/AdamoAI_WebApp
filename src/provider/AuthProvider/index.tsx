import React from 'react';
import { toast } from 'react-toastify';
import AuthService from 'services/auth';
import { ROUTES } from 'constants/routes';
import { useNavigate } from 'react-router-dom';
import { LoginResponse, ResponseType } from 'types';
import { IAuthType, IRegisterType } from 'types/auth';
import { TransformResponse } from 'utils/serializeResponse';
import { AuthContext } from 'provider/AuthProvider/context';
import { useLocalStorageState } from 'hooks/useLocalstorage';

type PROPS = {
  children: null | boolean | React.ReactNode | React.ReactPortal;
};

const AuthProvider: React.FC<PROPS> = ({ children }) => {
  const [storageUser, setStorageUser, clearUser] = useLocalStorageState(
    null,
    '@user',
  );
  const [accessToken, setAccessToken, clearToken] = useLocalStorageState(
    null,
    '@token',
  );
  const [user, setUser] = React.useState<IAuthType | null>(storageUser);
  const navigate = useNavigate();

  const login = async (
    data: IAuthType,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setLoading(true);
    const res = AuthService.login(data);
    const serialResponse: LoginResponse = await TransformResponse(res);
    setLoading(false);
    if (serialResponse.error) {
      toast.error(serialResponse.message);
    } else {
      setAccessToken(serialResponse?.data?.access_token);
      toast('Login Successfully!');
      navigate(ROUTES.HOME);
    }
  };

  const googleLogin = async () => {
    AuthService.getGoogleLoginUrl();
  };

  const facebookLogin = async () => {
    AuthService.getFacebookLoginUrl();
  };

  const register = async (
    data: IRegisterType,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setLoading(true);
    const res = await AuthService.register(data);
    //@ts-ignore
    const serialResponse: ResponseType = await TransformResponse(res);
    setLoading(false);
    if (serialResponse.error) {
      toast.error(serialResponse.message);
    } else {
      setStorageUser(serialResponse?.data);
      toast('User Created Successfully!');
      navigate(ROUTES.HOME);
    }
  };

  const loggedOut = () => {
    clearUser();
    clearToken();
    setUser(null);
  };

  const contextValue = {
    user,
    accessToken,
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
