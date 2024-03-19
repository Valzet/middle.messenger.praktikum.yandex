import './login-page.scss';
import LoginPageBlock from './login-page.hbs?raw';
import Block from 'utils/block/Block';
import PageTitle from 'components/page-title';
import InputFieldBlock from 'components/input-field';
import ButtonBlock from 'components/button';
import LinkBlock from 'components/link';
import { validation } from 'utils/validation';
import { ErrorsMessages } from 'utils/constants/errorMessages';

enum Blocks {
  'login' = 'InputLoginField',
  'password' = 'InputPassportField',
}

export class LoginPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
    this.state = {};
  }

  validateField(inputName: string, value: string) {
    const isValid = validation(inputName, value);
    const errorMessage: string = isValid ? '' : ErrorsMessages[inputName as keyof typeof ErrorsMessages];
    this.children[inputName == (inputName as keyof typeof Blocks) ? Blocks[inputName] : 'login']?.setProps({
      errorMessage: errorMessage,
      value: value
    });
    this.state[inputName] = value;
  return isValid
  }

  handleValidate = (event: Event) => {
    event.preventDefault()
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
        console.log('Авторизации \n', this.state);
        (e.target as HTMLButtonElement).classList.remove('error');
      } else {
        console.log('Ошибка авторизации \n', this.state);
        (e.target as HTMLButtonElement).classList.add('error');
      }
    }
  };

  render() {
    this.children = {
      PageTitle: new PageTitle({
        title: 'Вход',
        className: 'page-title',
      }),
      InputLoginField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Логин',
        name: 'login',
        type: 'text',
        placeholder: 'Login',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      InputPassportField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль',
        name: 'password',
        type: 'password',
        placeholder: '**********',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      AuthButton: new ButtonBlock({
        text: 'Авторизоваться',
        className: 'button button_primary',
        events: {
          click: (e: Event) => {
            this.handleSubmit(e);
          },
        },
      }),
      SinginLink: new LinkBlock({
        attr: {
          class: 'link',
          href: 'signin',
        },
        text: 'Нет аккаунта?',
      }),
    };

    return this.compile(LoginPageBlock, this.props);
  }
}
