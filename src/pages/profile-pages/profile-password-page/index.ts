import '../profile-page.scss';
import ProfilePasswordPageBlock from './profile-password-page.hbs?raw';
import Block from 'utils/block/Block';
import ProfileAvatar from 'components/profile/profile-avatar';
import { user } from 'data/tempData';
import ProfileInput from 'components/profile/profile-input';
import ButtonBlock from 'components/button';
import { validation } from 'utils/validation';
import { ErrorsMessagesPasswordChange } from 'utils/constants/errorMessages';

enum Blocks {
  'oldPassword' = 'OldPassword',
  'newPassword' = 'NewPassword',
  'password_repeat' = 'NewPasswordRepeat',
}

export class ProfileChangePasswordPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
    this.state = {
      oldPassword: '',
      newPassword: '',
    };
  }

  validateField(inputName: string, value: string) {
    const isValid = validation(inputName, value, this.state.newPassword ? (this.state.newPassword as string) : '');
    const errorMessage: string = isValid
      ? ''
      : ErrorsMessagesPasswordChange[inputName as keyof typeof ErrorsMessagesPasswordChange];
    this.children[inputName == (inputName as keyof typeof Blocks) ? Blocks[inputName] : 'login']?.setProps({
      errorMessage: errorMessage,
      value: value,
    });
    this.state[inputName] = value;
    return isValid;
  }
  handleValidate = (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    if (target) {
      const { name, value } = target;
      this.validateField(name, value);
      this.state[name] = value;
    }
  };
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
        className: 'input-field__bottom-border',
        placeholder: '*********',
        //todo подключить валидацию при запросе на бэк
      }),
      NewPassword: new ProfileInput({
        name: 'newPassword',
        type: 'password',
        inputName: 'Новый пароль',
        className: 'input-field__bottom-border',
        placeholder: '*********',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      NewPasswordRepeat: new ProfileInput({
        name: 'password_repeat',
        type: 'password',
        placeholder: '*********',
        inputName: 'Повторите пароль',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      SubmitButton: new ButtonBlock({
        text: 'Сохранить',
        className: 'button button_primary button_primary_size_small',
      }),
    };

    return this.compile(ProfilePasswordPageBlock, this.props);
  }
}
