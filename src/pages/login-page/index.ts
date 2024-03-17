import './login-page.scss';
import LoginPageBlock from './login-page.hbs?raw';
import Block from 'utils/block/Block';
import PageTitle from 'components/page-title';
import InputFieldBlock from 'components/input-field';
import ButtonBlock from 'components/button';
import LinkBlock from 'components/link';
export class LoginPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  render() {
    this.children = {
      PageTitle: new PageTitle({
        title: 'Вход',
        className: 'page-title',
      }),
      InputPassportField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Пароль',
        name: 'password',
        type: 'password',
      }),
      InputLoginField: new InputFieldBlock({
        className: 'login-page__input',
        title: 'Логин',
        name: 'login',
        type: 'login',
      }),
      AuthButton: new ButtonBlock({
        text: 'Авторизоваться',
        className: 'button button_primary',
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
