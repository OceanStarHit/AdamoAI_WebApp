import './App.css';
import MainRoutes from 'routes/MainRoutes';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from 'provider/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeProvider from 'provider/HomeProvider';

function App() {
  const bodyClassName = () =>
    'text-sm font-white font-medium block p-3 w-auto flex text-gray-500';

  const toastClassName = () =>
    'relative flex p-1 min-h-10 justify-center overflow-hidden cursor-pointer h-16 items-center left-[40%] md:left-0 w-56 md:w-auto bg-slate-100 top-6 md:top-0';
  return (
    <Router>
      <AuthProvider>
        <HomeProvider>
          <ToastContainer
            bodyClassName={bodyClassName}
            autoClose={3000}
            toastClassName={toastClassName}
            position='top-right'
          />
          <MainRoutes />
        </HomeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
