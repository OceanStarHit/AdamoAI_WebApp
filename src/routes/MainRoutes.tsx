import React from 'react';
import Chat from 'screens/Chat';
import Home from 'screens/home';
import ToolScreen from 'screens/Tools';
import { ROUTES } from 'constants/routes';
import UserAuthentication from 'screens/Auth';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import useAuthContext from 'hooks/useAuth';
import Settings from 'screens/Settings';

const getAuthenticatedRoutes = () => {
  return (
    <>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CHAT} element={<Chat />} />
      <Route path={ROUTES.TOOLS} element={<ToolScreen />} />
      <Route path={ROUTES.SETTING} element={<Settings />} />
    </>
  );
};

const MainRoutes = () => {
  const { accessToken } = useAuthContext();
  return (
    <Routes>
      <React.Fragment>
        <Route path={ROUTES.AUTH} element={<UserAuthentication />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        {accessToken ? getAuthenticatedRoutes() : null}
      </React.Fragment>
    </Routes>
  );
};

export default MainRoutes;
