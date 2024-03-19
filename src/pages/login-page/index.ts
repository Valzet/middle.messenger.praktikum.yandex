import './login-page.scss';
import LoginPageBlock from './login-page.hbs?raw';
import Block from 'utils/block/Block';
import PageTitle from 'components/page-title';
import InputFieldBlock from 'components/input-field';
import ButtonBlock from 'components/button';
import LinkBlock from 'components/link';
import { validation } from 'utils/validation';
import { ErrorsMeggages } from 'utils/constants/errorMessages';

enum Blocks {
  'login' = 'InputLoginField',
  'password' = 'InputPassportField',
}

export class LoginPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
    this.state = {};
  }

  validateField(inputName: string, value: string, inputElement: HTMLInputElement) {
    const isValid = validation(inputName, value);
    if (!isValid) {
      const errorMessage = ErrorsMeggages[inputName as keyof typeof ErrorsMeggages];
      console.log(inputElement);
      this.children[inputName === (inputName as keyof typeof Blocks) ? Blocks[inputName] : 'login']?.setProps({
        errorMessage: errorMessage,
      });

      inputElement.classList.add('error');
    }
    inputElement.classList.remove('error');
  }
  handleValidate = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      const { name, value } = target;
      this.validateField(name, value, target);
      this.state[name] = value;
    }
  };
  // validateAllFields(): boolean {
  //   let isValid: boolean = true;
  //   const inputElements: NodeListOf<HTMLInputElement> = document.querySelectorAll('.login-page__input');
  //   inputElements.forEach((inputElement: HTMLInputElement) => {
  //     const { name, value } = inputElement;
  //     if (!this.validateField(name, value, inputElement)) {
  //       isValid = false;
  //     }
  //   });
  //   return isValid;
  // }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    // if (e.target) {
    //   if (this.validateAllFields()) {
    //     console.log('Авторизацииz \n', this.state);
    //     (e.target as HTMLButtonElement).classList.remove('error');
    //   } else {
    //     console.log('Ошибка авторизации \n', this.state);
    //     (e.target as HTMLButtonElement).classList.add('error');
    //   }
    // }
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
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      InputPassportField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль',
        name: 'password',
        type: 'password',
        events: {
          focusout: (event: Event) => this.handleValidate(event),
        },
      }),
      AuthButton: new ButtonBlock({
        text: 'Авторизоваться',
        className: 'button button_primary error',
        // events: {
        //   click: (e: Event) => {
        //     this.handleSubmit(e);
        //   },
        // },
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
