import './App.css';
import Layout from 'components/Sidebar';
import { ROUTES } from 'constants/routes';
import MainRoutes from 'routes/MainRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from 'provider/AuthProvider';
import { toastCustomStyle } from 'constants/common';
import LayoutProvider from 'provider/LayoutProvider';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const pathname = window.location.pathname;
  return (
    <Router>
      <AuthProvider>
        {pathname !== ROUTES.AUTH ? (
          <LayoutProvider>
            <Layout>
              <ToastContainer style={toastCustomStyle} />
              <MainRoutes />
            </Layout>
          </LayoutProvider>
        ) : (
          <>
            <ToastContainer style={toastCustomStyle} />
            <MainRoutes />
          </>
        )}
      </AuthProvider>
    </Router>
  );
}

export default App;
