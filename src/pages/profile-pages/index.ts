export { ProfilePage } from './profile-page';
export { ProfileEditPage } from './profile-edit-page';
export { ProfilePasswordPage } from './profile-password-page';
import Handlebars from 'handlebars';
import avatarPlug from '../../assets/images/avatar-plug.png';
Handlebars.registerHelper('profile', () => ({
  avatar: avatarPlug,
  email: 'mail@mail.ru',
  login: 'loginIvan',
  second_name: 'Фамилия',
  first_name: 'Имя',
  display_name: 'Нагибатор2000',
  phone: '8-800-535-35-35',
}));
