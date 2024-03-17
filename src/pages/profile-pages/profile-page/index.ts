import '../profile-page.scss';
import ProfilePageBlock from './profile-page.hbs?raw';
import Block from 'utils/block/Block';
import InputFieldBlock from 'components/input-field';
import LinkBlock from 'components/link';
import ProfileAvatar from 'components/profile/profile-avatar';
import ProfileUserTitleBlock from 'components/profile/profile-title';
import { user } from 'data/tempData';
export class ProfilePage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  render() {
    this.children = {
      ProfileAvatar: new ProfileAvatar({
        alt: 'Мой аватар',
        src: user.avatar,
      }),
      UserTitle: new ProfileUserTitleBlock({
        username: user.first_name,
      }),
      InputLoginField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Логин',
        name: 'login',
        type: 'text',
        value: user.login,
        disabled: true,
        inputName: 'login',
      }),
      InputEmailField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Почта',
        name: 'email',
        type: 'text',
        value: user.email,
        disabled: true,
        inputName: 'email',
      }),
      ProfileFirstNameInput: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Имя',
        name: 'first_name',
        type: 'text',
        value: user.first_name,
        disabled: true,
        inputName: 'first_name',
      }),
      ProfileSecondNameInput: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Фамилия',
        name: 'second_name',
        type: 'text',
        value: user.second_name,
        disabled: true,
        inputName: 'second_name',
      }),
      ProfileDisplayNameInput: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Почта',
        name: 'display_name',
        type: 'text',
        value: user.display_name,
        disabled: true,
        inputName: 'display_name',
      }),
      ProfilePhoneInput: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Телефон',
        name: 'phone',
        type: 'text',
        value: user.phone,
        disabled: true,
        inputName: 'phone',
      }),
      EditProfileLink: new LinkBlock({
        className: 'link__right_type_right',
        text: 'Изменить данные',
        page: 'editProfile',
        url: 'editProfile',
      }),
      EditPasswordLink: new LinkBlock({
        className: 'link__right_type_right',
        text: 'Изменить пароль',
        page: 'changePassword',
        url: 'changePassword',
      }),
      ExitLink: new LinkBlock({
        className: 'link__right_type_right link__secondary',
        text: 'Выйти',
        page: 'login',
        url: 'login',
      }),
    };

    return this.compile(ProfilePageBlock, this.props);
  }
}
