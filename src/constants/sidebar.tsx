import {
  Chat,
  Doctor,
  Favourite,
  Home,
  Nutritionist,
  SidebarSetting,
  Tools,
  Therapist,
  Fitness,
  SidebarBookmark,
} from 'assets/svgs';

export const UPPER_SIDEBAR = [
  {
    label: 'Home',
    icon: <Home />,
  },
  {
    label: 'Chat',
    icon: <Chat />,
  },
  {
    label: 'Tools',
    icon: <Tools />,
  },
  {
    label: 'Settings',
    icon: <SidebarSetting />,
  },
];

export const LOWER_SIDEBAR = [
  {
    label: 'Favourite',
    icon: <Favourite />,
  },
  {
    label: 'Bookmark',
    icon: <SidebarBookmark />,
  },
  {
    label: 'Your Nutritionist',
    icon: <Nutritionist />,
  },
  {
    label: 'Your Doctor',
    icon: <Doctor />,
  },
  {
    label: 'Your Fitness Coach',
    icon: <Fitness />,
  },
  {
    label: 'Your Therapist',
    icon: <Therapist />,
  },
];
