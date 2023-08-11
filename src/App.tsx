import './App.css';
import MainRoutes from 'routes/MainRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from 'provider/AuthProvider';
import { toastCustomStyle } from 'constants/common';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer style={toastCustomStyle} />
        <MainRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
