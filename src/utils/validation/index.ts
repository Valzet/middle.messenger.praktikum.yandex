import { regex_email, regex_login, regex_name, regex_password, regex_phone } from 'utils/constants/regex';

export const validation = (type: string, value: string): boolean => {
  switch (type) {
    case 'login':
      return regex_login.test(value);
    case 'password':
      return regex_password.test(value);
    case 'email':
      return regex_email.test(value);
    case 'name':
      return regex_name.test(value);
    case 'phone':
      return regex_phone.test(value);
    default:
      return false;
  }
};

export const doesPasswordMatch = (password: string, repeatPassword: string): boolean => {
  return password === repeatPassword;
};
