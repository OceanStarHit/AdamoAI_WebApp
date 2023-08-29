import { Home } from 'assets/svgs';
import { ROUTES } from './routes';
import {
  Assistants,
  RealtimeTranslator,
  ImageCreator,
  SocialConnection,
  Helps,
  Account,
  Settings,
  Subscription,
  Logout,
} from 'assets/svgs';

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
    route: ROUTES.REALTIME_TRANSLATOR,
    label: 'Realtime Translator',
    icon: <RealtimeTranslator />,
  },
  {
    route: ROUTES.IMAGE_GENERATOR,
    label: 'Image Creators',
    icon: <ImageCreator />,
  },
  {
    route: ROUTES.SOCIAL_CONNECTION,
    label: 'Social Connection',
    icon: <SocialConnection />,
  },
  {
    route: ROUTES.HELP,
    label: 'Help',
    icon: <Helps />,
  },
];
export const LOWER_SIDEBAR = [
  {
    route: ROUTES.ACCOUNT,
    label: 'Account',
    icon: <Account />,
  },
  {
    route: ROUTES.SETTING,
    label: 'Settings',
    icon: <Settings />,
  },
  {
    route: ROUTES.SUBSCRIPTION,
    label: 'Subscription',
    icon: <Subscription />,
  },
  {
    route: ROUTES.ACCOUNT,
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
