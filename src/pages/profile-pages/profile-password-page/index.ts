import '../profile-page.scss';
import ProfilePasswordPageBlock from './profile-password-page.hbs?raw';
import Block from 'utils/block/Block';
import ProfileAvatar from 'components/profile/profile-avatar';
import { user } from 'data/tempData';
import ProfileInput from 'components/profile/profile-input';
import ButtonBlock from 'components/button';
export class ProfileChangePasswordPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  render() {
    this.children = {
      ProfileAvatar: new ProfileAvatar({
        alt: 'Мой аватар',
        src: user.avatar,
      }),
      OldPassword: new ProfileInput({
        name: 'oldPassword',
        type: 'password',
        inputName: 'Старый пароль',
        className: 'input-field__bottom-border ',
      }),
      NewPassword: new ProfileInput({
        name: 'password',
        type: 'password',
        value: '',
        inputName: 'Новый пароль',
        className: 'input-field__bottom-border ',
      }),
      NewPasswordRepeat: new ProfileInput({
        name: 'password_repeat',
        type: 'password',
        inputName: 'Повторите пароль',
      }),
      ChangePasswordBtn: new ButtonBlock({
        text: 'Сохранить',
        className: 'button button_primary button_primary_size_small',
      }),
    };

    return this.compile(ProfilePasswordPageBlock, this.props);
  }
}
