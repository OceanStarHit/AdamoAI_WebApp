import React from 'react';
import Chat from 'screens/Chat';
import Home from 'screens/home';
import Account from 'screens/Account';
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

const GetAuthenticatedRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const UNAUTHENTICATED_ROUTES = [
    ROUTES.HOME,
    ROUTES.CHAT,
    ROUTES.ACCOUNT,
    ROUTES.SETTING,
    ROUTES.TOOLS,
    ROUTES.CHECKOUT,
  ];
  const routes = [
    { path: ROUTES.HOME, element: <Home /> },
    { path: ROUTES.CHAT, element: <Chat /> },
    { path: ROUTES.ACCOUNT, element: <Account /> },
    { path: ROUTES.TOOLS, element: <ToolScreen /> },
    { path: ROUTES.SETTING, element: <Settings /> },
    { path: ROUTES.CHECKOUT, element: <Checkout /> },
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
          {routes.map((items, index) => {
            return (
              <Route key={index} path={items.path} element={items.element} />
            );
          })}
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
