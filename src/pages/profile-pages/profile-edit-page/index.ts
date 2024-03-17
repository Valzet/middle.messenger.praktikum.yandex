import '../profile-page.scss';
import ProfileEditPageBlock from './profile-edit-page.hbs?raw';
import Block from 'utils/block/Block';
import ProfileAvatar from 'components/profile/profile-avatar';
import ProfileUserTitleBlock from 'components/profile/profile-title';
import { user } from 'data/tempData';
import ProfileInput from 'components/profile/profile-input';
import ButtonBlock from 'components/button';
export class ProfileEditPage extends Block {
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
      InputLoginField: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'login',
        type: 'text',
        value: user.login,
        disabled: false,
        inputName: 'Логин',
      }),
      InputEmailField: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'email',
        type: 'text',
        value: user.email,
        disabled: false,
        inputName: 'Почта',
      }),
      ProfileFirstNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'first_name',
        type: 'text',
        value: user.first_name,
        disabled: false,
        inputName: 'Имя',
      }),
      ProfileSecondNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'second_name',
        type: 'text',
        value: user.second_name,
        disabled: false,
        inputName: 'Фамилия',
      }),
      ProfileDisplayNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'display_name',
        type: 'text',
        value: user.display_name,
        disabled: false,
        inputName: 'Почта',
      }),
      ProfilePhoneInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'phone',
        type: 'text',
        value: user.phone,
        disabled: false,
        inputName: 'Телефон',
      }),
      ChangePasswordBtn: new ButtonBlock({
        text: 'Сохранить',
        className: 'button button_primary button_primary_size_small',
      }),
    };

    return this.compile(ProfileEditPageBlock, this.props);
  }
}
