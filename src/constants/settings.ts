import { Email, HeadPhone, Help, Info, Phone, Shield } from 'assets/svgs';

export type SettingsItem = {
  icon: () => JSX.Element;
  title: ScreenName | string;
  hasMore?: boolean;
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

export const FAQItems = [
  {
    question: 'Can I try Adamo before committing to a paid plan?',
    answer:
      'Yes, we offer a free plan with limited access to AI capabilities. This plan is a great way to test the platform and see if it meets your needs before upgrading to a paid plan.',
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer: '',
  },
  {
    question: 'Is the Chat AI App available in different languages?',
    answer: '',
  },
  {
    question: 'What kinds of questions can I ask the Chat AI App?',
    answer: '',
  },
];

export const contactDetails: Array<SettingsItem> = [
  {
    icon: Email,
    title: 'adamo@gmail.com',
  },
  {
    icon: Phone,
    title: '1-800-555-5555',
  },
];
