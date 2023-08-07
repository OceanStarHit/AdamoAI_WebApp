import Tabs from 'components/Tabs';
import Navbar from 'components/Navbar';
import App from 'screens/Settings/App';
import Support from 'screens/Settings/Help&Support';
import MainContainer from 'components/MainContainer';
import EditProfile from 'screens/Settings/EditProfile';
import DataControl from 'screens/Settings/DataControl';
import Subscription from 'screens/Settings/Subscription';

const Settings = () => {
  const tabs = [
    { label: 'Edit Profile', component: <EditProfile /> },
    { label: 'Subscription', component: <Subscription /> },
    { label: 'Data Control', component: <DataControl /> },
    { label: 'App', component: <App /> },
    { label: 'Help and Support', component: <Support /> },
  ];

  return (
    <MainContainer>
      <div className='w-full max-h-[calc(100vh-2rem)] overflow-y-auto'>
        <Navbar>
          <div className='mt-2'>
            <Tabs
              options={tabs}
              notSelectedClassName='!bg-input-gradient'
              className='rounded-full'
              tabWidth='w-11/12 md:w-2/3 lg:w-2/3'
              variant='home'
              tabPanelClassName='w-3/4 lg:w-11/12'
            />
          </div>
        </Navbar>
      </div>
    </MainContainer>
  );
};

export default Settings;
