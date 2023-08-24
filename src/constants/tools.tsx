import { Business, Social, Translator, Upload } from 'assets/svgs';

export const TOOLS = [
  {
    avatar: require('../assets/images/Robot.png'),
    persona: 'Image/Art Creator',
    name: 'Susan',
    description: 'Generate images using a written description as a basis.',
    icon: <Upload />,
    gradientColor: 'card-gradient7',
  },
  {
    avatar: require('../assets/images/Book.png'),
    persona: 'Realtime Translator',
    name: 'Adamo',
    description: 'Can translate spoken or written language in real time.',
    icon: <Translator />,
    gradientColor: 'card-gradient8',
  },
  {
    avatar: require('../assets/images/App.png'),
    persona: 'Social Connect',
    name: 'Adamo',
    description: 'Integrate AI with all your social media accounts',
    icon: <Social />,
    gradientColor: 'card-gradient9',
  },
  {
    avatar: require('../assets/images/Wave.png'),
    persona: 'Adamo For Business',
    name: 'Adamo',
    description:
      'Integrate and Utilization of AI within the context of a business organization.',
    icon: <Business />,
    gradientColor: 'card-gradient10',
  },
];

export const ASSISTANTS = [
  {
    avatar: require('../assets/images/fitnesss.png'),
    persona: 'Your Fitness Coach',
    name: 'Anna',
    description: '',
    href: '#',
    gradientColor: 'card-gradient3',
    uuid: '53736c74-8c6e-4035-8254-f06d3a4e1cd6',
  },
  {
    avatar: require('../assets/images/doctors.png'),
    persona: 'Your Doctor',
    name: 'Susan',
    description: '',
    href: '#',
    gradientColor: 'card-gradient2',
    uuid: '1863cfe3-8020-4443-8195-f78c4decc7e2',
  },
  {
    avatar: require('../assets/images/nutritionists.png'),
    persona: 'Your Nutritionist',
    name: 'Adamo',
    description: '',
    href: '#',
    gradientColor: 'card-gradient1',
    uuid: '2aa3be20-7d79-4fb6-be68-fbcf4fb0e98d',
  },
  {
    avatar: require('../assets/images/pharmacists.png'),
    persona: 'Your Pharmacist',
    name: 'Adamo',
    description: '',
    href: '#',
    gradientColor: 'card-gradient5',
    uuid: '57b8e954-6b3c-4ba5-9e3c-34ed1f29a2d9',
  },
  {
    avatar: require('../assets/images/therapists.png'),
    persona: 'Your Therapist',
    name: 'Adamo',
    description: '',
    href: '#',
    gradientColor: 'card-gradient4',
    uuid: '95e1835e-88c3-4f32-9cb2-334e15cc7925',
  },
  {
    avatar: require('../assets/images/YourTravelAdvisor.png'),
    persona: 'Your Travel Advisor',
    name: 'Adamo',
    description: '',
    href: '#',
    gradientColor: 'card-gradient6',
    uuid: 'e68c23d4-b558-4b3b-ac65-8810fe6203d9',
  },
];

export const COLORS = [
  '#f1f5f9',
  '#fef3c7',
  '#fee2e2',
  '#d1fae5',
  '#cffafe',
  '#ede9fe',
  '#fce7f3',
  '#ecfccb',
];
