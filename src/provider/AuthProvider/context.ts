import React from 'react';
import { IAuthType } from 'types/auth';

export const AuthContext = React.createContext<{
  user: IAuthType | null;
  loggedOut: () => void;
  login: (data: IAuthType) => void;
  register: (data: IAuthType) => void;
  googleLogin: () => void;
  facebookLogin: () => void;
  setUser: React.Dispatch<React.SetStateAction<IAuthType | null>>;
}>({
  user: null,
  setUser: () => {},
  login: () => {},
  googleLogin: () => {},
  register: () => {},
  loggedOut: () => {},
  facebookLogin: () => {},
});
