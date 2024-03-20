import './signin-page.scss';
import SigninPageBlock from './signin-page.hbs?raw';
import Block from 'utils/block/Block';
import PageTitle from 'components/page-title';
import InputFieldBlock from 'components/input-field';
import ButtonBlock from 'components/button';
import LinkBlock from 'components/link';
import { ErrorsMessagesUser } from 'utils/constants/errorMessages';
import { validation } from 'utils/validation';

enum Blocks {
  'email' = 'MailInputField',
  'login' = 'LoginInputField',
  'first_name' = 'FirstNameInputField',
  'second_name' = 'SecondNameInputField',
  'phone' = 'PhoneInputField',
  'password' = 'PasswordInputField',
  'password_repeat' = 'PasswordRepeatInputField',
}

export class SigninPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
    this.state = {
      email: '',
      login: '',
      first_name: '',
      second_name: '',
      phone: '',
      password: '',
      password_repeat: '',
    };
  }

  validateField(inputName: string, value: string) {
    const isValid = validation(inputName, value, this.state.newPassword ? (this.state.newPassword as string) : '');
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
    const inputElements: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input__element');
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
        console.log('Успешно зарегистрирован \n', this.state);
        (e.target as HTMLButtonElement).classList.remove('error');
      } else {
        console.log('Ошибка \n', this.state);
        (e.target as HTMLButtonElement).classList.add('error');
      }
    }
  };
  render() {
    this.children = {
      PageTitle: new PageTitle({
        title: 'Регистрация',
        className: 'page-title',
      }),
      MailInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Почта',
        name: 'email',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      LoginInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Логин',
        name: 'login',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      FirstNameInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Имя',
        name: 'first_name',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      SecondNameInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Фамилия',
        name: 'second_name',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      PhoneInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Телефон',
        name: 'phone',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      PasswordInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль',
        name: 'password',
        type: 'password',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      PasswordRepeatInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль еще раз',
        name: 'password_repeat',
        type: 'password',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      SigninButton: new ButtonBlock({
        text: 'Зарегистрироваться',
        className: 'button button_primary',
        events: {
          click: (e: Event) => {
            this.handleSubmit(e);
          },
        },
      }),
      AuthLink: new LinkBlock({
        attr: {
          class: 'link',
          href: 'login',
        },
        text: 'Войти',
        className: 'button_secondary',
        url: 'login',
      }),
    };

    return this.compile(SigninPageBlock, this.props);
  }
}
