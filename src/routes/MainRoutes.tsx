import React from 'react';
import Chat from 'screens/Chat';
import Home from 'screens/home';
import ToolScreen from 'screens/Tools';
import Settings from 'screens/Settings';
import Layout from 'components/Sidebar';
import { ROUTES } from 'constants/routes';
import useAuthContext from 'hooks/useAuth';
import UserAuthentication from 'screens/Auth';
import Checkout from 'screens/Settings/Checkout';
import LayoutProvider from 'provider/LayoutProvider';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Subscription from 'screens/Subscription';

const GetAuthenticatedRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const UNAUTHENTICATED_ROUTES = [
    ROUTES.HOME,
    ROUTES.CHAT,
    ROUTES.SETTING,
    ROUTES.TOOLS,
    ROUTES.CHECKOUT,
    ROUTES.SUBSCRIPTION,
  ];
  React.useEffect(() => {
    if (UNAUTHENTICATED_ROUTES.includes(location.pathname as ROUTES)) {
      navigate(location.pathname);
    } else {
      navigate(ROUTES.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LayoutProvider>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CHAT} element={<Chat />} />
          <Route path={ROUTES.TOOLS} element={<ToolScreen />} />
          <Route path={ROUTES.SETTING} element={<Settings />} />
          <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
          <Route path={ROUTES.SUBSCRIPTION} element={<Subscription />} />
        </Routes>
      </Layout>
    </LayoutProvider>
  );
};

const GetUnAuthRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const AUTHENTICATED_ROUTES = [ROUTES.AUTH, ROUTES.FORGOT_PASSWORD];
  React.useEffect(() => {
    if (AUTHENTICATED_ROUTES.includes(location.pathname as ROUTES)) {
      navigate(location.pathname);
    } else {
      navigate(ROUTES.AUTH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <React.Fragment>
        <Route path={ROUTES.AUTH} element={<UserAuthentication />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      </React.Fragment>
    </Routes>
  );
};

const MainRoutes = () => {
  const { accessToken } = useAuthContext();

  return (
    <React.Fragment>
      {accessToken ? <GetAuthenticatedRoutes /> : <GetUnAuthRoutes />}
    </React.Fragment>
  );
};

export default MainRoutes;
