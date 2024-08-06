import {AnimationObject} from 'lottie-react-native';

export interface OnboardingProps {
  id: number;
  title: string;
  subtitle: string;
  animation: AnimationObject;
}

export const data: OnboardingProps[] = [
  {
    id: 1,
    title: 'Talkout',
    subtitle: 'Anonymous conversations. Heartfelt support.',
    animation: require('../../../assets/animations/lines.json'),
  },
  {
    id: 2,
    title: 'Find Support',
    subtitle: 'Receive and give help in a safe space.',
    animation: require('../../../assets/animations/lines.json'),
  },
  {
    id: 3,
    title: 'Start Talking',
    subtitle: 'Sharing your problems has never been easier.',
    animation: require('../../../assets/animations/lines.json'),
  },
];
