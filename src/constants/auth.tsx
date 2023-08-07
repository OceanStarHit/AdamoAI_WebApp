import { AuthFormType } from 'types/auth';
import { Email, Password } from 'assets/svgs';

export const required = { value: true, message: 'This field cannot be empty' };

export const emailRule = {
  required,
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid Email Address',
  },
};

export const passwordRule = {
  required,
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
    message:
      'Password length must be at least 8 characters long and it must contain at-least one lowercase, uppercase, number and symbol.',
  },
};

export const email = {
  icon: <Email />,
  name: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  rules: emailRule,
};

export const password = {
  icon: <Password />,
  name: 'password',
  label: 'Password',
  placeholder: 'Enter your password',
  rules: passwordRule,
};

export const ANIMATED_TEXT = [
  `Your, live interpreter helping you chat up locals wherever you go. `,
  `Your, study-buddy, helping you ace every assignment. `,
  `Your, personal Gordon Ramsay, just a lot nicer. `,
  `Your fitness trainer, who won't scream at you for eating that cookie. `,
  `Your, copywriter, crafting witty stories, while you take the credit. `,
  `Your, marketing genius, making your brand go viral, without the need
  for quarantine. `,
  `Your personal life assistant, without the attitude. `,
  `Your BFF, who's an expert in everything. `,
];
export const LOGIN: AuthFormType[] = [email, password];
