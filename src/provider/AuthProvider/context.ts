import React from 'react';
import { IAuthType, IRegisterType } from 'types/auth';

export const AuthContext = React.createContext<{
  accessToken: string;
  user: IAuthType | null;
  loggedOut: () => void;
  login: (
    data: IAuthType,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  register: (
    data: IRegisterType,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  googleLogin: () => void;
  facebookLogin: () => void;
  setUser: React.Dispatch<React.SetStateAction<IAuthType | null>>;
}>({
  user: null,
  accessToken: '',
  setUser: () => {},
  login: () => {},
  googleLogin: () => {},
  register: () => {},
  loggedOut: () => {},
  facebookLogin: () => {},
});
