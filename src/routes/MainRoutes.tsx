import React from 'react';
import Chat from 'screens/Chat';
import { ROUTES } from 'constants/routes';
import UserAuthentication from 'screens/Auth';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from 'screens/Auth/ForgotPassword';

const MainRoutes = () => (
  <Routes>
    <React.Fragment>
      <Route path={ROUTES.CHAT} element={<Chat />} />
      <Route path={ROUTES.AUTH} element={<UserAuthentication />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
    </React.Fragment>
  </Routes>
);

export default MainRoutes;
