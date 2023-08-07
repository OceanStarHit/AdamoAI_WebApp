import {
  Chat,
  Doctor,
  Favourite,
  Fitness,
  Home,
  Nutritionist,
  SidebarBookmark,
  SidebarSetting,
  Therapist,
  Tools,
} from 'assets/svgs';
import { ROUTES } from './routes';

export const UPPER_SIDEBAR = [
  {
    route: ROUTES.HOME,
    label: 'Home',
    icon: <Home />,
  },
  {
    route: ROUTES.CHAT,
    label: 'Chat',
    icon: <Chat />,
  },
  {
    route: ROUTES.TOOLS,
    label: 'Tools',
    icon: <Tools />,
  },
  {
    route: ROUTES.TOOLS,
    label: 'Settings',
    icon: <SidebarSetting />,
  },
];

export const LOWER_SIDEBAR = [
  {
    label: 'Favourite',
    icon: <Favourite />,
    color: 'text-pink-500',
  },
  {
    label: 'Bookmark',
    icon: <SidebarBookmark />,
    color: 'text-white',
  },
  {
    label: 'Your Nutritionist',
    icon: <Nutritionist />,
    color: 'text-green-500',
  },
  {
    label: 'Your Doctor',
    icon: <Doctor />,
    color: 'text-blue-300',
  },
  {
    label: 'Your Fitness Coach',
    icon: <Fitness />,
    color: 'text-red-500',
  },
  {
    label: 'Your Therapist',
    icon: <Therapist />,
    color: 'text-purple-400',
  },
];

export const UPPER_CLOSE_SIDEBAR = [
  {
    route: ROUTES.HOME,
    label: 'Home',
    icon: <Home width='30' height='30' />,
  },
  {
    route: ROUTES.CHAT,
    label: 'Chat',
    icon: <Chat width='30' height='30' />,
  },
  {
    route: ROUTES.TOOLS,
    label: 'Tools',
    icon: <Tools width='30' height='30' />,
  },
  {
    route: ROUTES.TOOLS,
    label: 'Settings',
    icon: <SidebarSetting width='30' height='30' />,
  },
];

export const LOWER__CLOSE_SIDEBAR = [
  {
    label: 'Favourite',
    icon: <Favourite width='30' height='30' />,
    color: 'text-pink-500',
  },
  {
    label: 'Bookmark',
    icon: <SidebarBookmark width='30' height='30' />,
    color: 'text-white',
  },
  {
    label: 'Your Nutritionist',
    icon: <Nutritionist width='30' height='30' />,
    color: 'text-green-500',
  },
  {
    label: 'Your Doctor',
    icon: <Doctor width='30' height='30' />,
    color: 'text-blue-300',
  },
  {
    label: 'Your Fitness Coach',
    icon: <Fitness width='30' height='30' />,
    color: 'text-red-500',
  },
  {
    label: 'Your Therapist',
    icon: <Therapist width='30' height='30' />,
    color: 'text-purple-400',
  },
];
