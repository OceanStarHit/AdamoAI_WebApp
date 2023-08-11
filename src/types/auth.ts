export interface IAuthType {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface AuthFormType {
  icon: JSX.Element;
  name: string;
  label: string;
  placeholder: string;
  rules?: {
    required?: {
      value: boolean;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export interface IRegisterType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface RegisterFormType {
  icon: JSX.Element;
  name: string;
  label: string;
  placeholder: string;
  rules: {
    required: {
      value: boolean;
      message: string;
    };
  };
}
