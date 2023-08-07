import React from 'react';
import { IAuthType } from 'types/auth';

export const AuthContext = React.createContext<{
  accessToken: string;
  user: IAuthType | null;
  loggedOut: () => void;
  login: (data: IAuthType) => void;
  register: (data: IAuthType) => void;
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
