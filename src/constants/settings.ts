import { HeadPhone, Help, Info, Shield } from 'assets/svgs';

export type SettingsItem = {
  icon: () => JSX.Element;
  title: ScreenName;
  hasMore: boolean;
};

export enum ScreenName {
  SETTINGS = 'Settings',
  FAQS = 'FAQs',
  GET_HELP = 'Get Help',
  TERMS_OF_SERVICE = 'Terms of Service',
  PRIVACY_POLICY = 'Privacy Policy',
}

export const Screens = [
  ScreenName.SETTINGS,
  ScreenName.FAQS,
  ScreenName.GET_HELP,
  ScreenName.TERMS_OF_SERVICE,
  ScreenName.PRIVACY_POLICY,
];

export const helpAndSupportItems: Array<SettingsItem> = [
  {
    icon: Help,
    title: ScreenName.FAQS,
    hasMore: true,
  },
  {
    icon: HeadPhone,
    title: ScreenName.GET_HELP,
    hasMore: true,
  },
  {
    icon: Info,
    title: ScreenName.TERMS_OF_SERVICE,
    hasMore: true,
  },
  {
    icon: Shield,
    title: ScreenName.PRIVACY_POLICY,
    hasMore: true,
  },
];
