import '../profile-page.scss';
import ProfileEditPageBlock from './profile-edit-page.hbs?raw';
import Block from 'utils/block/Block';
import ProfileAvatar from 'components/profile/profile-avatar';
import ProfileUserTitleBlock from 'components/profile/profile-title';
import { user } from 'data/tempData';
import ProfileInput from 'components/profile/profile-input';
import ButtonBlock from 'components/button';
import { ErrorsMessagesUser } from 'utils/constants/errorMessages';
import { validation } from 'utils/validation';

enum Blocks {
  'email' = 'InputEmailField',
  'login' = 'InputLoginField',
  'first_name' = 'ProfileFirstNameInput',
  'second_name' = 'ProfileSecondNameInput',
  'visible_name' = 'ProfileDisplayNameInput',
  'phone' = 'ProfilePhoneInput',
}
export class ProfileEditPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  validateField(inputName: string, value: string) {
    const isValid = validation(inputName, value);
    const errorMessage: string = isValid ? '' : ErrorsMessagesUser[inputName as keyof typeof ErrorsMessagesUser];
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
  validateAllFields(): boolean {
    let isValid: boolean = true;
    const inputElements: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input');
    inputElements.forEach((inputElement: HTMLInputElement) => {
      const { name, value } = inputElement;
      if (!this.validateField(name, value)) {
        isValid = false;
      }
    });
    return isValid;
  }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    if (e.target) {
      if (this.validateAllFields()) {
        console.log('Успешно изменен профиль \n', this.state);
        (e.target as HTMLButtonElement).classList.remove('error');
      } else {
        console.log('Ошибка \n', this.state);
        (e.target as HTMLButtonElement).classList.add('error');
      }
    }
  };
  render() {
    this.children = {
      ProfileAvatar: new ProfileAvatar({
        alt: 'Мой аватар',
        src: user.avatar,
      }),
      UserTitle: new ProfileUserTitleBlock({
        username: user.first_name,
      }),
      InputEmailField: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'email',
        type: 'text',
        value: user.email,
        disabled: false,
        inputName: 'Почта',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      InputLoginField: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'login',
        type: 'text',
        value: user.login,
        disabled: false,
        inputName: 'Логин',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),

      ProfileFirstNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'first_name',
        type: 'text',
        value: user.first_name,
        disabled: false,
        inputName: 'Имя',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      ProfileSecondNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'second_name',
        type: 'text',
        value: user.second_name,
        disabled: false,
        inputName: 'Фамилия',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      ProfileDisplayNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'display_name',
        type: 'text',
        value: user.display_name,
        disabled: false,
        inputName: 'Имя в чате',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      ProfilePhoneInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'phone',
        type: 'text',
        value: user.phone,
        disabled: false,
        inputName: 'Телефон',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      SubmitButton: new ButtonBlock({
        text: 'Сохранить',
        className: 'button button_primary button_primary_size_small',
        events: {
          click: (e: Event) => {
            this.handleSubmit(e);
          },
        },
      }),
    };

    return this.compile(ProfileEditPageBlock, this.props);
  }
}
