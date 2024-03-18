import './signin-page.scss';
import SigninPageBlock from './signin-page.hbs?raw';
import Block from 'utils/block/Block';
import PageTitle from 'components/page-title';
import InputFieldBlock from 'components/input-field';
import ButtonBlock from 'components/button';
import LinkBlock from 'components/link';
export class SigninPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

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
      }),
      LoginInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Логин',
        name: 'login',
        type: 'text',
      }),
      FirstNameInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Имя',
        name: 'first_name',
        type: 'text',
      }),
      SecondNameInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Фамилия',
        name: 'second_name',
        type: 'text',
      }),
      PhoneInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Телефон',
        name: 'phone',
        type: 'text',
      }),
      PasswordInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль',
        name: 'password',
        type: 'password',
      }),
      PasswordRepeatInputField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль еще раз',
        name: 'password',
        type: 'password',
      }),
      SigninButton: new ButtonBlock({
        text: 'Зарегистрироваться',
        className: 'button button_primary',
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
