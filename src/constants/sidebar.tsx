import { Home } from 'assets/svgs';
import { ROUTES } from './routes';
import Assistants from 'assets/svgs/assistants';
import RealtimeTranslator from 'assets/svgs/realtimeTranslator';
import ImageCreator from 'assets/svgs/imageCreator';
import SocialConnection from 'assets/svgs/socialConnection';
import Helps from 'assets/svgs/helps';
import Account from 'assets/svgs/account';
import Settings from 'assets/svgs/settings';
import Subscription from 'assets/svgs/subscription';
import Logout from 'assets/svgs/logout';

export const UPPER_SIDEBAR = [
  {
    route: ROUTES.HOME,
    label: 'Home',
    icon: <Home />,
  },
  {
    route: ROUTES.CHAT,
    label: 'Assistants',
    icon: <Assistants />,
  },
  {
    route: ROUTES.HOME,
    label: 'Realtime Translator',
    icon: <RealtimeTranslator />,
  },
  {
    route: ROUTES.HOME,
    label: 'Image Creators',
    icon: <ImageCreator />,
  },
  {
    route: ROUTES.HOME,
    label: 'Social Connection',
    icon: <SocialConnection />,
  },
  {
    route: ROUTES.HOME,
    label: 'Help',
    icon: <Helps />,
  },
];
export const LOWER_SIDEBAR = [
  {
    route: ROUTES.HOME,
    label: 'Account',
    icon: <Account />,
  },
  {
    route: ROUTES.HOME,
    label: 'Settings',
    icon: <Settings />,
  },
  {
    route: ROUTES.HOME,
    label: 'Subscription',
    icon: <Subscription />,
  },
  {
    route: ROUTES.HOME,
    label: 'Logout',
    icon: <Logout />,
  },
];

// export const LOWER_SIDEBAR = [
//   {
//     label: 'Favourite',
//     icon: <Favourite />,
//     color: 'text-pink-500',
//   },
// ];

export const UPPER_CLOSE_SIDEBAR = [
  {
    route: ROUTES.HOME,
    label: 'Home',
    icon: <Home width='30' height='30' />,
  },
  {
    route: ROUTES.CHAT,
    label: 'Assistants',
    icon: <Assistants width='30' height='30' />,
  },
  {
    route: ROUTES.TOOLS,
    label: 'Realtime Translator',
    icon: <RealtimeTranslator width='30' height='30' />,
  },
  {
    route: ROUTES.SETTING,
    label: 'ImageCreator',
    icon: <ImageCreator width='30' height='30' />,
  },
  {
    route: ROUTES.TOOLS,
    label: 'Social Connection',
    icon: <SocialConnection width='30' height='30' />,
  },
  {
    route: ROUTES.SETTING,
    label: 'Help',
    icon: <Helps width='30' height='30' />,
  },
];

export const LOWER__CLOSE_SIDEBAR = [
  {
    route: ROUTES.HOME,
    label: 'Account',
    icon: <Account width='30' height='30' />,
  },
  {
    route: ROUTES.HOME,
    label: 'Settings',
    icon: <Settings width='30' height='30' />,
  },
  {
    route: ROUTES.HOME,
    label: 'Subscription',
    icon: <Subscription width='30' height='30' />,
  },
  {
    route: ROUTES.HOME,
    label: 'Logout',
    icon: <Logout width='30' height='30' />,
  },
];
